let btn2_signin = document.getElementById("btn2_signin");

btn2_signin.onclick = function() {
    location.href = "../sign up to we here/index.html";
}

let Email = document.getElementById("Eamil");

let password = document.getElementById("password");

let error = document.createElement('p')

error.classList.add("error")


let errorvalue = document.createTextNode("ُerror in username or password") 

error.appendChild(errorvalue);

let if_error = document.getElementById("if_error");



console.log(if_error)

let btnlogin = document.getElementById("btnlogin");

btnlogin.onclick = function() {
    if(Email.value == localStorage.Mail && password.value == localStorage.password)
    {
        location.href = "https://ziadahmedfawzy.github.io/main_we-here/";
    }
    else if(Email.value == "" && password.value == "")
    {

    }
    else {
        if_error.appendChild(error)
    }
}

