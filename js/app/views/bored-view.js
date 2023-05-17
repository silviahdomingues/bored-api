/* The responsibility of this 'view' object is to provide a 
way to update the text content of the 'activity-display' 
element on the page. The 'show' method can be called with an 
object that has an 'activity' property, and it will update the 
'activity-display' element's text content with the value of 
'data.activity'. */

/* It is a constant variable named view and assigns it an 
empty object. An object in JS is a collection of 
properties, and a property is an association between a 
name (or key) and a value. When a variable is declared as 
an object, you can add properties to it.*/ 
const view = {}

    view.show = function(data){
        const activityDisplay = document.getElementById('activity-display');
        activityDisplay.textContent = data.activity;
    }

        export {
            view
        }