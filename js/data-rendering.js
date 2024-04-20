// ---------------------------------------------- C R E A T E   B A R S ----------------------------------------------
function createBars(data, noOfBins, bins, binColours, scale, reverse) // Create bars which represent the data
{
  d3.selectAll("a-box.bar").remove();        // Remove any leftover objects from previous calls to createBars

  // Select the A-frame entity in the html with the id="plot"
  var content = d3.select("#plot");

  // Use D3's enter/update/exit pattern to draw and bind dom elements
  var myBars = content.selectAll("a-box.bar")      // Create a variable (myBars), selecting all of the <a-box> elements with the class "bar" within the content element (There are none initially)
                .data(data)                        // Bind each element in the data array to one of the selected dom elements
                .enter()                           // Prepare for new elements to be appended
                .append("a-box")                   // Append children <a-box> elements for each element in the data array
                .classed("bar", true);             // Add the "bar" class to each newly created <a-box> elements

  // Initialise variables
  var y = 1;
  var z = 1;
  var m = 0;

  // Get the square root of the data length to get the grid width/heights (e.g. 5x5)
  var gridMax = Math.sqrt(data.length);

  // For each <a-box> created earlier, set the attributes
  // All functions are callback functions which are invoked implicitly by D3 during attribute setting where:
  //  d = The data bound to the current element (provided by D3 during execution)
  //  i = The index of the current element in the selection (provided by D3 during execution)
  myBars.attr({
    position: function(d,i) {
      var x=i % gridMax;                   // Layout the bars in a square (5x5) grid
      var z=Math.floor(i/gridMax);         // Layout the bars in a square (5x5) grid
      var y=d * scale / 2;                 // Position the bars so that they all sit on a plane
      m ++;                                // Increment m (the bar count)
      return x + " " + y + " " + z;        // Return the position string to set the position
    },
    height: function(d){return d*scale;},       // Set the height of the bar based on the data value (half scale)
    width: 0.9,                                 // Set the width to a const value (0.9)
    depth: 0.9,                                 // Set the depth to a const value (0.9)
    color: function(d,i){                       // Set the colour of the bar based on the colour of the bin given to the data point (can reverse order)
      if(reverse){
        return binColours[noOfBins - 1 - bins[i]];
      } else {
        return binColours[bins[i]];
      }
    }                           
  });
}


// ----------------------------------------- C R E A T E   W A Y P O I N T S -----------------------------------------
function createWaypoints(dataset, noOfBins, bins, binColours, reverse) // Create waypoints which represent the dataset
{
  d3.selectAll("a-entity.waypoint").remove();   // Remove any leftover objects from previous calls to createWaypoints

  // Select the A-frame entity in the html with the id="waypoint"
  var content = d3.select("#waypoints");

  // Use D3's enter/update/exit pattern to draw and bind dom elements
  var myWaypoints = content.selectAll("a-entity.waypoint")   // Create a variable (myWaypoints), selecting all of the <a-box> elements with the class "bar" within the content element (There are none initially)
                .data(dataset)                               // Bind each element in the dataset array to one of the selected dom elements
                .enter()                                     // Prepare for new elements to be appended
                .append("a-entity")                          // Append children <a-entity> elements for each element in the dataset array
                .classed("waypoint", true);                  // Add the "waypoint" class to each newly created <a-box> elements


  // For each <a-entity> created earlier, set the attributes
  // All functions are callback functions which are invoked implicitly by D3 during attribute setting where:
  //  d = The data bound to the current element (provided by D3 during execution)
  //  i = The index of the current element in the selection (provided by D3 during execution)
  myWaypoints.attr({
    geometry: 'primitive: cone',                             // Each waypoint is a cone
    rotation: "180 0 0",                                     // which is upside down
    radiusBottom: waypointRadius,
    height: waypointHeight,
    "gps-new-entity-place": function(d) {                    // Set the GPS position based on the latitude and longitude in the dataset
      return "latitude: " + d[1] + "; longitude: " + d[2];
    },
    position: "0 " + waypointVerticalPos + " 0",             // Change the vertical position so the waypoints appear above the houses
    color: function(d,i){                                    // Set the colour of the bar based on the colour of the bin given to the data point (can reverse order)
      if(isNaN(d[0]))                                         // NaN vals are grey waypoints
      {
        return naEntryColour;
      }
      if(reverse){
        return binColours[noOfBins - 1 - bins[i]];
      } else {
        return binColours[bins[i]];
      }
    }                           
  });
}