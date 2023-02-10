const wrapper = document.querySelector(".wrapper"),
    qrInput = wrapper.querySelector(".form input"),
    generateBtn = wrapper.querySelector(".form button"),
    qrImg = wrapper.querySelector(".qr-code img");
generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value;
    if (!qrValue)
        return;  //if the input is empty then return from here
    generateBtn.innerText = "Generating Your QR Code.....";
    //getting a QR Code of user entered value using the qrserver
    //api and passing the api returned img src to qrImg
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`
    //Once image is loaded then add active class in a wrapper
    qrImg.addEventListener("load", () => {
        wrapper.classList.add("active");
        generateBtn.innerText = "Generate QR Code";
    });
});
qrInput.addEventListener("keyup", () => {
    wrapper.classList.remove("active");
}); //remove active class if input is empty

