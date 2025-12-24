const photos = [
            { 
                id: 1, 
                title: "Корпоративное мероприятие 2024", 
                date: "15.05.2025", 
                category: "events", 
                description: "Ежегодное корпоративное мероприятие для сотрудников компании. Более 200 человек собрались для общения и отдыха.",
                img: "",
                views: "1.5K"
            },
            { 
                id: 2, 
                title: "Производственный цех №1", 
                date: "22.04.2023", 
                category: "production", 
                description: "Основной производственный цех с современным оборудованием. Высокая автоматизация и точность производства.",
                img: "",
                views: "2.3K"
            },
            { 
                id: 3, 
                title: "Команда отдела разработки", 
                date: "10.03.2024", 
                category: "team", 
                description: "Наши талантливые разработчики за работой. Команда из 15 специалистов создает инновационные решения.",
                img: "",
                views: "1.8K"
            },
            { 
                id: 4, 
                title: "Офис компании", 
                date: "05.02.2022", 
                category: "office", 
                description: "Современный офис с комфортными рабочими местами. Пространство спроектировано для продуктивной работы.",
                img: "",
                views: "1.2K"
            },
            { 
                id: 5, 
                title: "Презентация нового продукта", 
                date: "18.06.2025", 
                category: "events", 
                description: "Презентация инновационного продукта для партнеров и клиентов. Успешный запуск нового направления.",
                img: "",
                views: "3.1K"
            },
            { 
                id: 6, 
                title: "Технологическая линия", 
                date: "30.01.2023", 
                category: "production", 
                description: "Автоматизированная технологическая линия с роботизированными системами контроля качества.",
                img: "",
                views: "2.5K"
            },
            { 
                id: 7, 
                title: "Тренинг для сотрудников", 
                date: "12.04.2024", 
                category: "team", 
                description: "Обучающий тренинг по повышению квалификации сотрудников. Внедрение новых методик работы.",
                img: "",
                views: "1.4K"
            },
            { 
                id: 8, 
                title: "Переговорная комната", 
                date: "08.03.2025", 
                category: "office", 
                description: "Современная переговорная для встреч с клиентами. Оснащена мультимедийным оборудованием.",
                img: "",
                views: "1.1K"
            },
            { 
                id: 9, 
                title: "Выставка промышленного оборудования", 
                date: "25.05.2025", 
                category: "events", 
                description: "Участие в международной выставке промышленного оборудования. Представление новейших разработок.",
                img: "",
                views: "2.7K"
            },
            { 
                id: 10, 
                title: "Контроль качества продукции", 
                date: "14.02.2024", 
                category: "production", 
                description: "Строгий контроль качества на каждом этапе производства. Использование передовых технологий проверки.",
                img: "",
                views: "1.9K"
            },
            { 
                id: 11, 
                title: "Продукция компании", 
                date: "20.06.2022", 
                category: "products", 
                description: "Готовая продукция перед отправкой клиентам. Каждая единица проходит финальный осмотр.",
                img: "",
                views: "2.1K"
            },
            { 
                id: 12, 
                title: "Совещание руководителей", 
                date: "20.06.2024", 
                category: "team", 
                description: "Еженедельное совещание руководящего состава. Обсуждение стратегических вопросов развития.",
                img: "",
                views: "1.3K"
            },
            { 
                id: 13, 
                title: "Ресепшн", 
                date: "03.01.2025", 
                category: "office", 
                description: "Приемная компании, где мы встречаем гостей. Современный дизайн и комфортная атмосфера.",
                img: "",
                views: "1.6K"
            },
            { 
                id: 14, 
                title: "Новое оборудование", 
                date: "11.04.2023", 
                category: "products", 
                description: "Новейшее оборудование, поступившее на производство. Увеличение производительности на 40%.",
                img: "",
                views: "2.4K"
            }
        ];

        const videos = [
            { 
                id: 1, 
                title: "Презентация нового оборудования", 
                duration: "5:24", 
                date: "15.05.2023",
                views: "1.2K",
                category: "presentation", 
                description: "Подробный обзор нового производственного оборудования, внедренного в 2023 году. Демонстрация возможностей и преимуществ.",
                img: "", 
                videoUrl: ""
            },
            { 
                id: 2, 
                title: "Репортаж с корпоратива", 
                duration: "8:12", 
                date: "10.04.2023",
                views: "2.4K",
                category: "report", 
                description: "Яркие моменты с ежегодного корпоративного мероприятия компании. Интервью с сотрудниками и руководством.",
                img: "", 
                videoUrl: ""
            },
            { 
                id: 3, 
                title: "Интервью с генеральным директором", 
                duration: "12:45", 
                date: "28.03.2023",
                views: "3.1K",
                category: "interview", 
                description: "Беседа с руководителем компании о планах развития и новых проектах. Ответы на вопросы о будущем компании.",
                img: "", 
                videoUrl: ""
            },
            { 
                id: 4, 
                title: "Экскурсия по производству", 
                duration: "7:33", 
                date: "22.02.2023",
                views: "1.8K",
                category: "report", 
                description: "Видеотур по основным производственным площадкам компании. Показ всех этапов производства продукции.",
                img: "", 
                videoUrl: ""
            },
            { 
                id: 5, 
                title: "Презентация годовых результатов", 
                duration: "15:20", 
                date: "20.01.2023",
                views: "2.7K",
                category: "presentation", 
                description: "Отчет о деятельности компании за 2022 год и планы на будущее. Финансовые показатели и достижения.",
                img: "", 
                videoUrl: ""
            },
            { 
                id: 6, 
                title: "Интервью с ведущим инженером", 
                duration: "9:15", 
                date: "15.12.2022",
                views: "1.5K",
                category: "interview", 
                description: "Рассказ о технических инновациях и разработках компании. Объяснение сложных технологий простым языком.",
                img: "", 
                videoUrl: ""
            },
            { 
                id: 7, 
                title: "Обучающий ролик по технике безопасности", 
                duration: "6:42", 
                date: "05.11.2022",
                views: "3.5K",
                category: "tutorial", 
                description: "Подробный инструктаж по технике безопасности на производстве. Правила работы с оборудованием.",
                img: "", 
                videoUrl: ""
            },
            { 
                id: 8, 
                title: "Открытие нового офиса", 
                duration: "4:18", 
                date: "28.10.2022",
                views: "2.1K",
                category: "event", 
                description: "Торжественное открытие нового офисного здания компании. Речи руководства и экскурсия по помещениям.",
                img: "", 
                videoUrl: ""
            },
            { 
                id: 9, 
                title: "Обзор продукции 2022", 
                duration: "10:30", 
                date: "12.09.2022",
                views: "2.9K",
                category: "presentation", 
                description: "Полный обзор продукции, выпущенной компанией в 2022 году. Характеристики и области применения.",
                img: "", 
                videoUrl: ""
            },
            { 
                id: 10, 
                title: "Мастер-класс по работе с оборудованием", 
                duration: "18:05", 
                date: "25.08.2022",
                views: "1.7K",
                category: "tutorial", 
                description: "Подробный мастер-класс по работе с основным производственным оборудованием компании.",
                img: "", 
                videoUrl: ""
            }
        ];

    function calculateStatistics() {
    const totalPhotos = photos.length;
    
    const totalVideos = videos.length;
    
    const eventKeywords = [
        'мероприятие', 'корпоратив', 'презентация', 'выставка',
        'тренинг', 'совещание', 'открытие', 'конференция',
        'встреча', 'семинар', 'фестиваль', 'праздник',
        'форум', 'слет', 'сбор', 'акция', 'event'
    ];
    
    function isEvent(item) {
        const title = item.title.toLowerCase();
        const description = item.description ? item.description.toLowerCase() : '';
        const category = item.category.toLowerCase();
        
        const eventCategories = ['events', 'event', 'presentation', 'report'];
        if (eventCategories.includes(category)) {
            return true;
        }
        
        for (const keyword of eventKeywords) {
            if (title.includes(keyword)) {
                return true;
            }
        }
        
        for (const keyword of eventKeywords) {
            if (description.includes(keyword)) {
                return true;
            }
        }
        
        return false;
    }
    
    const allEvents = [
        ...photos.filter(photo => isEvent(photo)),
        ...videos.filter(video => isEvent(video))
    ];
    
    const eventMap = new Map();
    
    allEvents.forEach(event => {
        const key = `${event.title.toLowerCase()}_${event.date || ''}`;
        
        if (!eventMap.has(key)) {
            eventMap.set(key, {
                title: event.title,
                date: event.date,
                type: event.hasOwnProperty('duration') ? 'video' : 'photo',
                count: 1
            });
        } else {
            const existingEvent = eventMap.get(key);
            existingEvent.count++;
        }
    });
    
    const totalUniqueEvents = eventMap.size;
    
    const totalEventMedia = allEvents.length;
    
    const photoCategories = new Set(photos.map(photo => photo.category));
    const videoCategories = new Set(videos.map(video => video.category));
    const allCategories = new Set([...photoCategories, ...videoCategories]);
    const totalCategories = allCategories.size;
    
    const photoText = document.getElementById('photo-count-text');
    if (photoText) {
        const eventPhotos = photos.filter(photo => isEvent(photo)).length;
        photoText.textContent = `${totalPhotos} фотографий, из которых ${eventPhotos} с мероприятий. Все фото распределены по ${photoCategories.size} категориям для удобного просмотра.`;
    }
    
    const videoText = document.getElementById('video-count-text');
    if (videoText) {
        const eventVideos = videos.filter(video => isEvent(video)).length;
        videoText.textContent = `Коллекция из ${totalVideos} видео, включая ${eventVideos} с мероприятий: презентации, репортажи, интервью и обучающие материалы.`;
    }
    
    document.getElementById('total-photos').textContent = `${totalPhotos}`;
    document.getElementById('total-videos').textContent = `${totalVideos}`;
    document.getElementById('total-events').textContent = `${totalUniqueEvents}`;
    document.getElementById('total-categories').textContent = `${totalCategories}`;
}

document.addEventListener('DOMContentLoaded', calculateStatistics);