// "use strict";

import array from "./game-array.js";
// import town from './game-shop.js';


// let character = new character;
// let items = new items;
// let dice = new dice;
// let twoDice = new twoDice;
// let game_shop = new game_shop;
// let choices = new choices;


///////////////////////////////Objects
let character = {
    name: "",
    misses: 0,
    yourClass: "",
    hp: "",
    maxHP: "",
    strength: "",
    agility: "",
    sharp: "",
    presence: "",
    damageDie: "",
    spell: "",
    scenes: "",
    xp: "",
    energy: "",
    maxEnergy: "",
    moveLevel: "",
    bonusForward: "",
    negForward: ""

//        for later use
};

let baddie = {
    hp: "",
    mp: "",
    chase: "",
    damageDie: ""
};

let rolls = {
    roll1: ""
};

let choices = {
    choice1: "",
    choice2: ""
};

let items = {
    gold: "",
    molotov: "",
    blade: "",
    charm: "",
    shield: "",
    plate: "",
    powder: "",
    potion: "",
    stone: "",
    scroll: "",
    hat: "",
    bar: ""
    //TODO: Add what items do to code, refer to their descriptions in the shop.
};
let introAnswer;
let yourChoice;
let pText;
let runChoice;
//

//Notes:
//
// $("#log-form").submit(function (e) {
//     e.preventDefault();
//     character.name = $("#log-form-input").val();
//             $("#log-form").trigger("reset");
//                 $("#log-form-input").html("");
//     $("#log-form").off();
//     setTimeout(function () {
//         intro2();
//     }, 1000); //1 seconds
//
// });
//
// function part1() {
//     var pText = "<p class='output-p'><span class='output-arrow'>-></span>Hey there! Want to go on an adventure?</p>";
$("#log-output").html(pText);
//     $("#log-output").append(pText).scrollTop(9999999999999999);
//     setTimeout(function () {
//         part2();
//     }, 4000); //4 seconds
// }
$("#log-form").submit(function (e) {
    e.preventDefault();
});
/////////////////////////////////////////////

//    Intro Section //////////////////////////////////////////////

function intro1() {
    $(document).submit(function (e) {
        e.preventDefault();
    });

//Gets character Name
    pText = "<p class='output-p'><span class='output-arrow'>-></span>Hello! What is your name?</p>";
    $("#log-output").html(pText);
    $("#log-form").submit(function (e) {
        e.preventDefault();
        character.name = $("#log-form-input").val();
        $("#log-form").trigger("reset");
        $("#log-form-input").html("");
        $("#log-form").off();
        setTimeout(function () {
            intro2();
        }, 1000); //1 seconds

    });
}

function intro2() {
//Asks to start adventure.
    pText = "<p class='output-p'><span class='output-arrow'>-></span>Hey there, " + character.name + "! <br>Want to go on an adventure? [y/n]</p>";
    $("#log-output").html(pText);
    $("#log-form").submit(function (e) {
        e.preventDefault();
        introAnswer = $("#log-form-input").val();
        $("#log-form").trigger("reset");
        $("#log-form-input").html("");
        $("#log-form").off();
        setTimeout(function () {
            if (introAnswer === "n") {
                pText = "<p class='output-p'><span class='output-arrow'>-></span>Okay! Have a great day!</p>";
                $("#log-output").html(pText);
                window.stop()
                // exit();
            } else if (introAnswer === "y") {
                pText = "<p class='output-p'><span class='output-arrow'>-></span>Let's get going, then!</p>";
                $("#log-output").html(pText);
                setTimeout(function () {
                    classPicker();
                }, 2000); //2 seconds
            } else {
                pText = "<p class='output-p'><span class='output-arrow'>-></span>I didn't understand. Please submit your answer again.</p>";
                $("#log-output").html(pText);
                setTimeout(function () {
                    intro2();
                }, 1000); //1 seconds
            }
        }, 1000); //1 seconds
    });
}


//    Class Selection //////////////////////////////////////////////
function classPicker() {
// TODO: add input puller and make it yourClass
    pText = "<p class='output-p'><span class='output-arrow'>-></span>Oh shit, It's an adventurer! Quick, everyone hide! They always bring trouble.<br><br>It looks like it's a...<br><br><hr>What kind of adventurer are you? <br><br>A Washed-Up Knight? [type: Knight] <br>An Incredibly Inept Wizard? [type: Wizard] <br>Or a Noisy Thief? [type: Thief]<br></p>";
    $("#log-output").html(pText);


    $("#log-form").submit(function (e) {
        e.preventDefault();
        yourChoice = $("#log-form-input").val();
        $("#log-form").trigger("reset");
        $("#log-form-input").html("");
        $("#log-form").off();

        switch (yourChoice) {
            case "knight":
                character.yourClass = "Washed-Up Knight";
                pText = "<p class='output-p'><span class='output-arrow'>-></span>Excelsior!<br>You are a " + character.yourClass + ",<br>sworn to defend the realms of men from all manner of evil and icky things! <br>...Too bad married life caught up with you.<br><br></p>";
                $("#log-output").html(pText);


                character.hp = 24;
                character.strength = 2;
                character.agility = -1;
                character.sharp = 0;
                character.presence = 1;
                character.damageDie = 10;
                items.gold = 2;
                setTimeout(function () {
                    pText = "<p class='output-p'><span class='output-arrow'>-></span>Your stats are:<br>Strength = " + character.strength + "<br>Agility = " + character.agility + "<br>Sharp = " + character.sharp + "<br>Presence = " + character.presence + "<br></p>";
                    $("#log-output").html(pText);
                    setTimeout(function () {
                        // sceneOne();
                        pText = "<p class='output-p'><span class='output-arrow'>-></span>Worked</p>";
                        $("#log-output").html(pText);
                    }, 3000); //3 seconds

                }, 5000); //5 seconds


                break;

            case "wizard":
                character.yourClass = "Incredibly Inept Wizard";
                pText = "<p class='output-p'><span class='output-arrow'>-></span>Woah! Careful where you point that wand of yours!<br>You are an " + character.yourClass + " of the highest order.<br>Too bad you have never actually cast a spell before. <br>And don't even get me started on that pointy hat of yours...<br><br></p>";
                $("#log-output").html(pText);


                character.hp = 16;
                character.strength = -1;
                character.agility = 0;
                character.sharp = 2;
                character.presence = 1;
                character.damageDie = 4;
                items.gold = 3;
                setTimeout(function () {
                    pText = "<p class='output-p'><span class='output-arrow'>-></span>Your stats are:<br>Strength = " + character.strength + "<br>Agility = " + character.agility + "<br>Sharp = " + character.sharp + "<br>Presence = " + character.presence + "<br></p>";
                    $("#log-output").html(pText);
                    setTimeout(function () {
                        // sceneOne();
                        pText = "<p class='output-p'><span class='output-arrow'>-></span>Worked</p>";
                        $("#log-output").html(pText);
                    }, 3000); //3 seconds
                }, 5000); //5 seconds

                break;

            case "thief":
                character.yourClass = "Noisy Thief";
                pText = "<p class='output-p'><span class='output-arrow'>-></span>Oh my! You almost very nearly came somewhat close to actually startling me there!<br>Your steps as a " + character.yourClass + " might not be as quiet as a panther on the prowl,<br>but this little kitty cat has claws.<br>Rawr.<br><br></p>";
                $("#log-output").html(pText);


                character.hp = 20;
                character.strength = 1;
                character.agility = 2;
                character.sharp = 0;
                character.presence = -1;
                character.damageDie = 8;
                items.gold = 1;

                setTimeout(function () {
                    pText = "<p class='output-p'><span class='output-arrow'>-></span>Your stats are:<br>Strength = " + character.strength + "<br>Agility = " + character.agility + "<br>Sharp = " + character.sharp + "<br>Presence = " + character.presence + "<br></p>";
                    $("#log-output").html(pText);
                    setTimeout(function () {
                        // sceneOne();
                        pText = "<p class='output-p'><span class='output-arrow'>-></span>Worked</p>";
                        $("#log-output").html(pText);
                    }, 3000); //3 seconds
                }, 5000); //5 seconds
                break;

            default:
                character.yourClass = "Mischievous";
                pText = "<p class='output-p'><span class='output-arrow'>-></span>Hey, that wasn't an answer listed!<br>It seems we have a little troublemaker on our hands.<br>Why don't we make you a " + character.yourClass + " instead?<br></p>";
                $("#log-output").html(pText);


                character.hp = 18;
                character.strength = 0;
                character.agility = 1;
                character.sharp = -1;
                character.presence = 2;
                character.damageDie = 6;
                items.gold = 4;
                setTimeout(function () {
                    pText = "<p class='output-p'><span class='output-arrow'>-></span>Your stats are:<br>Strength = " + character.strength + "<br>Agility = " + character.agility + "<br>Sharp = " + character.sharp + "<br>Presence = " + character.presence + "<br></p>";
                    $("#log-output").html(pText);
                    setTimeout(function () {
                        sceneOne();
                        // pText = "<p class='output-p'><span class='output-arrow'>-></span>Worked</p>";
                        // $("#log-output").html(pText);
                    }, 3000); //3 seconds
                }, 5000); //5 seconds
                break;
        }
    });
}

//    Scenario 1: Bandit trap /////////////////////////////////////////


function sceneOne() {

//            Bandit stats declared/////////////////////////////////////////
    baddie.hp = 6;
    baddie.mp = 3;
    baddie.chase = -1;
    baddie.damageDie = 8;
//        End stats/////////////////////////////////////////
    pText = "<p class='output-p'><span class='output-arrow'>-></span><br><br><br>Scene One: Our Journey Begins...<br><br>What started as a quiet night enjoying<br>a couple pints of grog at the local pub<br>ends with the townsfolk of Friendly<br>chasing you out the city gates with torches,<br>pitchforks, and other makeshift<br>weaponry early the next morning.<br><br><br>After a bath in the local river and a hearty<br>breakfast of varmint and woodland critters,<br>you continue along your lonesome journey.<br><br>Through the forests and dales,<br>over the valleys and hills you trod,<br>eager to to overcome whatever might stand <br>between you and the great City of Whoknowsville...<br></p>";
    $("#log-output").html(pText);

    setTimeout(function () {
        pText = "<p class='output-p'><span class='output-arrow'>-></span><br>*snap!*<br><br>What was that?<br>Hello?<br><br>What will you do now?<br>Will you try to sneak past whatever is there? [type: AGI]<br>Will you try to spot the danger before it even strikes? [type: SHP]<br>Or will you bellow out a challenge and rush into combat? [type: #bravebutfoolish]<br><br></p>";
        $("#log-output").html(pText);

        // choices.choice1 = scanner.nextLine().toLowerCase();

        $("#log-form").submit(function (e) {
            e.preventDefault();
            choices.choice1 = $("#log-form-input").val().toLowerCase();
            $("#log-form").trigger("reset");
            $("#log-form-input").html("");
            $("#log-form").off();
            setTimeout(function () {
                switch (choices.choice1) {
                    case "agi":
                        pText = "<p class='output-p'><span class='output-arrow'>-></span>As you try to be sneaky,<br>we will roll to see what happens.</p>";
                        $("#log-output").html(pText);

                        setTimeout(function () {
                            rolls.roll1 = array.twoDiceRoll(6, 6) + character.agility;
                            pText = "<p class='output-p'><span class='output-arrow'>-></span>You rolled a " + rolls.roll1 + ".<br>Let's see what they means for our adventurer...<br><br></p>";
                            $("#log-output").html(pText);
                            agiSceneOne();
                        }, 2000); //2 seconds
                        break;
                    case "shp":

                        pText = "<p class='output-p'><span class='output-arrow'>-></span>As you try spot the danger before it has the jump<br>on you, we will roll to see what happens.<br></p>";
                        $("#log-output").html(pText);

                        setTimeout(function () {
                            rolls.roll1 = (array.twoDiceRoll(6, 6) + character.sharp);
                            pText = "<p class='output-p'><span class='output-arrow'>-></span>You rolled a " + rolls.roll1 + ".<br>Lets see what they means for our adventurer...<br><br></p>";
                            $("#log-output").html(pText);
                            shpSceneOne();
                        }, 2000); //2 seconds
                        break;
                    default:
                        setTimeout(function () {
                            pText = "<p class='output-p'><span class='output-arrow'>-></span>Shit you made a lot of noise!<br>Here they come....<br><br></p>";
                            $("#log-output").html(pText);
                            shitHitsFanSceneOne();
                        }, 2000); //2 seconds
                        break;
                }
            }, 2000); //2 seconds
        });

    }, 5000); //5 seconds

}

///////////////////////////////////////////////////////Left off here
//Scene 1 agi approach
function agiSceneOne() {
    if (rolls.roll1 <= 6) {
        pText = "<p class='output-p'><span class='output-arrow'>-></span>You rolled a miss! Oh no!</p>"
        $("#log-output").html(pText);
        character.misses += 1;
        setTimeout(function () {
            shitHitsFanSceneOne();
        }, 2000); //2 seconds
    } else if (rolls.roll1 > 6 && rolls.roll1 < 10) {
        pText = "<p class='output-p'><span class='output-arrow'>-></span>You rolled a mixed success!</p>";
        $("#log-output").html(pText);

        setTimeout(function () {
            sceneOneBut();
        }, 2000); //2 seconds
    } else if (rolls.roll1 >= 10) {
        pText = "<p class='output-p'><span class='output-arrow'>-></span>You rolled a success with little consequence! <br>You managed to sneak around their ambush!<br>You can sneak away? [type: Run]<br>Or, you can try and get the jump on them? [type: Fight]<br><br></p>"
        $("#log-output").html(pText);

        $("#log-form").submit(function (e) {
            e.preventDefault();
            choices.choice2 = $("#log-form-input").val().toLowerCase();
            $("#log-form").trigger("reset");
            $("#log-form-input").html("");
            $("#log-form").off();

            // choices.choice2 = scanner.nextLine();
            if (choices.choice2 === "fight") {
                Ambush();
            } else {
                sceneOneOutro();
            }
        });

    }
}

//Scene 1 shp approach
function shpSceneOne() {
    if (rolls.roll1 <= 6) {
        pText = "<p class='output-p'><span class='output-arrow'>-></span>You rolled a miss! Oh no!</p>"
        character.misses += 1;
        setTimeout(function () {
            shitHitsFanSceneOne();
        }, 2000); //2 seconds
    } else if (rolls.roll1 > 6 && rolls.roll1 < 10) {
        pText = "<p class='output-p'><span class='output-arrow'>-></span>You rolled a mixed success!</p>"
        setTimeout(function () {
            sceneOneBut();
        }, 2000); //2 seconds
    } else if (rolls.roll1 >= 10) {
        pText = "<p class='output-p'><span class='output-arrow'>-></span>You rolled a success with little consequence!<br><br>You managed to spot them before they spotted you.<br>Will you try and sneak away? [type: Run]<br>Or get the jump on them? [type: Fight]<br><br></p>";
        $("#log-output").html(pText);

        $("#log-form").submit(function (e) {
            e.preventDefault();
            choices.choice2 = $("#log-form-input").val().toLowerCase();
            $("#log-form").trigger("reset");
            $("#log-form-input").html("");
            $("#log-form").off();
            if (choices.choice2 === "fight") {
                Ambush();
            } else {
                sceneOneOutro();
            }
        });
    }
}

//Scene 1 results
function sceneOneBut() {
    let dam = array.diceRoll(baddie.damageDie);
    pText = "<p class='output-p'><span class='output-arrow'>-></span>Fuuuuuuck....<br>That hurt. <br>Like, super bad.<br><br>Their trap was tripped, hitting you for " + dam + " damage<br>and they are coming right for you!<br><br></p>"
    $("#log-output").html(pText);

    character.hp -= dam;
    setTimeout(function () {
        pText = "<p class='output-p'><span class='output-arrow'>-></span>Will you stand tall and fight? <br>Or run like a coward? [type: Fight or Run]<br><br></p>"
        $("#log-output").html(pText);
    }, 2000); //2 seconds


    $("#log-form").submit(function (e) {
        e.preventDefault();
        choices.choice2 = $("#log-form-input").val().toLowerCase();
        $("#log-form").trigger("reset");
        $("#log-form-input").html("");
        $("#log-form").off();
        if (choices.choice2 === "fight") {
            fight();
        } else {
            setTimeout(function () {
                pText = "<p class='output-p'><span class='output-arrow'>-></span>You barely manage to escape, but escape you did!<br><br></p>"
                $("#log-output").html(pText);
                setTimeout(function () {
                    sceneOneOutro();
                }, 2000); //2 seconds
            }, 2000); //2 seconds

        }
    });
}

function shitHitsFanSceneOne() {
    let dam = array.diceRoll(baddie.damageDie);
    pText = "<p class='output-p'><span class='output-arrow'>-></span>Fuuuuuuck....<br>That hurt. <br>Like, super bad.<br><br>Their trap was tripped, hitting you for " + dam + " damage<br>and they are coming right for you!<br><br></p>"
    $("#log-output").html(pText);

    character.hp -= dam;
    setTimeout(function () {
        pText = "<p class='output-p'><span class='output-arrow'>-></span>Oh no, here they come! <br>You have no choice but to fight!<br><br></p>";
        $("#log-output").html(pText);
        setTimeout(function () {
            fight();
        }, 2000); //2 seconds
    }, 2000); //2 seconds

}


function sceneOneOutro() {
    // town();
    pText = "<p class='output-p'><span class='output-arrow'>-></span><br>As you walk into the sunset, <br>the screen fades to black... <br><br>Thanks for trying our demo!</p>"
    $("#log-output").html(pText);
    window.stop()
    // exit();
}


//////Add:
////// level up from misses total, make it XP
////// add +1 scene per scene traversed


////////////////////////////////////////////////////////////////////////////////////////////////
//Combat
////////////////////////////////////////////////////////////////////////////////////////////////

function youDied() {
    pText = "<p class='output-p'><span class='output-arrow'>-></span>Though your journey has come to an end,<br>let's see how far you got! <br>You rolled " + character.misses + " misses and <br>got through " + character.scenes + " scenes. <br>Better luck next time!</p>"
    $("#log-output").html(pText);
    window.stop();
    // exit();

}

//////////////////////////////////////////////////////////
// TODO: 2019-07-30 - Below is how we will traverse scenes maybe:

//    public static void nextScene() {
//        if (userClass.scenes ==== 0){
//            userClass.scenes += 1;
//            pText = "<p class='output-p'><span class='output-arrow'>-></span>You continue on through the woods and to the next encounter!</p>"
//            sceneTwo();
//        } else if (userClass.scenes ==== 1){
//            pText = "<p class='output-p'><span class='output-arrow'>-></span>You continue on through the woods and to the next encounter!</p>"
//            sceneThree();
//        } else if (userClass.scenes ==== 2){
//            pText = "<p class='output-p'><span class='output-arrow'>-></span>You continue on through the woods and to the next encounter!</p>"
//            sceneFour();
//        }
//    }
////////////////////////////////////////////////////////


function combatTurnAttack(a) {
    if (a <= 6) {
        pText = "<p class='output-p'><span class='output-arrow'>-></span>You rolled a miss! Oh no!</p>"
        $("#log-output").html(pText);

        character.misses = character.misses + 1;
        let badDam = array.diceRoll(baddie.damageDie);
        character.hp -= badDam;
        setTimeout(function () {
            pText = "<p class='output-p'><span class='output-arrow'>-></span>You take " + badDam + " damage from their blow!</p>"
            $("#log-output").html(pText);
            setTimeout(function () {
                fight();
            }, 2000); //2 seconds

        }, 2000); //2 seconds

    } else if (a > 6 && a < 10) {
        pText = "<p class='output-p'><span class='output-arrow'>-></span>You rolled a mixed success!</p>"
        $("#log-output").html(pText);

        let badDam = array.diceRoll(baddie.damageDie);
        let dam = array.diceRoll(character.damageDie);
        character.hp -= badDam;
        baddie.hp -= dam;
        setTimeout(function () {
            pText = "<p class='output-p'><span class='output-arrow'>-></span>You dealt " + dam + " damage, <br>but you opened yourself up to an attack! <br>You take " + badDam + " damage from their blow!</p>"
            $("#log-output").html(pText);
            setTimeout(function () {


                fight();
            }, 2000); //2 seconds
        }, 2000); //2 seconds

    } else if (a >= 10) {
        pText = "<p class='output-p'><span class='output-arrow'>-></span>You rolled a success with little consequence!</p>"
        $("#log-output").html(pText);

        let dam = array.diceRoll(character.damageDie);
        baddie.hp -= dam;
        setTimeout(function () {
            pText = "<p class='output-p'><span class='output-arrow'>-></span>You dealt " + dam + " damage!</p>"
            $("#log-output").html(pText);
            setTimeout(function () {

                fight();
            }, 2000); //2 seconds
        }, 2000); //2 seconds


    }
}


function spellDamage() {
    if (character.spell.toLowerCase() === "bolt") {
        let dam = array.twoDiceRoll(4) + character.sharp;
        baddie.hp -= dam;
        pText = "<p class='output-p'><span class='output-arrow'>-></span>Your magical attack hit the foe for " + dam + " damage!</p>"
        $("#log-output").html(pText);

    } else {
        let dam = array.twoDiceRoll(6, 6) + character.sharp;
        pText = "<p class='output-p'><span class='output-arrow'>-></span>Your magical attack hit the foe for " + dam + " damage!</p>"
        $("#log-output").html(pText);

        setTimeout(function () {
            let damself = array.diceRoll(4);
            pText = "<p class='output-p'><span class='output-arrow'>-></span>You hit your target, <br>but that blast was brutal. <br>You take " + damself + " damage from the blast.</p>"
            $("#log-output").html(pText);
        }, 2000); //2 seconds


        character.hp -= damself;
    }
}

function combatTurnSpell(a) {
    if (a <= 6) {
        pText = "<p class='output-p'><span class='output-arrow'>-></span>You rolled a miss! Oh no!</p>"
        $("#log-output").html(pText);

        character.misses += 1;
        let badDam = array.diceRoll(baddie.damageDie);
        character.hp -= badDam;
        setTimeout(function () {

            pText = "<p class='output-p'><span class='output-arrow'>-></span>You take " + badDam + " damage from their blow!</p>"
            $("#log-output").html(pText);
            setTimeout(function () {

                fight();
            }, 2000); //2 seconds
        }, 2000); //2 seconds

    } else if (a > 6 && a < 10) {
        pText = "<p class='output-p'><span class='output-arrow'>-></span>You rolled a mixed success!</p>"
        $("#log-output").html(pText);

        let badDam = array.diceRoll(baddie.damageDie);
        character.hp -= (badDam);
        setTimeout(function () {

            pText = "<p class='output-p'><span class='output-arrow'>-></span>You take " + badDam + " damage from their blow!</p>"
            $("#log-output").html(pText);
            setTimeout(function () {

                spellDamage();
                fight();
            }, 2000); //2 seconds
        }, 2000); //2 seconds

    } else if (a >= 10) {
        pText = "<p class='output-p'><span class='output-arrow'>-></span>You rolled a success with little consequence!</p>"
        $("#log-output").html(pText);
        setTimeout(function () {
            spellDamage();
            setTimeout(function () {
                fight();
            }, 2000); //2 seconds
        }, 2000); //2 seconds

    }
}


//Running
function combatTurnRun(a) {
    // Scanner scanner = new Scanner(System.in);
    if ((a - baddie.chase) <= 6) {
        pText = "<p class='output-p'><span class='output-arrow'>-></span>You rolled a miss! Oh no!</p>"
        $("#log-output").html(pText);

        character.misses += 1;
        let badDam = array.diceRoll(baddie.damageDie);
        character.hp -= (badDam);
        setTimeout(function () {
            pText = "<p class='output-p'><span class='output-arrow'>-></span>You take " + badDam + " damage from their blow! and couldn't escape!</p>"
            $("#log-output").html(pText);
            setTimeout(function () {

                fight();
            }, 2000); //2 seconds
        }, 2000); //2 seconds

    } else if ((a - baddie.chase) > 6 && (a - baddie.chase) < 10) {
        pText = "<p class='output-p'><span class='output-arrow'>-></span>You rolled a mixed success!</p>"
        $("#log-output").html(pText);
        let badDam = array.diceRoll(baddie.damageDie);
        character.hp -= (badDam);
        setTimeout(function () {
            pText = "<p class='output-p'><span class='output-arrow'>-></span>You only can do one: <br>Make it away, but take a hit in the escape, [type: Run]  <br>or stay in the fight, and avoid the damage? [type: Stay</p>"
            $("#log-output").html(pText);
        }, 2000); //2 seconds


        $("#log-form").submit(function (e) {
            e.preventDefault();
            runChoice = $("#log-form-input").val().toLowerCase();
            $("#log-form").trigger("reset");
            $("#log-form-input").html("");
            $("#log-form").off();
            if (runChoice === ("run")) {
                badDam = array.diceRoll(baddie.damageDie);
                character.hp -= (badDam * 2);
                pText = "<p class='output-p'><span class='output-arrow'>-></span>You got away, but took " + badDam + " damage in the escape!</p>"
                $("#log-output").html(pText);
                setTimeout(function () {
                    sceneOneOutro();
                }, 2000); //2 seconds

            } else {
                badDam = array.diceRoll(baddie.damageDie);
                character.hp -= (badDam - character.agility);
                pText = "<p class='output-p'><span class='output-arrow'>-></span>You got away, but took " + badDam + " damage in the escape!</p>"
                $("#log-output").html(pText);
                setTimeout(function () {

                    fight();
                }, 2000); //2 seconds

            }
        });

    } else if ((a - baddie.chase) >= 10) {
        pText = "<p class='output-p'><span class='output-arrow'>-></span>You rolled a success with little consequence!</p>"
        $("#log-output").html(pText);
        setTimeout(function () {

            pText = "<p class='output-p'><span class='output-arrow'>-></span>You managed to escape the fight!</p>"
            $("#log-output").html(pText);
            setTimeout(function () {

                sceneOneOutro();
            }, 2000); //2 seconds
        }, 2000); //2 seconds

//            change to nextScene in future
    }


}

function combatTurnTalkShp(a) {
    if (a <= 6) {
        pText = "<p class='output-p'><span class='output-arrow'>-></span>You rolled a miss! Oh no!</p>"
        $("#log-output").html(pText);
        character.misses = character.misses + 1;
        let badDam = array.diceRoll(baddie.damageDie);
        character.hp -= badDam;
        setTimeout(function () {

            pText = "<p class='output-p'><span class='output-arrow'>-></span>You take " + badDam + " damage from their blow!</p>"
            $("#log-output").html(pText);
            setTimeout(function () {

                fight();
            }, 2000); //2 seconds
        }, 2000); //2 seconds

    } else if (a > 6 && a < 10) {
        pText = "<p class='output-p'><span class='output-arrow'>-></span>You rolled a mixed success!</p>"
        $("#log-output").html(pText);
        let badDam = array.diceRoll(baddie.damageDie);
        let dam = array.diceRoll(character.damageDie) + character.sharp;
        character.hp -= badDam;
        baddie.mp -= dam;
        setTimeout(function () {

            pText = "<p class='output-p'><span class='output-arrow'>-></span>Your words are getting to them!<br>You dealt " + dam + " damage to their moral but <br>you opened yourself up to an attack! <br>You take " + badDam + " damage from their blow!</p>"
            $("#log-output").html(pText);
            setTimeout(function () {


                fight();
            }, 2000); //2 seconds
        }, 2000); //2 seconds

    } else if (a >= 10) {
        pText = "<p class='output-p'><span class='output-arrow'>-></span>You rolled a success with little consequence!</p>"
        $("#log-output").html(pText);
        let dam = array.diceRoll(character.damageDie) + character.sharp;
        baddie.mp -= dam;
        setTimeout(function () {

            pText = "<p class='output-p'><span class='output-arrow'>-></span>Your words are getting to them! <br>You dealt " + dam + " damage to their moral!</p>"
            $("#log-output").html(pText);
            setTimeout(function () {

                fight();
            }, 2000); //2 seconds
        }, 2000); //2 seconds

    }
}
function combatTurnTalkPre(a) {
    if (a <= 6) {
        pText = "<p class='output-p'><span class='output-arrow'>-></span>You rolled a miss! Oh no!</p>"
        $("#log-output").html(pText);
        character.misses = character.misses + 1;
        let badDam = array.diceRoll(baddie.damageDie);
        character.hp -= badDam;
        setTimeout(function () {

            pText = "<p class='output-p'><span class='output-arrow'>-></span>You take " + badDam + " damage from their blow!</p>"
            $("#log-output").html(pText);
            setTimeout(function () {

                fight();
            }, 2000); //2 seconds
        }, 2000); //2 seconds

    } else if (a > 6 && a < 10) {
        pText = "<p class='output-p'><span class='output-arrow'>-></span>You rolled a mixed success!</p>"
        $("#log-output").html(pText);
        let badDam = array.diceRoll(baddie.damageDie);
        let dam = array.diceRoll(character.damageDie) + character.presence;
        character.hp -= badDam;
        baddie.mp -= dam;
        setTimeout(function () {

            pText = "<p class='output-p'><span class='output-arrow'>-></span>Your words are getting to them!<br>You dealt " + dam + " damage to their moral but <br>you opened yourself up to an attack! <br>You take " + badDam + " damage from their blow!</p>"
            $("#log-output").html(pText);
            setTimeout(function () {


                fight();
            }, 2000); //2 seconds
        }, 2000); //2 seconds

    } else if (a >= 10) {
        pText = "<p class='output-p'><span class='output-arrow'>-></span>You rolled a success with little consequence!</p>"
        $("#log-output").html(pText);
        let dam = array.diceRoll(character.damageDie) + character.presence;
        baddie.mp -= dam;
        setTimeout(function () {

            pText = "<p class='output-p'><span class='output-arrow'>-></span>Your words are getting to them! <br>You dealt " + dam + " damage to their moral!</p>"
            $("#log-output").html(pText);
            setTimeout(function () {

                fight();
            }, 2000); //2 seconds
        }, 2000); //2 seconds

    }
}


//fighting
function fight() {
    //Dead
    if (character.hp <= 0) {
        pText = "<p class='output-p'><span class='output-arrow'>-></span><br><br>Shit, you died!</p>"
        $("#log-output").html(pText);

        setTimeout(function () {
            youDied();
        }, 2000); //2 seconds

    } else if (baddie.hp <= 0 || baddie.mp <= 0) {
        pText = "<p class='output-p'><span class='output-arrow'>-></span><br>You defeated the baddie! Congrats!<br>You got " + array.diceRoll(baddie.damageDie) + " gold from them<br></p>"
        $("#log-output").html(pText);

        setTimeout(function () {
            sceneOneOutro();
        }, 2000); //2 seconds

    }
//battle
    setTimeout(function () {

        pText = "<p class='output-p'><span class='output-arrow'>-></span>You're in a fight for your life! What do you do? <br>[type: Run | Attack | Talk]</p>";
    $("#log-output").html(pText);
}, 3000); //2 seconds


    $("#log-form").submit(function (e) {
        e.preventDefault();
        let everyBodyWas = $("#log-form-input").val().toLowerCase();
        $("#log-form").trigger("reset");
        $("#log-form-input").html("");
        $("#log-form").off();

//melee
        if (everyBodyWas === ("attack")) {
            if (character.sharp === 2) {
                pText = "<p class='output-p'><span class='output-arrow'>-></span>Would you like to attack or cast a spell? [type: Y/N]</p>"
                $("#log-output").html(pText);

                $("#log-form").submit(function (e) {
                    e.preventDefault();
                    let spellChoice = $("#log-form-input").val().toLowerCase();
                    $("#log-form").trigger("reset");
                    $("#log-form-input").html("");
                    $("#log-form").off();

                    if (spellChoice === "y") {
                        pText = "<p class='output-p'><span class='output-arrow'>-></span>What spell would you like to cast? Bolt or Blast?</p>"
                        $("#log-output").html(pText);

                        $("#log-form").submit(function (e) {
                            e.preventDefault();
                            character.spell = $("#log-form-input").val().toLowerCase();
                            $("#log-form").trigger("reset");
                            $("#log-form-input").html("");
                            $("#log-form").off();
                            pText = "<p class='output-p'><span class='output-arrow'>-></span>Let's see if your spell casted successfully</p>"
                            $("#log-output").html(pText);

                            setTimeout(function () {
                                combatTurnSpell(array.twoDiceRoll(6, 6) + character.sharp);
                            }, 2000); //2 seconds

                        });
                    }
                });
            } else {
                pText = "<p class='output-p'><span class='output-arrow'>-></span>How do you fight? <br>With dexterity and fast moves? [type: AGI} <br>Or do you fight with power and prowess? [type: STR]</p>"
                $("#log-output").html(pText);

                $("#log-form").submit(function (e) {
                    e.preventDefault();
                    let howAttack = $("#log-form-input").val().toLowerCase();
                    $("#log-form").trigger("reset");
                    $("#log-form-input").html("");
                    $("#log-form").off();
                    if (howAttack === ("agi")) {
                        combatTurnAttack(array.twoDiceRoll(6, 6) + character.strength);
                    } else if (howAttack === ("str")) {
                        combatTurnAttack(array.twoDiceRoll(6, 6) + character.agility);
                    }
                });
            }

        }
//run
        else if (everyBodyWas === ("run")) {
            combatTurnRun(array.twoDiceRoll(6, 6) + character.agility);
        }
//talk
        else if (everyBodyWas === ("talk")) {
            pText = "<p class='output-p'><span class='output-arrow'>-></span>How do you talk them down? <br>With quick thinking? [type: SHP] <br>Or with your charm and persuasion? [type: PRE]</p>"
            $("#log-output").html(pText);

            $("#log-form").submit(function (e) {
                e.preventDefault();
                let howAttack = $("#log-form-input").val().toLowerCase();
                $("#log-form").trigger("reset");
                $("#log-form-input").html("");
                $("#log-form").off();
                if (howAttack ===("shp")) {
                    combatTurnTalk(array.twoDiceRoll(6, 6) + character.sharp);
                } else if (howAttack ===("pre")) {
                    combatTurnTalk(array.twoDiceRoll(6, 6) + character.presence);
                } else {
                    pText = "<p class='output-p'><span class='output-arrow'>-></span>I didn't understand what you meant, please try again.</p>"
                    $("#log-output").html(pText);

                    setTimeout(function () {
                        fight();
                    }, 2000); //2 seconds
                }
            });
        } else if (everyBodyWas === "fuckthis") {
            sceneOneOutro();
        } else {
            pText = "<p class='output-p'><span class='output-arrow'>-></span>I didn't understand what you meant, please try again.</p>"
            $("#log-output").html(pText);

            setTimeout(function () {
                fight();
            }, 2000); //2 seconds
        }
    });

// mobs have Health points, Mental points, and Chase value
}


//////////////Ambushing gives you a +2 to your first roll
function Ambush() {
    if (character.hp <= 0) {
        pText = "<p class='output-p'><span class='output-arrow'>-></span><br><br>Shit, you died!</p>"
        $("#log-output").html(pText);

        setTimeout(function () {
            youDied();
        }, 2000); //2 seconds

    } else if (baddie.hp <= 0 || baddie.mp <= 0) {
        pText = "<p class='output-p'><span class='output-arrow'>-></span><br>You defeated the baddie! Congrats!<br>You got " + array.diceRoll(baddie.damageDie) + " gold from them<br></p>"
        $("#log-output").html(pText);

        setTimeout(function () {
            sceneOneOutro();
        }, 2000); //2 seconds

    }
//battle
    pText = "<p class='output-p'><span class='output-arrow'>-></span>You're in a fight for your life! What do you do? <br>[type: Run | Attack | Talk]</p>"
    $("#log-output").html(pText);


    $("#log-form").submit(function (e) {
        e.preventDefault();
        let everyBodyWas = $("#log-form-input").val().toLowerCase();
        $("#log-form").trigger("reset");
        $("#log-form-input").html("");
        $("#log-form").off();
        if (everyBodyWas === ("attack")) {
            if (character.sharp === 2) {
                pText = "<p class='output-p'><span class='output-arrow'>-></span>Would you like to attack or cast a spell? [type: Y/N]</p>"
                $("#log-output").html(pText);

                $("#log-form").submit(function (e) {
                    e.preventDefault();
                    let spellChoice = $("#log-form-input").val().toLowerCase();
                    $("#log-form").trigger("reset");
                    $("#log-form-input").html("");
                    $("#log-form").off();

                    if (spellChoice === "y") {
                        pText = "<p class='output-p'><span class='output-arrow'>-></span>What spell would you like to cast? Bolt or Blast?</p>"
                        $("#log-output").html(pText);

                        $("#log-form").submit(function (e) {
                            e.preventDefault();
                            character.spell = $("#log-form-input").val().toLowerCase();
                            $("#log-form").trigger("reset");
                            $("#log-form-input").html("");
                            $("#log-form").off();
                            pText = "<p class='output-p'><span class='output-arrow'>-></span>Let's see if your spell casted successfully</p>"
                            $("#log-output").html(pText);

                            setTimeout(function () {
                                combatTurnSpell(array.twoDiceRoll(6, 6) + character.sharp + 2);
                            }, 2000); //2 seconds

                        });
                    }
                });
            } else {
                pText = "<p class='output-p'><span class='output-arrow'>-></span>How do you fight? <br>With dexterity and fast moves? [type: AGI} <br>Or do you fight with power and prowess? [type: STR]</p>"
                $("#log-output").html(pText);

                $("#log-form").submit(function (e) {
                    e.preventDefault();
                    let howAttack = $("#log-form-input").val().toLowerCase();
                    $("#log-form").trigger("reset");
                    $("#log-form-input").html("");
                    $("#log-form").off();
                    if (howAttack === ("agi")) {
                        combatTurnAttack(array.twoDiceRoll(6, 6) + character.strength + 2);
                    } else if (howAttack === ("str")) {
                        combatTurnAttack(array.twoDiceRoll(6, 6) + character.agility + 2);
                    }
                });
            }

        }
//run
        else if (everyBodyWas === ("run")) {
            combatTurnRun(array.twoDiceRoll(6, 6) + character.agility + 2);
        }
//talk
        else if (everyBodyWas === ("talk")) {
            pText = "<p class='output-p'><span class='output-arrow'>-></span>How do you talk them down? <br>With quick thinking? [type: SHP] <br>Or with your charm and persuasion? [type: PRE]</p>"
            $("#log-output").html(pText);

            $("#log-form").submit(function (e) {
                e.preventDefault();
                let howAttack = $("#log-form-input").val().toLowerCase();
                $("#log-form").trigger("reset");
                $("#log-form-input").html("");
                $("#log-form").off();
                if (howAttack === ("shp")) {
                    combatTurnTalkShp(array.twoDiceRoll(6, 6) + character.sharp + 2);
                } else if (howAttack === ("pre")) {
                    combatTurnTalkPre(array.twoDiceRoll(6, 6) + character.presence + 2);
                } else {
                    pText = "<p class='output-p'><span class='output-arrow'>-></span>I didn't understand what you meant, please try again.</p>"
                    $("#log-output").html(pText);

                    setTimeout(function () {

                        Ambush();
                    }, 2000); //2 seconds

                }
            });
        }  else if (everyBodyWas === "fuckthis") {
            sceneOneOutro();
        } else {
            pText = "<p class='output-p'><span class='output-arrow'>-></span>I didn't understand what you meant, please try again.</p>"
            $("#log-output").html(pText);

            setTimeout(function () {
                Ambush();
            }, 2000); //2 seconds
        }
    });

// mobs have Health points, Mental points, and Chase value
}

intro1();

////////////////////////////////////////////////////////////////////////////////////////////////
//Combat end
////////////////////////////////////////////////////////////////////////////////////////////////


