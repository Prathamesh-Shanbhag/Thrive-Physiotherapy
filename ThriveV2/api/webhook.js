export default async function handler(req, res) {
  const fs = require('fs');
  const path = require('path');
  const filePath = path.join(process.cwd(), 'ThriveV2', 'assets', 'data', 'reviews.json');

  // Ensure the directory exists
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  if (req.method === 'GET') {
    try {
      if (!fs.existsSync(filePath)) {
        // Create default reviews if file doesn't exist
        const defaultReviews = [
          {
            "name": "John Doe",
            "text": "Amazing experience at Thrive Physiotherapy! The staff is professional and caring.",
            "publishedAtDate": "2024-03-20",
            "categoryName": "Physiotherapy"
          },
          {
            "name": "Jane Smith",
            "text": "Excellent care and attention to detail. Highly recommend!",
            "publishedAtDate": "2024-03-19",
            "categoryName": "Rehabilitation"
          }
        ];
        fs.writeFileSync(filePath, JSON.stringify(defaultReviews, null, 2), 'utf8');
      }
      const reviews = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      res.status(200).json(reviews);
    } catch (error) {
      console.error('Error reading reviews:', error);
      res.status(500).json({ error: 'Error reading reviews' });
    }
  } else if (req.method === 'POST') {
    try {
      const reviews = req.body;
      
      // Validate the incoming data
      if (!Array.isArray(reviews)) {
        throw new Error('Reviews must be an array');
      }

      fs.writeFileSync(filePath, JSON.stringify(reviews, null, 2), 'utf8');
      console.log('Reviews updated successfully');
      res.status(200).json({ message: 'Reviews updated successfully!' });
    } catch (error) {
      console.error('Error updating reviews:', error);
      res.status(500).json({ error: `Error updating reviews: ${error.message}` });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}  


