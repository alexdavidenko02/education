'use strict'

// 1) Обычная функция: this = window, но если стоит use-strict то будет undefined
// 2) Контекст у методов объекта - сам объект
// 3) this в конструкторах и классах это новый екземпляр объекта
// 4) Ручная привязка this: call, apply, bind


const log = function(a, b, ...rest) {
    console.log(a, b, rest);
}

log('basic', 'rest', 'operatot', 'usage');

function calcOrDouble(number, basis = 2) {
    console.log(number * basis);
}

calcOrDouble(3);