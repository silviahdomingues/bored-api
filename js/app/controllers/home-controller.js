/*The home-controller controls the behavior and 
interactivity of the home view of a web page.*/
/*The 'homecontroller' object is created to group related 
functionality together in an organized and encapsulated way. 
This is a common design pattern in JS known as the Module Pattern.
In this case, it is acting as a module that's responsible 
for managing the home view of my application.*/

const homecontroller = {}
//This function handles the setup and behavior of the home view
homecontroller.start = function(){
    const homeView = document.getElementById('home-view');
    const activityView = document.getElementById('activity-view');
    const title = document.getElementById('title');
    const yesButton = document.getElementById('get-activity');
    const noButton = document.getElementById('no-button');

    title.textContent = "Caught in the Doldrums?";
    yesButton.textContent = "Yup, spark my day!";
    yesButton.onclick = function() {
        window.location.hash = '#activity';
    }

    noButton.textContent = "All good here!";
    noButton.onclick = function() {
        alert("Seize the day, champ!");
}
//This ensures, the home view is visible and the activity view is hidden
homeView.style.display = 'block';
activityView.style.display = 'none';
}
//Allows other parts of the application to import and use this object an its methods
export {
    homecontroller
}