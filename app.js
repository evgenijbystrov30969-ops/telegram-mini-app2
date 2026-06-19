// Инициализация Telegram WebApp
const tg = window.Telegram.WebApp;
tg.ready();
tg.expand();

// Применяем тему Telegram
if (tg.colorScheme === 'dark') {
    document.body.style.background = '#211E1A';
}

// Показ услуг
function showService(type) {
    const data = {
        sites: {
            title: 'Разработка сайтов',
            text: 'Беру на себя полный цикл:\n\n' +
                  '• Сайты под ключ\n' +
                  '• Доработка существующих\n' +
                  '• Техническая поддержка\n' +
                  '• Оптимизация скорости\n\n' +
                  'Работаю с WordPress, Tilda и другими CMS.\n\n' +
                  'Результат — сайт, который приносит заявки.'
        },
        animation: {
            title: 'Анимация для продаж',
            text: 'Короткие ролики для бизнеса:\n\n' +
                  '• Объясняют продукт за 30 сек\n' +
                  '• Для Instagram / TikTok / Telegram\n' +
                  '• Усиливают конверсию\n' +
                  '• Запоминаются среди конкурентов\n\n' +
                  'Это не мультик — это инструмент маркетинга.'
        }
    };

    const item = data[type];
    tg.showPopup({
        title: item.title,
        message: item.text,
        buttons: [
            { id: 'order', type: 'default', text: 'Заказать' },
            { type: 'cancel' }
        ]
    }, (buttonId) => {
        if (buttonId === 'order') {
            tg.openTelegramLink('https://t.me/saytologiya');
        }
    });
}

// Калькулятор
function calculate() {
    const type = document.getElementById('calc-type').value;
    const level = document.getElementById('calc-level').value;
    const seo = document.getElementById('opt-seo').checked;
    const content = document.getElementById('opt-content').checked;
    const support = document.getElementById('opt-support').checked;

    let base = 0;
    let term = '';

    // Базовая цена
    if (type === 'site') {
        if (level === 'simple') { base = 25000; term = '7–14 дней'; }
        else if (level === 'medium') { base = 55000; term = '14–30 дней'; }
        else { base = 120000; term = '30–60 дней'; }
    } else if (type === 'animation') {
        if (level === 'simple') { base = 15000; term = '3–5 дней'; }
        else if (level === 'medium') { base = 35000; term = '5–10 дней'; }
        else { base = 70000; term = '10–20 дней'; }
    } else {
        if (level === 'simple') { base = 8000; term = 'постоянно'; }
        else if (level === 'medium') { base = 15000; term = 'постоянно'; }
        else { base = 30000; term = 'постоянно'; }
    }

    // Допы
    if (seo) base += 8000;
    if (content) base += 12000;
    if (support) base += 15000;

    document.getElementById('calc-price').textContent = 'от ' + base.toLocaleString('ru-RU') + ' ₽';
    document.getElementById('calc-term').textContent = 'Срок: ' + term;
}

// Заявка
function orderProject() {
    const type = document.getElementById('calc-type').value;
    const price = document.getElementById('calc-price').textContent;

    const types = {
        site: 'сайт',
        animation: 'анимацию',
        support: 'поддержку сайта'
    };

    const message = `Здравствуйте! Хочу заказать ${types[type]}. Ориентировочный бюджет: ${price}.`;
    const url = `https://t.me/saytologiya?text=${encodeURIComponent(message)}`;
    tg.openTelegramLink(url);
}

// Главная кнопка Telegram
tg.MainButton.setText('СВЯЗАТЬСЯ СО МНОЙ');
tg.MainButton.setParams({
    color: '#AE8752',
    text_color: '#FBF9F4'
});
tg.MainButton.onClick(() => {
    tg.openTelegramLink('https://t.me/saytologiya');
});
tg.MainButton.show();

// Инициализация калькулятора
calculate();
