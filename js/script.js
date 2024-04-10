import {renderKey} from './key.js';

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
  
  const noOfBins = 7;     // Set the number of bins
  const binColours = [   // Set the colours for each bin
    '#E51E25', //Red
    '#ED6A26', //Bright Orange
    '#F9AE1F', //Orange
    '#FFF300', //Yellow
    '#9FCC3D', //Light Green
    '#299E29', //Mid Green
    '#00823A'  //Green
  ]; 
  var reverse = false;  // Set whether the order is reversed

  var thresholds = getThresholds(dataset, noOfBins);  // Get the threshold values for the bins
  var bins = getBins(dataset, thresholds);            // Get the bin numbers of each datapoint in the dataset

  renderKey(thresholds, binColours, reverse);         // Render the key at the bottom of the screen


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
        if(reverse){
          return binColours[noOfBins - 1 - bins[i]];
        } else {
          return binColours[bins[i]];
        }
      }                           
  });
});


// ------------------------------------------------- G E T   B I N S -------------------------------------------------
function getBins(data, thresholds)  // Get an array containing the bin number for each datapoint, given a set of threshold values
{
  var bins = [];                                                          // Create an array to contain the bin numbers

  for (var i = 0; i < data.length; i++)                                   // Iterate through each index in the dataset
  {
    for(var bin = 0; bin < (thresholds.length-1); bin++)                  // Iterate through each bin number
    {
      if ((data[i] >= thresholds[bin]) && (data[i] < thresholds[bin+1]))  // If the datapoint is within the lower and upper thresholds for this bin
      {
        bins.push(bin);                                                   // Append the bin number to the array of bin numbers
        break;                                                            // Move onto the next datapoint
      } 
    }
  }

  console.log(bins);
  return bins;                                                            // Return the array containing the bin numbers for each datapoint
}


// ------------------------------------------- G E T   T H R E S H O L D S -------------------------------------------
function getThresholds(data, noOfBins)  // Get an array containing the thresholds for the bins
{
  var thresholds = [];                            // Create an array to store the threshold values

  var minValue = Math.min(...data);                 // Get the lowest value in the dataset
  var maxValue = Math.max(...data);                 // Get the highest value in the dataset

  var binRange = (maxValue - minValue)/noOfBins;    // Calculate the range of each bin

  for(var bin = 0; bin < noOfBins; bin++)           // Iterate through each bin
  {
    thresholds.push(minValue + (binRange * bin));   // Calculate the lower threshold and append it to the array of thresholds
  }

  thresholds.push(maxValue+0.1);                    // Add the upper threshold for the top bin (+0.1 to include values equal to the top threshold)

  console.log(thresholds);
  return thresholds;                                //  Return the array containing the threshold values for the bins
}


