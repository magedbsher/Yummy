"use strict";
let api,
responseApi,
originMeals;

async function GetAreaApi(){
    api = await fetch("https://themealdb.com/api/json/v1/1/list.php?a=list")
    responseApi = await api.json();
    originMeals = await responseApi.meals 
    console.log(originMeals);


    DisplayOriginMeals();
}

GetAreaApi();


function DisplayOriginMeals(){
    let blackBox=``
    for (let i = 0; i < originMeals.length; i++) {
        blackBox+=`
        <div class="col-md-3">
                    <div class="meal rounded-2 text-white text-center">
                    <i class="fa-solid fa-house-laptop fa-5x "></i>

                        <div class="  fs-3">
                            <p id="mealNameArea">${originMeals[i].strArea}</p>
                        </div>
                    </div>


                </div>
        `
        
    }
    document.getElementById("DataArea").innerHTML=blackBox;
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