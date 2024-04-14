
// ------------------------------------ H A N D L E   M E N U   S E L E C T I O N ------------------------------------
function handleMenuSelection(selection) // Load and display the data field selected in the menu
{
    menuButton = document.getElementById("menu-button"); // Get the Menu Button
    menuButton.textContent = selection;                  // And update its text to reflect the selected field

    removeKey();                                         // Delete the existing key 

    getData("./SimpleData.csv", selection)     // Load the selected data from the dataset
    .then(dataset =>                           // Once the dataset has been returned from the getData function, do the following
    {    
        console.log(dataset);

        var noOfBins;
        var binColours = [];
        var binNames = [];
        var thresholds = [];
        var bins = [];
        var scale;
        var reverse;  // Whether the order is reversed
        var formatting;
    
        switch(selection) {                                    // Based on the field selected, set the number of bins, bin colours, thresholds, bins and scale
            case "Age":
                noOfBins = noOfAgeBins;
                binColours = ageBinColours;
                thresholds = getThresholds(dataset, noOfBins);  // Get the threshold values for the bins
                bins = getBins(dataset, thresholds);            // Get the bin numbers of each datapoint in the dataset
                scale = ageScale;
                reverse = false;
                formatting = ageFormatting;
                break;
            case "Score":
                noOfBins = noOfScoreBins;
                binColours = scoreBinColours;
                thresholds = scoreThresholds;  
                bins = getBins(dataset, thresholds);            // Get the bin numbers of each datapoint in the dataset
                binNames = scoreBinNames;
                scale = scoreScale;
                reverse = false;
                formatting = scoreFormatting;
                break;
            case "Salary":
                noOfBins = noOfSalaryBins;
                binColours = salaryBinColours;
                thresholds = getThresholds(dataset, noOfBins);  // Get the threshold values for the bins
                bins = getBins(dataset, thresholds);            // Get the bin numbers of each datapoint in the dataset
                scale = salaryScale;
                reverse = false;
                formatting = salaryFormatting;
                break;
            }
    
        renderKey(thresholds, formatting, binColours, binNames, reverse); // Render the key at the bottom of the screen
    
        createBars(dataset, noOfBins, bins, binColours, scale, reverse); // Create bars which correspond with the data provided
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

