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
    // Вызов существующего кода для форм
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

    // Определяем текущую страницу и инициализируем соответствующий функционал
    if (currentPage === 'pricing.html') {
        initPricingPage();
    } else if (currentPage === 'portfolio.html') {
        initPortfolioPage();
    }
});

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
    };

// Данные для портфолио
const portfolioProjects = {
    1: {
        title: "FashionStore Bot",
        category: "E-commerce",
        description: "Полноценный интернет-магазин одежды в Telegram с каталогом из 500+ товаров, корзиной, онлайн-оплатой и отслеживанием заказов.",
        challenge: "Клиенту нужен был удобный способ продавать одежду в Telegram без необходимости разработки отдельного мобильного приложения.",
        solution: "Мы создали многофункционального бота с интуитивным интерфейсом, интеграцией с 1С-Битрикс и платежной системой ЮKassa.",
        features: [
            "Каталог товаров с фильтрами по размеру, цвету и цене",
            "Корзина и оформление заказа в 3 клика",
            "Онлайн-оплата картой и через ЮMoney",
            "Отслеживание статуса заказа в реальном времени",
            "Система скидок и промокодов",
            "Персональные рекомендации на основе покупок"
        ],
        techStack: [
            { icon: "fab fa-python", name: "Python", color: "#3776AB" },
            { icon: "fas fa-database", name: "PostgreSQL", color: "#336791" },
            { icon: "fas fa-credit-card", name: "ЮKassa API", color: "#FFCC00" },
            { icon: "fas fa-sync-alt", name: "1С-Битрикс", color: "#E61610" }
        ],
        results: [
            "Увеличение онлайн-продаж на 40%",
            "Сокращение нагрузки на поддержку на 60%",
            "Среднее время оформления заказа: 2.5 минуты",
            "Конверсия в покупку: 28%"
        ],
        client: "Сеть магазинов одежды",
        timeline: "21 день",
        budget: "89,000 руб."
    },
    2: {
        title: "EduLearn Bot",
        category: "Образование",
        description: "Платформа для онлайн-курсов с уроками, тестами, домашними заданиями и автоматической проверкой с использованием AI.",
        challenge: "Образовательной платформе нужен был удобный способ доставки контента студентам прямо в мессенджер.",
        solution: "Разработали образовательного бота с системой уроков, прогресс-трекингом и AI-ассистентом для ответов на вопросы.",
        features: [
            "Пошаговые уроки с видео и текстом",
            "Интерактивные тесты с автоматической проверкой",
            "AI-помощник для ответов на вопросы по курсу",
            "Трекер прогресса и достижений",
            "Система напоминаний о занятиях",
            "Генерация сертификатов об окончании"
        ],
        techStack: [
            { icon: "fab fa-node-js", name: "Node.js", color: "#339933" },
            { icon: "fas fa-brain", name: "OpenAI API", color: "#412991" },
            { icon: "fas fa-chart-line", name: "Google Analytics", color: "#E37400" },
            { icon: "fas fa-video", name: "Vimeo API", color: "#1AB7EA" }
        ],
        results: [
            "Удержание студентов увеличилось на 45%",
            "Средняя оценка курсов: 4.8/5",
            "Автоматизация 70% ответов на вопросы",
            "Снижение нагрузки на преподавателей на 50%"
        ],
        client: "Онлайн-школа программирования",
        timeline: "30 дней",
        budget: "120,000 руб."
    },
    3: {
        title: "FoodDelivery Bot",
        category: "Бизнес",
        description: "Система заказа еды с онлайн-меню, выбором времени доставки, отслеживанием курьера и системой отзывов.",
        challenge: "Ресторану нужен был способ принимать заказы без звонков и уменьшить количество ошибок при приеме заказов.",
        solution: "Создали бота с интерактивным меню, интеграцией с картами для отслеживания и автоматическим расчетом времени доставки.",
        features: [
            "Интерактивное меню с фотографиями блюд",
            "Выбор времени доставки с учетом загруженности",
            "Отслеживание курьера на карте в реальном времени",
            "Система лояльности и накопительные скидки",
            "Автоматическое напоминание о повторном заказе",
            "Интеграция с кухонным принтером"
        ],
        techStack: [
            { icon: "fab fa-python", name: "Python", color: "#3776AB" },
            { icon: "fas fa-map-marked-alt", name: "Яндекс.Карты", color: "#FF3333" },
            { icon: "fas fa-print", name: "Принтер API", color: "#666666" },
            { icon: "fas fa-bell", name: "Push-уведомления", color: "#FF9800" }
        ],
        results: [
            "Сокращение времени принятия заказа на 70%",
            "Уменьшение ошибок при заказе на 90%",
            "Увеличение среднего чека на 25%",
            "Повторные заказы: 65% клиентов"
        ],
        client: "Сеть ресторанов быстрого питания",
        timeline: "18 дней",
        budget: "75,000 руб."
    }
};

// Функционал для страницы портфолио
function initPortfolioPage() {
    // Фильтрация проектов
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Убираем активный класс у всех кнопок
            filterButtons.forEach(btn => btn.classList.remove('filter-active'));
            // Добавляем активный класс текущей кнопке
            this.classList.add('filter-active');

            const filterValue = this.getAttribute('data-filter');

            // Анимация скрытия/показа элементов
            portfolioItems.forEach(item => {
                item.style.opacity = '0';
                item.style.transform = 'scale(0.8)';

                setTimeout(() => {
                    if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                        item.style.display = 'block';
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'scale(1)';
                        }, 100);
                    } else {
                        item.style.display = 'none';
                    }
                }, 300);
            });
        });
    });

    // Модальное окно для деталей проекта
    const viewDetailsButtons = document.querySelectorAll('.view-details');
    const modal = document.getElementById('projectModal');
    const modalClose = document.getElementById('modalClose');
    const modalBody = document.getElementById('modalBody');

    viewDetailsButtons.forEach(button => {
        button.addEventListener('click', function() {
            const projectId = this.getAttribute('data-project');
            const project = portfolioProjects[projectId];

            if (project) {
                modalBody.innerHTML = createModalContent(project);
                modal.style.display = 'flex';
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Закрытие модального окна
    modalClose.addEventListener('click', closeModal);
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Закрытие по Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'flex') {
            closeModal();
        }
    });

    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    function createModalContent(project) {
        return `
            <div class="modal-header">
                <h2 style="color: #667eea; margin-bottom: 0.5rem;">${project.title}</h2>
                <span class="portfolio-category">${project.category}</span>
            </div>

            <div style="margin-bottom: 2rem;">
                <h3 style="margin-bottom: 1rem;">Описание проекта</h3>
                <p style="color: #666; line-height: 1.6;">${project.description}</p>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin-bottom: 2rem;">
                <div>
                    <h3 style="margin-bottom: 1rem;">Задача</h3><p style="color: #666; background: #f8f9ff; padding: 1rem; border-radius: 8px;">${project.challenge}</p>
                </div>
                <div>
                    <h3 style="margin-bottom: 1rem;">Решение</h3>
                    <p style="color: #666; background: #f8f9ff; padding: 1rem; border-radius: 8px;">${project.solution}</p>
                </div>
            </div>

            <div>
                <h3 style="margin-bottom: 1rem;">Ключевые функции</h3>
                <div class="modal-features">
                    ${project.features.map(feature => `
                        <div class="modal-feature">
                            <i class="fas fa-check" style="color: #4CAF50;"></i>
                            <span>${feature}</span>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div>
                <h3 style="margin-bottom: 1rem;">Технологический стек</h3>
                <div class="modal-tech-stack">
                    ${project.techStack.map(tech => `
                        <div class="tech-stack-item">
                            <i class="${tech.icon} tech-stack-icon" style="color: ${tech.color};"></i>
                            <span style="font-size: 0.9rem;">${tech.name}</span>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div class="modal-results">
                <h3>Результаты</h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
                    ${project.results.map(result => `
                        <div style="background: rgba(255,255,255,0.2); padding: 1rem; border-radius: 8px;">
                            <i class="fas fa-chart-line" style="margin-right: 10px;"></i>
                            <span>${result}</span>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin-top: 2rem; background: #f8f9ff; padding: 1.5rem; border-radius: 10px;">
                <div style="text-align: center;">
                    <div style="font-size: 0.9rem; color: #666; margin-bottom: 5px;">Клиент</div>
                    <div style="font-weight: bold;">${project.client}</div>
                </div>
                <div style="text-align: center;">
                    <div style="font-size: 0.9rem; color: #666; margin-bottom: 5px;">Сроки</div>
                    <div style="font-weight: bold;">${project.timeline}</div>
                </div>
                <div style="text-align: center;">
                    <div style="font-size: 0.9rem; color: #666; margin-bottom: 5px;">Бюджет</div>
                    <div style="font-weight: bold;">${project.budget}</div>
                </div>
            </div>

            <div style="text-align: center; margin-top: 2rem;">
                <a href="contact.html" class="btn" style="display: inline-block;">Хочу похожий проект</a>
            </div>
        `;
    }

    // Анимация появления элементов при скролле
    function animatePortfolioItems() {
        const items = document.querySelectorAll('.portfolio-item');

        items.forEach((item, index) => {
            const delay = item.getAttribute('data-delay') || 0;
            const itemPosition = item.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;

            if (itemPosition < screenPosition) {
                setTimeout(() => {
                    item.style.animation = `fadeIn 0.6s ease-out ${delay}s forwards`;
                }, 100);
            }
        });
    }

    // Запускаем анимацию
    window.addEventListener('load', animatePortfolioItems);
    window.addEventListener('scroll', animatePortfolioItems);

    // Инициализируем анимацию сразу
    setTimeout(animatePortfolioItems, 300);
}