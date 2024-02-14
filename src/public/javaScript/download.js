const downloadBtn = document.getElementById("downloadBtn");
const timeStamp = downloadBtn.getAttribute("data-timestamp");
 setTimeout(()=>{
    const textInput = document.querySelector(".text");
    const spinner = document.getElementById('spinner');
    const SpinnerText = document.querySelector('.SpinnerText');
    downloadBtn.style.display = 'inline-block';
    textInput.style.display = 'block';
    spinner.style.display = 'none';
    SpinnerText.style.display = 'none';
    
    downloadBtn.addEventListener("click", function(){
        console.log(timeStamp);
        let pdfUrl = `/merged/${timeStamp}.pdf`
        let a = document.createElement('a');
        a.href = pdfUrl;
        a.download = `${timeStamp}.pdf`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);    
    })

    setTimeout(async()=>{
        try {
            const response = await fetch(`/delete/${timeStamp}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error('Error deleting merged pdf file');
            }
            console.log('Merged pdf file deleted successfully');
        } catch (error) {
            console.error(error);
        }
    },60000)
 },1000);
