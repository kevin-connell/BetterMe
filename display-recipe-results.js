// Check Local Storage

var recipeResults = JSON.parse(localStorage.getItem("recipeResults"));


// Cycle Through Results and Display Them

for (var i = 0; i < recipeResults.length; i++) {

    // Displaying Recipe Results

    var newResult = $("<div class='card rounded shadow-sm newResult' id=" + i + "></div>");

    var newResultImg = $("<img src=''>");

    var newResultName = $("<p></p>");

    $("#recipeResults").prepend(newResult);

    $(newResult).append(newResultName);

    $(newResult).append(newResultImg);

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
