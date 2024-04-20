// ---------------------------------------------- C R E A T E   B A R S ----------------------------------------------
function createBars(dataset, noOfBins, bins, binColours, scale, reverse) // Create bars which represent the dataset
{
  d3.selectAll("a-box.bar").remove();        // Remove any leftover objects from previous calls to createBars

  // Select the A-frame entity in the html with the id="plot"
  var content = d3.select("#plot");

  // Use D3's enter/update/exit pattern to draw and bind dom elements
  var myBars = content.selectAll("a-box.bar")      // Create a variable (myBars), selecting all of the <a-box> elements with the class "bar" within the content element (There are none initially)
                .data(dataset)                     // Bind each element in the dataset array to one of the selected dom elements
                .enter()                           // Prepare for new elements to be appended
                .append("a-box")                   // Append children <a-box> elements for each element in the dataset array
                .classed("bar", true);             // Add the "bar" class to each newly created <a-box> elements

  // Initialise variables
  var y = 1;
  var z = 1;
  var m = 0;

  // Get the square root of the dataset length to get the grid width/heights (e.g. 5x5)
  var gridMax = Math.sqrt(dataset.length);

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
    width: function(d){return 0.9;},            // Set the width to a const value (0.9)
    depth: function(d){return 0.9;},            // Set the depth to a const value (0.9)
    color: function(d,i){                       // Set the colour of the bar based on the colour of the bin given to the data point (can reverse order)
        if(d == -1)               // NaN vals are grey bars
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