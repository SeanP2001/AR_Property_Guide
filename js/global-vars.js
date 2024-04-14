
// ------------------------------------- A G E   F I E L D   P A R A M E T E R S -------------------------------------
const noOfAgeBins = 7;     
const ageScale = 0.25;

const ageBinColours = [   
'#E51E25', //Red
'#ED6A26', //Bright Orange
'#F9AE1F', //Orange
'#FFF300', //Yellow
'#9FCC3D', //Light Green
'#299E29', //Mid Green
'#00823A'  //Green
]; 




// ----------------------------------- S C O R E   F I E L D   P A R A M E T E R S -----------------------------------
const noOfScoreBins = 7;     
const scoreThresholds = [0, 27, 34, 41, 56, 74, 89, 100.1];
const scoreBinNames = ["F", "E", "D", "C", "B", "A", "A*"];
const scoreScale = 0.15;

const scoreBinColours = [   
'#E51E25', //Red
'#ED6A26', //Bright Orange
'#F9AE1F', //Orange
'#FFF300', //Yellow
'#9FCC3D', //Light Green
'#299E29', //Mid Green
'#00823A'  //Green
]; 


// ---------------------------------- S A L A R Y   F I E L D   P A R A M E T E R S ----------------------------------
const noOfSalaryBins = 5;
const salaryScale = 0.00015;

const salaryBinColours = [
    '#E51E25', //Red
    '#ED6A26', //Bright Orange
    '#FFF300', //Yellow
    '#299E29', //Mid Green
    '#00823A'  //Green
];


// ----------------------------------------------------- M I S C -----------------------------------------------------
var reverse = false;  // Set whether the order is reversed