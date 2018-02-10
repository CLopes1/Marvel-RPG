$(document).ready(function () {

    var chosenHero
    var chosenEnemy
    var isHeroAlive
    var isEnemyAlive
    var isHeroChosen
    var isEnemyChosen

    function initGame() {

        isHeroChosen = false
        isEnemyChosen = false

        //Generate characters    
        for (var i = 0; i < charArr.length; i++) {
            var num = Math.floor(12 / charArr.length)
            var charThing = $("<div class='myChar col-md-" + num + "'value='" + i + "'><img src='" + charArr[i].image + "' style='width:150px;height:200px;border:3px solid gray'/></div>")
            // $("#characters").css("border", "3px solid red")
            $("#characters").append(charThing)
        }
    }

    //selects and grays out the first choice, assigns it as the hero. 
    $(document).on("click", ".myChar", function () {

        if (isHeroChosen === false) {
            chosenHero = charArr[$(this).attr("value")]
            console.log(chosenHero)
            // $(this).addClass("fader")
            $(hero).append(this)
            isHeroChosen = true
            
        }
        //selects and grays out the second choice, assigns it as the enemy. 
        else if (isEnemyChosen === false && chosenHero.name != charArr[$(this).attr("value")].name) {
            chosenEnemy = charArr[$(this).attr("value")]
            console.log(chosenEnemy)
            // $(this).addClass("fader")
            $(enemy).append(this)
            isEnemyChosen = true
           
        }

    })

        var charArr = [

        {
            name: "Beast",
            hp: 50,
            strength: 50,
            image: "./assets/images/beast.jpeg",
        },

        {
            name: "Captain America",
            hp: 50,
            strength: 50,
            image: "./assets/images/captainamerica.jpeg",
        },

        {
            name: "Emma Frost",
            hp: 50,
            strength: 50,
            image: "./assets/images/emmafrost.jpeg",
        },


        {
            name: "Magneto",
            hp: 50,
            strength: 50,
            image: "./assets/images/magneto.jpeg",
        },


        {
            name: "Night Crawler",
            hp: 50,
            strength: 50,
            image: "./assets/images/nightcrawler.jpeg",
        },

        {
            name: "Spider Man",
            hp: 50,
            strength: 50,
            image: "./assets/images/spiderman.jpg",
        }

    ]


    initGame();

})
