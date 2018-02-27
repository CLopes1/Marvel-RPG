//-----------------------------------------------Resources / Notes-----------------------------------------------------

// Character Images - https://comicvine.gamespot.com/profile/theoptimist/lists/top-100-marvel-characters/32199/


//-------------------------------------------------------------------------------------------------------------

$(document).ready(function () {

    var chosenHero
    var chosenEnemy
    var isHeroChosen
    var isEnemyChosen
    var maxEnemies = 5
    var enemiesLeft = 5
    console.log("There are now " + enemiesLeft + "  enemies left.")


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
            var charThing = $("<div class='card-deck myChar col-sm-" + num +
                "' value='" + i + "'style='width:14rem;'><div class='card-img-top'><img src='" + charArr[i].image + "' style='width:170px;height:250px;border:5px solid gray'/></div><div class='card-body'><div class='card-text'>" + charArr[i].name + "<br>" + "Health: " + charArr[i].hp + "<br>" + "Attack: " + charArr[i].attackPower + "<br>" + "Counter Attack: " + charArr[i].counterAttack + "</div></div></div>")
            $("#characters").append(charThing)
        }
    }


    //selects and grays out the first choice, assigns it as the hero. 
    $(document).on("click", ".myChar", function () {

        if (isHeroChosen === false) {
            chosenHero = charArr[$(this).attr("value")]
            $(this).empty()
            $(this).click(false)
            $("#heroImg").append("<img src='" + chosenHero.image + "'/>")
            $("#heroName").append(chosenHero.name)
            $("#heroHp").append("Health: " + chosenHero.hp)
            $("#heroAttack").append("Attack Power: " + chosenHero.attackPower)
            isHeroChosen = true
        }

        //selects and grays out the second choice, assigns it as the enemy. 
        else if (isEnemyChosen === false && chosenHero.name != charArr[$(this).attr("value")].name) {
            chosenEnemy = charArr[$(this).attr("value")]
            $(this).empty()
            $(this).click(false)
            $("#enemyImg").append("<img src='" + chosenEnemy.image + "'/>")
            $("#enemyName").append(chosenEnemy.name)
            $("#enemyHp").append("Health: " + chosenEnemy.hp)
            $("#enemyCtrAttack").append("Counter Attack: " + chosenEnemy.counterAttack)
            isEnemyChosen = true
            $(document).scrollTop(800)
            audioElement.play()
        }

    })


    //Game-play logic - this is what fires when you click the attack button
    $("#button").on("click", function () {
        if (chosenEnemy.hp > 0) {
            $("#heroHp").html("Health: " + (chosenHero.hp -= chosenEnemy.counterAttack))
            $("#enemyHp").html("Health: " + (chosenEnemy.hp -= chosenHero.attackPower))
        }

        // Give hero 20 attack points each time they attack opponent.
        $("#heroAttack").html("Attack Power: " + (chosenHero.attackPower += 20))

        if (chosenHero.hp < 1 && chosenEnemy.hp < 1) {
            alert("It's a draw! Both players lost this battle.")
            enemiesLeft = maxEnemies
            location.reload()
           
        }

        //If hero defeats all enemies, alert champion, reload page.
        else if (enemiesLeft === 0) {
            alert("Congratulations, you're the new champion!")
            isEnemyChosen = false
            $("#enemyImg").empty()
            $("#enemyName").empty()
            $("#enemyHp").empty()
            $("#enemyAttack").empty()
            $("#enemyCtrAttack").empty()
            $(document).scrollTop(0)
            location.reload()
        }
            

        //When hero defeats an enemy, remove enemy from battlestage and scroll to top. 
        else if (chosenEnemy.hp < 1) {
            enemiesLeft--
            // console.log("There are now " + enemiesLeft + "  enemies left.")
            $("#enemyHp").html("Health: " + (chosenEnemy.hp -= chosenHero.attackPower))
            $("#enemyImg").empty()
            $("#enemyName").empty()
            $("#enemyHp").empty()
            $("#enemyAttack").empty()
            $("#enemyCtrAttack").empty()
            alert("You've defeated " + chosenEnemy.name + "! Select your next opponent!")
            isEnemyChosen = false
            $(document).scrollTop(0)
        }

        //If player gets defeated, alert player, reload game. 
        else if (chosenHero.hp < 1) {
            alert("You've been defeated! Game Over!")
            enemiesLeft = maxEnemies
            location.reload()
            $(document).scrollTop(0)
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
            attackPower: 18,
            counterAttack: 10,
            image: "./assets/images/beast.jpeg",
        },

        {
            name: "Captain America",
            hp: 130,
            attackPower: 30,
            counterAttack: 15,
            image: "./assets/images/captainamerica.jpeg",
        },

        {
            name: "Emma Frost",
            hp: 110,
            attackPower: 15,
            counterAttack: 10,
            image: "./assets/images/emmafrost.jpeg",
        },


        {
            name: "Magneto",
            hp: 100,
            attackPower: 40,
            counterAttack: 20,
            image: "./assets/images/magneto.jpeg",
        },


        {
            name: "Night Crawler",
            hp: 130,
            attackPower: 15,
            counterAttack: 15,
            image: "./assets/images/nightcrawler.jpeg",
        },

        {
            name: "Spider Man",
            hp: 140,
            attackPower: 15,
            counterAttack: 20,
            image: "./assets/images/spiderman.jpg",
        }

    ]


    initGame();


})
