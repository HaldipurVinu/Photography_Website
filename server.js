// server.js
const express = require('express');
const app = express();

app.get('/api/gallery', (req, res) => {
  res.json({ images: ["/Images/First/IMG-20250702-WA0027.jpg", "/Images/First/IMG-20250702-WA0028.jpg"] });
});

app.get('/api/services', (req, res) => {
  res.json({
    services: [
      { icon: "/Logo.jpeg", title: "Portrait Photography", description: "Capturing personalities..." },
      // ...other services
    ]
  });
});

app.listen(5000, () => console.log("API running on port 5000"));