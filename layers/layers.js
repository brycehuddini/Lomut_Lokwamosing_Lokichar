var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Drift_1 = new ol.format.GeoJSON();
var features_Drift_1 = format_Drift_1.readFeatures(json_Drift_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Drift_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Drift_1.addFeatures(features_Drift_1);
var lyr_Drift_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Drift_1, 
                style: style_Drift_1,
                popuplayertitle: 'Drift',
                interactive: true,
                title: '<img src="styles/legend/Drift_1.png" /> Drift'
            });
var format_SpotHeight_2 = new ol.format.GeoJSON();
var features_SpotHeight_2 = format_SpotHeight_2.readFeatures(json_SpotHeight_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SpotHeight_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SpotHeight_2.addFeatures(features_SpotHeight_2);
var lyr_SpotHeight_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SpotHeight_2, 
                style: style_SpotHeight_2,
                popuplayertitle: 'SpotHeight',
                interactive: true,
                title: '<img src="styles/legend/SpotHeight_2.png" /> SpotHeight'
            });
var format_WaterPoint_3 = new ol.format.GeoJSON();
var features_WaterPoint_3 = format_WaterPoint_3.readFeatures(json_WaterPoint_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WaterPoint_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WaterPoint_3.addFeatures(features_WaterPoint_3);
var lyr_WaterPoint_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WaterPoint_3, 
                style: style_WaterPoint_3,
                popuplayertitle: 'WaterPoint',
                interactive: true,
                title: '<img src="styles/legend/WaterPoint_3.png" /> WaterPoint'
            });
var format_Culvert_4 = new ol.format.GeoJSON();
var features_Culvert_4 = format_Culvert_4.readFeatures(json_Culvert_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Culvert_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Culvert_4.addFeatures(features_Culvert_4);
var lyr_Culvert_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Culvert_4, 
                style: style_Culvert_4,
                popuplayertitle: 'Culvert',
                interactive: true,
                title: '<img src="styles/legend/Culvert_4.png" /> Culvert'
            });
var format_DrainageBottom_5 = new ol.format.GeoJSON();
var features_DrainageBottom_5 = format_DrainageBottom_5.readFeatures(json_DrainageBottom_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DrainageBottom_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DrainageBottom_5.addFeatures(features_DrainageBottom_5);
var lyr_DrainageBottom_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DrainageBottom_5, 
                style: style_DrainageBottom_5,
                popuplayertitle: 'Drainage Bottom',
                interactive: true,
                title: '<img src="styles/legend/DrainageBottom_5.png" /> Drainage Bottom'
            });
var format_DrainageTop_6 = new ol.format.GeoJSON();
var features_DrainageTop_6 = format_DrainageTop_6.readFeatures(json_DrainageTop_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DrainageTop_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DrainageTop_6.addFeatures(features_DrainageTop_6);
var lyr_DrainageTop_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DrainageTop_6, 
                style: style_DrainageTop_6,
                popuplayertitle: 'Drainage Top',
                interactive: true,
                title: '<img src="styles/legend/DrainageTop_6.png" /> Drainage Top'
            });
var format_Fence_7 = new ol.format.GeoJSON();
var features_Fence_7 = format_Fence_7.readFeatures(json_Fence_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fence_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fence_7.addFeatures(features_Fence_7);
var lyr_Fence_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fence_7, 
                style: style_Fence_7,
                popuplayertitle: 'Fence',
                interactive: true,
                title: '<img src="styles/legend/Fence_7.png" /> Fence'
            });
var format_FuelStation_8 = new ol.format.GeoJSON();
var features_FuelStation_8 = format_FuelStation_8.readFeatures(json_FuelStation_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FuelStation_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FuelStation_8.addFeatures(features_FuelStation_8);
var lyr_FuelStation_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FuelStation_8, 
                style: style_FuelStation_8,
                popuplayertitle: 'Fuel Station',
                interactive: true,
                title: '<img src="styles/legend/FuelStation_8.png" /> Fuel Station'
            });
var format_Powerline_9 = new ol.format.GeoJSON();
var features_Powerline_9 = format_Powerline_9.readFeatures(json_Powerline_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Powerline_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Powerline_9.addFeatures(features_Powerline_9);
var lyr_Powerline_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Powerline_9, 
                style: style_Powerline_9,
                popuplayertitle: 'Powerline',
                interactive: true,
                title: '<img src="styles/legend/Powerline_9.png" /> Powerline'
            });
var format_River_10 = new ol.format.GeoJSON();
var features_River_10 = format_River_10.readFeatures(json_River_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_River_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_River_10.addFeatures(features_River_10);
var lyr_River_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_River_10, 
                style: style_River_10,
                popuplayertitle: 'River',
                interactive: true,
                title: '<img src="styles/legend/River_10.png" /> River'
            });
var format_SurveyControl_11 = new ol.format.GeoJSON();
var features_SurveyControl_11 = format_SurveyControl_11.readFeatures(json_SurveyControl_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SurveyControl_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SurveyControl_11.addFeatures(features_SurveyControl_11);
var lyr_SurveyControl_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SurveyControl_11, 
                style: style_SurveyControl_11,
                popuplayertitle: 'Survey Control',
                interactive: true,
                title: '<img src="styles/legend/SurveyControl_11.png" /> Survey Control'
            });
var format_Building_12 = new ol.format.GeoJSON();
var features_Building_12 = format_Building_12.readFeatures(json_Building_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Building_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Building_12.addFeatures(features_Building_12);
var lyr_Building_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Building_12, 
                style: style_Building_12,
                popuplayertitle: 'Building',
                interactive: true,
                title: '<img src="styles/legend/Building_12.png" /> Building'
            });
var format_RoadReserveExtent_13 = new ol.format.GeoJSON();
var features_RoadReserveExtent_13 = format_RoadReserveExtent_13.readFeatures(json_RoadReserveExtent_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RoadReserveExtent_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RoadReserveExtent_13.addFeatures(features_RoadReserveExtent_13);
var lyr_RoadReserveExtent_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RoadReserveExtent_13, 
                style: style_RoadReserveExtent_13,
                popuplayertitle: 'Road Reserve Extent',
                interactive: true,
                title: '<img src="styles/legend/RoadReserveExtent_13.png" /> Road Reserve Extent'
            });
var format_RoadEdge_14 = new ol.format.GeoJSON();
var features_RoadEdge_14 = format_RoadEdge_14.readFeatures(json_RoadEdge_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RoadEdge_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RoadEdge_14.addFeatures(features_RoadEdge_14);
var lyr_RoadEdge_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RoadEdge_14, 
                style: style_RoadEdge_14,
                popuplayertitle: 'Road Edge',
                interactive: true,
                title: '<img src="styles/legend/RoadEdge_14.png" /> Road Edge'
            });
var format_RoadCentreline_15 = new ol.format.GeoJSON();
var features_RoadCentreline_15 = format_RoadCentreline_15.readFeatures(json_RoadCentreline_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RoadCentreline_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RoadCentreline_15.addFeatures(features_RoadCentreline_15);
var lyr_RoadCentreline_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RoadCentreline_15, 
                style: style_RoadCentreline_15,
                popuplayertitle: 'Road Centreline',
                interactive: true,
                title: '<img src="styles/legend/RoadCentreline_15.png" /> Road Centreline'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Drift_1.setVisible(true);lyr_SpotHeight_2.setVisible(true);lyr_WaterPoint_3.setVisible(true);lyr_Culvert_4.setVisible(true);lyr_DrainageBottom_5.setVisible(true);lyr_DrainageTop_6.setVisible(true);lyr_Fence_7.setVisible(true);lyr_FuelStation_8.setVisible(true);lyr_Powerline_9.setVisible(true);lyr_River_10.setVisible(true);lyr_SurveyControl_11.setVisible(true);lyr_Building_12.setVisible(true);lyr_RoadReserveExtent_13.setVisible(true);lyr_RoadEdge_14.setVisible(true);lyr_RoadCentreline_15.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Drift_1,lyr_SpotHeight_2,lyr_WaterPoint_3,lyr_Culvert_4,lyr_DrainageBottom_5,lyr_DrainageTop_6,lyr_Fence_7,lyr_FuelStation_8,lyr_Powerline_9,lyr_River_10,lyr_SurveyControl_11,lyr_Building_12,lyr_RoadReserveExtent_13,lyr_RoadEdge_14,lyr_RoadCentreline_15];
lyr_Drift_1.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'layer': 'layer', 'olinetype': 'olinetype', 'color': 'color', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'ext': 'ext', 'name': 'name', 'solid': 'solid', });
lyr_SpotHeight_2.set('fieldAliases', {'Id': 'Id', 'Northing': 'Northing', 'Easting': 'Easting', 'Elevation': 'Elevation', 'Descriptio': 'Descriptio', 'layer': 'layer', 'path': 'path', });
lyr_WaterPoint_3.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'layer': 'layer', 'olinetype': 'olinetype', 'lweight': 'lweight', 'ltscale': 'ltscale', 'visible': 'visible', 'ext': 'ext', 'path': 'path', });
lyr_Culvert_4.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'layer': 'layer', 'olinetype': 'olinetype', 'lweight': 'lweight', 'ltscale': 'ltscale', 'visible': 'visible', 'ext': 'ext', 'path': 'path', });
lyr_DrainageBottom_5.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'layer': 'layer', 'olinetype': 'olinetype', 'lweight': 'lweight', 'ltscale': 'ltscale', 'visible': 'visible', 'ext': 'ext', 'path': 'path', });
lyr_DrainageTop_6.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'layer': 'layer', 'olinetype': 'olinetype', 'lweight': 'lweight', 'ltscale': 'ltscale', 'visible': 'visible', 'ext': 'ext', 'path': 'path', });
lyr_Fence_7.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'layer': 'layer', 'olinetype': 'olinetype', 'lweight': 'lweight', 'ltscale': 'ltscale', 'visible': 'visible', 'ext': 'ext', 'path': 'path', });
lyr_FuelStation_8.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'layer': 'layer', 'olinetype': 'olinetype', 'lweight': 'lweight', 'ltscale': 'ltscale', 'visible': 'visible', 'ext': 'ext', 'path': 'path', });
lyr_Powerline_9.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'layer': 'layer', 'olinetype': 'olinetype', 'lweight': 'lweight', 'ltscale': 'ltscale', 'visible': 'visible', 'ext': 'ext', });
lyr_River_10.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'layer': 'layer', 'olinetype': 'olinetype', 'lweight': 'lweight', 'ltscale': 'ltscale', 'visible': 'visible', 'ext': 'ext', 'path': 'path', });
lyr_SurveyControl_11.set('fieldAliases', {'ID': 'ID', 'Northing': 'Northing', 'Easting': 'Easting', 'Elevation': 'Elevation', 'Descriptio': 'Descriptio', });
lyr_Building_12.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'layer': 'layer', 'olinetype': 'olinetype', 'lweight': 'lweight', 'ltscale': 'ltscale', 'visible': 'visible', 'ext': 'ext', 'path': 'path', });
lyr_RoadReserveExtent_13.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'layer': 'layer', 'olinetype': 'olinetype', 'lweight': 'lweight', 'ltscale': 'ltscale', 'visible': 'visible', 'ext': 'ext', 'path': 'path', });
lyr_RoadEdge_14.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'layer': 'layer', 'olinetype': 'olinetype', 'lweight': 'lweight', 'ltscale': 'ltscale', 'visible': 'visible', 'ext': 'ext', 'path': 'path', });
lyr_RoadCentreline_15.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'layer': 'layer', 'olinetype': 'olinetype', 'ltscale': 'ltscale', 'visible': 'visible', 'ext': 'ext', 'path': 'path', });
lyr_Drift_1.set('fieldImages', {'fid': 'TextEdit', 'handle': 'TextEdit', 'block': 'TextEdit', 'etype': 'TextEdit', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'color': 'TextEdit', 'lweight': 'TextEdit', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'ext': 'TextEdit', 'name': 'TextEdit', 'solid': 'TextEdit', });
lyr_SpotHeight_2.set('fieldImages', {'Id': 'TextEdit', 'Northing': 'TextEdit', 'Easting': 'TextEdit', 'Elevation': 'TextEdit', 'Descriptio': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_WaterPoint_3.set('fieldImages', {'fid': 'TextEdit', 'handle': 'TextEdit', 'block': 'TextEdit', 'etype': 'TextEdit', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'lweight': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'TextEdit', 'ext': 'TextEdit', 'path': 'TextEdit', });
lyr_Culvert_4.set('fieldImages', {'fid': 'TextEdit', 'handle': 'TextEdit', 'block': 'TextEdit', 'etype': 'TextEdit', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'lweight': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'TextEdit', 'ext': 'TextEdit', 'path': 'TextEdit', });
lyr_DrainageBottom_5.set('fieldImages', {'fid': 'TextEdit', 'handle': 'TextEdit', 'block': 'TextEdit', 'etype': 'TextEdit', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'lweight': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'TextEdit', 'ext': 'TextEdit', 'path': 'TextEdit', });
lyr_DrainageTop_6.set('fieldImages', {'fid': 'TextEdit', 'handle': 'TextEdit', 'block': 'TextEdit', 'etype': 'TextEdit', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'lweight': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'TextEdit', 'ext': 'TextEdit', 'path': 'TextEdit', });
lyr_Fence_7.set('fieldImages', {'fid': 'TextEdit', 'handle': 'TextEdit', 'block': 'TextEdit', 'etype': 'TextEdit', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'lweight': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'TextEdit', 'ext': 'TextEdit', 'path': 'TextEdit', });
lyr_FuelStation_8.set('fieldImages', {'fid': 'TextEdit', 'handle': 'TextEdit', 'block': 'TextEdit', 'etype': 'TextEdit', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'lweight': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'TextEdit', 'ext': 'TextEdit', 'path': 'TextEdit', });
lyr_Powerline_9.set('fieldImages', {'fid': 'TextEdit', 'handle': 'TextEdit', 'block': 'TextEdit', 'etype': 'TextEdit', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'lweight': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'TextEdit', 'ext': 'TextEdit', });
lyr_River_10.set('fieldImages', {'fid': 'TextEdit', 'handle': 'TextEdit', 'block': 'TextEdit', 'etype': 'TextEdit', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'lweight': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'TextEdit', 'ext': 'TextEdit', 'path': 'TextEdit', });
lyr_SurveyControl_11.set('fieldImages', {'ID': 'TextEdit', 'Northing': 'TextEdit', 'Easting': 'TextEdit', 'Elevation': 'TextEdit', 'Descriptio': 'TextEdit', });
lyr_Building_12.set('fieldImages', {'fid': 'TextEdit', 'handle': 'TextEdit', 'block': 'TextEdit', 'etype': 'TextEdit', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'lweight': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'TextEdit', 'ext': 'TextEdit', 'path': 'TextEdit', });
lyr_RoadReserveExtent_13.set('fieldImages', {'fid': 'TextEdit', 'handle': 'TextEdit', 'block': 'TextEdit', 'etype': 'TextEdit', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'lweight': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'TextEdit', 'ext': 'TextEdit', 'path': 'TextEdit', });
lyr_RoadEdge_14.set('fieldImages', {'fid': 'TextEdit', 'handle': 'TextEdit', 'block': 'TextEdit', 'etype': 'TextEdit', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'lweight': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'TextEdit', 'ext': 'TextEdit', 'path': 'TextEdit', });
lyr_RoadCentreline_15.set('fieldImages', {'fid': 'TextEdit', 'handle': 'TextEdit', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'TextEdit', 'ext': 'TextEdit', 'path': 'TextEdit', });
lyr_Drift_1.set('fieldLabels', {'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'layer': 'hidden field', 'olinetype': 'hidden field', 'color': 'hidden field', 'lweight': 'hidden field', 'linewidth': 'hidden field', 'ltscale': 'hidden field', 'ext': 'hidden field', 'name': 'hidden field', 'solid': 'hidden field', });
lyr_SpotHeight_2.set('fieldLabels', {'Id': 'hidden field', 'Northing': 'hidden field', 'Easting': 'hidden field', 'Elevation': 'no label', 'Descriptio': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_WaterPoint_3.set('fieldLabels', {'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'layer': 'hidden field', 'olinetype': 'hidden field', 'lweight': 'hidden field', 'ltscale': 'hidden field', 'visible': 'hidden field', 'ext': 'hidden field', 'path': 'hidden field', });
lyr_Culvert_4.set('fieldLabels', {'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'layer': 'hidden field', 'olinetype': 'hidden field', 'lweight': 'hidden field', 'ltscale': 'hidden field', 'visible': 'hidden field', 'ext': 'hidden field', 'path': 'hidden field', });
lyr_DrainageBottom_5.set('fieldLabels', {'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'layer': 'hidden field', 'olinetype': 'hidden field', 'lweight': 'hidden field', 'ltscale': 'hidden field', 'visible': 'hidden field', 'ext': 'hidden field', 'path': 'hidden field', });
lyr_DrainageTop_6.set('fieldLabels', {'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'layer': 'hidden field', 'olinetype': 'hidden field', 'lweight': 'hidden field', 'ltscale': 'hidden field', 'visible': 'hidden field', 'ext': 'hidden field', 'path': 'hidden field', });
lyr_Fence_7.set('fieldLabels', {'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'layer': 'hidden field', 'olinetype': 'hidden field', 'lweight': 'hidden field', 'ltscale': 'hidden field', 'visible': 'hidden field', 'ext': 'hidden field', 'path': 'hidden field', });
lyr_FuelStation_8.set('fieldLabels', {'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'layer': 'hidden field', 'olinetype': 'hidden field', 'lweight': 'hidden field', 'ltscale': 'hidden field', 'visible': 'hidden field', 'ext': 'hidden field', 'path': 'hidden field', });
lyr_Powerline_9.set('fieldLabels', {'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'layer': 'hidden field', 'olinetype': 'hidden field', 'lweight': 'hidden field', 'ltscale': 'hidden field', 'visible': 'hidden field', 'ext': 'hidden field', });
lyr_River_10.set('fieldLabels', {'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'layer': 'hidden field', 'olinetype': 'hidden field', 'lweight': 'hidden field', 'ltscale': 'hidden field', 'visible': 'hidden field', 'ext': 'hidden field', 'path': 'hidden field', });
lyr_SurveyControl_11.set('fieldLabels', {'ID': 'hidden field', 'Northing': 'inline label - visible with data', 'Easting': 'inline label - visible with data', 'Elevation': 'inline label - visible with data', 'Descriptio': 'inline label - visible with data', });
lyr_Building_12.set('fieldLabels', {'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'layer': 'hidden field', 'olinetype': 'hidden field', 'lweight': 'hidden field', 'ltscale': 'hidden field', 'visible': 'hidden field', 'ext': 'hidden field', 'path': 'hidden field', });
lyr_RoadReserveExtent_13.set('fieldLabels', {'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'layer': 'hidden field', 'olinetype': 'hidden field', 'lweight': 'hidden field', 'ltscale': 'hidden field', 'visible': 'hidden field', 'ext': 'hidden field', 'path': 'hidden field', });
lyr_RoadEdge_14.set('fieldLabels', {'fid': 'hidden field', 'handle': 'hidden field', 'block': 'hidden field', 'etype': 'hidden field', 'layer': 'hidden field', 'olinetype': 'hidden field', 'lweight': 'hidden field', 'ltscale': 'hidden field', 'visible': 'hidden field', 'ext': 'hidden field', 'path': 'hidden field', });
lyr_RoadCentreline_15.set('fieldLabels', {'fid': 'hidden field', 'handle': 'hidden field', 'layer': 'hidden field', 'olinetype': 'hidden field', 'ltscale': 'hidden field', 'visible': 'hidden field', 'ext': 'hidden field', 'path': 'hidden field', });
lyr_RoadCentreline_15.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});