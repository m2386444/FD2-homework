'use strict';

function LocStorage (lsn) {
    this.storage = {};
    if (localStorage[lsn]){
        this.storage = JSON.parse(localStorage[lsn]);
    }

    this.addValue = function (name, value) {
        this.storage[name] = value;
        window.localStorage[lsn] = JSON.stringify(this.storage);
    }
    this.getValue = function (key) {
        if (key in this.storage) {
            return this.storage[key];
        } else { return undefined }
    }
    this.deleteValue = function (key) {
        if (key in this.storage) {
            delete this.storage[key];
            window.localStorage[lsn] = JSON.stringify(this.storage);
            return true;
        } else { return false; }
    }
    this.getKeys = function () { return Object.keys(this.storage); }
}

function av (param) {
    if (param == drinkStorage) {
        param.addValue(prompt('Введите название напитка'), {'Алкогольный': confirm('Напиток алкогольный? OK - да, Отмена - нет'), 'Крепость, %': prompt('Введите крепость напитка'), 'Рецепт приготовления': prompt('Введите рецепт приготовления'), 'Рекомендуемая доза': prompt('Введите рекомендуемую дозу', '0')});
        if ('null' in param.storage) {
            delete param.storage[null];
        }
    } else if (param == foodStorage) {
        param.addValue(prompt('Введите название блюда'), {'Рецепт приготовления': prompt('Введите рецепт приготовления'), 'Рекомендуемая доза': prompt('Введите рекомендуемую порцию', '0')});
        if ('null' in param.storage) {
            delete param.storage[null];
        }
    }
}
function gv (param, arg = prompt('Что показать?')) {
    if (param == drinkStorage) {
        if (arg in param.storage) {
            var res = "Напиток: " + arg + "\n";
            for (var prop in param.getValue(arg)) {
                res += prop + ': ' + param.getValue(arg)[prop] + "\n";
                res = res.replace("true", "да");
                res = res.replace("false", "нет");
            }
            alert(res);
        } else {
            alert('Напиток ' + '"' + arg + '"' + ' ' + 'не найден');
        }
    } else if (param == foodStorage) {
        if (arg in param.storage) {
            var res = "Блюдо: " + arg + "\n";
            for (var prop in param.getValue(arg)) {
                res += prop + ': ' + param.getValue(arg)[prop] + "\n";
            }
            alert(res);
        } else {
            alert('Блюдо ' + '"' + arg + '"' + ' ' + 'не найдено');
        }
    }
}
function dv (param, arg = prompt('Что удалить?')) {
    if (param == drinkStorage) {
        if (arg in param.storage) {
            drinkStorage.deleteValue(arg);
            alert('Напиток ' + '"' + arg + '"' + ' ' + 'удален');
        } else {
            alert('Напиток не найден');
        }
    } else if (param ==foodStorage) {
        if (arg in param.storage) {
            foodStorage.deleteValue(arg);
            alert('Блюдо ' + '"' + arg + '"' + ' ' + 'удалено');
        } else {
            alert('Блюдо не найдено');
        }
    }
}
function l (param) {
    if (param == drinkStorage) {
        var res = drinkStorage.getKeys()[0] + '\n'; 
        for (var i=1; i<drinkStorage.getKeys().length; i++){
            res += drinkStorage.getKeys()[i]+'\n';
        }
        alert(res);
    } else if (param == foodStorage) {
        var res = foodStorage.getKeys()[0] + '\n'; 
        for (var i=1; i<foodStorage.getKeys().length; i++){
            res += foodStorage.getKeys()[i]+'\n';
        }
        alert(res);
    }
}

var drinkStorage = new LocStorage('drinks');
var foodStorage = new LocStorage('food');


// drinkStorage.addValue('текила', {'Алкогольный': 'true', 'Крепость': '38%', 'Рецепт приготовления': 'salt + spirit + lime', 'Рекомендуемая доза': '5шт'});
// drinkStorage.addValue('водка', {'Алкогольный': 'true', 'Крепость': '40%', 'Рецепт': 'спирт + вода + декстроза + сахар', 'Рекомендуемая доза': '1шт'});
// drinkStorage.addValue('маргарита', {'Алкогольный': 'true', 'Крепость': '12%', 'Рецепт': 'лаймовый сок + сахарный сироп + ликер трипл сек + серебряная текила', 'Рекомендуемая доза': '3шт'});
// drinkStorage.addValue('коньяк', {'Алкогольный': 'true', 'Крепость': '40%', 'Рецепт': 'водка + сахар + кора дуба + специи', 'Рекомендуемая доза': '2шт'});

// foodStorage.addValue('салат', {'Рецепт': 'кора дуба + специи', 'Рекомендуемая доза': '2шт'});