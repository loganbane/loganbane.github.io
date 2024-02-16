function scriptTest() {
    alert("Hey, my script is running");
}
function displayFavoriteNumber() {
    var favoriteNumberInput = document.getElementById("favoriteNumber");
    var favoriteNumber = parseFloat(favoriteNumberInput.value);
    if (!isNaN(favoriteNumber)) {
        favoriteNumber = Math.abs(favoriteNumber);
        favoriteNumber = Math.round(favoriteNumber);
        var polygonNames = [
            "Monogon", "Digon", "Trigon", "Tetragon", "Pentagon",
            "Hexagon", "Heptagon", "Octagon", "Nonagon", "Decagon"
        ];
        if (favoriteNumber >= 0 && favoriteNumber < polygonNames.length) {
            var polygonName = polygonNames[favoriteNumber];
            alert("The polygon with " + favoriteNumber + " sides is called a " + polygonName);
        } else {
            alert("Please enter a number between 0 and " + (polygonNames.length - 1));
        }
    } else {
        alert("Please enter a valid number.");
    }
}
function displayDateTime() {
    var currentDate = new Date();
    var dayOfWeek = currentDate.toLocaleDateString('en-US', { weekday: 'long' });
    var time = currentDate.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    var date = currentDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    var dateTimeElement = document.getElementById("dateTime");
    dateTimeElement.textContent = "Today is " + time + 
    " on " + dayOfWeek + ", " + date;
}
function processUserInput() {
    var userNameInput = document.getElementById("userName");
    var userMoodInput = document.getElementById("userMood");
    var userName = userNameInput.value;
    var userMood = userMoodInput.value;
    var greetingElement = document.getElementById("greeting");
    greetingElement.textContent = "Hello, " + userName + "! You're feeling " + userMood + ".";
}
document.addEventListener("DOMContentLoaded", function() {
    displayDateTime();
});
function generateFishName() {
    var fishNames = ["Nemo", "Dory", "Bubbles", "Finley", "Coral", "Splash", "Sebastian", "Marlin"];
    var randomIndex = Math.floor(Math.random() * fishNames.length);
    alert("Your fish's name is: " + fishNames[randomIndex]);
}
function estimateShellSize() {
    var sizes = ["small", "medium", "large"];
    var randomSize = sizes[Math.floor(Math.random() * sizes.length)];
    alert("Congratulations! You found a " + randomSize + " seashell.");
}
function fishJokeOfTheDay() {
    var fishJokes = [
        "Why did the fish blush? Because it saw the ocean's bottom!",
        "What kind of music do fish listen to? Something catchy!",
        "How do fish always know how much they weigh? They have their own scales!",
        "Why don't fish play basketball? Because they're afraid of the net!"
    ];
    var randomJoke = fishJokes[Math.floor(Math.random() * fishJokes.length)];
    alert("Fish Joke of the Day:\n" + randomJoke);
}
function suggestSeafoodRecipe() {
    var seafoodRecipes = [
        "Grilled Lemon Garlic Shrimp",
        "Seared Scallops with Mango Salsa",
        "Lobster Tail with Garlic Butter",
        "Baked Cod with Mediterranean Tomato Sauce"
    ];
    var randomRecipe = seafoodRecipes[Math.floor(Math.random() * seafoodRecipes.length)];
    alert("Try this delicious seafood recipe: " + randomRecipe);
}
function oceanRiddleChallenge() {
    var oceanRiddles = [
        "I have a shell, but I'm not a turtle. What am I?",
        "I'm shiny and colorful, found in the ocean. What am I?",
        "I'm a fast swimmer with a sharp tooth. What am I?",
        "I'm the king of the ocean with a crown of fins. What am I?",
        "I'm a shell with a soothing sound. What am I?"
    ];
    var randomRiddle = oceanRiddles[Math.floor(Math.random() * oceanRiddles.length)];
    var userAnswer = prompt(randomRiddle);
    var correctAnswers = [
        "Seashell", "Fish Scale", "Shark", "Dolphin", "Conch"
    ];
    if (userAnswer !== null) {
        userAnswer = userAnswer.trim().toLowerCase();
        if (correctAnswers.includes(userAnswer)) {
            alert("Congratulations! You got it right!");
        } else {
            var correctAnswerIndex = correctAnswers.findIndex(answer => answer.toLowerCase() === userAnswer);
            if (correctAnswerIndex !== -1) {
                alert("Oops! That's not the correct answer. The answer is: " + correctAnswers[correctAnswerIndex]);
            } else {
                alert("Oops! That's not the correct answer.");
            }
        }
    }
}