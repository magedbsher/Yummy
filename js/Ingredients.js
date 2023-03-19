"use stricts";




let api,
responseApi,
ingredDetailsResponse,
ingredDetailApi,
ingredDetailsArray;

// api ingredients


async function getIngredientsApi(){
  api= await  fetch("https://www.themealdb.com/api/json/v1/1/list.php?i=list")
responseApi = await api.json();
ingredientsArray = responseApi.meals
//console.log(ingredientsArray)
displayIngredients();
}

getIngredientsApi();


// displaying ingredients


function displayIngredients(){
    let blackBox=``
    for (let i = 0; i < ingredientsArray.length; i++) {
        blackBox+=` <div class="col-md-3">
        <div class="meal rounded-2 text-white text-center">
           <i class="fa-solid fa-drumstick-bite fa-4x fa-5x "></i>
            <div class=" rounded fs-3 ">
                <h3>${ingredientsArray[i].strIngredient}</h3>
                <p id="ingredientsparag">${ingredientsArray[i].strDescription}</p>
               
            </div>
        </div>


    </div>`
        
    }
    document.querySelector("#DataIngredients").innerHTML=blackBox
}








//ingredients details api 



async function GetDetailsApi() {
  
  
     ingredDetailApi = await fetch(`https://themealdb.com/api/json/v1/1/list.php?i=${Ingredients}`)
     ingredDetailsResponse = await imgredDetailsresponse.json()
     ingredDetailsArray = await ingredDetailsResponse.meals;

     displaytDetails()

}



//  displaying ingredients details  



function displaytDetails() {
    var blackBox = "";

    for (var i = 0; i < ingredDetailsArray.length; i++) {
        blackBox += `
        <div class="col-md-3">
        <div class="meal rounded-2 ">
            <img  src="${ingredDetailsArray[i].}"alt="" class="w-100">
            <div class="layer rounded">
                <p id="mealName">ayklam</p>
            </div>
        </div>


    </div>
        `
    }

    document.querySelector("#ingredDetails").innerHTML=blackBox

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