function isPal (arg) {
    var strLow = arg.toLowerCase();
    var newStr = '';
    var abc = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюяabcdefghijklmnopqrstuvwxyz1234567890';
    var res;
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
    if (newStr != undefined && newStr.length > 1) {
        for (var n=0; n<Math.floor(newStr.length/2); n++) {
            if (newStr[n] == newStr[(newStr.length-1)-n]) {
                res = true;
            } else {
                res = false;
                break;
            }
        }
    } else if (newStr.length <=1 && newStr.length >= 0 ) {
        res = true;
    } else {
        res = false;
    }
    return res;
}
/*
console.log('Аргумент: ' + '|' + 'Нажал кабан на баклажан' + '| ' + 'Результат: ' + isPal('Нажал кабан на баклажан'));
console.log('Аргумент: ' + '|' + 'А Лида свечку чукче всадила.' + '| ' + 'Результат: ' + isPal('А Лида свечку чукче всадила.'));
console.log('Аргумент: ' + '|' + '' + '| ' + 'Результат: ' + isPal(''));
console.log('Аргумент: ' + '|' + 'А дама та - тамада.' + '| ' + 'Результат: ' + isPal('А дама та - тамада.'));
console.log('Аргумент: ' + '|' + '  - ?  !, . ;  : ' + '| ' + 'Результат: ' + isPal('  - ?  !, . ;  : '));
console.log('Аргумент: ' + '|' + 'Дару дубовому умов - о, буду рад!' + '| ' + 'Результат: ' + isPal('Дару дубовому умов - о, буду рад!'));
console.log('Аргумент: ' + '|' + 'Ямал' + '| ' + 'Результат: ' + isPal('Ямал'));
console.log('Аргумент: ' + '|' + 'Мария Ире во дворе: "Нет у сутенеров доверия Ирам!"' + '| ' + 'Результат: ' + isPal('Мария Ире во дворе: "Нет у сутенеров доверия Ирам!"'));
console.log('Аргумент: ' + '|' + 'Угар! Враг на воле! Мститель летит смело в ангар врагу!' + '| ' + 'Результат: ' + isPal('Угар! Враг на воле! Мститель летит смело в ангар врагу!'));
console.log('Аргумент: ' + '|' + 'ууе! ЁУУ!' + '| ' + 'Результат: ' + isPal('ууе! ЁУУ!'));
console.log('Аргумент: ' + '|' + 'В' + '| ' + 'Результат: ' + isPal('В'));
*/