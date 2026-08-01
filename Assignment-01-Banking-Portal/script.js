var customer = {
  name: "Shreya Gupta",
  customerId: "AB2026001",
};
document.getElementById("customerName").textContent = customer.name;


document.getElementById("customerId").textContent = customer.customerId;


document.getElementById("headerCustomerName").textContent = customer.name;


document.getElementById("profileInitials").textContent =
  customer.name.charAt(0);


document.getElementById("welcomeMessage").textContent =
  "Welcome back, " + customer.name + "!";
var registerButton =
    document.getElementById("registerButton");

var couponSection =
    document.getElementById("couponSection");

var couponCode =
    document.getElementById("couponCode");

registerButton.addEventListener("click", function() {
    var coupon =
        "AURELIA-DIWALI-" +
        customer.customerId +
        "-2026";
    couponCode.textContent = coupon;
    couponSection.style.display = "block";
    registerButton.textContent =
        "Coupon Generated";
    registerButton.disabled = true;

});


var copyButton =
    document.getElementById("copyButton");
var copyMessage =
    document.getElementById("copyMessage");
copyButton.addEventListener("click", function() {   
    var couponText =
        couponCode.textContent;
    navigator.clipboard.writeText(couponText)
        .then(function() {

            copyMessage.textContent =
                "Coupon copied successfully.";

        })
        .catch(function() {  
            copyMessage.textContent =
                "Unable to copy coupon.";

        });

});

var accountButton =
    document.getElementById("accountButton");
accountButton.addEventListener("click", function() {

    document.getElementById("accounts")
        .scrollIntoView({
            behavior: "smooth"
        });

});


var transactionButton =
    document.getElementById("transactionButton");
transactionButton.addEventListener("click", function() {

    document.querySelector(".transactions-section")
        .scrollIntoView({
            behavior: "smooth"
        });

});
var supportButton =
    document.getElementById("supportButton");
supportButton.addEventListener("click", function() {

    document.getElementById("support")
        .scrollIntoView({
            behavior: "smooth"
        });

});
var statementButton =
    document.getElementById("statementButton");
statementButton.addEventListener("click", function() {

    alert(
        "Your account statement is ready.\n\n" +
        "Customer ID: " +
        customer.customerId +
        "\n\n" +
        "Statement period: July 2026"
    );

});
var loginButton = document.getElementById("loginButton");

var loginScreen = document.getElementById("loginScreen");

var bankDashboard = document.getElementById("bankDashboard");

var loginCustomerId = document.getElementById("loginCustomerId");

var loginPassword = document.getElementById("loginPassword");

var loginMessage = document.getElementById("loginMessage");

loginButton.addEventListener("click", function() {

    // Get values entered by the customer
    var enteredCustomerId =
        loginCustomerId.value.trim();

    var enteredPassword =
        loginPassword.value;    
    if (
        enteredCustomerId === customer.customerId &&
        enteredPassword === "123456"
    ) {
        loginScreen.style.display = "none";

        bankDashboard.style.display = "block";

        loginMessage.textContent = "";

    }

    else {
        loginMessage.textContent =
            "Invalid Customer ID or Password.";

    }

});

var showPassword =
    document.getElementById("showPassword");


showPassword.addEventListener("change", function() {

    if (showPassword.checked) {

        loginPassword.type = "text";

    }

    else {

        loginPassword.type = "password";

    }

});

loginPassword.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {

        loginButton.click();

    }

});


var logoutButton =
    document.getElementById("logoutButton");

logoutButton.addEventListener("click", function() {

   
    bankDashboard.style.display = "none";

  
    loginScreen.style.display = "flex";

  
    loginCustomerId.value = "";
    loginPassword.value = "";

    loginMessage.textContent = "";

});
