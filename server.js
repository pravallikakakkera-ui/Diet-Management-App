const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

// Frontend files
app.use(express.static(__dirname));

// Home page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// Backend API
app.post("/api/diet", (req, res) => {
    const data = req.body;

    console.log("User Diet Data:", data);

    res.json({
        success: true,
        message: "Diet data received successfully",
        data: data
    });
});

// Vercel
module.exports = app;

// Local computer
if (require.main === module) {
    const PORT = 5000;

    app.listen(PORT, () => {
        console.log(`Backend running on http://localhost:${PORT}`);
    });
}
