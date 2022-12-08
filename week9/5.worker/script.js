document.getElementById("imageUpload").onchange = function () {
    let preview = document.querySelector("img.preview");
    let canvas = document.querySelector("canvas.target");

    let file = this.files[0];
    let reader = new FileReader();

    reader.onload = function () {
        preview.src = reader.result;
        preview.classList.remove("nodisplay");

        setTimeout(function () {
            canvas.width = preview.clientWidth;
            canvas.height = preview.clientHeight;

            let cvContext = canvas.getContext("2d");
            cvContext.drawImage(preview, 0, 0, canvas.width, canvas.height);

            const worker = new Worker("process.js");
            worker.onmessage = function (e) {
                cvContext.putImageData(
                    new ImageData(e.data, canvas.width, canvas.height),
                    0,
                    0
                );
                canvas.classList.remove("nodisplay");
            };

            let imgData = cvContext.getImageData(
                0,
                0,
                canvas.width,
                canvas.height
            );

            let pixels = imgData.data;
            worker.postMessage(pixels);
        }, 100);
    };

    if (file) reader.readAsDataURL(file);
};
