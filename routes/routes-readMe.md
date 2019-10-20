## docs for routes

### MVC paradigm

I'm following the MVC paradigm, and as such no logic is going into route files. all requests will be handled by the controller methods, the routes here are listening, and then passing the req, res and next to the controller files. 

there is one controller file per route

### routes

```GET /api/trails/bike?lat=<lat>&lng=<lng>&mode=<travelMode>&time=<time>```

this route loads MTB trail data from mtb project based on your lat/lng and returns an array, sorted by distance to you, with the trail data that is within the boundary dictated by travel mode, and travel time

structure of the response:

```js
{
    "polygon" : {
        "coordinates" : [],
        "type" : "Polygon"
    },
    "trails" : [
        {},
        ...
    ]
}
```

```GET /api/trails/run?lat=<lat>&lng=<lng>&mode=<travelMode>&time=<time>```

this route loads running trail data from mtb project based on your lat/lng and returns an array, sorted by distance to you, with the trail data that is within the boundary dictated by travel mode, and travel time

structure of the response:

```js
{
    "polygon" : {
        "coordinates" : [],
        "type" : "Polygon"
    },
    "trails" : [
        {},
        ...
    ]
}
```

```GET /api/trails/hike?lat=<lat>&lng=<lng>&mode=<travelMode>&time=<time>```

this route loads hiking trail data from mtb project based on your lat/lng and returns an array, sorted by distance to you, with the trail data that is within the boundary dictated by travel mode, and travel time

structure of the response:

```js
{
    "polygon" : {
        "coordinates" : [],
        "type" : "Polygon"
    },
    "trails" : [
        {},
        ...
    ]
}
```