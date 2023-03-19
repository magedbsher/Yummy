"use strict";
let api,
apiResponse,
categoriesArray;

async function getCategoriesApi(){
    api = await fetch("https://themealdb.com/api/json/v1/1/categories.php")

    apiResponse = await api.json();
    categoriesArray = await apiResponse.categories;
    console.log(categoriesArray);
    displayCategories();
}

getCategoriesApi();




function displayCategories(){
    let blackBox=``
    for (let i = 0; i < categoriesArray.length; i++) {
        blackBox+=` <div class="col-md-3">
        <div class="meal rounded-2 ">
            <img src="${categoriesArray[i].strCategoryThumb}" alt="" class="w-100">
            <div class="layer rounded d-flex flex-column text-center">
                <p class="">${categoriesArray[i].strCategory}</p>
                <h6>${categoriesArray[i].strCategoryDescription}</h6>
            </div>
        </div>


    </div>
        `
        
    }
    document.querySelector("#DataCategories").innerHTML=blackBox;
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