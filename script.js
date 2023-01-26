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

function entryDisplay(entry) {
    processArray.push(`${entry}`);
    entryArray.push(`${entry}`);
    entryStr = ''; //reset for a clean concat
    entryStrConcat();
    screenEntry.textContent = entryStr;
}

function entryStrConcat() {
    for (let i = 0; i < entryArray.length; i++) {
        entryStr += entryArray[i];
    }
}

addBtn.onclick = () => processDisplay('+');
subtractBtn.onclick = () => processDisplay('−');
multiplyBtn.onclick = () => processDisplay('×');
divideBtn.onclick = () => processDisplay('÷');

let processArray = [];
let processStr = '';

function processDisplay(operation) {
    screenProcess.textContent = `${entryStr} ${operation}`;
    entryArray = [];
}

function calculate(operation) {
    processDisplay(operation);
    processStr += processArray[i];
}


