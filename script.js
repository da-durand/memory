var numberInput = document.getElementById("numb");
var buttonInput = document.getElementsByTagName("button")[0];

var headerElement = document.getElementsByTagName("header")[0];
var cptElement = document.createElement("span");
headerElement.appendChild(cptElement);

var mainElement = document.createElement("main");
document.body.appendChild(mainElement);

var ulElement = document.createElement("ul");
mainElement.appendChild(ulElement);

cardSelected1 = null;
cardSelected2 = null;

buttonInput.addEventListener("click", function () {
    
    ulElement.innerHTML = "";
    
    cptPoint = 0;    
    cptElement.innerHTML = cptPoint;

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
        liElement.className = "hidden";
        liElement.innerHTML = nbList[i];

        liElement.addEventListener("click", function () {

            if (this.classList.contains("hidden")) {
            
                this.classList.remove("hidden");
                
                if (cardSelected1 == null){
                    cardSelected1 = this;
                }
                else {
                    cardSelected2 = this;

                    if (cardSelected1.innerHTML == cardSelected2.innerHTML){
                        
                        cardSelected1.className = "win";
                        cardSelected2.className = "win";

                        cptPoint++;
                        cptElement.innerHTML = cptPoint;

                        setTimeout(function(){
                            cardSelected1.className = "finish";
                            cardSelected2.className = "finish";
                            
                            cardSelected1 = null;
                            cardSelected2 = null;    
                            
                            if (cptPoint == nb/2){
                                alert("Félicitations ! T'es un boss !");
                            }
                        },1000);
                    }
                    else{
                        cardSelected1.classList.remove("hidden");
                        cardSelected1.className = "loose";
                        cardSelected2.className = "loose";
                        setTimeout(function(){
                            cardSelected1.classList.remove("loose");
                            cardSelected2.classList.remove("loose");

                            cardSelected1.className = "hidden";
                            cardSelected2.className = "hidden";  

                            cardSelected1 = null;
                            cardSelected2 = null;
                        },1000);
                    }
                }
            }
        });     
    }
});