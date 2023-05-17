    /* The responsibility of this code is to manage navigation 
    within the application. Depending on the hash part of the 
    URL (the part after #), it determines which controller should 
    be active and calls the start method on that controller. 
    This way, when users navigate through the application (either 
    by clicking on links or by manually changing the URL), the 
    appropriate controllers are activated and the correct content is shown.*/
    
    import {boredcontroller} from './controllers/bored-controller.js'
    import {homecontroller} from './controllers/home-controller.js'
    
    const routes = {
        
        activity: {
            hash: '#activity', // hash
            controller: boredcontroller // controller
        },
        
        home: {
            hash: '#home',
            controller: homecontroller
        }
    };
//If there's no hash in the URL or if the hash doesn't match any of the routes, the user will be redirected to the home route.
    const defaultRoute = 'home';
    let currentHash = ''; // required to track hash changes

    /* This function checks whether the hash in the URL has changed. 
    If it has, it finds the appropriate route and loads the corresponding 
    controller. If it can't find a matching route, it redirects to the default route. */
    
    const hashCheck = function() {
        if (window.location.hash === currentHash) {
            return;
        }

        var routeName = Object.keys(routes).find(function(name) {
            return window.location.hash === routes[name].hash;
        });

        if (!routeName) {
            routeName = defaultRoute;
            window.location.hash = routes[defaultRoute].hash;
        }

        loadController(routes[routeName].controller);
    };

    /* This function loads a controller and catches any errors 
    that occur during the loading process. If there's an error, 
    it redirects to the default route. */
    
    const loadController = function(controller) {
        currentHash = window.location.hash;
        
            try {
                controller.start();
            } catch (err) {
                console.log(err.stack);
                window.location.hash = routes[defaultRoute].hash;
            }

    };
//This function starts the routing system by checking the hash
    const start = function() {

        hashCheck();
    };

export {
    start
}

