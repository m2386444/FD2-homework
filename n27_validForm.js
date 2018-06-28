window.onload = function () {
    var inputLineElem = document.getElementsByClassName('line');
    for (var i=0; i<inputLineElem.length; i++) {
        var e = inputLineElem[i];
        e.className = 'lineMarginLeft line';
    }
    var devElem = document.getElementById('dev');
    var devMistElem = document.getElementById('devMist');
    var siteNameElem = document.getElementById('siteName');
    var siteNameMistElem = document.getElementById('siteNameMist');
    var siteUrlElem = document.getElementById('siteUrl');
    var siteUrlMistElem = document.getElementById('siteUrlMist');
    var startDateElem = document.getElementById('startTime');
    var startDateMistElem = document.getElementById('startTimeMist');
    var visitorsElem = document.getElementById('visitors');
    var visitorsMistElem = document.getElementById('visitorsMist');
    var emailElem = document.getElementById('email');
    var emailMistElem = document.getElementById('emailMist');
    var headingElem = document.getElementById('heading');
    var headingMistElem = document.getElementById('headingMist');
    var plan1Elem = document.getElementById('elem1');
    var plan2Elem = document.getElementById('elem2');
    var plan3Elem = document.getElementById('elem3');
    var plansMistElem = document.getElementById('plansMist');
    var reviewElem = document.getElementById('review');
    var reviewMistElem = document.getElementById('reviewMist');
    var descriptionElem = document.getElementById('description');
    var descriptionMistElem = document.getElementById('descriptionMist');
    var formElem = document.forms.targ;


    devElem.onblur = devValid;
    function devValid () {
        if (devElem.value == ''){
            devElem.style.background = 'red';
            devMistElem.innerHTML = 'Введите корректное значение!';
            devElem.focus();
            return false;
        } else {
            devElem.style.background = 'none';
            devMistElem.innerHTML = '';
            return true;
        }
    }
    siteNameElem.onblur = siteNameValid;
    function siteNameValid () {
        if (siteNameElem.value == ''){
            siteNameElem.style.background = 'red';
            siteNameMistElem.innerHTML = 'Введите корректное значение!';
            return false;
        } else {
            siteNameElem.style.background = 'none';
            siteNameMistElem.innerHTML = '';
            return true;
        }
    }
    siteUrlElem.onblur = siteUrlValid;
    function siteUrlValid () {
        if (siteUrlElem.value == ''){
            siteUrlElem.style.background = 'red';
            siteUrlMistElem.innerHTML = 'Введите корректное значение!';
        } else {
            siteUrlElem.style.background = 'none';
            siteUrlMistElem.innerHTML = '';
        }
    }
    startDateElem.onblur = startDateValid;
    function startDateValid () {
        if (startDateElem.value == ''){
            startDateElem.style.background = 'red';
            startDateMistElem.innerHTML = 'Введите корректное значение!';
        } else {
            startDateElem.style.background = 'none';
            startDateMistElem.innerHTML = '';
        }
    }
    visitorsElem.onblur = visValid;
    function visValid () {
        if (visitorsElem.value == ''){
            visitorsElem.style.background = 'red';
            visitorsMistElem.innerHTML = 'Введите корректное значение!';
        } else if (+startDateElem.value < 0) {
            visitorsMistElem.innerHTML = 'слишком мало!';
        } else {
            visitorsElem.style.background = 'none';
            visitorsMistElem.innerHTML = '';
        }
    }
    emailElem.onblur = emailValid;
    function emailValid() {
        var r = /^[\w\.\d-_]+@[\w\.\d-_]+\.\w{2,4}$/i;
        if (!r.test(emailElem.value)) {
            emailElem.style.background = 'red';
            emailMistElem.innerHTML = 'Введите корректное значение!';
        } else {
            emailElem.style.background = 'none';
            emailMistElem.innerHTML = '';
        }
    }
    headingElem.onchange = heaValid;
    function heaValid() {
        if (headingElem.value == '3'){
            headingElem.style.background = 'red';
            headingMistElem.innerHTML = 'Введите корректное значение!';
        } else {
            headingElem.style.background = 'none';
            headingMistElem.innerHTML = '';
        }
    }
    headingElem.onblur = headingElem.onchange;

    plan3Elem.onchange = plan3Valid;
    function plan3Valid () {
        if (plan3Elem.checked) {
            plansMistElem.innerHTML = 'Это дорого! Начните с малого!';
        } else {
            plansMistElem.innerHTML = '';
        }
    }
    plan1Elem.onchange = plan3Elem.onchange;
    plan2Elem.onchange = plan1Elem.onchange;

    reviewElem.onchange = revValid;
    function revValid () {
        if (reviewElem.checked) {
            reviewElem.style.background = 'none';
            reviewMistElem.innerHTML = '';
        } else {
            reviewElem.style.background = 'red';
            reviewMistElem.innerHTML = 'Разрешите отзывы!';
        }
    }
    descriptionElem.onblur = desValid;
    function desValid () {
        if (descriptionElem.value == ''){
            descriptionElem.style.background = 'red';
            descriptionMistElem.innerHTML = 'Не оставляйте поле пустым и введите корректное значение!';
        } else {
            descriptionElem.style.background = 'none';
            descriptionMistElem.innerHTML = '';
        }
    }

}