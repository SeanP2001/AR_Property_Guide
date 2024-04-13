
// ----------------------------------------------- R E N D E R   K E Y -----------------------------------------------
function renderKey(thresholds, binColours, reverse) // Render the key 
{
  renderKeyThresholds(thresholds);         // Render the text above the key, indicating the threshold values
  renderKeyBoxes(binColours, reverse);     // Render the boxes which show the colour for each bin
}


// ------------------------------------ R E N D E R   K E Y   T H R E S H O L D S ------------------------------------
function renderKeyThresholds(thresholds) // Render the threshold labels for the key 
{
    var thresholdsContainer = document.getElementById("key-labels");      // Get the div element which is intended to constain the key labels
    var noOfThresholds = thresholds.length;                               // Get th number of labels which need to be rendered

    for(var i = 0; i < noOfThresholds; i++)                               // Go through each threshold
    {
      var label = document.createElement("div");                          // Creating a div element
 
      label.textContent = thresholds[i].toFixed(0);                       // And Setting it to contain the threshold value text

      label.style.width = thresholdsContainer.clientWidth/noOfThresholds; // Set the corect width
      label.style.textAlign = "center";                                   // Center align the text within the div

      thresholdsContainer.appendChild(label);                             // Add it to the threshold label container
    }
}


// ----------------------------------------- R E N D E R   K E Y   B O X E S -----------------------------------------
function renderKeyBoxes(binColours, reverse) // Render the boxes which show the colour for each bin
{
  var boxContainer = document.getElementById("key-boxes");     // Get the div element which is intended to contain the key boxes

  var noOfBoxes = binColours.length;                           // Get the number of boxes which need to be rendered

  if(reverse)                                                  // Flip the box order if the scale is reversed
  {
    for(var i = noOfBoxes-1; i >= 0; i--)                                                // Go through each box
    {
      var box = createKeyBox(boxContainer.clientWidth/(noOfBoxes+1), 20, binColours[i]); // Creating a box of the correct colour
      boxContainer.appendChild(box);                                                     // And adding it to the box container
    }
  }
  else
  {
    for(var i = 0; i < noOfBoxes; i++)
    {
      var box = createKeyBox(boxContainer.clientWidth/(noOfBoxes+1), 20, binColours[i]);
      boxContainer.appendChild(box);
    }
  }
}


// ------------------------------------------- C R E A T E   K E Y   B O X -------------------------------------------
function createKeyBox(width, height, colour)  // Create and return a div element with the specified attributes 
{
  var box = document.createElement("div");    // Create the div

  box.style.width = width + "px";             // Set to the specified width
  box.style.height = height + "px";           // Set to the specified height
  box.style.backgroundColor = colour;         // Set to the specified colour

  return box;                                 // Return the div element
}


// ----------------------------------------------- R E M O V E   K E Y -----------------------------------------------
function removeKey() // Remove all of the elements within the "key-labels" and "key-boxes divs
{
  var labels = document.getElementById("key-labels");  // Get the div element containing all the threshold labels for the key
  var boxes = document.getElementById("key-boxes");    // Get the div element containing all the coloured boxes for the key
 
  while(labels.firstChild)                             // Go through each child element in the labels
  {                            
    labels.removeChild(labels.firstChild);             // and remove them
  }

  while(boxes.firstChild)                              // Go through each child element in the boxes
  {
    boxes.removeChild(boxes.firstChild);               // and remove them
  }
}