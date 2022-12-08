/*
	Thư viện tải ảnh responsive.
	Copyright: Lê Đình Thanh*, iTest Team**
	Official link: https://uet.vnu.edu.vn/~thanhld/lects/webappdev/responsive-image/respimg.js

	(*) Trường Đại học Công nghệ, ĐHQGHN (http://uet.vnu.edu.vn)
	(**) iTest (http://itest.com.vn)
 */
function createImg() {
    let imgbox = document.querySelectorAll("div.image-box");
    for (let i = 0; i < imgbox.length; i++) {
        let img = document.createElement("img");
        img.src = "";
        imgbox[i].insertBefore(img, imgbox[i].firstChild);
    }
}
function loadI(box, img, src) {
    if (box.clientWidth == 0) return;
    let ret = "";
    let ratio = 1000.0;
    let s = src
        .replace(/\s\s[\s]*/g, " ")
        .trim()
        .split(",");
    for (let i = 0; i < s.length; i++) {
        let v = s[i].trim().split(" ");
        let r = 100.0;
        if (v.length >= 2)
            r =
                (1.0 * Math.abs(parseInt(v[1]) - box.clientWidth)) /
                box.clientWidth;
        if (r < ratio) {
            ratio = r;
            ret = v[0];
        }
    }
    if (ret != "" && img.src.indexOf(ret) < 0) {
        img.src = ret;
    }
}
function loadImg() {
    let box = document.querySelectorAll("div.image-box");
    let img = document.querySelectorAll("div.image-box img");
    let src = document.querySelectorAll("div.image-box input[type=hidden]");
    for (let i = 0; i < box.length; i++) {
        loadI(box[i], img[i], src[i].value);
    }
}
window.onresize = function () {
    loadImg();
};
createImg();
loadImg();
