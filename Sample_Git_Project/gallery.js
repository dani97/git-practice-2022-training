let wildlifeButton = document.getElementById("wildlife");
//console.log(wildlifeButton);
wildlifeButton.addEventListener('click',processFirstgrid);
function processFirstgrid(){
    document.getElementById("wildlife-id").style.display = "grid";
    document.getElementById("technology-id").style.display = "none";
    document.getElementById("nature-id").style.display = "none";
}

let technologyButton = document.getElementById("technology");
//console.log(wildlifeButton);
technologyButton.addEventListener('click',processSecondgrid);
function processSecondgrid(){
    document.getElementById("technology-id").style.display = "grid";
    document.getElementById("wildlife-id").style.display = "none";
    document.getElementById("nature-id").style.display = "none";
}

let natureButton = document.getElementById("nature");
//console.log(wildlifeButton);
natureButton.addEventListener('click',processThirdgrid);
function processThirdgrid(){
    document.getElementById("nature-id").style.display = "grid";
    document.getElementById("technology-id").style.display = "none";
    document.getElementById("wildlife-id").style.display = "none";
}
alert("hi everyone!!!");
