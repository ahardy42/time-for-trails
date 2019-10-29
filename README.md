# time-to-train

## deployed to Heroku

link: https://time-for-trails.herokuapp.com/

## MVC design Pattern

### Model

- utilizes access to the MTBproject / HikingProject / TrailRunProject APIs for trail location information, and external url
- utilizes the openrouteservice api to obtain travel isochrone from inputs

### Views

- React front end using the MaterialUI framework to quickly design stunning components
- Styling is a combination of SASS and MaterialUI's CSS-in-JS solution
- the map interface is rendered and controlled using leaflet.js with the react-leaflet abstraction
- user's location is utilizing the leaflet.location plugin within a custom location control component

### Controller

- logic is separated from express route listeners by the creation of controller module callbacks
- the controller recieves the request body, maps it out to the correct service which calls the external APIs, and then sends the View a json response

## installation

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
