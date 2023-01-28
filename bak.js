const screenProcess = document.querySelector('.screenProcess');
const screenEntry = document.querySelector('.screenEntry');
const ceBtn = document.querySelector('.ceBtn');
const cBtn = document.querySelector('.cBtn');
const delBtn = document.querySelector('.delBtn');
const divideBtn = document.querySelector('.divideBtn');
const sevenBtn = document.querySelector('.sevenBtn');
const eightBtn= document.querySelector('.eightBtn');
const nineBtn = document.querySelector('.nineBtn');
const multiplyBtn = document.querySelector('.multiplyBtn');
const fourBtn = document.querySelector('.fourBtn');
const fiveBtn = document.querySelector('.fiveBtn');
const sixBtn = document.querySelector('.sixBtn');
const subtractBtn = document.querySelector('.subtractBtn');
const oneBtn = document.querySelector('.oneBtn');
const twoBtn = document.querySelector('.twoBtn');
const threeBtn = document.querySelector('.threeBtn');
const addBtn = document.querySelector('.addBtn');
const plusminusBtn = document.querySelector('.plusminusBtn');
const zeroBtn = document.querySelector('.zeroBtn');
const dotBtn = document.querySelector('.dotBtn');
const equalBtn = document.querySelector('.equalBtn');

ceBtn.onclick = () => clearEntry();

function clearEntry() {
    entryStr = '';
    screenEntry.textContent = entryStr;
    entryArray = []; //reset for a clean concat
}

cBtn.onclick = () => clearAll();

function clearAll() {
    screenProcess.textContent = '';
    clearEntry();
    result = '';
    entryArray = [];
    processArray = [];
}

delBtn.onclick = () => del();

function del() {
    entryStr = ''; //reset for a clean concat
    entryArray.pop();
    entryStrConcat();
    screenEntry.textContent = entryStr;
}

zeroBtn.onclick = () => entryDisplay(0);
oneBtn.onclick = () => entryDisplay(1);
twoBtn.onclick = () => entryDisplay(2);
threeBtn.onclick = () => entryDisplay(3);
fourBtn.onclick = () => entryDisplay(4);
fiveBtn.onclick = () => entryDisplay(5);
sixBtn.onclick = () => entryDisplay(6);
sevenBtn.onclick = () => entryDisplay(7);
eightBtn.onclick = () => entryDisplay(8);
nineBtn.onclick = () => entryDisplay(9);
dotBtn.onclick = () => entryDisplay('.');
// plusminusBtn.onclick = () => entryDisplay('−');

let entryArray = [];
let entryStr = '';
let processArray = [];
let processStrOne = '';
let processStrTwo = '';
let operatorOne = '';
let result = '';
let resultRounded;

function entryDisplay(entry) {
    entryArray.push(`${entry}`);
    entryStrConcat();
    screenEntry.textContent = entryStr; //Entry display done

    if (processArray.length == 0) { //Don't use '0 || 1'
        processArray[0] = entryStr;
    } else if (processArray.length == 1) {
        processArray[0] = entryStr;
    } else if (processArray.length == 2) {
        processArray[2] = entryStr;
    } else if (processArray.length == 3) {
        processArray[2] = entryStr;
    } else if (processArray.length == 4) {
        processArray[2] = entryStr;
    } else if (processArray.length == 4) {
        processArray[2] = entryStr;
    } 
} 


// else if (processArray.length == 4 && processArray[3] == 'equal') {
//     clearAll();
//     entryDisplay(entry)
// }

function entryStrConcat() {
    entryStr = ''; //reset for a clean concat
    for (let i = 0; i < entryArray.length; i++) {
        entryStr += entryArray[i];
    }
}

addBtn.onclick = () => processDisplay('+');
subtractBtn.onclick = () => processDisplay('−');
multiplyBtn.onclick = () => processDisplay('×');
divideBtn.onclick = () => processDisplay('÷');

// Arived Upper approach
function processDisplay(operation) {
    if (processArray.length == 1) {
        processArray[1] = `${operation}`; //Array index does not work with template literals
        processStrOne = processArray[0];
        screenProcess.textContent = `${processStrOne} ${operation}`;
        entryArray = []; //reset for next entry
    } else if (processArray.length == 3) {
        calculate(); //Calculate entryScreen display
        processArray[0] = `${resultRounded}`;
        processArray[1] = `${operation}`;
        processArray[3] = 'dummy';
        screenProcess.textContent = `${resultRounded} ${operation}`;
        entryArray = [];
    } else if (processArray.length == 4) {
        processStrOne = processArray[0];
        calculate();
        screenProcess.textContent = `${resultRounded} ${operation}`;
        processArray[0] = `${resultRounded}`;
        processArray[1] = `${operation}`;
        entryArray = [];
    } 
}

equalBtn.onclick = () => equalOperation();

function equalOperation() {
    processStrOne = processArray[0];
    operatorOne = processArray[1];
    processStrTwo = processArray[2];
    calculate();
    screenProcess.textContent = `${processStrOne} ${operatorOne} ${processStrTwo} =`;
    processArray[3] = 'equal';
    entryArray = [];
}

function calculate() {
    if (processArray[1] === '+') {
        result = Number(processStrOne) + Number(entryStr);
    } else if (processArray[1] === '−') {
        result = Number(processStrOne) - Number(entryStr);
    } else if (processArray[1] === '×') {
        result = Number(processStrOne) * Number(entryStr);
    } else if (processArray[1] === '÷') {
        result = Number(processStrOne) / Number(entryStr);
    }
    resultRounded = Math.round(result * 1000) / 1000;
    screenEntry.textContent = `${resultRounded}`;
} 