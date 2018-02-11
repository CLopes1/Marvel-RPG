$(document).ready(function () {

    var chosenHero
    var chosenEnemy
    var isHeroAlive
    var isEnemyAlive
    var isHeroChosen
    var isEnemyChosen
    var enemiesLeft = 5

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
            $(this).addClass("fader")
            $("#heroImg").append("<img src='" + chosenHero.image + "'/>")
            $("#heroName").append(chosenHero.name)
            $("#heroStrength").append("Strength: " + chosenHero.hp)
            isHeroChosen = true


        }

        //selects and grays out the second choice, assigns it as the enemy. 
        else if (isEnemyChosen === false && chosenHero.name != charArr[$(this).attr("value")].name) {
            chosenEnemy = charArr[$(this).attr("value")]
            console.log(chosenEnemy)
            $(this).addClass("fader")
            $("#enemyImg").append("<img src='" + chosenEnemy.image + "'/>")
            $("#enemyName").append(chosenEnemy.name)
            $("#enemyStrength").append("Strength: " + chosenEnemy.hp)
            isEnemyChosen = true
            $(document).scrollTop(2000)

        }

    })

    $("#button").on("click", function () {
        if (chosenHero.hp >0) {
            $("#heroStrength").html("Strength: " + (chosenHero.hp -= chosenEnemy.attack()))
            console.log("The button has been clicked, hero health is now: " + chosenHero.hp)
            $("#enemyStrength").html("Strength: " + (chosenEnemy.hp -= chosenHero.attack()))
        }

     if (chosenHero.hp <= 0) {
            alert("You've been defeated! Game Over!")
            location.reload()
            $(document).scrollTop(0)
        }

         if (chosenEnemy.hp <= 0) {
            // chosenHero.hp  + 50
            enemiesLeft--
            isEnemyChosen = false
            alert("You've defeated " + chosenEnemy.name + ". Select another character to battle.")
            $("#enemy").empty()
        }

    })

    var charArr = [

        {
            name: "Beast",
            hp: 100,
            attack: function () {
                return Math.floor(Math.random() * 15) + 1
            },
            // counterAttack: "",
            image: "./assets/images/beast.jpeg",
        },

        {
            name: "Captain America",
            hp: 100,
            attack: function () {
                return Math.floor(Math.random() * 15) + 1
            },
            // counterAttack: "",
            image: "./assets/images/captainamerica.jpeg",
        },

        {
            name: "Emma Frost",
            hp: 100,
            attack: function () {
                return Math.floor(Math.random() * 15) + 1
            },
            // counterAttack: "",
            image: "./assets/images/emmafrost.jpeg",
        },


        {
            name: "Magneto",
            hp: 100,
            attack: function () {
                return Math.floor(Math.random() * 15) + 1
            },
            // counterAttack: "",
            image: "./assets/images/magneto.jpeg",
        },


        {
            name: "Night Crawler",
            hp: 100,
            attack: function () {
                return Math.floor(Math.random() * 15) + 1
            },
            // counterAttack: "",
            image: "./assets/images/nightcrawler.jpeg",
        },

        {
            name: "Spider Man",
            hp: 100,
            attack: function () {
                return Math.floor(Math.random() * 15) + 1
            },
            // counterAttack: "",
            image: "./assets/images/spiderman.jpg",
        }

    ]


    initGame();

})
