function emailValidation(){
    const emailVal = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let emailText = document.getElementById("email");
    let errorMsg = document.getElementById("err_msg");
    var inner = document.getElementById("email").innerText;
    if (emailText == emailVal) {
        console.log("great");
    } else {
        emailText.style.borderColor = "#ff5263";
        errorMsg.style.display = "block";
    }
}