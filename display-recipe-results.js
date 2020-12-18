// Check Local Storage
$(document).ready(function () {

    $(".dropdown-trigger").dropdown();

        var favorites = JSON.parse(localStorage.getItem("favoritesList")) || ["Chicken", "Mashed Potatoes" , "Pea Soup"]

        renderFavorites();

        function renderFavorites() {

            $("#dropdown1").empty()

            for (let i = 0; i < favorites.length; i++) {
                newLi = $("<li>")
                newAtag = $("<a>")
                $(newAtag).text(favorites[i])
                $(newLi).append(newAtag)
                $("#dropdown1").append(newLi)
            }
        }

        $("#dropdown1").on("click" , function (event){
            console.log($(event.target).text())
            localStorage.setItem("clickedFavorite" , $(event.target).text())
            window.location.href = "recipe-card.html"
        })

    var recipeResults = JSON.parse(localStorage.getItem("recipeResults"));


    // Cycle Through Results and Display Them

    for (var i = 0; i < recipeResults.length; i++) {

        // Displaying Recipe Results

        var newResult = $("<div class='resultTile' id=" + i + "></div>");

        var newResultImg = $("<img class='resultImage' src=''>");

        var newResultName = $("<p class='resultText'></p>");

        $("#recipeResults").prepend(newResult);

        $(newResult).append(newResultImg);

        $(newResult).append(newResultName);

        $(newResultImg).attr("src", recipeResults[i].recipe.image);

        $(newResultName).text(recipeResults[i].recipe.label);
    }

    $(".resultTile").on("click", function(event) { 
        event.preventDefault();

        var recipeNumber = this.id;

        var selectedRecipe = [];

        selectedRecipe.push(recipeResults[recipeNumber]);

        localStorage.setItem("selectedRecipe", JSON.stringify(selectedRecipe));

        // Continue to next window. Contains recipe results
        window.location.replace("recipe-card.html");
    });
});