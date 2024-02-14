const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({dest : './src/uploads'});
let nextSelectedPdfs = [];
    router.post('/merge', upload.array('pdfs'), async (req, res) => {
        const pdfFiles = req.files;
        nextSelectedPdfs = nextSelectedPdfs.concat(pdfFiles);
        res.json({ status: 'success', message: 'got all pdfs to merge' });
        });

        function getNextSelectedPdfs(){
            return nextSelectedPdfs;
        }
module.exports = {router,getNextSelectedPdfs};
