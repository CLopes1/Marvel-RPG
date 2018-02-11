//-----------------------------------------------Resources / Notes-----------------------------------------------------

// Character Images - https://comicvine.gamespot.com/profile/theoptimist/lists/top-100-marvel-characters/32199/


//-------------------------------------------------------------------------------------------------------------

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

    // function resetGame() {
    //     $("#characters").empty()
    //     $("#enemyImg").empty()
    //     $("#enemyName").empty()
    //     $("#enemyHealth").empty()
    //     $("#heroImg").empty()
    //     $("#heroName").empty()
    //     $("#heroHealth").empty()
    //     chosenEnemy.hp = 100
    //     $(".enemyStrength").html("Strength: " + 100)
    //     chosenHero.hp = 100
    //     // $("#heroStrength").html("Strength: " + 100)
    //     initGame()
    // }

    //selects and grays out the first choice, assigns it as the hero. 
    $(document).on("click", ".myChar", function () {

        if (isHeroChosen === false) {
            chosenHero = charArr[$(this).attr("value")]
            console.log(chosenHero)
            $(this).addClass("fader")
            $("#heroImg").append("<img src='" + chosenHero.image + "'/>")
            $("#heroName").append(chosenHero.name)
            $("#heroHp").append("Health: " + chosenHero.hp)
            $("#heroAttack").append("Attack Power: " + chosenHero.attackPower)
            isHeroChosen = true
        }

        //selects and grays out the second choice, assigns it as the enemy. 
        else if (isEnemyChosen === false && chosenHero.name != charArr[$(this).attr("value")].name) {
            chosenEnemy = charArr[$(this).attr("value")]
            console.log(chosenEnemy)
            $(this).addClass("fader")
            $("#enemyImg").append("<img src='" + chosenEnemy.image + "'/>")
            $("#enemyName").append(chosenEnemy.name)
            $("#enemyHp").append("Health: " + chosenEnemy.hp)
            // $("#enemyAttack").append("Attack Power: " + chosenEnemy.attackPower)
            $("#enemyCtrAttack").append("Counter Attack: " + chosenEnemy.counterAttack)
            isEnemyChosen = true
            $(document).scrollTop(2000)

        }

    })



    $("#button").on("click", function () {
        if (chosenEnemy.hp > 0) {
        $("#heroHp").html("Health: " + (chosenHero.hp -= chosenEnemy.counterAttack))
        console.log("The button was clicked, hero health is now: " + chosenHero.hp)
        $("#heroAttack").html("Attack Power: " + (chosenHero.attackPower += 20))
        console.log("The button was clicked, hero attack power is now: " + chosenHero.attackPower)
        $("#enemyHp").html("Health: " + (chosenEnemy.hp -= chosenHero.attackPower))
        }

        if (chosenHero.Hp <= 0 && chosenEnemy.hp <= 0) {
            alert("It's a draw! Both players lost this battle.")
            enemiesLeft = 5
            location.reload()
        }

        else if (chosenHero.hp <= 0) {
            alert("You've been defeated! Game Over!")
            // resetGame()
            enemiesLeft = 5
            location.reload()
        }


        else if (chosenEnemy.hp <= 0) {
            $("#enemyHp").html("Health: " + (chosenEnemy.hp -= chosenHero.attackPower))
            alert("You've defeated " + chosenEnemy.name + "! Select another character to continue fighting.")
            isEnemyChosen = false
            enemiesLeft--
            $("#enemyImg").empty()
            $("#enemyName").empty()
            $("#enemyHp").empty()
            $("#enemyAttack").empty()
            $("#enemyCtrAttack").empty()
            $(document).scrollTop(0)
        }

        else if (enemiesLeft = 0) {
            alert("You won! Congratulations champion!")
        }

        else {

        }

    })

    var charArr = [

        {
            name: "Juggernaut",
            hp: 120,
            // attack: function () {
            //     return Math.floor(Math.random() * 15) + 1
            // },
            attackPower: 18,
            counterAttack: 10,
            image: "./assets/images/beast.jpeg",
        },

        {
            name: "Captain America",
            hp: 130,
            // attack: function () {
            //     return Math.floor(Math.random() * 15) + 1
            // },
            attackPower: 30,
            counterAttack: 15,
            image: "./assets/images/captainamerica.jpeg",
        },

        {
            name: "Emma Frost",
            hp: 110,
            // attack: function () {
            //     return Math.floor(Math.random() * 15) + 1
            // },
            attackPower: 15,
            counterAttack: 10,
            image: "./assets/images/emmafrost.jpeg",
        },


        {
            name: "Magneto",
            hp: 120,
            // attack: function () {
            //     return Math.floor(Math.random() * 15) + 1
            // },
            attackPower: 40,
            counterAttack: 20,
            image: "./assets/images/magneto.jpeg",
        },


        {
            name: "Night Crawler",
            hp: 105,
            // attack: function () {
            //     return Math.floor(Math.random() * 15) + 1
            // },

            attackPower: 15,
            counterAttack: 30,
            image: "./assets/images/nightcrawler.jpeg",
        },

        {
            name: "Spider Man",
            hp: 150,
            // attack: function () {
            //     return Math.floor(Math.random() * 15) + 1
            // },

            attackPower: 15,
            counterAttack: 30,
            image: "./assets/images/spiderman.jpg",
        }

    ]


    initGame();

})
