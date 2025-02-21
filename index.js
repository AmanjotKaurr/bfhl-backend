const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json()); // Middleware to handle JSON
app.use(cors()); // Handle cross-origin requests

// POST Request - Process Data
app.post('/bfhl', (req, res) => {
    const { data } = req.body;
    if (!data || !Array.isArray(data)) {
        return res.status(400).json({ is_success: false, message: "Invalid input" });
    }

    const user_id = "your_fullname_ddmmyyyy"; // Change this to your name + DOB
    const email = "your_email@domain.com";    // Change this to your college email
    const roll_number = "your_roll_number";   // Change this to your roll number

    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => /^[a-zA-Z]$/.test(item));
    const highest_alphabet = alphabets.length > 0 ? [alphabets.sort().pop()] : [];

    res.json({
        is_success: true,
        user_id,
        email,
        roll_number,
        numbers,
        alphabets,
        highest_alphabet
    });
});

// GET Request - Return operation code
app.get('/bfhl', (req, res) => {
    res.status(200).json({ operation_code: 1 });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
