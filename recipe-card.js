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

    }

    function noDuplicates() {


    }



    

    var labelID = localStorage.getItem("selectedRecipe")

    var queryURL = "https://api.edamam.com/search?q=" + labelID + "&app_id=a9f85e6a&app_key=77f6e24e315d52d60bcbb1e1b428e579&from=0&to=1"

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        var title = response.hits[0].recipe.label
        var image = response.hits[0].recipe.image
        var ingrdients = response.hits[0].recipe.ingredientLines
        var caloriesPerServing = (response.hit[0].calories / response.hit[0].yeild)
        var source = response.hit[0].source
        var url = response.hit[0].url

        $("#recipeImage").attr("src" , image)
        $("#recipeImage").attr("alt" , title + "image")
        $("#recipeTitle").text(tabel)
        $("#recipeLink").attr("href" , url)
        $("#recipeLink").text(source)
    });
});