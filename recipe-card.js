$(document).ready(function () {

    var favorites = JSON.parse(localStorage.getItem("favorites list")) || []

    renderFavorites()

    function renderFavorites() {

        $("#favoriteDropDown").empty()

        for (let i = 0; i < favorites.length; i++) {
            newLi = $("<li>")
            newLi.text(favorites[i])
            $("#favoriteDropDown").prepend(newLi)
        }
    }

    function addFavorite() {

        favorites.unshift($("#recipeTitle").text())

        favorites = noDuplicates(favorites)

        favorites.splice(6);

        localStorage.setItem("favorites list", JSON.stringify(favorites));

        renderFavorites()
    }

    function noDuplicates(x) {
        newObj = {};
        x.forEach(function (item) {
            if (!newObj[item]) {
                newObj[item] = true;
            }
        });
        return Object.keys(newObj);
    }

    // Getting Selected Recipe From Storage\

    var selectedRecipe = JSON.parse(localStorage.getItem("selectedRecipe"));

    console.log(selectedRecipe);


    // Variables for Selected Recipe

    var title = selectedRecipe[0].recipe.label;
    var image = selectedRecipe[0].recipe.image;
    var ingredients = selectedRecipe[0].recipe.ingredientLines;
    var calories = selectedRecipe[0].recipe.calories;
    var servings = selectedRecipe[0].recipe.yield;

    var source = selectedRecipe[0].recipe.source;
    var url = selectedRecipe[0].recipe.url;

    $("#recipeImage").attr("src", image);
    $("#recipeImage").attr("alt", title + "image");
    $("#recipeTitle").text(title);

    $("#recipeCalories").text("Calories: " + calories.toFixed(0));
    $("#recipeServings").text("Makes " + servings + " servings.");

    $("#recipeCaloriesPerServing").text("Calories per serving: " + (calories / servings).toFixed(0));

    for (i = 0; i < ingredients.length; i++){

        var newIngredient = $("<li></li>");

        $("#ingredients").append(newIngredient);

        $(newIngredient).text(ingredients[i]);
    }

    $("#recipeLink").attr("href", url);
    $("#recipeLink").text(source);



});