# time-for-trails

## deployed to Heroku

link: https://time-for-trails.herokuapp.com/

## Using React Hooks and Context API

This web app uses 100% functional components. Simple component state is handled using the **useState** hook, and more complicated component state is handled with **useReducer** hook and lifecycle methods use **useEffect** hook. Global app state is handled by creating a ```<Context.Provider>``` to wrap the entire app with, and then utilizing a custom hook to distribute the global state object, and a dispatch function. 

## MVC design Pattern

### Model

- utilizes access to the [MTBproject](https://www.mtbproject.com/data) / [HikingProject](https://www.hikingproject.com/data) / [TrailRunProject](https://www.trailrunproject.com/data) APIs for trail location information, and external url
- utilizes the [openrouteservice](https://openrouteservice.org/) api to obtain travel isochrone from inputs
- utilizes the [nominatim](https://nominatim.openstreetmap.org/) API to search for place names 

### Views

- Client side routing utilizing the [react-router-dom]() framework
- React front end using the [MaterialUI](https://material-ui.com/) framework to quickly design stunning components
- Styling is a combination of SASS and MaterialUI's CSS-in-JS solution
- the map interface is rendered and controlled using [leaflet.js](https://leafletjs.com/) with the react-leaflet abstraction
- user's location is utilizing the leaflet.location plugin within a custom location control component
- location search is powered by nominatim search.  There is an event triggered timeout function that prevents multiple calls to the API (in accordance with their use policy forbidding use in an autocomplete). This is a measure to ensure the location exists before clicking the submit button...

### Controller

- logic is separated from express route listeners by the creation of controller module callbacks
- the controller recieves the request body, maps it out to the correct service which calls the external APIs, and then sends the View a json response

## Installation

- you will need node.js installed on your machine, as well as git installed globally
- create a project folder
- fork this directory and cd into your folder
- ```git clone <forked directory>```
- ```npm install```
- ```cd client && npm install```
- you will need your own .env file in the root directory, set up with the following keys:
```
MTB_PROJECT_KEY=<your key>
OPENROUTE_SERVICE_KEY=<your key>
```
- away you go!

