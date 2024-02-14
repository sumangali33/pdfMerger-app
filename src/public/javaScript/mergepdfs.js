window.onload = function() {
    const inputFiles = document.getElementById("fileInput");
    const pdfContainer = document.querySelector(".pdfList");
    const submitButton = document.getElementById("mergePdfs");
    let selectedFiles = [];

    inputFiles.addEventListener("change", function(){
        if(inputFiles.files.length > 0){
            let pdfFiles = Array.from(inputFiles.files);
            selectedFiles = selectedFiles.concat(pdfFiles);
            renderSelectedFiles(pdfFiles);    
        }
    });

    function renderSelectedFiles(files){
        files.forEach(file => {
            const pdfCard = document.createElement('div');
            pdfCard.classList.add('pdf-card');
            pdfCard.innerHTML = `
                <i class="fa-solid fa-file-pdf" style="color: #db0a0a;"></i>
                <p>${file.name}</p>`;
            pdfContainer.querySelector('.scrollable').appendChild(pdfCard);
        });
    }

    submitButton.addEventListener("click", async function(){
        let formData = new FormData();
        selectedFiles.forEach(file => {
            formData.append('pdfs', file);
        });
        const options = {
            method: 'POST',
            body: formData
        };
        const response = await fetch('/merge', options);
        
        try {
            if (response.ok) { 
                console.log(response);
                window.location.href = '/downloads';
                selectedFiles = []; 
            } else {
                console.log("Merge operation failed");
            }
        } catch(err){
            console.log(err.message);
        }
    });
};
