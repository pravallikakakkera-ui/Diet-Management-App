
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Backend home page
app.get("/", (req, res) => {
    res.send("Diet Management Backend is running!");
});

// Test API
app.get("/api/test", (req, res) => {
    res.json({
        success: true,
        message: "Backend API is working!"
    });
});

// Receive diet data
app.post("/diet", (req, res) => {
    console.log("User Diet Data:", req.body);

    res.json({
        success: true,
        message: "Diet data received successfully",
        data: req.body
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Backend running on port ${PORT}`);
});
