// Инициализация Telegram WebApp
const tg = window.Telegram.WebApp;

// Сообщаем Telegram, что приложение готово
tg.ready();

// Разворачиваем на весь экран
tg.expand();

// Устанавливаем цвета темы
tg.setHeaderColor('#667eea');
tg.setBackgroundColor('#667eea');

// Функция для показа секций
function showSection(section) {
    if (section === 'websites') {
        tg.showPopup({
            title: 'Разработка сайтов',
            message: '🌐 Создание сайтов под ключ\n\n✅ Разработка с нуля\n✅ Доработка существующих\n✅ Техническая поддержка\n✅ Оптимизация скорости\n\nНажмите "Заказать" для связи',
            buttons: [
                {id: 'order', type: 'default', text: 'Заказать'},
                {type: 'cancel'}
            ]
        }, (buttonId) => {
            if (buttonId === 'order') {
                tg.openTelegramLink('https://t.me/saytologiya');
            }
        });
    } else if (section === 'animation') {
        tg.showPopup({
            title: 'Анимация для бизнеса',
            message: '🎬 Анимационные ролики\n\n✅ Объяснение продукта за 30 сек\n✅ Для Instagram/TikTok/рекламы\n✅ Повышение конверсии\n✅ Уникальный стиль\n\nНажмите "Заказать" для связи',
            buttons: [
                {id: 'order', type: 'default', text: 'Заказать'},
                {type: 'cancel'}
            ]
        }, (buttonId) => {
            if (buttonId === 'order') {
                tg.openTelegramLink('https://t.me/saytologiya');
            }
        });
    }
}

// Показываем главную кнопку
tg.MainButton.setText('Связаться со мной');
tg.MainButton.onClick(() => {
    tg.openTelegramLink('https://t.me/saytologiya');
});
tg.MainButton.show();