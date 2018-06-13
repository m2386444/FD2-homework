'use strict';

    class HashStorage {
        constructor () {
            //console.log('конструктор сработал');
        }
        addValue(name, value) {
            this[name] = value;
        }
        getValue(key) {
            if (key in this) {
                var res = "напиток: " + key + "\n";
                for (var prop in this[key]) {
                    res += prop + ': ' + this[key][prop] + "\n";
                    res = res.replace("true", "да");
                    res = res.replace("false", "нет");
                }
                return res;
            } else {
                return undefined;
            }
        }
        deleteValue(key) {
            if(key in this) {
                delete this[key];
                return true;
            } else {
                return false;
            }
        }
        getKeys() {
            return Object.keys(this);
        }
    }
    
    var drinkStorage = new HashStorage;

function av () {
    drinkStorage.addValue(prompt('Введите название напитка'), {'алкогольный': confirm('Напиток алкогольный? OK - да, Отмена - нет'), 'крепость': prompt('Введите крепость напитка'), 'рецепт приготовления': prompt('Введите рецепт приготовления')});
    if (drinkStorage.null) {
        delete drinkStorage.null;
    }
}
function gv (arg = prompt('Какой напиток показать?')) {
    if (arg in drinkStorage) {
        alert(drinkStorage.getValue(arg));
    } else {
        alert('Напиток ' + '"' + arg + '"' + ' ' + 'не найден');
    }
}
function dv (arg = prompt('Какой напиток удалить?')) {
    if (arg in drinkStorage) {
        delete drinkStorage[arg];
        console.log('Напиток' + '"' + arg + '"' + ' ' + 'удален');
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