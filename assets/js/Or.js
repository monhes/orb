

function get_redirect() {
    var url_string = window.location.href;
    var url = new URL(url_string);

    var strProvi = url.searchParams.get("PROVI");
    var strDist = url.searchParams.get("DIST");
    var strType1 = url.searchParams.get("TYPE1");
    var strType2 = url.searchParams.get("TYPE2");
    var strType3 = url.searchParams.get("TYPE3");
    var strType4 = url.searchParams.get("TYPE4");
    var strYear = url.searchParams.get("YEAR");
    var strMomth = url.searchParams.get("MONTH");
    var strStart = url.searchParams.get("START");
    var strEnd = url.searchParams.get("END");

    var _redirect = "";
    _redirect = "PROVI=" + strProvi + "&DIST=" + strDist + "&TYPE1=" + strType1 + "&TYPE2=" + strType2;

    if (strType3 != null) {
        _redirect = _redirect + "&TYPE3=" + strType3;
        if (strType3 == 0) {
            set_link("search51", "search-5-1.html?" + _redirect);
        } else if (strType3 == 1) {
            set_link("search51", "search-5-1-2.html?" + _redirect);
        } else {
            set_link("search51", "search-5-1-3.html?" + _redirect);
        }
    } else {
        _redirect = _redirect + "&TYPE3=0";
        set_link("search51", "search-5-1.html?" + _redirect);
    }

    var e1 = document.getElementById("provi");
    var e2 = document.getElementById("Dist");
    var e3 = document.getElementById("type1");
    var e4 = document.getElementById("type1");

    var e5 = document.getElementById("year");
    var e6 = document.getElementById("month");
    var e7 = document.getElementById("start");
    var e8 = document.getElementById("end");
    var e9 = document.getElementById("type4");

    try {
        if (strType3 == 0) {
            var r1 = document.getElementById("radio-1");
            r1.checked = true;
        } else if (strType3 == 1) {
            var r1 = document.getElementById("radio-2");
            r1.checked = true;
        } else if (strType3 == 2) {
            var r1 = document.getElementById("radio-3");
            r1.checked = true;
        }
    } catch (err) {
    }

    set_text(e1, strProvi, 0);
    set_text(e2, strDist, 1);
    set_text(e3, strType1, 2);
    set_text(e4, strType2, 3);

    set_text(e5, strYear, 4);
    set_text(e6, strMomth, 5);
    set_text(e7, strStart, 6);
    set_text(e8, strEnd, 7);
    set_text(e9, strType4, 8);

    set_link("_asearch", "search.html?" + _redirect);
    set_link("_asearch1", "search-1.html?" + _redirect);
    set_link("_asearch4", "search-4.html?" + _redirect);
    set_link("_asearch5", "search-5.html?" + _redirect);
    set_link("_asearch6", "search-6.html?" + _redirect);

    set_link("search111", "search-1-1-1.html?" + _redirect);
    set_link("search112", "search-1-1-2.html?" + _redirect);
    set_link("search113", "search-1-1-3.html?" + _redirect);

    set_link("search121", "search-1-1-1.html?" + _redirect);
    set_link("search122", "search-1-1-2.html?" + _redirect);
    set_link("search123", "search-1-1-3.html?" + _redirect);

    set_link("search131", "search-1-1-1.html?" + _redirect);
    set_link("search132", "search-1-1-2.html?" + _redirect);
    set_link("search133", "search-1-1-3.html?" + _redirect);

    set_link("search111result", "search-1-1-1-result.html?" + _redirect);

    set_link("search41", "search-4-0.html?" + _redirect);
    set_link("search411", "search-4-1.html?" + _redirect);
    set_link("search42", "search-4-2.html?" + _redirect);

    set_link("search52", "search-5-2.html?" + _redirect);
    set_link("search53", "search-5-3.html?" + _redirect);
    set_link("search54", "search-5-4.html?" + _redirect);
    set_link("search55", "search-5-5.html?" + _redirect);

    if (document.getElementById("type4") != null) {
        _redirect = _redirect + "&YEAR=" + strYear + "&MONTH=" + strMomth + "&START=" + strStart + "&END=" + strEnd + "&TYPE4=" + strType4;
    }

    set_link("search61", "search-6-1.html?" + _redirect);
    set_link("search62", "search-6-2.html?" + _redirect);
}

function set_link(_id, _link) {
    try {
        document.getElementById(_id).href = _link;
    } catch (err) {
    }
}

function set_text(obj, _value, index) {
    try {
        var strType = "";
        if (index >= 4) {
            strType = obj.options[_value].text;
        } else {
            strType = obj.options[_value - 1].text;
        }
        var list = document.getElementsByClassName("filter-option pull-left")[index];
        list.innerText = strType;
    } catch (err) {
    }
}

var _redirect = "";
var strProvi = "";
var strDist = "";
var strType1 = "";
var strType2 = "";
var strType4 = "";
var strYear = "";
var strMomth = "";
var strStart = "";
var strEnd = "";

function set_redirect(obj) {

    var url_string = window.location.href;
    var url = new URL(url_string);

    if (_redirect == "") {
        strProvi = url.searchParams.get("PROVI");
        strDist = url.searchParams.get("DIST");
        strType1 = url.searchParams.get("TYPE1");
        strType2 = url.searchParams.get("TYPE2");

        strYear = url.searchParams.get("YEAR");
        strMomth = url.searchParams.get("MONTH");
        strStart = url.searchParams.get("START");
        strEnd = url.searchParams.get("END");
        strType4 = url.searchParams.get("TYPE4");
    }

    var str = "";
    try {
        str = obj.options[obj.selectedIndex].value;
    } catch (err) {
    }

    if (obj.id == "provi") {
        strProvi = str;
    } else if (obj.id == "Dist") {
        strDist = str;
    } else if (obj.id == "type1") {
        strType1 = str;
    } else if (obj.id == "type2") {
        strType2 = str;
    } else if (obj.id == "year") {
        strYear = str;
    } else if (obj.id == "month") {
        strMomth = str;
    } else if (obj.id == "start") {
        strStart = str;
    } else if (obj.id == "end") {
        strEnd = str;
    } else if (obj.id == "type4") {
        strType4 = str;
    }

    _redirect = "PROVI=" + strProvi + "&DIST=" + strDist + "&TYPE1=" + strType1 + "&TYPE2=" + strType2;

    document.getElementById("_asearch").href = "search.html?" + _redirect;

    try {
        str = obj.value;
        if (obj.name == "radio-group") {
            _redirect = _redirect + "&TYPE3=" + str;
            if (str == 0) {
                document.getElementById("search51").href = "search-5-1.html?" + _redirect;
            } else if (str == 1) {
                document.getElementById("search51").href = "search-5-1-2.html?" + _redirect;
            } else if (str == 2) {
                document.getElementById("search51").href = "search-5-1-3.html?" + _redirect;
            }
        }
    } catch (err) {
    }
    _redirect = _redirect + "&YEAR=" + strYear + "&MONTH=" + strMomth + "&START=" + strStart + "&END=" + strEnd + "&TYPE4=" + strType4;
    try {
        document.getElementById("search61").href = "search-6-1.html?" + _redirect;
    } catch (err) {
    }
}
