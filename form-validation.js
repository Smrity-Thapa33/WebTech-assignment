function validateForm(formName) {
    const form = document.forms[formName];
    let valid = true;

    // Clear previous errors
    const errors = form.querySelectorAll(".error");
    errors.forEach(err => err.innerText = "");

    if (formName === "donateForm") {
        const name = form["username"].value.trim();
        const email = form["email"].value.trim();
        const program = form["program"].value;
        const amount = form.querySelector('input[type="number"]').value.trim();
        const payment = form.querySelector('input[name="payment"]:checked');

        if (name === "") {
            document.getElementById("usernameError").innerText = "Please enter your full name.";
            valid = false;
        } else if (!/^[A-Za-z\s]+$/.test(name)) {
            document.getElementById("usernameError").innerText = "Name should contain only letters.";
            valid = false;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === "") {
            document.getElementById("emailError").innerText = "Please enter your email.";
            valid = false;
        } else if (!emailPattern.test(email)) {
            document.getElementById("emailError").innerText = "Please enter a valid email address.";
            valid = false;
        }

        if (program === "") {
            document.getElementById("programError").innerText = "Please select a program to donate.";
            valid = false;
        }

        if (amount === "" || isNaN(amount) || Number(amount) <= 0) {
            document.getElementById("amountError").innerText = "Please enter a valid donation amount.";
            valid = false;
        }

        if (!payment) {
            document.getElementById("paymentError").innerText = "Please select a payment method.";
            valid = false;
        }

        return valid;
    }

    if (formName === "registerForm") {
        const firstname = form["firstname"].value.trim();
        const lastname = form["lastname"].value.trim();
        const email = form["email"].value.trim();
        const reason = form["reason"].value.trim();
        const terms = form["terms"].checked;

        if (firstname === "") {
            document.getElementById("firstnameError").innerText = "Please enter your first name.";
            valid = false;
        } else if (!/^[A-Za-z\s]+$/.test(firstname)) {
            document.getElementById("firstnameError").innerText = "First name should contain only letters.";
            valid = false;
        }

        if (lastname === "") {
            document.getElementById("lastnameError").innerText = "Please enter your last name.";
            valid = false;
        } else if (!/^[A-Za-z\s]+$/.test(lastname)) {
            document.getElementById("lastnameError").innerText = "Last name should contain only letters.";
            valid = false;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === "") {
            document.getElementById("emailError").innerText = "Please enter your email.";
            valid = false;
        } else if (!emailPattern.test(email)) {
            document.getElementById("emailError").innerText = "Please enter a valid email address.";
            valid = false;
        }

        if (reason === "") {
            document.getElementById("reasonError").innerText = "Please enter your reason for volunteering.";
            valid = false;
        }

        if (!terms) {
            document.getElementById("termsError").innerText = "You must agree to the terms and conditions.";
            valid = false;
        }

        return valid;
    }
    //If formName not matched
    return true; 
}
