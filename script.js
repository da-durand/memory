$(document).ready(function () {

    $("body").html("<header><h1>Memory Game</h1><label for='number'>Nombres pairs</label><input type='number' name='number' id='numb'><button>Générer</button><span></span></header><main><ul></ul></main>")

    cardSelected1 = null;
    cardSelected2 = null;


    $("button").click(function() {

        $("ul").html("");

        cptPoint = 0;
        $("span").html(cptPoint);

        nb = $("input").val();
        var nbList = [];

        if (nb % 2 != 0) {
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

            $("ul").append("<li class='hidden' id='li"+i+"'>"+nbList[i]+"</li>")

            $("#li"+i).click(function () {

                if (this.classList.contains("hidden")) {

                    this.classList.remove("hidden");

                    if (cardSelected1 == null) {
                        cardSelected1 = this;
                    }
                    else {
                        cardSelected2 = this;

                        if (cardSelected1.innerHTML == cardSelected2.innerHTML) {

                            cardSelected1.className = "win";
                            cardSelected2.className = "win";

                            cptPoint++;
                            $("span").html(cptPoint);

                            setTimeout(function () {
                                cardSelected1.className = "finish";
                                cardSelected2.className = "finish";

                                cardSelected1 = null;
                                cardSelected2 = null;

                                if (cptPoint == nb / 2) {
                                    alert("Félicitations ! T'es un boss !");
                                }
                            }, 1000);
                        }
                        else {
                            cardSelected1.classList.remove("hidden");
                            cardSelected1.className = "loose";
                            cardSelected2.className = "loose";
                            setTimeout(function () {
                                cardSelected1.classList.remove("loose");
                                cardSelected2.classList.remove("loose");

                                cardSelected1.className = "hidden";
                                cardSelected2.className = "hidden";

                                cardSelected1 = null;
                                cardSelected2 = null;
                            }, 1000);
                        }
                    }
                }
            });
        }
    });


});