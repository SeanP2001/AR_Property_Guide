
// ------------------------------------------------- G E T   D A T A -------------------------------------------------
function getData(file, fields) // Load the specified fields of data from the specified file, returning an array of arrays
{   
  return new Promise((resolve) =>              // Return a value, once the promise has been resolved (once the operation is complete)
  {
    d3.csv(file, function(data)                // Load the data from the csv file
    {                  
      console.log(data);                       // Print the data to the console

      var dataset = [];                        // Array to store the dataset

      for(let i = 0; i < data.length; i++)     // Go through each row in the data
      {   
        var dataRow = [];                      // Array to store one row of data

        fields.forEach(field =>                // Then for each field requested
        {
          if(data[i][field] == '')             // Represent missing values as NaN
          {
            dataRow.push(NaN);
          }
          else                                   // If the value is present
          {
            dataRow.push(Number(data[i][field])); // Get the data from the specified field, convert it to a number and add it to the data row array
          }
        });

        dataset.push(dataRow);                 // Add the data row to the main dataset array
      }
      
      console.log(dataset);                    // Print the dataset array to the console
      console.log(dataset.length);             // Print the number of elements in the dataset 

      resolve(dataset);                        // Return the dataset array containing the data from the specified fields (resolving the promise)
    });
  });    
}