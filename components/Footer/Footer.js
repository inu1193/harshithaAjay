// components/Footer.js
import styles from './Footer.module.css'; // Importing CSS Module
import Image from 'next/image'; // Importing Image component from Next.js
import qr_svg from '../../assets/qr-code.svg'; // Importing logo image
import dropped_pin from '../../assets/map_pin.svg'
const Footer = () => {
    // Hardcoded venue details
    const venue = {
        name: "Rathna Convention Center",
        street: "CMS Estate, NH75",
        city: "Kolar-Mulbagilu road",
        state: "Kolar-",
        zip: "563101",
        url: "https://maps.app.goo.gl/UA94Z9TAWdWFTRaq7", // Example URL
    };

    return (
        <footer className={styles.footer}>
            <div className={styles.logoContainer}>
                {/* Use the Image component to display the logo */}
                <Image 
                    src={qr_svg} // Path to your logo image
                    alt="Venue Logo" 
                    className={styles.logoImage}
                    width={120} // Set width of logo image
                    height={120} // Remove this line or set a numeric value
                    priority
                />
            </div>
            <div className={styles.addressContainer}>
                <h3 className={styles.addressTitle}>Venue Address</h3>
                <p className={styles.addressText}>
                    <strong>{venue.name}</strong><br />
                    {venue.street}<br />
                    {venue.city}, {venue.state} {venue.zip}
                </p>
                <a href={venue.url} className={styles.addressLink} target="_blank" rel="noopener noreferrer">
    <div className='footer-qr'>
      <Image 
        src={dropped_pin} // Path to your dropped pin icon
        alt="Map Pin Icon" 
        width={16} // Set the width of the pin icon
        height={16} // Set the height of the pin icon
        className={styles.pinIcon} 
    />
    </div>
    View on Map
</a>
            </div>
        </footer>
    );
};

// Export the component
export default Footer;
