/* This code module's responsibility is to provide a function 
that can fetch activity data from the Bored API and pass that 
data to a callback function.*/

var BORED_API = "http://www.boredapi.com/api/activity/";

async function getActivity(cb){
    try {
/* '?' is the start of the query parameters in a URL. Query 
parameters are used to send extra data to the server as part 
of the URL. They are added to the base URL after a question mark.

'timestamp=' is a query parameter key. The server can use this 
key to retrieve the value you're sending. In this case, you're 
telling the server that you're sending a timestamp value.

'new Date().getTime()' is a JS statement that gets the current 
time and returns it as a timestamp in milliseconds. 
This timestamp represents the number of milliseconds. 

All together, it creates a URL string that includes the 
current timestamp as a query parameter.
The purpose of adding a timestamp to the URL is often to 
prevent caching. When the browser or the server sees a URL it 
has fetched before, it might use the previously fetched response 
from cache instead of making a new request. But if the URL is 
different each time because it has a unique timestamp, the 
browser or server will treat it as a new request and won't use 
the cached response.
*/            
        const url = BORED_API + '?timestamp=' + new Date().getTime();
//The 'await' keyword is used to pause the execution of the function until the Promise returned by 'fetch(url)' is resolved
        const response = await fetch(url);
        const data = await response.json();
        
        cb(data)
    } catch (err){
      console.log("Failed to fetch activity: " + err.message);
    }
}

export {
    getActivity
}
