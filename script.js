var numberInput = document.getElementById("numb");
var buttonInput = document.getElementsByTagName("button")[0];

var mainElement = document.createElement("main");
document.body.appendChild(mainElement);

var ulElement = document.createElement("ul");
mainElement.appendChild(ulElement);

cardSelected1 = null;
cardSelected2 = null;

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
                
                if (cardSelected1 == null){
                    cardSelected1 = this;
                }
                else {
                    cardSelected2 = this;

                    if (cardSelected1.innerHTML == cardSelected2.innerHTML){
                        
                        cardSelected1.className = "finish";
                        cardSelected2.className = "finish";
                        
                        cardSelected1 = null;
                        cardSelected2 = null;

                    }
                    else{
                        setTimeout(function(){
                            
                            cardSelected1.className = "card";
                            cardSelected2.className = "card";  

                            cardSelected1 = null;
                            cardSelected2 = null;
                        },1000);
                    }

                }
            }
        });
        
    }
});