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
    drinkStorage.addValue(prompt('Введите название напитка'), {'алкогольный': confirm('Напиток алкогольный? OK - да, Отмена - нет'), 'крепость': prompt('Введите крепость напитка'), 'рецепт приготовления': prompt('Введите рецепт приготовления')});
    if (Object.keys(drinkStorage.storage).indexOf("null") > -1) {
        delete drinkStorage.storage[null];
    }
}
function gv (arg = prompt('Какой напиток показать?')) {
    if (Object.keys(drinkStorage.storage).indexOf(arg) > -1) {
        var res = "напиток: " + arg + "\n";
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
        console.log('Напиток ' + '"' + arg + '"' + ' ' + 'удален');
    } else {
        console.log('Напиток не найден');
    }
}
function l () {
    console.log(drinkStorage.getKeys());
}



drinkStorage.addValue('Текила', {'алкогольный': 'true', 'крепость': '38%', 'рецепт приготовления': 'salt + spirit + lime'});
drinkStorage.addValue('Водка', {'алкогольный': 'true', 'крепость': '40%'});
drinkStorage.addValue('Маргарита', {'алкогольный': 'true', 'крепость': '12%'});
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
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