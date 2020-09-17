$(document).ready(function () {

    function generateRecipes(){
        
        var queryURL = ""
    
    
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
        });
    }
    
    function GetInfoWorkout() {
    
        var queryURL = "https://wger.de/api/v2/exercise/?muscles=1&equipment=3"
    
    
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
        });
    };

});
    
    // GetInfoWorkout();
    
    // Muscles: ID numbers for muscles
            // 1 - Biceps brachii
            // 2 - Anterior deltoid
            // 3 - Serratus anterior
            // 4 - Pectoralis major
            // 5 - Triceps brachii
            // 6 - Rectus abdominis
            // 7 - Gastrocnemius
            // 8 - Gluteus maximus
            // 9 - Trapezius
            // 10 - Quadriceps femoris
            // 11 - Biceps femoris
            // 12 - Latissimus dorsi
            // 13 - Brachialis
            // 14 - Obliquus externus abdominis
            // 15 - Soleus
    
    
    // "https://wger.de/api/v2/exercise/?equipment=7"
    
    // "https://wger.de/api/v2/exercise/?muscles=1&equipment=7&language=2"
