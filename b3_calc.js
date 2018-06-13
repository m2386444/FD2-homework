*

var S = "3 * 3 * 3 + 1 * 2", i = 0;
S = S.replace(/\s/g, "");

/*
	Вычисляет выражение вида a + b, a * b, т.е.
	число, оператор и число
*/
function expr(A, O) {
	var D = A.replace(/\(|\)/g, "").split(O);
	if ( O == "+" ) return +D[0] + +D[1];
	if ( O == "-" ) return D[0] - D[1];
	if ( O == "*" ) return D[0] * D[1];
	if ( O == "/" ) return D[0] / D[1];
	if ( O == "^" ) return Math.pow(D[0], D[1]);
}

/*
	Проверяет, не осталось ли в S только число
	Если да — выражение вычислено
*/
function simple() {
	return /^-?\d+(?:\.\d+)?$/.test(S);
}

/*
	Ищем такие последовательности символов, чтобы
	было "число, оператор, число". Если с обеих сторон
	выражения есть скобки, то убираем их
*/
function compute(operator) {
	var re = new RegExp("(\\()?-?\\d+(?:\\.\\d+)?\\" + operator + "-?\\d+(?:\\.\\d+)?(\\))?", "g");
	S = S.replace(re, function (a, b, c) {
		var C, R = "";
		if ( b == undefined || c == undefined )
			C = 1;
		else
			C = 0;
		if (C) R += b || "";
		R += expr(a, operator);
		if (C) R += c || "";
		return R;
	});
}

/*
	В бесконечном цикле обрабатываем все операции
	в порядке их приоритета: ^, *, /, +, -
	Если в S осталось только число, то прерываем цикл
	и показываем результат
*/
while (true) {
	compute("^");
	compute("*"); compute("/");
	compute("+"); compute("-");
	if (simple()) {
		alert(S);
		break;
	}
	if (++i > 10000) {
		alert("Unexpercted error");
		break;
	}alert(S)
}























/* var s = "20+(4-1)-2";
function sl (str) {
    for (var i=0; i<str.length; i++) {
        if (str[i] == "(") {
            var newS = str.slice(i+1);
            for (var n=newS.length-1; n>0 ;n--){
                if (newS[n] == ")") {
                    newS = newS.slice(0, n);
                }
            }
        }
    }    
    return newS;
}
for (var i = 0; i < arrPlus.length; i++) {
    if (!isNaN(arrPlus[i])) {
        arrPlus[i] = +arrPlus[i];
    }
} */