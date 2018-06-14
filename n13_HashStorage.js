'use strict';

class HashStorage {
    constructor () {
        this.storage = {};
    }
    addValue(name, value) {
        this.storage[name] = value;
    }
    getValue(key) {
        if (Object.keys(this.storage).indexOf(key) > -1) {
            return this.storage[key];
        } else {
            return undefined;
        }
    }
    deleteValue(key) {
        if(Object.keys(this.storage).indexOf(key) > -1) {
            delete this.storage[key];
            return true;
        } else {
            return false;
        }
    }
    getKeys() {
        return Object.keys(this.storage);
    }
}
    
var drinkStorage = new HashStorage;


function av () {
    drinkStorage.addValue(prompt('Введите название напитка'), {'Алкогольный': confirm('Напиток алкогольный? OK - да, Отмена - нет'), 'Крепость, %': prompt('Введите крепость напитка'), 'Рецепт приготовления': prompt('Введите рецепт приготовления'), 'Рекомендуемая доза': prompt('Введите рекомендуемую дозу', '0')});
    if (Object.keys(drinkStorage.storage).indexOf("null") > -1) {
        delete drinkStorage.storage[null];
    }
}
function gv (arg = prompt('Какой напиток показать?')) {
    if (Object.keys(drinkStorage.storage).indexOf(arg) > -1) {
        var res = "Напиток: " + arg + "\n";
        for (var prop in drinkStorage.getValue(arg)) {
            res += prop + ': ' + drinkStorage.getValue(arg)[prop] + "\n";
            res = res.replace("true", "да");
            res = res.replace("false", "нет");
        }
        alert(res);
    } else {
        alert('Напиток ' + '"' + arg + '"' + ' ' + 'не найден');
    }
}
function dv (arg = prompt('Какой напиток удалить?')) {
    if (Object.keys(drinkStorage.storage).indexOf(arg) > -1) {
        delete drinkStorage.storage[arg];
        alert('Напиток ' + '"' + arg + '"' + ' ' + 'удален');
    } else {
        alert('Напиток не найден');
    }
}
function l () {
    var res = drinkStorage.getKeys()[0] + '\n'; 
    for (var i=1; i<drinkStorage.getKeys().length; i++){
        res += drinkStorage.getKeys()[i]+'\n';
    }
    alert(res);
}



drinkStorage.addValue('текила', {'Алкогольный': 'true', 'Крепость': '38%', 'Рецепт приготовления': 'salt + spirit + lime', 'Рекомендуемая доза': '5шт'});
drinkStorage.addValue('водка', {'Алкогольный': 'true', 'Крепость': '40%', 'Рецепт': 'спирт + вода + декстроза + сахар', 'Рекомендуемая доза': '1шт'});
drinkStorage.addValue('маргарита', {'Алкогольный': 'true', 'Крепость': '12%', 'Рецепт': 'лаймовый сок + сахарный сироп + ликер трипл сек + серебряная текила', 'Рекомендуемая доза': '3шт'});
drinkStorage.addValue('коньяк', {'Алкогольный': 'true', 'Крепость': '40%', 'Рецепт': 'водка + сахар + кора дуба + специи', 'Рекомендуемая доза': '2шт'});
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    /* function HashStorage (name){
        var self = this;
        self.name = name;
        self.addValue = function(key, value){
            self.key = key;
            self.value = value;
        }
        self.getValue = function(key){
            if (key in self){
                return self.key;
            } else {
                return undefined;
            }
        }
        self.deleteValue = function(key){
            if (key in self){
                delete self[key];
                return "remove complete";
            } else {
                return "this key not found"
            }
        }
        self.getKeys = function (){
            var arr = [];
            for (var key in self){
                arr.push[key];
            }
            return arr;
        }
    } */