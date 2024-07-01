const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/authenticate', async (req, res) => {
    try {
        const { username } = req.body;

        // Example logic: Return a mock response
        const response = {
            message: `User ${username} authenticated successfully!`
        };

        res.status(200).json(response);
    } catch (e) {
        if (e.response) {
            return res.status(e.response.status).json(e.response.data);
        } else {
            console.error(e); // Log the error for debugging purposes
            return res.status(500).json({ message: 'An unexpected error occurred' });
        }
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
