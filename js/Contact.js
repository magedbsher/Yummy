inputName=document.querySelector("#userName");
inputEmail=document.querySelector("#userEmail");
inputNumber=document.querySelector("#userNumber");
inputAge=document.querySelector("#userAge");
inputPassword=document.querySelector("#userPassword");
inputRePassword=document.querySelector("#userRepassword");


inputName.addEventListener("blur", nameValidation);




function nameValidation (){
    let regex = /^[a-zA-Z ]+$/;
    if(regex.test(inputName.value) != true || inputName.value == ""){
        console.log("name 8lt");
        document.querySelector("#nameWarning").classList.replace("d-none","d-block");


    }
    else{
        console.log("name s7");
        return true;
    }
}



inputEmail.addEventListener("blur", emailValidation);


function emailValidation (){
    let regex = /^[A-Za-z]{4,}@[a-zA-Z]{3,}.[a-zA-Z]{3,}/;
    if(regex.test(inputEmail.value) == false || inputEmail.value == ""){
        console.log("eamil 8lt");
        document.querySelector("#emailWarning").classList.replace("d-none","d-block");

    }
    else{
        console.log("eamil s7");

        return true;
    }
}


inputNumber.addEventListener("blur", numberValidation);


function numberValidation (){
    let regex = /^01[0125][0-9]{8}$/;
    if(regex.test(inputNumber.value) == false || inputNumber.value == ""){
        console.log("number 8lt");
        document.querySelector("#numberWarning").classList.replace("d-none","d-block");

    }
    else{
console.log(" number s7");
        return true;
    }
}




inputAge.addEventListener("blur", ageValidation);


function ageValidation (){
    let regex = /^[1-9][0-9]$/;
    if(regex.test(inputAge.value) == false || inputAge.value == ""){
        console.log("age 8lt");
        document.querySelector("#ageWarning").classList.replace("d-none","d-block");

    }
    else{
console.log("age s7");
        return true;
    }
}







inputPassword.addEventListener("blur", passwordValidation);


function passwordValidation (){
    let regex = /[1-9]{1,7}[a-zA-Z]{1,7}/;
    if(regex.test(inputPassword.value) == false || inputPassword.value == ""){
        console.log("password 8lt");
        document.querySelector("#passwordWarning").classList.replace("d-none","d-block");

    }
    else{
console.log("password s7");
document.querySelector("#passwordWarning").classList.replace("d-block","d-none");

        return true;
    }
}





inputRePassword.addEventListener("blur", repasswordValidation);


function repasswordValidation (){
    if((inputPassword.value) != (inputRePassword.value) ){
        console.log("repassword 8lt");
        document.querySelector("#userRepassword").classList.replace("d-none","d-block");

    }
    else{
console.log("repassword s7");
        return true;
    }
}



function activeSendbutton(){


    if(repasswordValidation() == true 
&& passwordValidation()== true 
&& ageValidation()==true 
&& numberValidation()==true 
&& emailValidation() == true  
&& nameValidation() == true){
   console.log("btton tmm")
    document.getElementById("sendBtn").classList.remove("disabled") 
}

}


activeSendbutton();










$("#BarBox").animate({ left:-$(".socials").innerWidth() })





$(".switch i").click(function () {
    if ($("#BarBox").css("left") == "0px") {
        $("#BarBox").animate({ left:-$(".socials").innerWidth() }, 1000)


    } else {
        $("#BarBox").animate({ left: "0px" }, 1000)
    }
})



document.getElementById("SarchFile").addEventListener("click",function(e){
    window.open("http://127.0.0.1:5500/Html/Search.html","_self")
        
    })
    
    
    document.getElementById("categoriesFile").addEventListener("click",function(e){
    window.open("http://127.0.0.1:5500/Html/Categories.html","_self")
    })
    
    document.getElementById("AreaFile").addEventListener("click",function(e){
    window.open("http://127.0.0.1:5500/Html/Area.html","_self")
    })
    
    document.getElementById("IngredientsFile").addEventListener("click",function(e){
    window.open("http://127.0.0.1:5500/Html/Ingredients.html","_self")
    })
    
    document.getElementById("ContactUsFile").addEventListener("click",function(e){
    window.open("http://127.0.0.1:5500/Html/Contact.html","_self")
    })