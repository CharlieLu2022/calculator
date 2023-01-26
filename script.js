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
    processStr = '';
    screenProcess.textContent = processStr;
    clearEntry();
    operandOne = '';
    operandTwo = '';
    operator = '';
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
let operandOne = '';
let operandTwo = '';
let operator = '';
let result = '';
let resultRounded;

function entryDisplay(entry) {
    if (processArray.length == 0) { //Don't use "="
        entryArray.push(`${entry}`);
        entryStrConcat();
        screenEntry.textContent = entryStr;
        processArray[0] = entryStr; //Don't use push
    } else if (processArray.length == 2) {
        entryArray.push(`${entry}`);
        entryStrConcat();
        screenEntry.textContent = entryStr;
        processArray[2] = entryStr;
    }
}

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

function processDisplay(operation) {
    if (processArray.length == 1) {
        processStrOne = processArray[0];
        processArray[1] = `${operation}`;
        screenProcess.textContent = `${processStrOne} ${operation}`;
        entryArray = []; //reset for next entry
    } else if (processArray.length == 3) {
        processStrTwo = processArray[2];
        operation = processArray[1];
        screenProcess.textContent = `${processStrOne} ${operation} ${processStrTwo} =`;
        calculate();
        entryArray = [];
        processArray = [];  //WIP continue from here
    }
}

equalBtn.onclick = () => calculate();

function calculate() {
    operandOne = processArray[0];
    operator = processArray[1];
    operandTwo = entryStr;
    if (operator === '+') {
        result = Number(processStrOne) + Number(entryStr);
    } else if (operator === '−') {
        result = Number(processStrOne) - Number(entryStr);
    } else if (operator === '×') {
        result = Number(processStrOne) * Number(entryStr);
    } else if (operator === '÷') {
        result = Number(processStrOne) / Number(entryStr);
    }
    resultRounded = Math.round(result * 1000) / 1000;
    screenEntry.textContent = `${resultRounded}`;
} 


