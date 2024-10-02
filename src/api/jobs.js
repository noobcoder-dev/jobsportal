// src/api/jobs.js
export default function handler(req, res) {
    if (req.method === 'POST') {
      // Process the job submission
      const jobData = req.body;
  
      // (In a real app, you could save this to a database or another service)
      // For simplicity, let's just log it and return a success response
  
      console.log('Job Data Received:', jobData);
  
      // Return a success response
      res.status(200).json({ message: 'Job posted successfully!' });
    } else {
      res.status(405).json({ message: 'Method Not Allowed' });
    }
  }
  