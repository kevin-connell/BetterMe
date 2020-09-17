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
    
    GetInfoWorkout();

//  ID numbers for sedentary workouts: 
     
// 470 - ("Crossover Reverse Lunge")
 // 607 - ("name: "Ankle Taps")
// 604 - ("name: "Bodyweight Squats")

    // Moderate activity level use light weights

    // 795 - ("name": "Squat Thrust")
    // 548 - ("name": "Wall Slides")
    // 341 - ("name": "Body-Ups")

    // Active activity level use heavy weight workouts

    // 814 - ("name": "Box Jump")
    // 206 - ("name": "Decline Pushups")
    // 393 - ("name": Upper Body")



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
