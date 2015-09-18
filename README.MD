# Leaflet Fractional Zoom

This is a simple plugin that makes use of a new feature in the leaflet 1.0 beta, fractional zooming.  You can now zoom by any increment.

The big zoom is on the left and small zoom on the righht

demo: http://turbobuilt.com/leaflet/fractional-zoom-control/demo.html

Usage of the plugin is just like the regular leaflet fractional zoom plugin, except you need to tell it what the zoom increment should be.  To use, YOU MUST BE USING LEAFLET 1.0!

First, replace your current leaflet installation with the 1.0 beta:

```html
<script src="http://cdn.leafletjs.com/leaflet-1.0.0-b1/leaflet.js"></script>
<link rel="stylesheet" href="http://cdn.leafletjs.com/leaflet-1.0.0-b1/leaflet.css" />
```

Then add `zoomControl:false` to your map.  Then create the zoom control with a zoomIncrement parameter like so:


```javascript
map.addControl(L.control.fractionalZoom({position: 'topright', zoomIncrement:.2}));
```

Here is a complete demo file

```html
<!DOCTYPE html>
<html>
    <head>
        <script src="http://cdn.leafletjs.com/leaflet-1.0.0-b1/leaflet.js"></script>
        <script src="leaflet-fractional-zoom-control.js"></script>
        <link rel="stylesheet" href="http://cdn.leafletjs.com/leaflet-1.0.0-b1/leaflet.css" />
    </head>
    <body>
        <div id="map" style="width: 800px; height: 600px"></div>
        <script>
            var map = L.map('map',{                
                zoomControl:false
            }).setView([40,-100], 12);
            L.tileLayer('http://tile.osm.org/{z}/{x}/{y}.png', {
                //maxZoom: 18,
                attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors ' +
                        '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ',
                id: 'mapbox.streets'
            }).addTo(map);
            map.addControl(L.control.fractionalZoom({position: 'topright', zoomIncrement:.2}));
        </script>
    </body>
</html>
```
