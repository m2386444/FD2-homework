window.onload = function () {
    var inputLineElem = document.getElementsByClassName('line');
    for (var i=0; i<inputLineElem.length; i++) {
        var e = inputLineElem[i];
        e.className = 'lineMarginLeft line';
    }
    var devElem = document.getElementById('dev');   //проверка на пустую строку
    var devMistElem = document.getElementById('devMist');

    var siteNameElem = document.getElementById('siteName'); //проверка на пустую строку
    var siteNameMistElem = document.getElementById('siteNameMist');
    
    var siteUrlElem = document.getElementById('siteUrl'); //проверка на url
    var siteUrlMistElem = document.getElementById('siteUrlMist');
    
    var startDateElem = document.getElementById('startTime'); //проверка на правильный формат даты
    var startDateMistElem = document.getElementById('startTimeMist');
    
    var visitorsElem = document.getElementById('visitors'); //проверка на положительное число
    var visitorsMistElem = document.getElementById('visitorsMist');
    
    var emailElem = document.getElementById('email'); //проверка на правильность формата email
    var emailMistElem = document.getElementById('emailMist');
    
    var headingElem = document.getElementById('heading');   //допускается только второе значение (домашний уют)
    var headingMistElem = document.getElementById('headingMist');
    
    var plan1Elem = document.getElementById('elem1');   //допускается только первое (беспланое) значение, а при отправке проверяется также выбран ли хоть один из пунктов
    var plan2Elem = document.getElementById('elem2');
    var plan3Elem = document.getElementById('elem3');
    var plansMistElem = document.getElementById('plansMist');
    
    var reviewElem = document.getElementById('review'); //необходимо отметить чекбокс
    var reviewMistElem = document.getElementById('reviewMist');
    var descriptionElem = document.getElementById('description'); //проверка на пустую строку
    var descriptionMistElem = document.getElementById('descriptionMist');
    
    var formElem = document.forms.targ;

    formElem.onsubmit = formValid;
    function formValid () {
        var j = descriptionValid(1);
        var i = planValid(1);
        var h = reviewValid(1);
        var g = headingValid(1);
        var f = emailValid(1);
        var e = visitorsValid(1);
        var d = startDateValid(1);
        var c = siteUrlValid(1);
        var b = siteNameValid(1);
        var a = devValid(1);
        
        if (a&&b&&c&&d&&e&&f&&g&&h&&i&&j) {
            return true;
        } else {
            return false;
        }
    }

    function devValid (param) {
        if (devElem.value == '') {
            devShowMist();
            if(param==1){
                devElem.focus();
            }
            return false;
        } else {
            devElem.style.background = 'green';
            devMistElem.innerHTML = '';
            return true;
        }
    }
    function devShowMist () {
        devElem.style.background = 'red';
        devMistElem.innerHTML = 'Введите корректное значение!';
    }
    devElem.onblur = devValid;

    function siteNameValid (param) {
        if (siteNameElem.value == '') {
            siteNameShowMist();
            if(param==1){
                siteNameElem.focus();
            }
            return false;
        } else {
            siteNameElem.style.background = 'green';
            siteNameMistElem.innerHTML = '';
            return true;
        }
    }
    function siteNameShowMist () {
        siteNameElem.style.background = 'red';
        siteNameMistElem.innerHTML = 'Введите корректное значение!';
    }
    siteNameElem.onblur = siteNameValid;

    function siteUrlValid (param) {
        var r = /^(ftp|http|https):\/\/[^ "]+$/;
        if (!r.test(siteUrlElem.value)) {
            siteUrlShowMist();
            if(param==1){
                siteUrlElem.focus();
            }
            return false;
        } else {
            siteUrlElem.style.background = 'green';
            siteUrlMistElem.innerHTML = '';
            return true;
        }
    }
    function siteUrlShowMist () {
        siteUrlElem.style.background = 'red';
        siteUrlMistElem.innerHTML = 'Введите корректное значение!';
    }
    siteUrlElem.onblur = siteUrlValid;

    function startDateValid (param) {
        var r = /^(?=\d{2}([-.,\/])\d{2}\1\d{4}$)(?:0[1-9]|1\d|[2][0-8]|29(?!.02.(?!(?!(?:[02468][1-35-79]|[13579][0-13-57-9])00)\d{2}(?:[02468][048]|[13579][26])))|30(?!.02)|31(?=.(?:0[13578]|10|12))).(?:0[1-9]|1[012]).\d{4}$/;
        if (!r.test(startDateElem.value)) {
            startDateShowMist();
            if(param==1){
                startDateElem.focus();
            }
            return false;
        } else {
            startDateElem.style.background = 'green';
            startDateMistElem.innerHTML = '';
            return true;
        }
    }
    function startDateShowMist () {
        startDateElem.style.background = 'red';
        startDateMistElem.innerHTML = 'Введите корректное значение!';
    }
    startDateElem.onblur = startDateValid;

    function visitorsValid (param) {
        if (visitorsElem.value == '' || +visitorsElem.value < 0) {
            visitorsShowMist();
            if(param==1){
                visitorsElem.focus();
            }
            return false;
        } else {
            visitorsElem.style.background = 'green';
            visitorsMistElem.innerHTML = '';
            return true;
        }
    }
    function visitorsShowMist () {
        visitorsElem.style.background = 'red';
        visitorsMistElem.innerHTML = 'Введите корректное значение!';
    }
    visitorsElem.onblur = visitorsValid;

    function emailValid () {
        var r = /^[\w\.\d-_]+@[\w\.\d-_]+\.\w{2,4}$/i;
        if (!r.test(emailElem.value)) {
            emailShowMist();
            return false;
        } else {
            emailElem.style.background = 'green';
            emailMistElem.innerHTML = '';
            return true;
        }
    }
    function emailShowMist () {
        emailElem.style.background = 'red';
        emailMistElem.innerHTML = 'Введите корректное значение по примеру!';
    }
    emailElem.onblur = emailValid;

    function headingValid () {
        if (headingElem.value == '3' || headingElem.value == '1') {
            headingShowMist();
            return false;
        } else {
            headingElem.style.background = 'green';
            headingMistElem.innerHTML = '';
            return true;
        }
    }
    function headingShowMist () {
        headingElem.style.background = 'red';
        headingMistElem.innerHTML = 'На данный момент размещаем сайты только о доме и уюте!';
    }
    headingElem.onblur = headingValid;
    headingElem.onchange = headingValid;





    plan3Elem.onchange = plan2Elem.onchange = plan1Elem.onchange = planValid;
    function planValid (param) {
        if (plan3Elem.checked || plan2Elem.checked) {
            plansMist();
            if (param==1) {
                plan1Elem.focus();
            }
        } else if (!plan1Elem.checked&&!plan2Elem.checked&&!plan3Elem.checked) {
            plansMist();
            if (param==1) {
                plan1Elem.focus();
            }
        } else {
            plansMistElem.innerHTML = '';
            return true;
        }
    }
    function plansMist () {
        plansMistElem.innerHTML = 'Первое размещение - только бесплатное!';
    }

    function reviewValid (param) {
        if (!reviewElem.checked) {
            reviewShowMist();
            if(param==1){
                reviewElem.focus();
            }
            return false;
        } else {
            reviewElem.style.background = 'green';
            reviewMistElem.innerHTML = '';
            return true;
        }
    }
    function reviewShowMist () {
        reviewElem.style.background = 'red';
        reviewMistElem.innerHTML = 'Разрешите отзывы!';
    }
    reviewElem.onblur = reviewValid;
    reviewElem.onchange = reviewValid;

    function descriptionValid () {
        if (descriptionElem.value == '') {
            descriptionShowMist();
            return false;
        } else {
            descriptionElem.style.background = 'green';
            descriptionMistElem.innerHTML = '';
            return true;
        }
    }
    function descriptionShowMist () {
        descriptionElem.style.background = 'red';
        descriptionMistElem.innerHTML = 'Введите корректное значение!';
    }
    descriptionElem.onblur = descriptionValid;
}