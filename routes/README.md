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

```GET /api/location?q=<search>```

this route returns an array of locations using the search term provided.  

structure of the response using frisco+co as search string:

```js
[
    {
        "place_id": 83681915,
        "licence": "Data © OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright",
        "osm_type": "way",
        "osm_id": 33112522,
        "boundingbox": [
            "39.567178",
            "39.5986876",
            "-106.1140402",
            "-106.0649182"
        ],
        "lat": "39.5744299",
        "lon": "-106.0975196",
        "display_name": "Frisco, Summit County, Colorado, United States",
        "class": "boundary",
        "type": "administrative",
        "importance": 0.482240924205224,
        "icon": "https://nominatim.openstreetmap.org/images/mapicons/poi_boundary_administrative.p.20.png"
    },
    ...
]
```
