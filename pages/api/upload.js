import cloudinary from '../../lib/cloudinary.js';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const timestamp = Math.round(new Date().getTime() / 1000);
      const signature = cloudinary.utils.api_sign_request(
        {
          timestamp,
          upload_preset: process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET,
        },
        process.env.CLOUDINARY_API_SECRET
      );
      

      res.status(200).json({
        signature,
        timestamp,
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        uploadPreset: process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET,
      });
    } catch (error) {
      res.status(500).json({ error: 'Cloudinary signature generation failed' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
