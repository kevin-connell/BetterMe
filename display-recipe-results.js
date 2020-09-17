// Check Local Storage

var recipeResults = JSON.parse(localStorage.getItem("recipeResults"));



// Displaying Recipe Results

var newResult = $("<div class='card rounded shadow-sm newResult'></div>");

var newResultImg = $("<img src=''>");

var newResultName = $("<p></p>");

$("#recipeResults").prepend(newResult);

$(newResult).append(newResultImg);

$(newResultImg).attr("src", response.hits[i].recipe.url);

$(newResultName).text(response.hits[i].recipe.label);





