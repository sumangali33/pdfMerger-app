const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

    router.delete('/delete/:timeStamp', (req, res) => {
        const { timeStamp } = req.params;
        const filePath = path.join(__dirname,'..' ,'/public','/merged', `${timeStamp}.pdf`);
        fs.unlink(filePath, (err) => {
            if (err) {
                console.error('Error deleting file:', err);
                res.status(500).send('Error deleting file');
            } else {
                res.status(200).send('File deleted successfully');
            }
        });
    });

module.exports = router;