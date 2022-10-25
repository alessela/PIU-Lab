window.onload=function(){

    document.getElementById("submit").addEventListener("click", function(e){
        e.preventDefault()
        validateInputs()
    })

    document.getElementById("reset").addEventListener("click", function() {
    

        document.getElementById("prenume").classList.remove("valid")
        document.getElementById("prenume").classList.remove("invalid")

        document.getElementById("nume").classList.remove("valid")
        document.getElementById("nume").classList.remove("invalid")

        document.getElementById("adresa").classList.remove("valid")
        document.getElementById("adresa").classList.remove("invalid")

        document.getElementById("data").classList.remove("valid")
        document.getElementById("data").classList.remove("invalid")

        document.getElementById("telefon").classList.remove("valid")
        document.getElementById("telefon").classList.remove("invalid")

        document.getElementById("email").classList.remove("valid")
        document.getElementById("email").classList.remove("invalid")

        document.getElementById("errors").innerHTML = ''

        document.getElementById("errorsList").style.display='none'
    })
    document.getElementById("nume").onblur = validateLastName
    document.getElementById("prenume").onblur = validateFirstName
    document.getElementById("adresa").onblur = validateAddress
    document.getElementById("data").onblur = validateBirthDate
    document.getElementById("telefon").onblur = validatePhone
    document.getElementById("email").onblur = validateEmail

    document.getElementById("errorsList").style.display='none'

    document.getElementById("lastNameError").innerHTML = 'Numele trebuie sa contina cel putin 3 litere'
    document.getElementById("lastNameError").style.color='red'
    document.getElementById("firstNameError").innerHTML = 'Prenumele trebuie sa contina cel putin 3 litere'
    document.getElementById("firstNameError").style.color='red'
    document.getElementById("addressError").innerHTML='Adresa trebuie sa contina cel putin 3 caractere si cel putin o cifra. Nu sunt acceptate caracterele: @#$%^&*'
    document.getElementById("addressError").style.color='red'
    document.getElementById("dateError").innerHTML='Data nasterii nu trebuie sa fie viitoare'
    document.getElementById("dateError").style.color='red'
    document.getElementById("phoneError").innerHTML='Telefonul trebuie sa contina numai cifre si un caracter -, in formatul nnn-nnnnnnnnn'
    document.getElementById("phoneError").style.color='red'
    document.getElementById("emailError").innerHTML='Adresa de email invalida'
    document.getElementById("emailError").style.color='red'

function validateInputs(){
    document.getElementById("lastNameError").style.display='none'
    document.getElementById("firstNameError").style.display='none'
    document.getElementById("addressError").style.display='none'
    document.getElementById("dateError").style.display='none'
    document.getElementById("phoneError").style.display='none'
    document.getElementById("emailError").style.display='none'

    let val1 = validateAddress()
    let val2 = validateBirthDate()
    let val3 = validateEmail()
    let val4 = validateFirstName()
    let val5 = validateLastName()
    let val6 = validatePhone()

    let msg = document.getElementById("errors")

    if (val1 && val2 && val3 && val4 && val5 && val6){
            msg.innerHTML='Date trimise cu succes'
            msg.style.color='black'
            document.getElementById('errorsList').style.display='none'
            return true
        }
        else{
            msg.innerHTML='Date invalide'
            msg.style.color='red'
            document.getElementById("errorsList").style.display='block'
            return false
        }
    
}

function validateLastName(){
    let elemRef = document.getElementById("nume")
    if (/([a-zA-Z].*){3}/.test(elemRef.value)){
        elemRef.classList.add("valid")
        elemRef.classList.remove("invalid")
        return true
    }
    elemRef.classList.add("invalid")
    elemRef.classList.remove("valid")
    document.getElementById('lastNameError').style.display='list-item'
    return false
}

function validateFirstName(){
    let elemRef = document.getElementById("prenume")
    if (/([a-zA-Z].*){3}/.test(elemRef.value)){
        elemRef.classList.add("valid")
        elemRef.classList.remove("invalid")
        return true
    }
    elemRef.classList.add("invalid")
    elemRef.classList.remove("valid")
    document.getElementById('firstNameError').style.display='list-item'
    return false
}

function validateAddress(){
    let elemRef = document.getElementById("adresa")
    let value = elemRef.value
    if (value.length > 2 && /[0-9]/.test(value) && /^[^@#\$%\^&\*]*$/.test(value)){
        elemRef.classList.add("valid")
        elemRef.classList.remove("invalid")
        return true
    }
    elemRef.classList.add("invalid")
    elemRef.classList.remove("valid")
    document.getElementById('addressError').style.display='list-item'
    return false
}


function validateBirthDate(){
    let elemRef = document.getElementById("data")
    let value = elemRef.value
    if (value === ''){
        elemRef.classList.add("invalid")
        elemRef.classList.remove("valid")
        document.getElementById('dateError').style.display='list-item'
        return false
    }

    let date = new Date(value)
    date.setHours(0,0,0,0)
    if (date > new Date(new Date().toDateString())){
        elemRef.classList.add("invalid")
        elemRef.classList.remove("valid")
        document.getElementById('dateError').style.display='list-item'
        return false
    }
    elemRef.classList.add("valid")
    elemRef.classList.remove("invalid")
    return true
}

function validatePhone(){
    let elemRef = document.getElementById("telefon")
    let value = elemRef.value
    if (value.length == 13 && /[0-9]{3}-[0-9]{9}/.test(value)){
        elemRef.classList.add("valid")
        elemRef.classList.remove("invalid")
        return true
    }
    elemRef.classList.add("invalid")
    elemRef.classList.remove("valid")
    document.getElementById('phoneError').style.display='list-item'
    return false
}

function validateEmail(){
    let elemRef = document.getElementById("email")
    if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(elemRef.value)){
        elemRef.classList.add("valid")
        elemRef.classList.remove("invalid")
        return true
    }
    elemRef.classList.add("invalid")
    elemRef.classList.remove("valid")
    document.getElementById('emailError').style.display='list-item'
    return false
}}