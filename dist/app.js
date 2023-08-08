"use strict";
const input1 = document.getElementById("num1");
const input2 = document.getElementById("num2");
function add(num1, num2) {
    return num1 + num2;
}
let age;
age = 50;
let userName;
userName = 'Max';
let toggle;
toggle = true;
let empty;
empty = null;
let notInitialize;
notInitialize = undefined;
let callback;
callback = (a) => { return 100 + a; };
let anything = -20;
anything = 'Text';
anything = {};
let some;
some = 'Text';
let str;
if (typeof some === 'string') {
    str = some;
}
;
let person;
person = ['Max', 21];
var Status;
(function (Status) {
    Status[Status["LOADING"] = 0] = "LOADING";
    Status[Status["READY"] = 1] = "READY";
})(Status || (Status = {}));
;
const someAction = {
    progress: Status.READY
};
if (someAction.progress === Status.READY) {
    console.log('progress:', Status.READY);
}
let b;
b = 35;
b = 'hello';
let isActive;
function userStatus(isActive) {
    if (isActive === 'enable') {
        console.log('User is online');
    }
    else {
        console.log('User is offline');
    }
    ;
}
;
function showMessage(message) {
    console.log(message);
}
function calc(num1, num2) {
    return num1 + num2;
}
function customError() {
    throw new Error('Error');
}
const page1 = {
    title: 'The awesome page',
    likes: 100,
    accounts: ['Max', 'Anton', 'Nikita'],
    status: 'open',
    details: {
        createAt: new Date('2021-01-01'),
        updateAt: new Date('2021-05-01'),
    }
};
const page2 = {
    title: 'Python or Js',
    likes: 5,
    accounts: ['Alex'],
    status: 'close',
};
//# sourceMappingURL=app.js.map