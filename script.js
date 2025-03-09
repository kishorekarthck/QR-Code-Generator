document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("generateBtn").addEventListener("click", generateQRCode);
});

function generateQRCode() {
  let qrDiv = document.getElementById("qrcode");
  qrDiv.innerHTML = ""; // Clear previous QR code
  let text = document.getElementById("text").value.trim();

  if (text === "") {
      alert("Please enter text or a URL");
      return;
  }

  // Generate QR Code
  let qrCode = new QRCode(qrDiv, {
      text: text,
      width: 200,
      height: 200
  });
}