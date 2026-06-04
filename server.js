const express = require('express');
const app = express();

app.use(express.json());

// ✅ Location API
app.post('/location', (req, res) => {
    console.log("📍 Location:", req.body);
    res.send("Location saved ✅");
});

// ✅ Emergency alert
app.post('/alert', (req, res) => {
    console.log("🚨 Emergency Alert Triggered!");
    res.send("Alert sent 🚨");
});

// ✅ Bus info
app.get('/bus', (req, res) => {
    res.json({
        stop: "Next Bus Stop",
        time: "5 minutes"
    });
});

// ✅ Start server
app.listen(3000, () => {
    console.log("✅ Server running on port 3000");
});
