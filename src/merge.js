const pdfMerger = require('pdf-merger-js');

const mergerpdfs = async(allPdfs)=>{

    const merger = new pdfMerger();
    const d = new Date().getTime();
    for(const pdf of allPdfs){
        await merger.add(`./src/uploads/${pdf.filename}`)
    }
    try{
        await merger.save(`./src/public/merged/${d}.pdf`);
    }
    catch(err){
        console.log("error while merging pdfs " +err)
    }
    
    return d;
};
module.exports = {mergerpdfs};