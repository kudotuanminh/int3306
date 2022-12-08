// handles individual check
var checks = document.getElementsByName("check");
for (let i = 0; i < checks.length; i++) {
    checks[i].onchange = function () {
        var _checks;
        var j;

        if (this.checked) {
            this.parentNode.parentNode.classList.add("selected");

            _checks = document.getElementsByName("check");
            j = 0;
            for (; j < _checks.length; j++) if (!_checks[j].checked) break;

            if (j === _checks.length)
                document.getElementById("check-all").checked = true;
            else document.getElementById("check-all").checked = false;

            document.getElementById("del-button").style.display = "block";
        } else {
            this.parentNode.parentNode.classList.remove("selected");
            document.getElementById("check-all").checked = false;

            _checks = document.getElementsByName("check");
            j = 0;
            for (; j < _checks.length; j++) if (_checks[j].checked) break;

            if (j === _checks.length)
                document.getElementById("del-button").style.display = "none";
            else document.getElementById("del-button").style.display = "block";
        }
    };
}

// handles check all
document.getElementById("check-all").onchange = function () {
    var _checks = document.getElementsByName("check");
    for (let i = 0; i < _checks.length; i++) {
        _checks[i].checked = this.checked;
        if (_checks[i].checked)
            _checks[i].parentNode.parentNode.classList.add("selected");
        else _checks[i].parentNode.parentNode.classList.remove("selected");
    }

    if (this.checked)
        document.getElementById("del-button").style.display = "block";
    else document.getElementById("del-button").style.display = "none";
};

// handles clicking on row
var rows = document.getElementsByTagName("tr");
for (let i = 1; i < rows.length; i++) {
    rows[i].onclick = function (e) {
        var _check = this.getElementsByTagName("input")[0];
        if (e.target !== _check) {
            _check.checked = !_check.checked;
            _check.onchange();
        }
    };
}
