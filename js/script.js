d3.csv("./SimpleData.csv", function(data) {   // Load the data from the csv file
  console.log(data);                          // Print the data to the console

// -------------------------------------------- J S O N   T O   A R R A Y --------------------------------------------
  var dataset = [];                           // Array to store the dataset

  for(let i = 0; i < data.length; i++) {      // Go through each element in the data
    dataset.push(Number(data[i].Age));        // Get the "Age", convert it to a number and add it to the dataset array
  }
  
  console.log(dataset);                       // Print the dataset array to the console
  console.log(dataset.length);                // Print the number of elements in the dataset 


// ---------------------------------------------- C R E A T E   B A R S ----------------------------------------------
  // Select the A-frame entity in the html with the id="plot"
  var content = d3.select("#plot");

  // Use D3's enter/update/exit pattern to draw and bind dom elements
  var myBars = content.selectAll("a-box.bar")      // Create a variable (myBars), selecting all of the <a-box> elements with the class "bar" within the content element (There are none initially)
                .data(dataset)                     // Bind each element in the dataset array to one of the selected dom elements
                .enter()                           // Prepare for new elements to be appended
                .append("a-box")                   // Append children <a-box> elements for each element in the dataset array
                .classed("bar", true);             // Add the "bar" class to each newly created <a-box> elements


// ------------------------------------------------- B I N   D A T A -------------------------------------------------
  
  const numBins = 7;     // Set the number of bins
  const binColours = [   // Set the colours for each bin
    '#00823A', //Green
    '#299E29', //Mid Green
    '#9FCC3D', //Light Green
    '#FFF300', //Yellow
    '#F9AE1F', //Orange
    '#ED6A26', //Bright Orange
    '#E51E25'  //Red
  ]; 
  const reverse = false;  // Set whether the order is reversed

  // Get the range of the dataset
  const minValue = d3.min(dataset);
  const maxValue = d3.max(dataset);
  console.log("min: " + minValue + ", max: " + maxValue);

  // Create a colour scale
  const colourScale = d3.scale.linear()
      .domain([minValue, maxValue])  // Set the scale of the input domain (The data value)
      .range([0, numBins-1]);        // Set the output range (bin number)


// --------------------------------------- S E T   B A R   A T T R I B U T E S ---------------------------------------
  // Initialise variables
  var y = 1;
  var z = 1;
  var m = 0;

  const scale = 0.25;  // Scale of the bar heights

  // Get the square root of the dataset length to get the grid width/heights (e.g. 5x5)
  var gridMax = Math.sqrt(dataset.length);

  // For each <a-box> created earlier, set the attributes
  // All functions are callback functions which are invoked implicitly by D3 during attribute setting where:
  //  d = The data bound to the current element (provided by D3 during execution)
  //  i = The index of the current element in the selection (provided by D3 during execution)
  myBars.attr({
    position: function(d,i) {
        x=i % gridMax;                   // Layout the bars in a square (5x5) grid
        z=Math.floor(i/gridMax);         // Layout the bars in a square (5x5) grid
        y=d * scale / 2;                 // Position the bars so that they all sit on a plane
        m ++;                            // Increment m (the bar count)
        return x + " " + y + " " + z;    // Return the position string to set the position
      },
    height: function(d){return d*scale;},       // Set the height of the bar based on the data value (half scale)
    width: function(d){return 0.9;},            // Set the width to a const value (0.9)
    depth: function(d){return 0.9;},            // Set the depth to a const value (0.9)
    color: function(d){                         // Set the colour of the bar based on the bin number and the colour scale (can reverse order)
        if(reverse){
          return binColours[Math.floor(colourScale(d))];
        } else {
          return binColours[numBins - 1 - Math.floor(colourScale(d))];
        }
      }                           
  });
});