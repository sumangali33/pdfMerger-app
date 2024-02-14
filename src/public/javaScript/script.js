const fileInput = document.getElementById('exampleFormControlFile1');
const pdfForm = document.getElementById('pdfForm');
const fileMessage = document.getElementById("fileMessage");
let storedName = sessionStorage.getItem("UserName");
fileInput.addEventListener('change',function(){
    if(fileInput.files.length>0){
    pdfForm.submit();
}
});


