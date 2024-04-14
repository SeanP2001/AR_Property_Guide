
// ------------------------------------------------- G E T   D A T A -------------------------------------------------
function getData(file, field) // Load the specified field of data from the specified file, creating colour coded objects for each instance
{   
  return new Promise((resolve) =>              // Return a value, once the promise has been resolved (once the operation is complete)
  {
    d3.csv(file, function(data)                // Load the data from the csv file
    {                  
      console.log(data);                       // Print the data to the console

      var dataset = [];                        // Array to store the dataset

      for(let i = 0; i < data.length; i++) {   // Go through each element in the data
        dataset.push(Number(data[i][field]));  // Get the data from the specified field, convert it to a number and add it to the dataset array
      }
      
      console.log(dataset);                    // Print the dataset array to the console
      console.log(dataset.length);             // Print the number of elements in the dataset 

      resolve(dataset);                        // Return the dataset array containing the data from the specified field (resolving the promise)
    });
  });    
}