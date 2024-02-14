
const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({dest :'./src/uploads'});
let initialPdfs = [];
router.post('/show', upload.array('pdfs'), async (req, res) => {
    let pdfFiles = req.files;
    initialPdfs = initialPdfs.concat(pdfFiles);
    res.render('../views/mergepdfs.ejs',{ pdfFiles:initialPdfs});
});

function getInitialPdfs() {
    return initialPdfs;
}
module.exports = {router,getInitialPdfs};