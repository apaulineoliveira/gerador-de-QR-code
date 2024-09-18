function generateQRCode() {
  let website = document.getElementById("website").value; 
  if (website) {
    let qrcodeContainer = document.getElementById("qrcode");
    qrcodeContainer.innerHTML = "";
    new QRCode(qrcodeContainer, website);
    
  
    document.getElementById("qrcode-container").style.display = "block";
    document.getElementById("new-qrcode-btn").style.display = "inline-block";
    
   
    document.querySelector('button[onclick="generateQRCode()"]').style.display = "none";
    
  } else {
    showAlert("Ops... Primeiro insira uma URL válida.");
  }
}

function showAlert(message) {
  document.getElementById("alert-message").innerText = message;
  document.getElementById("custom-alert").style.display = "flex";
}

function closeAlert() {
  document.getElementById("custom-alert").style.display = "none";
}

function reloadPage() {
  location.reload();
}
