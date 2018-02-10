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
            $(this).addClass("fader") 
            $("#heroImg").append("<img src='" + chosenHero.image + "'/>")
            $("#heroStrength").append("Strength: " + chosenHero.hp)
            isHeroChosen = true
        

        }
    
        //selects and grays out the second choice, assigns it as the enemy. 
        else if (isEnemyChosen === false && chosenHero.name != charArr[$(this).attr("value")].name) {
        chosenEnemy = charArr[$(this).attr("value")]
        console.log(chosenEnemy)
        $(this).addClass("fader")
        $("#enemyImg").append("<img src='" + chosenEnemy.image + "'/>")
        $("#enemyStrength").append("Strength: " + chosenEnemy.hp)
        isEnemyChosen = true
    }

    $("#button").on("click", function () {
        $("#hero").append(chosenHero.hp - chosenEnemy.attack)
        $("#enemy").append(chosenEnemy.hp - chosenHero.attack)

    })



    // var x = ""
    // x +="<img src='"+chosenEnemy.image+"'/>"+"<br>"
    // x +="HP: "+ chosenHero.hp+ "<br>"
    // x +="Attack Power: "+ chosenHero.attackpower+"<br>"
    // x +="<br>"+"Counter Attack Power:"

})

var charArr = [

    {
        name: "Beast",
        hp: 100,
        attack: Math.floor(Math.random() * 15) + 1,
        // counterAttack: "",
        image: "./assets/images/beast.jpeg",
    },

    {
        name: "Captain America",
        hp: 100,
        attack: Math.floor(Math.random() * 15) + 1,
        // counterAttack: "",
        image: "./assets/images/captainamerica.jpeg",
    },

    {
        name: "Emma Frost",
        hp: 100,
        attack: Math.floor(Math.random() * 15) + 1,
        // counterAttack: "",
        image: "./assets/images/emmafrost.jpeg",
    },


    {
        name: "Magneto",
        hp: 100,
        attack: Math.floor(Math.random() * 15) + 1,
        // counterAttack: "",
        image: "./assets/images/magneto.jpeg",
    },


    {
        name: "Night Crawler",
        hp: 100,
        attack: Math.floor(Math.random() * 15) + 1,
        // counterAttack: "",
        image: "./assets/images/nightcrawler.jpeg",
    },

    {
        name: "Spider Man",
        hp: 100,
        attack: Math.floor(Math.random() * 15) + 1,
        // counterAttack: "",
        image: "./assets/images/spiderman.jpg",
    }

]


initGame();

})
