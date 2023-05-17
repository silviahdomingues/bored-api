/*The bored-controller is responsible for setting up 
and controlling the behavior of the "bored" view, the web page #activity.*/

import { view } from "../views/bored-view.js"
import { getActivity } from "../services/bored-service.js"

const boredcontroller = {}

boredcontroller.start = function(){
    
    const homeView = document.getElementById('home-view');
    const activityView = document.getElementById('activity-view');
    const title = document.getElementById('activity-title');
    const button = document.getElementById('get-activity-activity-view');
    const activityDisplay = document.getElementById('activity-display');

    homeView.style.display = 'none';
    activityView.style.display = 'block';

    title.textContent = "Fasten your seatbelt! (and drumroll, please)";
    button.textContent = "Hit me!";
    button.onclick = function() {

        /* '(activityData) => { view.show(activityData); }': This is the 
        callback function being passed to 'getActivity'.
        
        'view.show(activityData);': Inside the callback function, 
        this line of code is run. It calls the show method on the 
        view object, passing it the 'activityData'.

        When getActivity is called with the callback function, it 
        makes a request to the API. Once it receives a response from 
        the API, it executes the callback function, passing the response 
        data (the activity data) as an argument to the callback function.

        The callback function then calls view.show, passing it the activity 
        data, which will update some part of your web page with the activity data. 
        This is a typical pattern for dealing with asynchronous operations 
        (like API requests) in JavaScript: you provide a function to be called 
        once the asynchronous operation is complete.
        */
        
        getActivity((activityData) => {
            view.show(activityData);
        });

        /* Another option is not using the bored-view and instead:
getActivity((activityData) => {
            activityDisplay.textContent = activityData.activity;
        });

"((activityData) => { activityDisplay.textContent = activityData.activity; })": 
This is the callback function that you pass to "getActivity()".

"activityData": This is a parameter of the callback function. 
When "getActivity()" calls the callback, it will pass the fetched 
data as an argument, and this data will be accessible inside the 
callback function as activityData. This data is an object, and 
it contains information about a random activity fetched from the Bored API.
            
"activityDisplay.textContent = activityData.activity;": This is the body of the 
callback function. It sets the "textContent" property of "activityDisplay" to "activityData.activity". 
"activityDisplay" is a reference to a specific HTML element (likely a <div>), and 
"textContent" is a property that sets or returns the text content of this 
element. "activityData.activity" is the actual activity text that we want to 
display. So this line of code updates the text content of the "activityDisplay" 
element to display the fetched activity text. */
            
    }
    }
    console.log('starting the program!')
   
export {
        boredcontroller
}