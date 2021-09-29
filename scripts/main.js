console.log("test");

let slideIndex = 0
/* This is slideshow */
const showSlidez = () => {
    console.log("Function is running");

    const slidez = document.getElementsByClassName("Slidez");

    for(let i=0; i < slidez.length; i++) {
        slidez[i].style.display = "none";

    }

    slideIndex++;

    if(slideIndex > slidez.length) {
        slideIndex = 1;
    }

    slidez[slideIndex - 1].style.display = "block";

    setTimeout(showSlidez , 3000);

    console.log("slidez")

};

showSlidez();

var manufacturerz = document.getElementsByName("ManuFacturerz");

for (let a=0; a <  manufacturerz.length; a++){
     if(manufacturerz[a].checked) {

var Displaymanufacture = manufacturerz[a].value;
  }
}

var products = document.getElementsByName("Products");
var Displayproducts = "No product selected" ;


for (let b=0; b <  products.length; b++){
    if(products[b].checked) {
 
Displayproducts = products[b].value;
  }
}


var size = document.getElementsByName("size");

for (let c=0; c < size.length; c++){
     if(size[c].checked) {

var Displaysize = size[c].value;
  }

var sizevalue = [0, 2500, 5000]; 
  for (let f=0; f < size.length; f++ ){
  if(size[f].checked) {
 
 var productsizevalue = sizevalue[f]; 
 }
}

 }

 var extraproducts = document.getElementsByName("Extra products");
 var otherproductvalue = 0;
 var Displayextraproducts = "No Product Selected"

  for (let d=0; d <extraproducts.length; d++){
    if(extraproducts[d].checked) {

 Displayextraproducts = extraproducts[d].value;
    }
  var othproductvalue = [500, 1000, 1500, 400]; 
  for (let g=0; g < extraproducts.length; g++ ){
  if(extraproducts[g].checked) {
     
 otherproductvalue = othproductvalue[g];
   }
 }
}







/* Add to order btn in buynowpage scripts*/
var addbilltofav;
function addtoorderbtnbuynowpage() {

document.getElementById("Curbill").style.padding = "30px"; 
document.getElementById("Curbill").style.borderBottom = "solid black 1px"; 
document.getElementById("curordertopic").style.padding = "30px"; 
document.getElementById("curordertopic").style.borderTop = "solid black 1px"; 
document.getElementById("curordertopic").style.fontSize = "23px";
document.getElementById("favourite-botton").style.padding = "10px 10px" ;   
document.getElementById("favourite-botton").style.width = "15%";
document.getElementById("favourite-botton").style.display = "block";


var manufacturerz = document.getElementsByName("manufaturerr1");

for (let a=0; a <  manufacturerz.length; a++){
     if(manufacturerz[a].checked) {

var Displaymanufacture = manufacturerz[a].value;
  }
}
  
 
var products = document.getElementsByName("productss");
var Displayproducts = "No product selected" ;


for (let b=0; b <  products.length; b++){
    if(products[b].checked) {
 
Displayproducts = products[b].value;
  }

var mainproductvalue = [1000, 2000, 2500,  800]; 
   for (let e=0; e < products.length; e++ ){
   if(products[e].checked) {
  
  var mainproductprice = mainproductvalue[e]; 
  }
}
}


var size = document.getElementsByName("size");

for (let c=0; c < size.length; c++){
     if(size[c].checked) {

var Displaysize = size[c].value;
  }

var sizevalue = [0, 2500, 5000]; 
  for (let f=0; f < size.length; f++ ){
  if(size[f].checked) {
 
 var productsizevalue = sizevalue[f]; 
 }
}

 }

 var extraproducts = document.getElementsByName("extra-products");
 var otherproductvalue = 0;
 var Displayextraproducts = "No Product Selected"

  for (let d=0; d <extraproducts.length; d++){
    if(extraproducts[d].checked) {

 Displayextraproducts = extraproducts[d].value;
    }
  var othproductvalue = [500, 1000, 1500]; 
  for (let g=0; g < extraproducts.length; g++ ){
  if(extraproducts[g].checked) {
     
 otherproductvalue = othproductvalue[g];
   }
 }
}

var totalordervalue = mainproductprice + productsizevalue + otherproductvalue;

  document.getElementById("Curbill").innerHTML = 
  "Manufacturer : " + Displaymanufacture + "<br>" + "<br>" + "Products : " + Displayproducts + "<br>" + "<br>" + "Size : " + Displaysize + "<br>" + "<br>" + "Other products : " + Displayextraproducts + "<br>" + "<br>" +  "Final Price : LKR." + totalordervalue ;                                                          
   addbilltofav = document.getElementById("Curbill").innerHTML ;
}
 
function placeorderbtn() {
  if(confirm("Are you sure, You want to place this order")){
      location.reload();
  }
  alert("Your order was sent. Thank you for shopping with us !");
}

function addtofav(){
  document.getElementById("favourite-botton").style.backgroundColor ="red" ;
  localStorage.setItem("favbill", addbilltofav);
}

function takefromfav() {
document.getElementById("takefav-btn").style.backgroundColor ="red";
var taketobill = localStorage.getItem("favbill");
document.getElementById("curbillbuynow").innerHTML = taketobill;
}

/* Add to favourites botton buynowpage script*/
function submitbtncontactus(){
  document.getElementById("submitbtn-contactus").style.backgroundColor ="red" ;
}

function getLoyalty(){
  alert("Your current loyalty point value: "+getCurrentLoyaltyPoints());
}
function getCurrentLoyaltyPoints() {
  return window.localStorage.getItem('loyaltyPoints')?window.localStorage.getItem('loyaltyPoints'):0;
}
function updateLayalty() {
  var currentPoints = getCurrentLoyaltyPoints();
  var pointsForThisOrder = orderCount>=3?orderCount*20:0;
  var totalPoints = parseInt(pointsForThisOrder) + parseInt(currentPoints);
  window.localStorage.setItem('loyaltyPoints', totalPoints);
}