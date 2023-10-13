// Константа идентификатора яндекс метрики
const YandexID = 88073792

// Функция для отправки события в яндекс метрику

function metricSend(target_name) {
    ym(YandexID, 'reachGoal', target_name)
}

// Шаблон для отправленных форм
// Чтобы в шорткоде прописать id формы надо добавить атрибут: html_id
// Пример: [contact-form-7 id="123" title="Контактная форма" html_id="contact-form-id"]
// Константы создавай уникальные

const example_form = document.querySelector('#Сюда id формы')
if (example_form) {
    example_form.addEventListener('wpcf7mailsent', function (event) {
        metricSend('Здесь ид цели')
    }, false);
}


// Пример обработки формы

const contact_form_863 = document.querySelector('#wpcf7-f863-o4')
if (contact_form_863) {
    contact_form_863.addEventListener('wpcf7mailsent', function (event) {
        metricSend('send_form')
    })
}
