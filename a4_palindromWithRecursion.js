/* function isPalRec (arg) {
    var strLow = arg.toLowerCase();
    var newStr = '';
    var abc = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюяabcdefghijklmnopqrstuvwxyz1234567890';
    for (var i=0; i<strLow.length; i++) {
        if (abc.indexOf(strLow[i]) >= 0) {
            if (strLow[i] == 'ъ') {
                newStr += 'ь';
            } else if (strLow[i] == 'ё') {
                newStr += 'е';
            } else {
                newStr += strLow[i];
            }
        }
    }
    if(newStr.length > 1){
        if (newStr[0] != newStr[newStr.length-1]) {
            return false;
        } else {
            isPalRec(arg.slice(1, arg.length-1));
        }
    } else {
        return true;
    }
    return true;
} */



function isPalRec (arg) {
    var strLow = arg.toLowerCase();
    var newStr = '';
    var abc = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюяabcdefghijklmnopqrstuvwxyz1234567890';
    for (var i=0; i<strLow.length; i++) {
        if (abc.indexOf(strLow[i]) >= 0) {
            if (strLow[i] == 'ъ') {
                newStr += 'ь';
            } else if (strLow[i] == 'ё') {
                newStr += 'е';
            } else {
                newStr += strLow[i];
            }
        }
    }
    if (newStr.length<=1) {
        return true;
    } else {
        if (newStr[0] != newStr[newStr.length-1]) {
            return false;
        } else {
            return isPalRec(newStr.slice(1, newStr.length-1));
        }
    }
    return;
}

console.log('Аргумент: ' + '|' + 'Муммам' + '| ' + 'Результат: ' + isPalRec('Муммам'));
console.log('Аргумент: ' + '|' + 'Мdfgvhbjnkmтоирмпм' + '| ' + 'Результат: ' + isPalRec('Мdfgvhbjnkmтоирмпм'));
console.log('Аргумент: ' + '|' + 'УвымуУ' + '| ' + 'Результат: ' + isPalRec('УвымуУ'));
console.log('Аргумент: ' + '|' + 'вукрпьнатв' + '| ' + 'Результат: ' + isPalRec('вукрпьнатв'));
console.log('Аргумент: ' + '|' + 'Мм' + '| ' + 'Результат: ' + isPalRec('Мм'));
console.log('Аргумент: ' + '|' + 'М    м' + '| ' + 'Результат: ' + isPalRec('М    м'));
console.log('Аргумент: ' + '|' + 'РАдар' + '| ' + 'Результат: ' + isPalRec('РАдар'));
console.log('Аргумент: ' + '|' + 'Нажал кабан на баклажан' + '| ' + 'Результат: ' + isPalRec('Нажал кабан на баклажан'));
console.log('Аргумент: ' + '|' + 'А Лида свечку чукче всадила.' + '| ' + 'Результат: ' + isPalRec('А Лида свечку чукче всадила.'));
console.log('Аргумент: ' + '|' + '' + '| ' + 'Результат: ' + isPalRec(''));
console.log('Аргумент: ' + '|' + 'А дама та - тамада.' + '| ' + 'Результат: ' + isPalRec('А дама та - тамада.'));
console.log('Аргумент: ' + '|' + '  - ?  !, . ;  : ' + '| ' + 'Результат: ' + isPalRec('  - ?  !, . ;  : '));
console.log('Аргумент: ' + '|' + 'Дару дубовому умов - о, буду рад!' + '| ' + 'Результат: ' + isPalRec('Дару дубовому умов - о, буду рад!'));
console.log('Аргумент: ' + '|' + 'Ямал' + '| ' + 'Результат: ' + isPalRec('Ямал'));
console.log('Аргумент: ' + '|' + 'Мария Ире во дворе: "Нет у сутенеров доверия Ирам!"' + '| ' + 'Результат: ' + isPalRec('Мария Ире во дворе: "Нет у сутенеров доверия Ирам!"'));
console.log('Аргумент: ' + '|' + 'Угар! Враг на воле! Мститель летит смело в ангар врагу!' + '| ' + 'Результат: ' + isPalRec('Угар! Враг на воле! Мститель летит смело в ангар врагу!'));
console.log('Аргумент: ' + '|' + 'ууе! ЁУУ!' + '| ' + 'Результат: ' + isPalRec('ууе! ЁУУ!'));
console.log('Аргумент: ' + '|' + 'В' + '| ' + 'Результат: ' + isPalRec('В'));



/* function isPalRec (arg) {
    var strLow = arg.toLowerCase();
    var newStr = '';
    var abc = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюяabcdefghijklmnopqrstuvwxyz1234567890';
    for (var i=0; i<strLow.length; i++) {
        if (abc.indexOf(strLow[i]) >= 0) {
            if (strLow[i] == 'ъ') {
                newStr += 'ь';
            } else if (strLow[i] == 'ё') {
                newStr += 'е';
            } else {
                newStr += strLow[i];
            }
        }
    }
    if(newStr.length<=1) {
        return true;
    } else {
            if (newStr[0] != newStr[newStr.length-1]) {
                return false;
            } else {
                isPalRec(arg.slice(1, arg.length-1));
            }
    }
    return true;
} */