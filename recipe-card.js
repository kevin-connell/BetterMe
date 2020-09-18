$(document).ready(function () {

    $(".dropdown-trigger").dropdown();

    var favorites = JSON.parse(localStorage.getItem("favoritesList")) || ["Chicken", "Mashed Potatoes" , "Pea Soup"]

    var favorites = JSON.parse(localStorage.getItem("favorites list")) || ["Roasted Chicken" , "Mashed Potatoes"];

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

    function addFavorite(x) {
        favorites.unshift(x)
        favorites = noDuplicates(favorites)
        favorites.splice(5);
        localStorage.setItem("favoritesList", JSON.stringify(favorites));
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

<<<<<<< HEAD
    clickedFav = localStorage.getItem("clickedFavorite")

    if (clickedFav !== "no" || !clickedFav) {

        clickedFav = localStorage.getItem("clickedFavorite")

        var queryURL = "https://api.edamam.com/search?q=" + clickedFav + "&app_id=a9f85e6a&app_key=77f6e24e315d52d60bcbb1e1b428e579&from=0&to=1"

        console.log(queryURL)

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {

            console.log(response)

            var clicked = response.hits

            showSelected(clicked)

            localStorage.setItem("clickedFavorite" , "no")
        })

    } else {

        // Getting Selected Recipe From Storage\

        var selectedRecipe = JSON.parse(localStorage.getItem("selectedRecipe"));

        showSelected(selectedRecipe)
    };

    function showSelected(x) {

        // Variables for Selected Recipe
        console.log(x);

        var title = x[0].recipe.label;
        var image = x[0].recipe.image;
        var ingredients = x[0].recipe.ingredientLines;
        var calories = x[0].recipe.calories;
        var servings = x[0].recipe.yield;

        var source = x[0].recipe.source;
        var url = x[0].recipe.url;

        $("#recipeImage").attr("src", image);
        $("#recipeImage").attr("alt", title + "image");
        $("#recipeTitle").text(title);

        $("#recipeCalories").text("Calories: " + calories.toFixed(0));
        $("#recipeServings").text("Makes " + servings + " servings.");

        $("#recipeCaloriesPerServing").text("Calories per serving: " + (calories / servings).toFixed(0));

        for (i = 0; i < ingredients.length; i++) {

            var newIngredient = $("<li></li>");

            $("#ingredients").append(newIngredient);

            $(newIngredient).text(ingredients[i]);
        }

        $("#recipeLink").attr("href", url);
        $("#recipeLink").text(source);

    }

    //     $("#recipeImage").attr("src" , image)
    //     $("#recipeImage").attr("alt" , title + "image")
    //     $("#recipeTitle").text(tabel)
    //     $("#recipeLink").attr("href" , url)
    //     $("#recipeLink").text(source)
    // });
=======
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

    for (i = 0; i < ingredients.length; i++) {

        var newIngredient = $("<li></li>");

        $("#ingredients").append(newIngredient);

        $(newIngredient).text(ingredients[i]);
    }

    $("#recipeLink").attr("href", url);
    $("#recipeLink").text(source);



    // Workout IDs

    var sedentaryWorkoutID = ["470", "607", "604"];
    var moderateWorkoutID = ["795", "548", "341"];
    var activeWorkoutID = ["814", "206", "393"];
    
    // Select Workout Intensity Level

    var exerciseID;

    var selectedWorkoutIntesity = localStorage.getItem("selectedWorkoutIntesity");

    if (selectedWorkoutIntesity == "sedentary") {

        exerciseID = sedentaryWorkoutID[Math.floor(Math.random() * 3)];
    }

    else if (selectedWorkoutIntesity == "moderate") {
        
        exerciseID = moderateWorkoutID[Math.floor(Math.random() * 3)];
    }

    else if (selectedWorkoutIntesity == "active") {
        
        exerciseID = activeWorkoutID[Math.floor(Math.random() * 3)];
    }

    else if (selectedWorkoutIntesity == "none selected") {
        
        var random = Math.floor(Math.random() * 3);

        if (random = 0){
            exerciseID = sedentaryWorkoutID[Math.floor(Math.random() * 3)];
        }

        else if (random = 1){
            exerciseID = moderateWorkoutID[Math.floor(Math.random() * 3)];
        }

        else if (random = 2){
            exerciseID = activeWorkoutID[Math.floor(Math.random() * 3)];
        }
    }
    
    // Get Workout From API

    var queryURL = "https://wger.de/api/v2/exercise/" + exerciseID;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);

        $("#workoutDescription").text(response.description);
    });
>>>>>>> 2057d400e7739851d96ad05a2fb6662014f5b0eb
});