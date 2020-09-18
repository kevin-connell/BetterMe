$(document).ready(function () {

    $(".dropdown-trigger").dropdown();

    var favorites = JSON.parse(localStorage.getItem("favoritesList")) || ["Chicken", "Mashed Potatoes" , "Pea Soup"]

    renderFavorites()

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

    // Clear Previous Selected Recipe if Any

    var selectedRecipe = [];

    localStorage.setItem("selectedRecipe", JSON.stringify(selectedRecipe));

    // Variables For Health and Diet

    var balanced = "";
    var highProtein = "";
    var lowFat = "";
    var lowCarb = "";
    var vegetarian = "";
    var vegan = "";
    var sugarConscious = "";
    var peanutFree = "";
    var treeNutFree = "";
    var alcoholFree = "";

    // Selecting Options for Recipe Search

    $(".balanced").change(function () {
        if (this.checked == true) {
            balanced = "&diet=balanced";
        } else if (this.checked != true) {
            balanced = "";
        }
    });

    $(".high-protein").change(function () {
        if (this.checked == true) {
            highProtein = "&diet=high-protein";
        } else if (this.checked != true) {
            highProtein = "";
        }
    });

    $(".low-fat").change(function () {
        if (this.checked == true) {
            lowFat = "&diet=low-fat";
        } else if (this.checked != true) {
            lowFat = "";
        }
    });

    $(".low-carb").change(function () {
        if (this.checked == true) {
            lowCarb = "&diet=low-carb";
        } else if (this.checked != true) {
            lowCarb = "";
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

    $(".sugar-conscious").change(function () {
        if (this.checked == true) {
            sugarConscious = "&health=sugar-conscious";
        } else if (this.checked != true) {
            sugarConscious = "";
        }
    });

    $(".peanutFree").change(function () {
        if (this.checked == true) {
            peanutFree = "&health=peanut-free";
        } else if (this.checked != true) {
            peanutFree = "";
        }
    });

    $(".tree-nut-free").change(function () {
        if (this.checked == true) {
            treeNutFree = "&health=tree-nut-free";
        } else if (this.checked != true) {
            treeNutFree = "";
        }
    });

    $(".alcohol-free").change(function () {
        if (this.checked == true) {
            alcoholFree = "&health=alcohol-free";
        } else if (this.checked != true) {
            alcoholFree = "";
        }
    });





    // Function to Run Edamam API

    $("#recipeSearchButton").on("click", function (event) {
        event.preventDefault();

        // Create/Reset recipe array to store recipe results

        var recipeResults = [];

        // Search Term Variables

        var searchTerm = $("#recipeSearch").val().trim();;
        var numberOfResults = "10";
        var calorieMin = "0";
        var calorieMax = "2000";

        // Variables For Health and Diet

        var healthAndDietRestrictions = balanced + highProtein + lowFat + lowCarb + vegetarian + vegan + sugarConscious + peanutFree + treeNutFree + alcoholFree;

        // URL with Variables

        var queryURL = "https://api.edamam.com/search?q=" + searchTerm + "&app_id=a9f85e6a&app_key=77f6e24e315d52d60bcbb1e1b428e579&from=0&to=" + numberOfResults + "&calories=" + calorieMin + "-" + calorieMax + healthAndDietRestrictions;

        // Ajax Function

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);

            // For Loop to Go Through Number of Search Results
            for (var i = 0; i < numberOfResults; i++) {

                recipeResults.push(response.hits[i]);

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
                console.log(response.hits[i].recipe.url);
            }

            // Add results to local storage
            localStorage.setItem("recipeResults", JSON.stringify(recipeResults));



            // Selecting Workout Intensity

            var selectedWorkoutIntesity = $("input[name='workoutIntesity']:checked").val();

            if (selectedWorkoutIntesity === "sedentary") {

                localStorage.setItem("selectedWorkoutIntesity", selectedWorkoutIntesity);
            }

            else if (selectedWorkoutIntesity === "moderate") {
                
                localStorage.setItem("selectedWorkoutIntesity", selectedWorkoutIntesity);
            }

            else if (selectedWorkoutIntesity === "active") {
                
                localStorage.setItem("selectedWorkoutIntesity", selectedWorkoutIntesity);
            }

            else {

                selectedWorkoutIntesity = "none selected";
                
                localStorage.setItem("selectedWorkoutIntesity", selectedWorkoutIntesity);
            }



            // Continue to next window. Contains recipe results
            window.location.replace("select-recipe.html");
        });
    });
});