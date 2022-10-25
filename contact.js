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
    })
    document.getElementById("nume").onblur = validateLastName
    document.getElementById("prenume").onblur = validateFirstName
    document.getElementById("adresa").onblur = validateAddress
    document.getElementById("data").onblur = validateBirthDate
    document.getElementById("telefon").onblur = validatePhone
    document.getElementById("email").onblur = validateEmail

function validateInputs(){
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
            return true
        }
        else{
            msg.innerHTML='Date invalide'
            msg.style.color='red'
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
    return false
}


function validateBirthDate(){
    let elemRef = document.getElementById("data")
    let value = elemRef.value
    if (value === ''){
        elemRef.classList.add("invalid")
        elemRef.classList.remove("valid")
        return false
    }

    let date = new Date(value)
    date.setHours(0,0,0,0)
    if (date > new Date(new Date().toDateString())){
        elemRef.classList.add("invalid")
        elemRef.classList.remove("valid")
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
    return false
}}