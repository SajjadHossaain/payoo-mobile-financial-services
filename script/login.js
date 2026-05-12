// console.log("Login function connected")
document.getElementById("login-btn").addEventListener("click",function(){
    // console.log("Login Button CLick");

    //1-get the mobile number input
    const numberInput = document.getElementById("input-number");
    const contactNumber = numberInput.value;
    // console.log(contactNumber);
    //2-get the pin input
    const inputPin = document.getElementById("input-pin");
    const pin =inputPin.value;
    // console.log(pin);
    //3-match pin and mobile number
    if(contactNumber == "01234567890" && pin == "1234"){
        //3-1 true ::: >> alert > homepage
        alert("Login Success");
        // window.location.replace("/home.html"); // not add in browser
        window.location.assign("/home.html") // when use assign add in browser
    }
    else{
        //3-1 false ::: >> alert > return
        alert("Login Failed");
        return;
    }
});