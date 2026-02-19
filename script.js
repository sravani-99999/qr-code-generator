function generateQR() {
    let text = document.getElementById("qrText").value;
    let qrImage = document.getElementById("qrImage");

    if (text.length > 0) {
        qrImage.src =
        "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + text;
    } else {
        alert("Please enter text or URL");
    }
}
