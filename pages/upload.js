import { useState } from 'react';
import styles from './upload.module.css'; // Import the CSS module
import heroTitle from '../assets/HeroTitle1.png';
import Image from 'next/image';
import Button from '@/components/Button/Button';

export default function UploadPage() {
  const [imageFiles, setImageFiles] = useState([]);
  const [isUploading, setIsUploading] = useState(false);
  const [notification, setNotification] = useState({ message: '', type: '' });
  const [dragging, setDragging] = useState(false); // State to track drag-and-drop

  // Handle image change when files are selected
  const handleImageChange = (files) => {
    if (files.length + imageFiles.length > 5) {
      showNotification("You can only upload a maximum of 5 images.", "error");
      return;
    }
    setImageFiles((prevFiles) => [...prevFiles, ...files]);
  };

  // Handle file drop event
  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    const files = Array.from(e.dataTransfer.files);
    handleImageChange(files);
  };

  // Handle drag over event
  const handleDragOver = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  // Handle drag leave event
  const handleDragLeave = () => {
    setDragging(false);
  };

  // Show notification
  const showNotification = (message, type) => {
    setNotification({ message, type });
    setTimeout(() => setNotification({ message: '', type: '' }), 3000); // Clear notification after 3 seconds
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (imageFiles.length === 0) return;

    setIsUploading(true);

    // Get signature data from our API route
    const res = await fetch('/api/upload', {
      method: 'POST',
    });

    if (!res.ok) {
      console.error("Failed to get signature:", await res.text());
      setIsUploading(false);
      return;
    }

    const { signature, timestamp, cloudName, uploadPreset } = await res.json();

    // Check for undefined values
    if (!signature || !timestamp || !cloudName || !uploadPreset) {
      showNotification("Error: Missing required upload parameters.", "error");
      setIsUploading(false);
      return;
    }

    // Set up FormData for uploads
    const uploadPromises = imageFiles.map(async (file) => {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('api_key', process.env.CLOUDINARY_API_KEY);
      formData.append('timestamp', timestamp);
      formData.append('upload_preset', uploadPreset);
      formData.append('folder', 'wedding'); // Optional, if you want to specify a folder

      // Upload to Cloudinary
      const cloudinaryResponse = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        {
          method: 'POST',
          body: formData,
        }
      );
      return await cloudinaryResponse.json();
    });

    const responses = await Promise.all(uploadPromises);
    setIsUploading(false);
    setImageFiles([]); // Clear selected files after upload

    const uploadedUrls = responses.map(data => data.secure_url).filter(Boolean);
    if (uploadedUrls.length > 0) {
      showNotification('Images uploaded successfully! Thank you for sharing your memories with us!', "success");
      console.log('Uploaded Image URLs:', uploadedUrls);
    } else {
      showNotification('Upload failed. Please try again.', "error");
    }
  };

  return (

    <div className={styles.container}>
      <div className={styles.right}>
        <div className={styles.heroTitleContainer}>
          <Image src={heroTitle} className={styles.heroTitle} alt='Harshitha weds Ajay' priority />
        </div>
        <p className={styles.p}>
          Be a part of our <span className={styles.inP}>story</span>, <br />Share Your <span className={styles.inP}>Wedding Moments</span>
        </p>
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div 
          className={`${styles.dropArea} ${dragging ? styles.dragging : ''}`} 
          onDragOver={handleDragOver} 
          onDrop={handleDrop} 
          onDragLeave={handleDragLeave}
          onClick={() => document.getElementById('fileInput').click()} // Open file dialog on click
        >
          <p className={styles.buttonP}>Drag & drop your images here or <span className={styles.chooseFileLink}><br/>click to select snaps</span></p>
          <input
            type="file"
            id="fileInput" // Add an ID to the file input
            className={styles.fileInput}
            onChange={(e) => handleImageChange(e.target.files)}
            accept="image/*"
            multiple // Allow multiple files
            onClick={(e) => { e.target.value = null }} // Reset value to allow re-upload of the same file
          />
        </div>
        <div className={styles.previewContainer}>
          {imageFiles.map((file, index) => (
            <img
              key={index}
              src={URL.createObjectURL(file)}
              alt={`Preview ${index + 1}`}
              className={styles.imagePreview}
            />
          ))}
        </div>
 
        <div className={styles.btnContainer}>
        <button className={`${styles.btn} ${styles.buttonP}`}  >{isUploading ? 'Uploading...' : 'Upload'}</button>
    </div>
      </form>

      {/* Notification Area */}
      {notification.message && (
        <div className={`${styles.notification} ${styles[notification.type]}`}>
          {notification.message}
        </div>
      )}
    </div>
  );
}
