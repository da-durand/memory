var mainElement = document.createElement("main");
document.body.appendChild(mainElement);

var ulElement = document.createElement("ul");
mainElement.appendChild(ulElement);

var nb = 12;
var nbList = [];

var card1 = "";
var card2 = "";

for (let i = 0; i < nb/2; i++){
    nbList.push(i);
    nbList.push(i);
}

for (let i = 0; i < nbList.length; i++){
    var random_index = Math.floor(Math.random() * (i + 1));
    var temp = nbList[i];
    nbList[i] = nbList[random_index];
    nbList[random_index] = temp;
}

for (let i = 0; i < nb; i++){
    var liElement = document.createElement("li");
    ulElement.appendChild(liElement);
    liElement.className = "card";
    liElement.innerHTML = nbList[i];
    liElement.addEventListener("click", function(){
        if (this.classList.contains("card")){
            this.classList.remove("card");
        }
        else{
            this.className = "card";
        }
    });
}