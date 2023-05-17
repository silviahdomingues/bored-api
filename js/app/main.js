/*The overall responsibility of this code is to start the 
application and handle hash changes in the URL. It ensures 
that the correct controller is always loaded, based on the 
current hash. */

import { start } from "./router.js";

//It's a way to ensure that the enclosed code doesn't run until the HTML document is fully loaded.
$(function(){

  //If the URL has not a hash, it sets the hash to #home. 
  //This is a way to ensure that the application always has a valid hash when it starts.
  if(!window.location.hash) {
      window.location.hash = '#home';
  }
   /*This event is fired whenever the URL's hash changes. 
   When the hash changes, the start function is called, which 
   checks the new hash and loads the corresponding controller. 
   
   The window.onhashchange event is being used to call the start 
   function from the router whenever the URL's hash changes. 
   This function checks the current hash against a predefined set 
   of routes (from router.js), and loads the appropriate controller 
   for that route. In this way, the router is indeed handling hash 
   changes, but it is doing so indirectly through the start function. */ 
    
    window.onhashchange = function() {
        start()
    }
    
    console.log("DOM is mounted and ready");
    
    start();
})