let searchByName = document.querySelector("#nameSearch");
let searchByLetter=document.querySelector("#letterSearch");
let apiName;
let responseApiName;
let nameArray;
let apiLetter;
let responseApiLetter;
let letterArray;
let nameSearching;
let letterSearching;



// letter search 

async function letterSearchApi(){
    apiLetter = await fetch(`https://themealdb.com/api/json/v1/1/search.php?f=${letterSearching}`)
responseApiLetter = (await apiLetter.json());
letterArray = await responseApiLetter.meals;
displayletterSearching();

//console.log(letterArray);


}

letterSearchApi();





function displayletterSearching(){
    let blackBox=``
    for (let i = 0; i < letterArray.length; i++) {
        blackBox+=` <div class="col-md-3">
        <div class="meal rounded-2 ">
            <img src="${letterArray[i].strMealThumb}" alt="" class="w-100">
            <div class="layer rounded">
                <p id="mealName">${letterArray[i].strMeal}</p>
            </div>
        </div>


    </div>`
    }
    
document.getElementById("DataSearching").innerHTML=blackBox;
}





searchByLetter.addEventListener("keyup",function(){
    letterSearching = searchByLetter.value
    letterSearchApi(letterSearching);
   //console.log(letterSearching);
})




// Name search 



async function nameSearchApi(){
    apiName = await fetch(`https://themealdb.com/api/json/v1/1/search.php?s=${nameSearching}`)
responseApiName = await apiName.json();
nameArray = await responseApiName.meals;
//console.log(nameArray);
displayNameSearching();
}

nameSearchApi();







searchByName.addEventListener("keyup",function(){
     nameSearching = searchByName.value
    nameSearchApi(nameSearching);
    //console.log(nameSearching);
})





function displayNameSearching(){
    let blackBox=``
    for (let i = 0; i < nameArray.length; i++) {
     blackBox+=`<div class="col-md-3">
     <div class="meal rounded-2 ">
         <img src="${nameArray[i].strMealThumb}" alt="" class="w-100">
         <div class="layer rounded">
             <p ">${nameArray[i].strMeal}</p>
         </div>
     </div>


 </div>`
        
    }
    document.querySelector("#DataSearching").innerHTML=blackBox;
}


















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