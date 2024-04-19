
// ----------------------------------------------- R E N D E R   K E Y -----------------------------------------------
function renderKey(thresholds, formatting, binColours, binNames, reverse) // Render the key 
{
  renderKeyThresholds(thresholds, formatting);         // Render the text above the key, indicating the threshold values
  renderKeyBoxes(binColours, binNames, reverse);     // Render the boxes which show the colour for each bin
}


// ------------------------------------ R E N D E R   K E Y   T H R E S H O L D S ------------------------------------
function renderKeyThresholds(thresholds, formatting) // Render the threshold labels for the key 
{
  var thresholdsContainer = document.getElementById("key-labels");      // Get the div element which is intended to constain the key labels
  var noOfThresholds = thresholds.length;                               // Get the number of labels which need to be rendered

  for(var i = 0; i < noOfThresholds; i++)                               // Go through each threshold
  {
    var label = document.createElement("div");                          // Creating a div element

    label.textContent = getFormattedValue(thresholds[i], formatting);   // And Setting it to contain the formatted threshold value text

    label.style.width = thresholdsContainer.clientWidth/noOfThresholds; // Set the corect width
    label.style.textAlign = "center";                                   // Center align the text within the div

    thresholdsContainer.appendChild(label);                             // Add it to the threshold label container
  }
}


// ----------------------------------------- R E N D E R   K E Y   B O X E S -----------------------------------------
function renderKeyBoxes(binColours, binNames, reverse) // Render the boxes which show the colour and name for each bin
{
  var boxContainer = document.getElementById("key-boxes");     // Get the div element which is intended to contain the key boxes

  var noOfBoxes = binColours.length;                           // Get the number of boxes which need to be rendered

  if(reverse)                                                  // Flip the box order if the scale is reversed
  {
    for(var i = noOfBoxes-1; i >= 0; i--)                                                // Go through each box
    {
      var box = createKeyBox(boxContainer.clientWidth/(noOfBoxes+1), 20, binColours[i], binNames[i]); // Creating a box of the correct colour and name
      boxContainer.appendChild(box);                                                     // And adding it to the box container
    }
  }
  else
  {
    for(var i = 0; i < noOfBoxes; i++)
    {
      var box = createKeyBox(boxContainer.clientWidth/(noOfBoxes+1), 20, binColours[i], binNames[i]);
      boxContainer.appendChild(box);
    }
  }
}


// ------------------------------------------- C R E A T E   K E Y   B O X -------------------------------------------
function createKeyBox(width, height, colour, text)  // Create and return a div element with the specified attributes 
{
  var box = document.createElement("div");    // Create the div

  box.style.width = width + "px";             // Set to the specified width
  box.style.height = height + "px";           // Set to the specified height
  box.style.backgroundColor = colour;         // Set to the specified colour
  box.style.color = "black";                  // Set the font in the box to be black
  box.textContent = text;                     // Set the specified text content

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


// -------------------------------------- G E T   F O R M A T T E D   V A L U E --------------------------------------
function getFormattedValue(value, formatting)  // Return the value with the specified formatting applied
{
  switch(formatting)
  {
    case NumberFormatting.NONE:
      return value.toFixed(0);
    case NumberFormatting.COMMA_SEPARATED:
      return new Intl.NumberFormat("en-GB", {style: "decimal", maximumFractionDigits: 0}).format(value.toFixed(0));
    case NumberFormatting.CURRENCY:
      return new Intl.NumberFormat("en-GB", {style: "currency", currency: "GBP", maximumFractionDigits: 1}).format(value.toFixed(1));
    case NumberFormatting.ABBREVIATED_CURRENCY:
      const suffix = ["", "k", "m"];
      var suffixNo = 0;
      var coef = value;

      while((coef/1000) >= 1)   
      {
        coef = coef/1000;
        suffixNo = suffixNo + 1;
      }

      return getFormattedValue(coef, NumberFormatting.CURRENCY) + suffix[suffixNo];
    case NumberFormatting.CURRENCY_DECIMAL:
      return new Intl.NumberFormat("en-GB", {style: "currency", currency: "GBP", minimumFractionDigits: 2, maximumFractionDigits: 2}).format(value.toFixed(2));
    case NumberFormatting.DECIMAL:
      return new Intl.NumberFormat("en-GB", {style: "decimal", minimumFractionDigits: 2, maximumFractionDigits: 2}).format(value.toFixed(2));
    case NumberFormatting.PERCENTAGE:
      return new Intl.NumberFormat("en-GB", {style: "percent"}).format(value.toFixed(0)/100);
    default:
      return value;
  }
}