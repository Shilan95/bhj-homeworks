let timerHtml = document.getElementById("timer");

let timer = setInterval(() => {
    timerHtml.textContent = Number(timerHtml.textContent) - 1;

    if (timerHtml.textContent == 0) {
        alert("Вы победили в конкурсе!")
        window.location.href = "https://drive.google.com/uc?export=download&id=14u9dygmFLXEFi037MkXmPimE3l9-g0qt"; //дополнительный пункт, скачивание файла
        clearTimeout(timer);
    }
}, 1000);