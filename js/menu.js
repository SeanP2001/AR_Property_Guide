
// ------------------------------------ H A N D L E   M E N U   S E L E C T I O N ------------------------------------
function handleMenuSelection(selection) // Load and display the data field selected in the menu
{
    menuButton = document.getElementById("menu-button"); // Get the Menu Button

    removeKey();                                         // Delete the existing key 

    getData("./HousesDataset.csv", [selection, "Latitude", "Longitude"])  // Load the selected data from the dataset
    .then(dataset =>                           // Once the dataset has been returned from the getData function, do the following
    {    
        var data = dataset.map(row => row[0]); // Get the data from the first column of the dataset

        var dataWithoutMissingVals = data.filter(val => !isNaN(val)); // Get a copy of the dataset with all missing values removed
        console.log(dataWithoutMissingVals);

        var noOfBins;
        var binColours = [];
        var binNames = [];
        var thresholds = [];
        var bins = [];
        var scale;
        var reverse;          // Whether the order is reversed
        var formatting;       // How the data should be formatted
    
        switch(selection)     // Based on the field selected, set the number of bins, bin colours, thresholds, bins and scale
        {
            case "Price":
                menuButton.textContent = "House Price";                        // Update the menu button text to reflect the selected field
                noOfBins = noOfPriceBins;
                binColours = priceBinColours;
                thresholds = getThresholds(dataWithoutMissingVals, noOfBins);  // Get the threshold values for the bins
                bins = getBins(data, thresholds);                              // Get the bin numbers of each datapoint in the data
                scale = priceScale;
                reverse = false;
                formatting = priceFormatting;
                break;
            case "Bedrooms":
                menuButton.textContent = "Number of Bedrooms";                 // Update the menu button text to reflect the selected field

                var minValue = Math.min(...dataWithoutMissingVals);            // Get the smallest value in the data
                var maxValue = Math.max(...dataWithoutMissingVals);            // Get the largest value in the data
                
                thresholds = getRangeArray(minValue, maxValue + 1, 1);     
                binNames = getRangeArray(minValue, maxValue, 1);           
                noOfBins = binNames.length;
                
                // Select the bin colours from the middle of the colour range
                var firstBinNo = Math.floor((bedroomsBinColours.length - noOfBins) / 2);
                var lastBinNo = firstBinNo + noOfBins;
                binColours = bedroomsBinColours.slice(firstBinNo, lastBinNo);

                bins = getBins(data, thresholds);                              // Get the bin numbers of each datapoint in the data
                
                thresholds = [];                                               // Clear the thresholds so they are not rendered above the key
                scale = bedroomsScale;
                reverse = false;
                formatting = bedroomsFormatting;
                break;
            case "Bathrooms":
                menuButton.textContent = "Number of Bathrooms";                // Update the menu button text to reflect the selected field

                var minValue = Math.min(...dataWithoutMissingVals);            // Get the smallest value in the data
                var maxValue = Math.max(...dataWithoutMissingVals);            // Get the largest value in the data
                
                thresholds = getRangeArray(minValue, maxValue + 1, 1);     
                binNames = getRangeArray(minValue, maxValue, 1);           
                noOfBins = binNames.length;
                
                // Select the bin colours from the middle of the colour range
                var firstBinNo = Math.floor((bathroomsBinColours.length - noOfBins) / 2);
                var lastBinNo = firstBinNo + noOfBins;
                binColours = bathroomsBinColours.slice(firstBinNo, lastBinNo);

                bins = getBins(data, thresholds);                              // Get the bin numbers of each datapoint in the data
                
                thresholds = [];                                               // Clear the thresholds so they are not rendered above the key
                scale = bathroomsScale;
                reverse = false;
                formatting = bathroomsFormatting;
                break;
            case "Year":
                menuButton.textContent = "Date Last Sold";                     // Update the menu button text to reflect the selected field
                noOfBins = noOfYearBins;
                binColours = yearBinColours;
                thresholds = getThresholds(dataWithoutMissingVals, noOfBins);  // Get the threshold values for the bins
                bins = getBins(data, thresholds);                              // Get the bin numbers of each datapoint in the data
                scale = yearScale;
                reverse = false;
                formatting = yearFormatting;
                break;
            case "EPC_Score":
                menuButton.textContent = "EPC";                                // Update the menu button text to reflect the selected field
                noOfBins = noOfEPCBins;
                binColours = epcBinColours;
                thresholds = epcThresholds;                                    // Use pre-defined threshold values
                bins = getBins(data, thresholds);                              // Get the bin numbers of each datapoint in the data
                binNames = epcBinNames;
                scale = epcScale;
                reverse = false;
                formatting = epcFormatting;
                break;
            case "EPC_Potential_Score":
                menuButton.textContent = "EPC Potential";                      // Update the menu button text to reflect the selected field
                noOfBins = noOfEPCBins;
                binColours = epcBinColours;
                thresholds = epcThresholds;                                    // Use pre-defined threshold values
                bins = getBins(data, thresholds);                              // Get the bin numbers of each datapoint in the data
                binNames = epcBinNames;
                scale = epcScale;
                reverse = false;
                formatting = epcFormatting;
                break;
            case "Floor_Area_(ft^2)":
                menuButton.textContent = "Floor Area (ft²)";                   // Update the menu button text to reflect the selected field
                noOfBins = noOfFloorAreaBins;
                binColours = floorAreaBinColours;
                thresholds = getThresholds(dataWithoutMissingVals, noOfBins);  // Get the threshold values for the bins
                bins = getBins(data, thresholds);                              // Get the bin numbers of each datapoint in the data
                scale = floorAreaScale;
                reverse = false;
                formatting = floorAreaFormatting;
                break;
            }
    
        renderKey(thresholds, formatting, binColours, binNames, reverse); // Render the key at the bottom of the screen
    
        //createBars(data, noOfBins, bins, binColours, scale, reverse); // Create bars which correspond with the data provided
        createWaypoints(dataset, noOfBins, bins, binColours, reverse); // Create waypoints which correspond with the dataset provided
    });
}


// ---------------------------------------------- T O G G L E   M E N U ----------------------------------------------
function toggleMenu() // Toggle the visibility of the menu contents
{
    var menuContent = document.getElementById("fields-menu");  // Get the menu content
    menuContent.classList.toggle("show");                      // And toggle its visibility
}

// ----------------------------------------------- C L O S E   M E N U -----------------------------------------------
window.onclick = function(event) // Close the menu if the user clicks anywhere other than the menu button
{
    if (!event.target.matches('.menu-button'))                      // If the user did not click the menu button
    {
        var menu = document.getElementsByClassName("menu-content"); // Get the menu content

        for (var i = 0; i < menu.length; i++)                       // Go through each element in the menu and hide them
        {
            var openMenu = menu[i];
            if (openMenu.classList.contains('show')) 
            {
                openMenu.classList.remove('show');
            }
        }
    }
}

