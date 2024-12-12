document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const firstName = document.getElementById('first').value.trim();
    const lastName = document.getElementById('last').value.trim();
    const email = document.getElementById('email').value.trim();
    const phoneNumber = document.getElementById('phone-number').value.trim();
    const inquiries = document.getElementById('inquiries').value.trim();
    const error = document.getElementById('error');

    if(firstName == "") {
        error.innerHTML = "First name must be filled"
        return
    }

    var containCapital = false
    for(const character of lastName) {
        if(character >= 'A' && character <= 'Z') {
            containCapital = true
            break
        }
    }

    if(!containCapital) {
        error.innerHTML = "Last name must have atleast 1 capital"
        return
    }

    if(!email.includes("@")) {
        error.innerHTML = "Email must contain @"
        return
    }

    var containOther = false
    for(const character of phoneNumber) {
        if(!(character >= '0' && character <= '9')) {
            console.log(character);
            containOther = true
            break
        }
    }

    if(containOther) {
        error.innerHTML = "Phone number cannot contain other than number"
        return
    }

    if(inquiries.length < 100) {
        error.innerHTML = "Inquiries needs to be more than 100 characters"
        return
    }

    error.innerHTML = ''
})
