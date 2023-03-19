"use strict";
let mealsArray,
  apiResponse,
  api,
  apiDEtails,
  apiDetailsResponse,
  detailsMealsArray,
  apiId,
  IdResponse,
  IdARray;

let lighrBoxContainer = document.querySelector("#lighrBoxContainer");
let lightBox = document.querySelector("#lightBox");
let closeBtn = document.querySelector("#closeBtn");
let game_details = document.getElementById("gameDetails");

async function getApi() {
  api = await fetch("https://themealdb.com/api/json/v1/1/search.php?s=");
  apiResponse = await api.json();
  mealsArray = await apiResponse.meals;
  displayData();
  //console.log(mealsArray );
}

getApi();

$("#BarBox").animate({ left: -$(".socials").innerWidth() });

$(".switch i").click(function () {
  if ($("#BarBox").css("left") == "0px") {
    $("#BarBox").animate({ left: -$(".socials").innerWidth() }, 1000);
  } else {
    $("#BarBox").animate({ left: "0px" }, 1000);
  }
});

function displayData() {
  let blackBox = ``;
  for (let i = 0; i < mealsArray.length; i++) {
    blackBox += `<div class="col-md-3">
        <div class="meal rounded-2 ">
            <img src="${mealsArray[i].strMealThumb}" alt="" class="w-100">
            <div class="layer rounded">
                <p >${mealsArray[i].strMeal}</p>
            </div>
        </div>


    </div>`;
  }
  document.getElementById("Data").innerHTML = blackBox;
}

document.querySelector(".meal").addEventListener("click", function () {
  console.log("hey");
  // document.getElementById("home").classList.add("d-none");
});

document.getElementById("Data").addEventListener("click", function () {
  document.getElementById("content", "BarBox").classList.add("d-none");
  document
    .getElementById("lighrBoxContainer")
    .classList.replace("d-none", "d-block");
  displayDetails();
});

closeBtn.addEventListener("click", closeSlider);

function closeSlider() {
  lighrBoxContainer.classList.replace("d-flex", "d-none");
  document.getElementById("content", "BarBox").classList.remove("d-none");
}

async function getMealsDetailsApi() {
  apiDEtails = await fetch("https://themealdb.com/api/json/v1/1/random.php");
  apiDetailsResponse = await apiDEtails.json();
  detailsMealsArray = await apiDetailsResponse.meals;
  displayDetails;
  // console.log(detailsMealsArray );
}

getMealsDetailsApi();

function displayDetails() {
  let blackBox = ``;
  for (let i = 0; i < detailsMealsArray.length; i++) {
    blackBox += `

        <div class="col-md-4">
        <img src="${detailsMealsArray[i].strMealThumb}" alt=""  class="w-100">
        <h5>${detailsMealsArray[i].strMeal}</h5>
    </div>
    <div class="col-md-8">
<h2 > instructions </h2>
<p>${detailsMealsArray[i].strInstructions}</p>
<h5>area:<span class="   px-1 mx-1">${detailsMealsArray[i].strArea}</span></h5>
<h5>category:<span class="  px-1 mx-1">category</span>${detailsMealsArray[i].strCategory}</h5>
<h5>Recipes :
    <span class=" bg-primary px-1 mx-1">s</span>
    <span class=" bg-primary px-1 mx-1">s</span>
    <span class="bg-primary px-1 mx-1">s</span>

</h5>
<h5>tags :
    <span class=" bg-warning rounded p-1 mx-1">ssadasd</span>
</h5>

    <button class="btn btn-outline-warning my-2"> show</button>
    <button class="btn btn-outline-danger my-2" id="youtubeBtn">Youtube</button>

</div>

        `;
  }
  document.querySelector("#detailsData").innerHTML = blackBox;
}

async function GetIdApi() {
  apiId = await fetch(`https://themealdb.com/api/json/v1/1/lookup.php?i=52772`);
  IdResponse = await apiId.json();
  IdARray = await IdResponse.meals;
  console.log(IdARray);
}

GetIdApi();

window.addEventListener("click", function (e) {
  console.log(e.target);
});
//function Gettin

document.getElementById("SarchFile").addEventListener("click", function (e) {
  window.open("http://127.0.0.1:5500/Html/Search.html", "_self");
});

document
  .getElementById("categoriesFile")
  .addEventListener("click", function (e) {
    window.open("http://127.0.0.1:5500/Html/Categories.html", "_self");
  });

document.getElementById("AreaFile").addEventListener("click", function (e) {
  window.open("http://127.0.0.1:5500/Html/Area.html", "_self");
});

document
  .getElementById("IngredientsFile")
  .addEventListener("click", function (e) {
    window.open("http://127.0.0.1:5500/Html/Ingredients.html", "_self");
  });

document
  .getElementById("ContactUsFile")
  .addEventListener("click", function (e) {
    window.open("http://127.0.0.1:5500/Html/Contact.html", "_self");
  });




//   document.getElementById("youtubeBtn").addEventListener("click",function(){
//     console.log("youtube");
//     //window.open(`${detailsMealsArray[i].strYoutube}`,"_self")
//   })