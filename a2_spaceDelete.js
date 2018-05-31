function spaceDel (arg) {
    var start;
    var end;
    for (var i=0; i<arg.length; i++) {
        if (arg[i] != " ") {
            start = i;
            break;
        }
    }
    if (start != undefined) {
        for (var n=arg.length-1; n>=0; n--) {
            if (arg[n] != " ") {
                end = n;
                break;
            }
        }
    }
    if (start === undefined) {
        return "";
    }
    return arg.slice(start, end+1);
}
/*
console.log('Аргумент: ' + '|' + " мама мыла раму " + '| ' + 'Результат: '+ '|' + spaceDel(" мама мыла раму ") + '|');
console.log('Аргумент: ' + '|' + "мама мыла раму " + '| ' + 'Результат: '+ '|' + spaceDel("мама мыла раму ") + '|');
console.log('Аргумент: ' + '|' + " мама мыла раму" + '| ' + 'Результат: '+ '|' + spaceDel(" мама мыла раму") + '|');
console.log('Аргумент: ' + '|' + "мама мыла раму" + '| ' + 'Результат: '+ '|' + spaceDel("мама мыла раму") + '|');
console.log('Аргумент: ' + '|' + "" + '| ' + 'Результат: '+ '|' + spaceDel("") + '|');
console.log('Аргумент: ' + '|' + "   " + '| ' + 'Результат: '+ '|' + spaceDel("   ") + '|');
*/