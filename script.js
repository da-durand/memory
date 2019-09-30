var mainElement = document.createElement("main");
document.body.appendChild(mainElement);

var ulElement = document.createElement("ul");
mainElement.appendChild(ulElement);

var nb = 9;

for (let i = 1; i <= nb; i++){
    var liElement = document.createElement("li");
    ulElement.appendChild(liElement);
    liElement.className = "card";
    liElement.innerHTML = i;

    liElement.addEventListener("click", function(){
        if (this.classList.contains("card")){
            this.classList.remove("card");
        }
        else{
            this.className = "card";
        }
    });
}