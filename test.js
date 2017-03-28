/*
    쇼핑카트를 만들어보자
    내 코인(myCoin)
    내 이름(myName)
    내 카트 내용물: 배열 안에 상품명이 문자열로(cartItems)
*/

var myCoin = 1200;
var myName = 'R';
var cartItems = [
    "시리얼", 
    "우유"
];

//puts이랑 같은 역할
console.log(myCoin);
console.log(myName);
console.log(cartItems);

var double = function(input) {
    return input * 5;
}

var plusTwo = function(num) {
    return num + 2;
}

var doActionOn = function(input, func) {
    return func(input);
}

plusTwo(3);

doActionOn(3, plusTwo);

console.log(double(4));

console.log(doActionOn(3, plusTwo) );
