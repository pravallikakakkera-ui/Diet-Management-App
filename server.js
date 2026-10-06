const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Diet Management Backend is running!");
});

app.post("/diet", (req, res) => {

    const data = req.body;

    console.log("User Diet Data:", data);

    res.json({
        success: true,
        message: "Diet data received successfully",
        data: data
    });
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Backend running on http://localhost:${PORT}`);
});