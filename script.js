var numberInput = document.getElementById("numb");
var buttonInput = document.getElementsByTagName("button")[0];

var mainElement = document.createElement("main");
document.body.appendChild(mainElement);

var ulElement = document.createElement("ul");
mainElement.appendChild(ulElement);

buttonInput.addEventListener("click", function () {
    
    ulElement.innerHTML = "";
    
    nb = numberInput.value;
    var nbList = [];
    
    if (nb % 2 != 0){
        nb++;
    }
    

    for (let i = 0; i < nb / 2; i++) {
        nbList.push(i + 1);
        nbList.push(i + 1);
    }

    for (let i = 0; i < nbList.length; i++) {
        var random_index = Math.floor(Math.random() * (i + 1));
        var temp = nbList[i];
        nbList[i] = nbList[random_index];
        nbList[random_index] = temp;
    }

    for (let i = 0; i < nb; i++) {

        var liElement = document.createElement("li");
        ulElement.appendChild(liElement);
        liElement.className = "card";
        liElement.innerHTML = nbList[i];

        liElement.addEventListener("click", function () {

            if (this.classList.contains("card")) {
                this.classList.remove("card");
            }
            else {
                this.className = "card";
            }
        });
    }
});