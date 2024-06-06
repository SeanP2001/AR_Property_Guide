# AR Property Guide

<img src="./Images/Concept_Image_Cropped.png" style="width: 100%;">

View the deployed application [here](https://seanp2001.github.io/AR_Property_Guide/).

**Note:** To see waypoints at houses near you, update the `HousesDataset` to add information about houses in your area.

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Introduction](#introduction)
- [Application Features](#application-features)
- [Development](#development)
- [Final Application](#final-application)
- [Evaluation](#evaluation)
- [Further Work](#further-work)

## Introduction

This web-based AR application was designed to display otherwise invisible property information in context. It allows prospective home buyers to explore an area and learn about the property market, potentially identifying houses of interest. The application's web-based nature allows it to be used on any device without installation. It is built using A-Frame, AR.js, and D3.js.

## Application Features

The user can select and view data from the following categories:
- House Price 
- Number of Bedrooms
- Number of Bathrooms
- Date Last Sold
- EPC (Energy Performance Certificate)
- Potential EPC
- Floor Area

Each property is ranked on how it compares to others in the selected category, and the waypoint above each property is coloured based on its rank. The key at the bottom of the screen indicates the value, or range of values, each colour represents.

## Development

<div style="display: flex; justify-content: space-between;">
    <img src="./Images/V0.3.0 Binning.png" style="width: 32%;">
    <img src="./Images/V0.4.0 Key.png" style="width: 32%;">
    <img src="./Images/V0.5.0 Menu.png" style="width: 32%;">
</div>
<div style="display: flex; justify-content: space-between;">
    <img src="./Images/V0.5.2 Number Formatting and Bin Names.png" style="width: 32%;">
    <img src="./Images/V0.5.3 Abbreviated Currency Formatting.png" style="width: 32%;">
    <img src="./Images/V0.6.0 Added Houses Dataset.png" style="width: 32%;">
</div>

| **Milestone** | **Description** |
|---------------|--------------------------------------------------|
| V0.1          | Curate Houses Dataset                            |
| V0.2          | Set Up Marker-Based Bar Chart for Simple Dataset |
| V0.3          | Bin Data                                         |
| V0.4          | Generate and Render Key                          |
| V0.5          | Add Field Selection Menu & Number Formatting     |
| V0.6          | Use The Houses Dataset & Update Data Categories  |
| V0.7          | Use Location-Based Waypoints                     |
| V0.8          | Documentation                                    |


## Final Application

<div style="display: flex; justify-content: space-between;">
    <img src="./Images/V0.7.6 Menu.png" style="width: 24%;">
    <img src="./Images/V0.7.6 House Prices.png" style="width: 24%;">
    <img src="./Images/V0.7.6 Bedrooms.png" style="width: 24%;">
    <img src="./Images/V0.7.6 Bathrooms.png" style="width: 24%;">
</div>
<div style="display: flex; justify-content: space-between;">
    <img src="./Images/V0.7.6 Date Sold.png" style="width: 24%;">
    <img src="./Images/V0.7.6 EPC.png" style="width: 24%;">
    <img src="./Images/V0.7.6 EPC Potential.png" style="width: 24%;">
    <img src="./Images/V0.7.6 Floor Area.png" style="width: 24%;">
</div>

The application is able to reveal otherwise invisible trends, such as clusters of houses that appear to be student rentals due to their high EPC ratings and 5 or 6 bedrooms. Equally, there are groups of properties with no sale data, which could indicate that they have been owned by local residents for decades.

Unfortunately, the location-based waypoints do not align with the real world and move with the camera. Improved tracking methods could potentially fix this problem in the future, but they are currently unavailable in AR.js.

## Evaluation

Once all bugs have been addressed, the following evaluation plan will be conducted:
- Predictive and heuristic evaluation with estate agents to identify prospective home buyers' needs and potential struggles.
- Usability testing with a group of users being observed and timed as they complete tasks within the application.
- A  pilot study with a group of prospective home buyers, assessing the usefulness, usability and user feelings through a System Usability Score (SUS) questionnaire and open-ended questions.

## Further Work

The main priority is fixing the location-based tracking and registration bugs, as these make the app unusable. Once these issues are addressed, the minimum viable product will be tested, and any feedback will be implemented. After this, the following features could be added:
- API integration to retrieve property data for any area
- A World-in-Miniature view to add context and aid navigation
- Additional data categories like council tax band or resident demographics