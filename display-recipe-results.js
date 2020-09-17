// Check Local Storage

var recipeResults = JSON.parse(localStorage.getItem("recipeResults"));


// Cycle Through Results and Display Them

for (var i = 0; i < recipeResults.length; i++) {

    // Displaying Recipe Results

    var newResult = $("<div class='card rounded shadow-sm newResult' id=" + i + "></div>");

    var newResultImg = $("<img src=''>");

    var newResultName = $("<p></p>");

    $("#recipeResults").prepend(newResult);

    $(newResult).append(newResultImg);

    $(newResult).append(newResultName);

    $(newResultImg).attr("src", recipeResults[i].recipe.image);

    $(newResultName).text(recipeResults[i].recipe.label);
}

$(".newResult").on("click", function (event) {
    event.preventDefault();

    var recipeNumber = this.id;

    var selectedRecipe = [];

    selectedRecipe.push(recipeResults[recipeNumber]);

    localStorage.setItem("selectedRecipe", JSON.stringify(selectedRecipe));

    // Continue to next window. Contains recipe results
    window.location.replace("recipe-card.html");
});


// Workout results

// Workouts for Sedentary
var sedentaryWorkouts = ["Crossover Reverse Lunge", "Ankle Taps", "Bodyweight Squats", "Bear Walk", "Fire Hydrant"];
// Workout IDs:
// 470 
// 607 
// 604 
// 307
// 480 

// Workouts for Moderate

var moderateWorkouts = ["Squat Thrust", "Wall Slides", "Body-Ups", "Dips", "Cycling"];
// Workout IDs:
// 795 
// 548 
// 341
// 781 
// 806 

// Workouts for Active 
var activeWorkouts = ["Box Jump", "Decline Pushups", "Isometric Wipers", "Jogging","Handstand Pushup"];
// Workout IDS:
// 814 
// 206 
// 338 
// 789 
// 807 