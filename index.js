
//A class to create the scenes.
class sceneBuilder {
    constructor(title, description, options) {
        this.title = title;
        this.description = description;
        this.options = options;
    }
}

//Selection of common html elements.
const sceneTitle = document.querySelector("#scene-title");
const sceneDesc = document.querySelector("#scene-description");
const sceneOpt = document.querySelectorAll(".option");


//Creation of each scene, follow the format "new sceneBuilder("Title of scene", "Description of the scene", ["Button 1", "Button2", "Button 3", "Button 4"]).
//If a scene should only have ex. 2 options: fill in the first two and set empty strings for the others like this ["Button 1", "Button 2", "", ""].
//All scenes are put in an array which is selectet in the actions() function below to choose scene by calling the changeScene() function.
const scenes =
    [   new sceneBuilder("Start of the school year", "You are seated in your new classroom for the first time with your new classmates, the teacher is going through some important information about your education. What do you do?", ["Listen to the information", "Try to make some friends", "Play with your cellphone", ""]),
        new sceneBuilder("play with your cellphone", "You pick up your cellphone and start playing angry birds", ["You turn off the volume", "You put the volume to the max!", "You start texting your girlfriend", "Brows reddit instead"]),
        new sceneBuilder("Making Friends","You decide to make some friends. Which one do you want do be friend? Filip seems to be very smart. Jesper seems to be very strong. Viktor seems charismatic. Kevin probably has a rich dad.", ["Filip", "Jesper", "Viktor", "Kevin"]),
        
        new sceneBuilder("Filip accepts you", "Filip has deemed that you're smart enough to be his friend.", ["Continue", "", "", ""]),
        new sceneBuilder("Filip does not accept you.", "You are not smart enough for Filip. He leaves.", ["Continue", "", "", ""]),
        
        new sceneBuilder("Jesper accepts you", "Jesper has deemed that you're strong enough to be his friend.", ["Continue", "", "", ""]),
        new sceneBuilder("Jesper does not accept you.", "You are not buff enough for Jesper. He leaves.", ["Continue", "", "", ""]),

        new sceneBuilder("Viktor accepts you", "Viktor has deemed that you're charismatic enough to be his friend.", ["Continue", "", "", ""]),
        new sceneBuilder("Viktor does not accept you.", "You are not charismatic enough for Viktor. He leaves.", ["Continue", "", "", ""]),

        new sceneBuilder("Kevin accepts you", "Kevin has deemed that you're loaded enough to be his friend.", ["Continue", "", "", ""]),
        new sceneBuilder("Kevin does not accept you.", "You are not rich enough for Kevin. He leaves.", ["Continue", "", "", ""]),

        new sceneBuilder("Disturbing the class", "You have decided for some apparent reason that playing a mobile game on full volume would be a smart idea. The teacher looks furious and tells you to stop what you´re doing. What will you do?", ["Turn of your cellphone and appoligize for your behaviour", "Try to lie and say it was an accident", "Ignore the teacher", "Tell the teacher to f*ck off"]),
        
        new sceneBuilder("Your journey ends!", "Your actions have caused the end of your adventure, please reload the browser to restart the game. Yes really, you lost dude. That's life, get over it.", ["","","",""]),
    ];


//Stats that will be shown in the game.
//This is an object that contains the key values of each stat.
const stats = {
    money: 10,
    intelligence: 10,
    strength: 10,
    charm: 10
};

//Selects the spans with the class="stat" on the html.
const statText = document.querySelectorAll('.stat');

//Creation of a function that will uppdate the stats shown in the game.
function UppdateStats() {

    let statIndex = 0
    //This is a 'for in' loop which can be used for looping through an object, in this case 'stats'.
    for (let stat in stats) {
        //Each stat in the html will use each stat value of the stats object.
        statText[statIndex].innerText = stats[stat]
        statIndex++
    }
}
//Calling the function to get an update when the game starts.
UppdateStats();

//All the choices, what they do and which scene they lead to.
function actions(choice) {
    //Switch statement that checks which choice was made.
    switch (choice) {
        case "moneyBackground":
            //When the "money" choice is made the following is run.
            stats.money += 10
            console.log(`You now have ${stats.money} monies!`);
            //The argument selects which scene to continue to. Ex. changeScene(0) selects the first scene in the "scenes" array.
            changeScene(0)
            break

        case "intelligenceBackground":
            stats.intelligence += 10
            console.log(`You are now ${stats.intelligence} smort!`);

            changeScene(0)
            break

        case "strengthBackground":
            stats.strength += 10
            console.log(`You are now ${stats.strength} stronk!`);

            changeScene(0)
            break

        case "charmingBackground":
            stats.charm += 10
            console.log(`You are now ${stats.charm} charming!`);

            changeScene(0)
            break

        case "increaseIntelligence":
            stats.intelligence += 1;
            console.log("you are now smarter");
            changeScene(1);
            break

        case "makeFriends":
            stats.charm += 1;
            console.log("You decide to make some friends");
            changeScene(2)
            break

        case "newFriendFilip":
            if(stats.intelligence >= 20) {
                stats.intelligence += 5
                changeScene(3)
            } else {
                changeScene(4)
            }
            break

        case "newFriendJesper":
            if(stats.strength >= 20) {
                stats.strength += 5
                changeScene(5)
            } else {
                changeScene(6)
            }
            break

        case "newFriendViktor":
            if(stats.charm >= 20) {
                stats.charm += 5
                changeScene(7)
            } else {
                changeScene(8)
            }
            break

        case "newFriendKevin":
            if(stats.money >= 20) {
                stats.money += 5
                changeScene(9)
            } else {
                changeScene(10)
            }
            break

        case "angryBirdsVolumeMax":
            stats.charm -= 5
            changeScene(11)
            break

        case "loseGame":
            stats.money = -100
            stats.intelligence = -100
            stats.strength = -100
            stats.charm = -100
            changeScene(12)

        default:
            console.log(`${choice} is not an action!`);
    }

}

//Targets the button with the id="button1" and gives it an event listener.
button1 = document.getElementById("button1")
button1.addEventListener("click", () => {
    //Checks the value of button with the id="button1".
    switch (sceneOpt[0].value) {
        //Each case represents the value of the button and calls actions() above with the corresponding argument.
        case "Rich boi":
            actions("moneyBackground")
            break

        case "kill":
            actions("kill")
            break

        case "Filip":
            actions("newFriendFilip")
            break

        default:
            console.log("I don't have a case for this. Have you checked the name of the button?")
    }
})

button2 = document.getElementById("button2")
button2.addEventListener("click", () => {
    switch (sceneOpt[1].value) {

        case "Smart boi":
            actions("intelligenceBackground")
            break

        case "Try to make some friends":
            actions("makeFriends")
            break

        case "You put the volume to the max!":
            actions("angryBirdsVolumeMax")
            break

        case "Jesper":
            actions("newFriendJesper")
            break

        default:
            console.log("I don't have a case for this. Have you checked the name of the button?")
    }

})

button3 = document.getElementById("button3")
button3.addEventListener("click", () => {
    switch (sceneOpt[2].value) {

        case "Strong boi":
            actions("strengthBackground");
            break;

        case "Play with your cellphone":
            actions("increaseIntelligence");
            break;

        case "Viktor":
            actions("newFriendViktor")
            break

        default:
            console.log("I don't have a case for this. Have you checked the name of the button?")
    }
})

button4 = document.getElementById("button4")
button4.addEventListener("click", () => {
    switch (sceneOpt[3].value) {

        case "Charming boi":
            actions("charmingBackground")
            break

        case "Kevin":
            actions("newFriendKevin")
            break

        case "Tell the teacher to f*ck off":
            actions("loseGame")

        default:
            console.log("I don't have a case for this. Have you checked the name of the button?")
    }
})


//Function for changing to new scene.
const changeScene = (sceneName) => {
    
    //Checks which scene array is chosen.
    const scene = scenes[sceneName];
    //Selects which title and description should be displayed.
    sceneTitle.innerText = scene.title
    sceneDesc.innerText = scene.description
    //Loops through the button arrays and passes the strings of the corresponding scene as the innerText to each button.
    for (let i = 0; i < sceneOpt.length; i++) {
        sceneOpt[i].innerText = scene.options[i];
    }
    //Gives every button the same value as its innerText.
    sceneOpt.forEach((button) => {
        button.style.display = "initial";
        button.value = button.innerText;
        //Every button that does not have an innerText is hidden.
        if (button.innerText == "") {
            button.style.display = "none";
        }
    })
    //Updating the stats after each scene change.
    UppdateStats();
};
