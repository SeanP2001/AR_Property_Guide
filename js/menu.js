
// ------------------------------------ H A N D L E   M E N U   S E L E C T I O N ------------------------------------
function handleMenuSelection(selection) // Load the correct data based on which field has been selected in the menu
{
    menuButton = document.getElementById("menu-button"); // Get the Menu Button
    menuButton.textContent = selection;                  // And update its text to reflect the selected field

    removeKey();                                         // Delete the existing key 

    loadData("./SimpleData.csv", selection);             // Load the selected data from the dataset, creating new objects and a new key
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

