$(document).ready(function () {

    // Variables For Health and Diet

    var glutenFree = "";
    var vegetarian = "";
    var vegan = "";
    var peanutFree = "";
    var shellfishFree = "";

    // Selecting Options for Recipe Search

    $(".glutenFree").change(function () {
        if (this.checked == true) {
            glutenFree = "&health=gluten-free";
        } else if (this.checked != true) {
            glutenFree = "";
        }
    });

    $(".vegetarian").change(function () {
        if (this.checked == true) {
            vegetarian = "&health=vegetarian";
        } else if (this.checked != true) {
            vegetarian = "";
        }
    });

    $(".vegan").change(function () {
        if (this.checked == true) {
            vegan = "&health=vegan";
        } else if (this.checked != true) {
            vegan = "";
        }
    });

    $(".peanutFree").change(function () {
        if (this.checked == true) {
            peanutFree = "&health=peanut-free";
        } else if (this.checked != true) {
            peanutFree = "";
        }
    });

    $(".shellfishFree").change(function () {
        if (this.checked == true) {
            shellfishFree = "&health=shellfish-free";
        } else if (this.checked != true) {
            shellfishFree = "";
        }
    });

    // Variables for Storing Recipe Info to Display Later



    // Function to Run Edamam API

    $("#SEARCH BUTTON").on("click", function (event) {
        event.preventDefault();

        // Search Term Variables

        var searchTerm = "";
        var numberOfResults = "";
        var calorieMin = "0";
        var calorieMax = "2000";

        // Variables For Health and Diet

        var healthRestriction = glutenFree + vegetarian + vegan + peanutFree + shellfishFree;
        
        var dietRestriction = "";

        // URL with Variables

        var queryURL = "https://api.edamam.com/search?q=" + searchTerm + "&app_id=a9f85e6a&app_key=77f6e24e315d52d60bcbb1e1b428e579&from=0&to=" + numberOfResults + "&calories=" + calorieMin + "-" + calorieMax + healthRestriction + dietRestriction;

        // Ajax Function

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);

            // For Loop to Go Through Number of Search Results
            for (var i = 0; i < numberOfResults; i++) {

                // Name of Dish
                console.log(response.hits[i].recipe.label);

                // Calories
                console.log("Calories: " + Math.round(response.hits[i].recipe.calories));

                // Img
                console.log(response.hits[i].recipe.image);

                $("img").attr("src", response.hits[i].recipe.image);

                // Ingredient List
                for (var x = 0; x < response.hits[i].recipe.ingredientLines.length; x++) {
                    console.log(x + 1 + ": " + response.hits[i].recipe.ingredientLines[x])
                }

                // URL for recipe
                console.log(response.hits[i].recipe.url)
            }
        });
    });
});