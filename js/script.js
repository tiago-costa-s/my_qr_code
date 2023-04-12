
const qrCode = document.querySelector("#qr-code");
const qrCodeBtn = document.querySelector("#btn-qr-code");

const qrCodeInput = document.querySelector("#qr-form input");
const qrCodeImg = document.querySelector("#qr-code img");

// Funções
function generateQrCode() {
    const qrCodeInputValue = qrCodeInput.value;

    if (!qrCodeInputValue) return;

    qrCodeBtn.innerHTML = "Gerando código...";

    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`;

    qrCodeImg.addEventListener("load", () => {
        qrCode.classList.add("active");
        qrCodeBtn.innerHTML = "Código Gerado";
    });
}

// Eventos
qrCodeBtn.addEventListener("click", () => {
    generateQrCode();
});

// Tecla enter para gerar o QR Code
qrCodeInput.addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
        generateQrCode();
    }
});

// Apagar os dados do input para zerar o QR Code.
qrCodeInput.addEventListener("keyup", (e) => {
    if (!qrCodeInput.value) {
        qrCode.classList.remove("active");
        qrCodeBtn.innerHTML = "Gerar QR Code";
        qrCodeImg.src = ``;
    }
});