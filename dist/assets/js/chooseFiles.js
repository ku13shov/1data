const fileInput = document.getElementById("choose-files");
const label = document.querySelector("label[for='choose-files']");

fileInput.addEventListener("change", function () {
    if (fileInput.files.length > 0) {
        // Создаем массив имен выбранных файлов
        const fileNames = Array.from(fileInput.files).map(file => file.name);

        // Обновляем текст внутри <label> с именами файлов, разделенными запятыми
        label.textContent = "Выбраны файлы: " + fileNames.join(", ");
    } else {
        // Если файлы не выбраны, восстанавливаем исходный текст
        label.textContent = "Прикрепить файлы";
    }
});