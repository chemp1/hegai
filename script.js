const tg = window.Telegram.WebApp;
const btn = document.getElementById('btn');

// Инициализируем приложение Telegram
tg.ready();

btn.addEventListener('click', function(){
    tg.showAlert("🎉 Привет! Ты нажал на кнопку в своем первом Mini App!");
});