$(document).ready(function() {

  // Place JavaScript code here...
  // 
  // 
  var viewerFactoryConfig = {

    environment: 'AutodeskProduction'
  };

  var viewerConfig = {

      lightPreset: 8,
      viewerType: 'Viewer3D', //['Viewer3D', 'GuiViewer3D']
      qualityLevel: [true, true],
      navigationTool:'freeorbit',
      progressiveRendering: true,
      backgroundColor:[3,4,5, 250, 250, 250],
      urn : 'dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6bW9kZWwtYXMtYS1zZXJ2aWNlMjAxNTAxMjYvU3VzcGVuc2lvbi5kd2Y='
  };

  var viewerFactory = new Autodesk.ADN.Toolkit.Viewer.ViewerFactory (
      'http://still-spire-1606.herokuapp.com/api/rawtoken',
      viewerFactoryConfig);

  viewerFactory.onInitialized (function() {

      viewerFactory.getViewablePath(viewerConfig.urn,
          function(pathCollection){

              //the DOM container
              var viewerContainer = document.getElementById("viewer");

              viewer = viewerFactory.createViewer(
                      viewerContainer,
                      viewerConfig);

              //loads the first 3d or 2d path available
              if(pathCollection.path3d.length > 0) {

                  viewer.load(pathCollection.path3d[0].path);
              }

              else if(pathCollection.path2d.length > 0) {

                  viewer.load(pathCollection.path2d[0].path);
              }
          },
          function(error) {

              console.log(error);
          });



  });

});


