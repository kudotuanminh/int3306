// handles switching between elements
document.getElementById("name").onkeyup = function (e) {
    switchElement(e, "address");
};
document.getElementById("address").onkeyup = function (e) {
    switchElement(e, "gender-1");
};
document.getElementById("gender-1").onkeyup = function (e) {
    switchElement(e, "gender-2");
};
document.getElementById("gender-2").onkeyup = function (e) {
    switchElement(e, "birthday");
};
document.getElementById("birthday").onkeyup = function (e) {
    switchElement(e, "email");
};
document.getElementById("email").onkeyup = function (e) {
    switchElement(e, "phone");
};
document.getElementById("phone").onkeyup = function (e) {
    switchElement(e, "course-1");
};
document.getElementById("course-1").onkeyup = function (e) {
    switchElement(e, "course-2");
};
document.getElementById("course-2").onkeyup = function (e) {
    switchElement(e, "course-3");
};
document.getElementById("course-3").onkeyup = function (e) {
    switchElement(e, "username");
};
document.getElementById("username").onkeyup = function (e) {
    switchElement(e, "password");
};
document.getElementById("password").onkeyup = function (e) {
    switchElement(e, "password2");
};
document.getElementById("password2").onkeyup = function (e) {
    switchElement(e, "note");
};
document.getElementById("note").onkeyup = function (e) {
    switchElement(e, "avatar");
};

function switchElement(event, nextElement) {
    // IE compatibility
    if (window.event) event = window.event;

    if (event.key === "Enter") {
        document.getElementById(nextElement).focus();
    }
}

// handles cleaning name input
document.getElementById("name").onblur = function (e) {
    this.value = clean(this.value);
};

function clean(input) {
    var temp = input.split(" ");
    var res = "";
    for (var i = 0; i < temp.length; i++)
        if (temp[i].length > 0) {
            if (res.length > 0) res += " ";
            res += temp[i].substring(0, 1).toUpperCase();
            res += temp[i].substring(1).toLowerCase();
        }
    return res;
}

// handling date input in birthday field
document.getElementById("birthday").onkeyup = function (e) {
    // only handles when the user isn't deleting
    if (e.key != "Backspace" && e.key != "Delete") {
        var numChar = this.value.length;

        // adding slashes after date or month
        if (numChar === 2 || numChar === 5) this.value += "/";

        // handles if user delete the first slash
        if (numChar > 2 && numChar < 5)
            if (this.value.charAt(2) !== "/")
                this.value =
                    this.value.substring(0, 2) + "/" + this.value.substring(2);

        // handles if user delete the second slash
        if (numChar > 5)
            if (this.value.charAt(5) !== "/")
                this.value =
                    this.value.substring(0, 5) + "/" + this.value.substring(5);
    }
};

// handling avatar preview
document.getElementById("avatar").onchange = function () {
    let preview = document.querySelector("img.preview");
    let file = this.files[0];
    let reader = new FileReader();

    reader.onload = function () {
        preview.src = reader.result;
    };
    if (file) {
        reader.readAsDataURL(file);
    }
};

// handling form submission
function submitForm() {
    var error = false;

    document.getElementById("name-error").innerHTML = "";
    document.getElementById("birthday-error").innerHTML = "";
    document.getElementById("email-error").innerHTML = "";
    document.getElementById("username-error").innerHTML = "";
    document.getElementById("password-error").innerHTML = "";
    document.getElementById("password2-error").innerHTML = "";

    if (document.getElementById("name").value === "") {
        document.getElementById("name-error").innerHTML =
            "Họ tên không được để trống.";
        error = true;
    }

    if (document.getElementById("birthday").value === "") {
        document.getElementById("birthday-error").innerHTML =
            "Ngày sinh không được để trống.";
        error = true;
    } else if (!isValidDate(document.getElementById("birthday").value)) {
        document.getElementById("birthday-error").innerHTML =
            "Ngày sinh không hợp lệ.";
        error = true;
    }

    if (document.getElementById("email").value === "") {
        document.getElementById("email-error").innerHTML =
            "E-mail không được để trống.";
        error = true;
    } else if (!isValidEmail(document.getElementById("email").value)) {
        document.getElementById("email-error").innerHTML =
            "E-mail không hợp lệ.";
        error = true;
    }

    if (document.getElementById("username").value === "") {
        document.getElementById("username-error").innerHTML =
            "Tên sử dụng không được để trống.";
        error = true;
    }

    if (document.getElementById("password").value === "") {
        document.getElementById("password-error").innerHTML =
            "Mật khẩu không được để trống.";
        error = true;
    } else if (document.getElementById("password2").value === "") {
        document.getElementById("password2-error").innerHTML =
            "Vui lòng nhập lại mật khẩu.";
        error = true;
    } else if (
        document.getElementById("password").value !==
        document.getElementById("password2").value
    ) {
        document.getElementById("password-error").innerHTML =
            "Mật khẩu gõ lại không giống.";
        document.getElementById("password2-error").innerHTML =
            "Mật khẩu gõ lại không giống.";
        error = true;
    }

    if (!error) document.getElementById("form").submit();
}

function isValidEmail(email) {
    let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");

    return regex.test(email);
}

function isValidDate(date) {
    var temp = date.split("/");

    if (temp.length !== 3) return false;
    if (isNaN(temp[0]) || isNaN(temp[1]) || isNaN(temp[2])) return false;

    var DD = parseInt(temp[0]);
    var MM = parseInt(temp[1]);
    var YYYY = parseInt(temp[2]);

    if (MM > 12 || MM < 1) return false;
    if (DD > numOfDays(MM, YYYY) || DD < 1) return false;

    var today = new Date();
    if (YYYY > today.getFullYear() || YYYY < 1850) return false;

    return true;
}

function isLeapYear(YYYY) {
    return (YYYY % 4 === 0 && YYYY % 100 !== 0) || YYYY % 400 === 0;
}

function numOfDays(MM, YYYY) {
    switch (MM) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            return 31;
        case 4:
        case 6:
        case 9:
        case 11:
            return 30;
        case 2:
            return isLeapYear(YYYY) ? 29 : 28;
        default:
    }
}
