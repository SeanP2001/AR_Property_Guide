const NumberFormatting = {
    NONE: 0,
    COMMA_SEPARATED: 1,
    CURRENCY: 2,
    ABBREVIATED_CURRENCY: 3,
    CURRENCY_DECIMAL: 4,
    DECIMAL: 5,
    PERCENTAGE: 6
};


// ------------------------------------- A G E   F I E L D   P A R A M E T E R S -------------------------------------
const noOfAgeBins = 7;     
const ageScale = 0.25;
const ageFormatting = NumberFormatting.NONE;

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
const scoreFormatting = NumberFormatting.PERCENTAGE;

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
const salaryFormatting = NumberFormatting.ABBREVIATED_CURRENCY;

const salaryBinColours = [
    '#E51E25', //Red
    '#ED6A26', //Bright Orange
    '#FFF300', //Yellow
    '#299E29', //Mid Green
    '#00823A'  //Green
];


// ----------------------------------------------------- M I S C -----------------------------------------------------
