let nameinput= document.getElementById("name_input")
let mailinput = document.getElementById("mail_input")
let passwordinput = document.getElementById("password_input")
let confirminput = document.getElementById("confirm_input")
let numberinput = document.getElementById("number_input")
let dobinput= document.getElementById("date_inupt")

let nameErr = document.getElementById("nameerror")
let mailErr = document.getElementById("mailerror")
let passwordErr = document.getElementById("passworderror")
let confirmErr = document.getElementById("Confirm-passworderror")
let mobileErr = document.getElementById("mobileerror")
let dobError = document.getElementById("doberror")

let btn = document.getElementById("sign")

btn.addEventListener("click", (event) => {
    event.preventDefault();
    let emailvalid = "@"
    
    if (nameinput.value == "" || mailinput.value == "" || passwordinput.value == "" || confirminput.value != passwordinput.value || dobinput.value == "") {
        

        if(nameinput.value == ""){
            nameErr.innerHTML = "Please Enter the name ⓘ"
            nameErr.style.color = "red"
            nameErr.style.fontPalette = "12px"
        }else{
            nameinput.innerHTML = ""
        }

        if(mailinput.value.match(emailvalid)){
            mailinput.innerHTML = ""
       }else{
        mailErr.innerHTML  = "Please Enter the email ⓘ"
        mailErr.style.color = "red"
        mailErr.style.fontSize = "12px"
       }


       if(passwordinput.value == ""){
        passwordErr.innerHTML = "Please Enter the password ⓘ"
        passwordErr.style.color = "red"
        passwordErr.style.fontSize = "12px"
       } else{
        passwordErr.innerHTML = ""
       }



       if(confirminput.value == ""){
           confirmErr.innerHTML = "Confirm password is not match ⓘ"
           confirmErr.style.color = "red"
           confirmErr.style.fontSize = "12px"
        }else{
           passwordinput.innerHTML = ""
       }

    //    if(confirminput.value == passwordinput.value){
    //     confirminput.innerHTML = ""
    //    } else{
    //         confirmErr.innerHTML = "Confirm password is not match ⓘ"
    //         confirmErr.style.color = "red"
    //         confirmErr.style.fontSize = "12px"
            
    //    }
    if (confirminput.value == passwordinput.value) {
        confirminput.innerHTML = "";
    } else {
        confirmErr.innerHTML = "Confirm password does not match ⓘ";
        confirmErr.style.color = "red";
        confirmErr.style.fontSize = "12px";
    }
    if(numberinput.value = ""){
        mobileErr.innerHTML = "";
    }else{
        mobileErr.innerHTML = "Enter Your Mobile number ⓘ"
        mobileErr.style.color = "red"
        mobileErr.style.fontSize = "12px"

    }
    
       if(dobinput.value == ""){
        dobError.innerHTML = "Please Enter the dob ⓘ"
        dobError.style.color = "red"
        dobError.style.fontSize = "12px"
       }else{
        dobinput.innerHTML = ""
       }
       
    }
    else{
     alert("Signup Successful")
    }
})

   nameinput.addEventListener("focus",() =>{
    nameErr.innerHTML= "Name"
    nameErr.style.color = "black"
    nameErr.style.fontSize = " 15px"
   })
   mailinput.addEventListener("focus", () =>{
    mailErr.innerHTML = "E-mail"
    mailErr.style.color = "black"
    mailErr.style.fontSize = "15px"
   } )
   passwordinput.addEventListener("focus",() => {
    passwordErr.innerHTML = "password"
    passwordErr.style.color = "black"
    passwordErr.style.fontSize = "15px"
   })
   confirminput.addEventListener("focus" , () => {
    confirmErr.innerHTML = "Confirm password"
    confirmErr.style.color = "black"
    confirmErr.style.fontSize = "15px"})

     numberinput.addEventListener("focus", () => {
        mobileErr.innerHTML = "Mobile"
        mobileErr.style.color = "black"
        mobileErr.style.fontSize = "15px"
     })

    dobinput.addEventListener("focus" , () => {
        dobError.innerHTML = "DOB"
        dobError.style.color = "black"
        dobError.style.fontSize = "15px"
        
    })