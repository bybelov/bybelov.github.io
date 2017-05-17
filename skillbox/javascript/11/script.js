(function() {

    'use strict';

    // Кнопка, нажатие на которую будет вызывать перевод
    var btnTranslate = document.querySelector('.translator-submit');

    // Сохраняем ключ API, полученный со страницы https://tech.yandex.ru/keys/get/?service=trnsl
    var API_KEY = 'trnsl.1.1.20170516T182343Z.0636e72f8298793d.6191a2b82aacc0cfdc88223f990dd93a9cb80743';
    // Создаем объект XMLHttpRequest, при помощи которого будем отправлять запрос
    var req = new XMLHttpRequest();

    window.onload = function(){
        // ссылка для доступа к API доступных языков для яндекс переводчика
        var url = 'https://translate.yandex.net/api/v1.5/tr.json/getLangs';
        url += '?key=' + API_KEY;
        url += '&ui=ru';

        // Выполняем запрос, когда вся страница и ресурсы на ней загружены
        req.addEventListener('load', function(){
            // Преобразуем полученный JSON в js объект
            var response = JSON.parse( req.response );
            // Находим все селекты с классом js-select (их 2 на странице)
            var select = document.querySelectorAll('.js-select');
            // Пробегаемся по каждому селекту
            for (var s = 0; s < select.length; s++){
                // пробегаемся по объекту со списком доступных языков для перевода
                for(var val in response.langs) {
                    // создаем option для селекта
                    var option = document.createElement('option');
                    // Присваиваем ключ языка в value
                    option.value = val;
                    // В качестве текста option - название языка
                    option.innerHTML = response.langs[val];
                    // и заполняем каждый из селектов списком доступных языков
                    select[s].appendChild(option);
                }
            }
        });
        req.open('post', url);
        req.send();
    };

    btnTranslate.addEventListener('click', function(ev){

        ev.preventDefault();
        // Получаем код языка на котором написан текст
        var translatorFrom = document.getElementById('translator_from').value;
        // Получаем код языка на который переводим
        var translatorTo = document.getElementById('translator_to').value;
        // Получаем текст, который нужно перевести
        var text = document.querySelector('.textarea').value;

        // Сохраняем адрес API
        var url = 'https://translate.yandex.net/api/v1.5/tr.json/translate';
        // Формируем полный адрес запроса:
        url += '?key=' + API_KEY; // добавляем к запросу ключ API
        url += '&text=' + text; // текст для перевода
        url += '&lang=' + translatorFrom + '-' + translatorTo; // направление перевода: с русского на английский

        // Таким образом формируется строка вида:
        // https://translate.yandex.net/api/v1.5/tr.json/translate?key=example_api_key&text=кролики&lang=ru-en

        var translateResult = document.querySelector('.translator-result');

        // Назначаем обработчик события load
        req.addEventListener('load', function() {

            var response = JSON.parse(req.response); // парсим его из JSON-строки в JavaScript-объект

            // Проверяем статус-код, который прислал сервер
            // 200 — это ОК, остальные — ошибка или что-то другое
            if (response.code !== 200) {
                translateResult.innerHTML = 'Произошла ошибка при получении ответа от сервера:\n\n' + response.message;
                return;
            }
            // Проверяем, найден ли перевод для данного слова
            if (response.text.length === 0) {
                translateResult.innerHTML = 'К сожалению, перевод для данного слова не найден';
                return;
            }
            // Если все в порядке, то отображаем перевод на странице
            translateResult.innerHTML = response.text.join('<br>'); // вставляем его на страницу
        });

        // Обработчик готов, можно отправлять запрос
        // Открываем соединение и отправляем
        req.open('get', url);
        req.send();

    });

})();
