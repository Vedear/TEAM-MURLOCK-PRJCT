// Обработка формы контактов
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Простая валидация
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (!name || !email || !message) {
                alert('Пожалуйста, заполните все обязательные поля (помечены *).');
                return;
            }

            // В реальном проекте здесь будет отправка на сервер
            alert('Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в течение 2 часов.');
            contactForm.reset();
        });
    }

    // Подсветка активной ссылки в навигации
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage ||
            (currentPage === '' && linkPage === 'index.html')) {
            link.style.backgroundColor = 'rgba(255,255,255,0.3)';
        }
    });
});

// Функционал для страницы цен
function initPricingPage() {
    // Тогглер периодов оплаты
    const billingToggle = document.getElementById('billingToggle');
    const monthlyText = document.getElementById('monthly');
    const yearlyText = document.getElementById('yearly');

    if (billingToggle) {
        billingToggle.addEventListener('change', function() {
            const monthlyPrices = document.querySelectorAll('.price-monthly');
            const yearlyPrices = document.querySelectorAll('.price-yearly');

            if (this.checked) {
                monthlyText.classList.remove('active');
                yearlyText.classList.add('active');
                monthlyPrices.forEach(p => p.classList.remove('active'));
                yearlyPrices.forEach(p => p.classList.add('active'));
            } else {
                monthlyText.classList.add('active');
                yearlyText.classList.remove('active');
                monthlyPrices.forEach(p => p.classList.add('active'));
                yearlyPrices.forEach(p => p.classList.remove('active'));
            }
        });
    }

    // FAQ аккордеон
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const toggle = this.querySelector('.faq-toggle');

            // Закрываем другие открытые вопросы
            document.querySelectorAll('.faq-answer').forEach(item => {
                if (item !== answer && item.classList.contains('active')) {
                    item.classList.remove('active');
                    item.previousElementSibling.querySelector('.faq-toggle').classList.remove('active');
                }
            });

            // Переключаем текущий вопрос
            answer.classList.toggle('active');
            toggle.classList.toggle('active');
        });
    });

    // Анимация появления элементов при скролле
    function animateOnScroll() {
        const elements = document.querySelectorAll('.animate-fade-up');

        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;

            if (elementPosition < screenPosition) {
                element.style.animationPlayState = 'running';
            }
        });
    }

    // Запускаем анимацию при загрузке и скролле
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);

    // Анимация галочек в таблице сравнения
    const checkmarks = document.querySelectorAll('.feature-check');
    checkmarks.forEach((check, index) => {
        setTimeout(() => {
            check.classList.add('checkmark-animate');
        }, index * 100);
    });
}



// Инициализируем при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    // Вызов существующего кода
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (!name || !email || !message) {
                alert('Пожалуйста, заполните все обязательные поля (помечены *).');
                return;
            }

            alert('Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в течение 2 часов.');
            contactForm.reset();
        });
    }

    // Подсветка активной ссылки
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage ||
            (currentPage === '' && linkPage === 'index.html')) {
            link.style.backgroundColor = 'rgba(255,255,255,0.3)';
        }
    });

    // Инициализация страницы цен
    if (currentPage === 'pricing.html') {
        initPricingPage();
    }
});