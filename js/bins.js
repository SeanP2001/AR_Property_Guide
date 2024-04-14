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