const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const { mergerpdfs } = require('../merge.js');
const { getInitialPdfs } = require('./show.router.js');
const {getNextSelectedPdfs} = require('./merge.router.js');
let i =1;
router.get('/downloads', async (req, res) => {
    try {
        const initialPdfs = getInitialPdfs();
        const nextPdfs = getNextSelectedPdfs();
        let allPdfs = initialPdfs.concat(nextPdfs);

        const timeStamp = await mergerpdfs(allPdfs);
        allPdfs.forEach(file => {
            const filePath = path.join(__dirname, '..', 'uploads', file.filename);
            fs.unlink(filePath, (err) => {
                if (err) {
                    console.error('Error deleting file:', err);
                }
            })
        })
        allPdfs = [];
        res.render('download.ejs', { timeStamp });
    } catch (error) {
        console.error('Error merging PDFs:', error);
        res.status(500).send('Error merging PDFs');
    }
});
module.exports = router;
