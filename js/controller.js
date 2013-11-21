OpenLayers.ImgPath = '/images/open-layers/';

$(document).ready(function ()
{
    var zooms = 4,
        width = 1564,
        height = 888,
        fromProjection = new OpenLayers.Projection('EPSG:4326'),   // Transform from WGS 1984
        toProjection = new OpenLayers.Projection('EPSG:900913'), // to Spherical Mercator Projection
        position = new OpenLayers.LonLat(13.41, 52.52).transform(fromProjection, toProjection),
        map = new OpenLayers.Map('map',
            {
                theme: null
            }),
//        layer1 = new OpenLayers.Layer.OSM(),

        layer1 = new OpenLayers.Layer.WMS(
            'WMS',
            'http://vmap0.tiles.osgeo.org/wms/vmap0',
            {
                layers     : 'basic',
                transparent: 'true'
            },
            {
                isBaseLayer: false,
                opacity    : 0.75
            }
        ),
//        layer1 = new OpenLayers.Layer.OSM(
//            'OSM',
//            {
////                type             : G_HYBRID_MAP,
////                sphericalMercator: true
//            },
//            {
//                isBaseLayer: false,
//                opacity    : 0.75
//            }
//        ),
//        layer3 = new OpenLayers.Layer.Vector('KML', {
//            strategies: [
//                new OpenLayers.Strategy.Fixed()
//            ],
//            protocol  : new OpenLayers.Protocol.HTTP({
//                url   : 'data/large-scale/2008.kml',
//                format: new OpenLayers.Format.KML({
//                    extractStyles    : true,
//                    extractAttributes: true,
//                    maxDepth         : 2
//                })
//            })
//        }),
        layer2 = new OpenLayers.Layer.Image(
            '2008',
            '/data/large-scale/2008.jpg',
//            bounds,
            new OpenLayers.Bounds(0.224, 52.104, 0.351, 52.175),
//            new OpenLayers.Bounds(-180, -88.759, 180, 88.759),
            new OpenLayers.Size(width / zooms, height / zooms),
            {
                numZoomLevels: zooms
            }
        );
//            new OpenLayers.Layer.Vector(
//                'KML',
//                {
//                    strategies: [
//                        new OpenLayers.Strategy.Fixed()
//                    ],
//                    protocol  : new OpenLayers.Protocol.HTTP({
//                        url   : 'data/large-scale/2008.kml',
//                        format: new OpenLayers.Format.KML({
//                            extractStyles    : false,
//                            extractAttributes: true,
//                            maxDepth         : 2
//                        })
//                    })
//                })

//        center: new OpenLayers.LonLat(52.131906, -0.316153),
//        zoom  : 11
//    });

//    map.events.register('click', map, function (event)
//    {
//        var position = this.events.getMousePosition(event),
//            lonlat = map.getLonLatFromPixel(position);
//
//        console.log(lonlat);
//    });

//    layer2.events.on({
//        loadstart: function ()
//        {
//            console.log("loadstart");
//        },
//        loadend  : function ()
//        {
//            console.log("loadend");
//        }
//    });

    map.addControl(new OpenLayers.Control.LayerSwitcher());

    map.addLayer(layer1);
    map.addLayer(layer2);
    map.zoomToMaxExtent();
//    map.setCenter(new OpenLayers.LonLat(35213.164911026, 6824106.4753536), 15);

//    $.getJSON('/data/large-scale/2008.geojson', function(response)
//    {
//        console.log(response);
//
//        var layer = new OpenLayers.Layer.Vector(),
//            format = new OpenLayers.Format.GeoJSON();
//
//        map.addLayer(layer);
//
//        layer.addFeatures(format.read(response));
//    });
});