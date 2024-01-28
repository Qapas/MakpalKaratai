function checkPhoneNumber() {
    // Получаем значение введенного номера телефона
    var enteredNumber = document.querySelector(".phone-input").value;

    
    // Загружаем данные из JSON файла
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            // Проверяем наличие введенного номера в данных
            if (data.hasOwnProperty(enteredNumber)) {
                // Если номер найден, получаем имя игрока
                var playerName = data[enteredNumber].name_player;

                // Меняем текст с именем игрока
                document.getElementById("resultText").innerText = "Уважаемый(ая), " + playerName + ", вы участвуете в розыгрыше";
            } else {
                // Если номер не найден, меняем текст
                document.getElementById("resultText").innerText = "Участник не найден.";
            }
        })
        .catch(error => console.error('Ошибка загрузки JSON:', error));
}
