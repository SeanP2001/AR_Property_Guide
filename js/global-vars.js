const NumberFormatting = {
    NONE: 0,
    COMMA_SEPARATED: 1,
    CURRENCY: 2,
    ABBREVIATED_CURRENCY: 3,
    CURRENCY_DECIMAL: 4,
    DECIMAL: 5,
    PERCENTAGE: 6
};


// ----------------------------------- P R I C E   F I E L D   P A R A M E T E R S -----------------------------------
const noOfPriceBins = 5;     
const priceScale = 0.0001;
const priceFormatting = NumberFormatting.ABBREVIATED_CURRENCY;

const priceBinColours = [   
    '#E51E25', //Red
    '#ED6A26', //Bright Orange
    '#FFF300', //Yellow
    '#299E29', //Mid Green
    '#00823A'  //Green
]; 


// -------------------------------- B E D R O O M S   F I E L D   P A R A M E T E R S --------------------------------   
const bedroomsScale = 1;
const bedroomsFormatting = NumberFormatting.NONE;

const bedroomsBinColours = [   
    '#C90000', //Dark Red
    '#E51E25', //Red
    '#ED6A26', //Bright Orange
    '#F9AE1F', //Orange
    '#FFF300', //Yellow
    '#9FCC3D', //Light Green
    '#299E29', //Mid Green
    '#00823A', //Green
    '#005E00'  //Dark Green
]; 


// ------------------------------- B A T H R O O M S   F I E L D   P A R A M E T E R S -------------------------------
const bathroomsScale = 1;
const bathroomsFormatting = NumberFormatting.NONE;

const bathroomsBinColours = [   
    '#C90000', //Dark Red
    '#E51E25', //Red
    '#ED6A26', //Bright Orange
    '#F9AE1F', //Orange
    '#FFF300', //Yellow
    '#9FCC3D', //Light Green
    '#299E29', //Mid Green
    '#00823A', //Green
    '#005E00'  //Dark Green
]; 


// ------------------------------------ Y E A R   F I E L D   P A R A M E T E R S ------------------------------------
const noOfYearBins = 7;     
const yearScale = 0.01;
const yearFormatting = NumberFormatting.NONE;

const yearBinColours = [   
    '#E51E25', //Red
    '#ED6A26', //Bright Orange
    '#F9AE1F', //Orange
    '#FFF300', //Yellow
    '#9FCC3D', //Light Green
    '#299E29', //Mid Green
    '#00823A'  //Green
]; 


// ------------------------------------- E P C   F I E L D   P A R A M E T E R S -------------------------------------
const noOfEPCBins = 7;     
const epcThresholds = [0, 21, 39, 55, 69, 81, 92, 100.1];
const epcBinNames = ["G", "F", "E", "D", "C", "B", "A"];
const epcScale = 0.15;
const epcFormatting = NumberFormatting.NONE;

const epcBinColours = [   
    '#E51E25', //Red
    '#ED6A26', //Bright Orange
    '#F9AE1F', //Orange
    '#FFF300', //Yellow
    '#9FCC3D', //Light Green
    '#299E29', //Mid Green
    '#00823A'  //Green
]; 


// ------------------------------ F L O O R   A R E A   F I E L D   P A R A M E T E R S ------------------------------
const noOfFloorAreaBins = 7;     
const floorAreaScale = 0.015;
const floorAreaFormatting = NumberFormatting.NONE;

const floorAreaBinColours = [   
    '#E51E25', //Red
    '#ED6A26', //Bright Orange
    '#F9AE1F', //Orange
    '#FFF300', //Yellow
    '#9FCC3D', //Light Green
    '#299E29', //Mid Green
    '#00823A'  //Green
]; 


// ----------------------------------------------------- M I S C -----------------------------------------------------

var naEntryColour = '#6b6b6b'; // Entries with missing values are grey