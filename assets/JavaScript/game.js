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


    // Gets Link for Theme Song
    var audioElement = document.createElement("audio");
    audioElement.setAttribute("src", "./assets/javascript/magneto.mp3");




    //Initializes the game
    function initGame() {

        isHeroChosen = false
        isEnemyChosen = false


        //Generate list of characters    
        for (var i = 0; i < charArr.length; i++) {
            var num = Math.floor(12 / charArr.length)
            // var charThing = $("<div class='myChar col-md-" + num + "'value='" + i + "'><img src='" + charArr[i].image + "' style='width:150px;height:200px;border:3px solid gray'/></div>")
            var charThing = $("<div class='card-deck myChar col-md-" + num +
                "' value='" + i + "'style='width:14rem;'><div class='card-img-top'><img src='" + charArr[i].image + "' style='width:200px;height:300px;'/></div><div class='card-body'><div class='card-text'>" + charArr[i].name + "<br>" + "Health: " + charArr[i].hp + "<br>" + "Attack: " + charArr[i].attackPower + "<br>" + "Counter Attack: " + charArr[i].counterAttack + "</div></div></div>")
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
            audioElement.play()

        }

    })


    //Game-play logic
    $("#button").on("click", function () {
        if (chosenEnemy.hp > 0) {
            $("#heroHp").html("Health: " + (chosenHero.hp -= chosenEnemy.counterAttack))
            // console.log("The button was clicked, hero health is now: " + chosenHero.hp)
            $("#enemyHp").html("Health: " + (chosenEnemy.hp -= chosenHero.attackPower))
            // console.log("The button was clicked, hero attack power is now: " + chosenHero.attackPower)
        }
        $("#heroAttack").html("Attack Power: " + (chosenHero.attackPower += 20))

        if (chosenHero.Hp < 1 && chosenEnemy.hp < 1) {
            alert("It's a draw! Both players lost this battle.")
            enemiesLeft = 5
            location.reload()
        }

        else if (enemiesLeft = 0) {
            alert("Congratulations, you're the new champion!")
            isEnemyChosen = false
            // $("#enemyImg").animate({ height: "500px" });
            $("#enemyImg").empty()
            $("#enemyName").empty()
            $("#enemyHp").empty()
            $("#enemyAttack").empty()
            $("#enemyCtrAttack").empty()
            $(document).scrollTop(0)
        }


        else if (chosenEnemy.hp < 1) {
            enemiesLeft--
            $("#enemyHp").html("Health: " + (chosenEnemy.hp -= chosenHero.attackPower))
            // $("#enemyImg").delay( 800 ).fadeOut( "slow" )
            // $("#enemyName").delay( 800 ).fadeOut( "slow" )
            // $("#enemyHp").delay( 800 ).fadeOut( "slow" )
            // $("#enemyCtrAttack").delay( 800 ).fadeOut( "slow" )
            $("#enemyImg").empty()
            $("#enemyName").empty()
            $("#enemyHp").empty()
            $("#enemyAttack").empty()
            $("#enemyCtrAttack").empty()
            alert("You've defeated " + chosenEnemy.name + "! Select your next opponent!")
            isEnemyChosen = false
            $(document).scrollTop(0)

        }


        else if (chosenHero.hp < 1) {
            // $("#heroImg").fadeOut("slow")
            alert("You've been defeated! Game Over!")
            // resetGame()
            enemiesLeft = 5
            location.reload()
        }


        else {

        }

    })

    // Music Buttons
    $(".theme-button").on("click", function () {
        audioElement.play();
    });

    $(".pause-button").on("click", function () {
        audioElement.pause();
    });

    //Character array
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
            hp: 100,
            // attack: function () {
            //     return Math.floor(Math.random() * 15) + 1
            // },
            attackPower: 40,
            counterAttack: 20,
            image: "./assets/images/magneto.jpeg",
        },


        {
            name: "Night Crawler",
            hp: 130,
            // attack: function () {
            //     return Math.floor(Math.random() * 15) + 1
            // },

            attackPower: 15,
            counterAttack: 15,
            image: "./assets/images/nightcrawler.jpeg",
        },

        {
            name: "Spider Man",
            hp: 140,
            // attack: function () {
            //     return Math.floor(Math.random() * 15) + 1
            // },

            attackPower: 15,
            counterAttack: 20,
            image: "./assets/images/spiderman.jpg",
        }

    ]


    initGame();


})
