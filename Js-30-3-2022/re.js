function registration() {

    let fname = document.getElementById("fname")
    let lname = document.getElementById("lname")
    let patteren = /^[a-z]+$/gi;
    let fullName = fname.value + lname.value;
    if (!fullName.match(patteren)) {
        if (!fname.value.match(patteren)) {
            alert("First Name not vaild.Try again!")
        }
        if (!lname.value.match(patteren)) {
            alert("last Name not valid. Try again!")
        }
    }

    let email = document.getElementById("email")
    let confirmEmail = document.getElementById("email1")
    let patternE = /([a-zA-Z][@][a-zA-Z][.][a-zA-Z])/ ;
    if (!email.value.match(patternE) && !confirmEmail.value.match(patternE)) {

        if (!email.value.match(patternE)) {
            alert("email not correct")

        }
        if (!confirmEmail.value.match(patternE)) {
            alert("email not correct")
        }

    } else {
        if (email.value !== confirmEmail.value) {
            alert("Email not match.Try agian!")
        }
    }
    let password = document.getElementById("psw")
let confirm_password = document.getElementById("psw1")
let patternps = /[A-Z]{1,2}[a-zA-Z0-9]{8}/;
    if(!password.value.match(patternps && !confirm_password.value.match(patternps))){
        if(!password.value.match(patternps))
        {
           alert("password should start with capital letter and at least 8 numbers and at least one symbol")
        }
        if(!confirm_password.value.match(patternps))
        {
            alert("password should  start with capital letter and at least 8 numbers  and at least one  symbol")
        }
    }
    else
    {
        if(password.value!== confirm_password.value)
        {
            alert("Password doesn't match ")    
        }
    }
    let date= document.getElementById('dob').value
           
            let patternd = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/ ;
            if (patternd.test(dob) == false) {
                alert('Not valid Birth Date!')
            }




}