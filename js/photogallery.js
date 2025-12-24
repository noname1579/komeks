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

let currentPhotoFilter = 'all';
let currentPhotoPage = 1;
const photosPerPage = 6;
let filteredPhotos = [...photos];

const altPhoto = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM2NTI0MjQiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNhbWVyYS1vZmYtaWNvbiBsdWNpZGUtY2FtZXJhLW9mZiI+PHBhdGggZD0iTTE0LjU2NCAxNC41NThhMyAzIDAgMSAxLTQuMTIyLTQuMTIxIi8+PHBhdGggZD0ibTIgMiAyMCAyMCIvPjxwYXRoIGQ9Ik0yMCAyMEg0YTIgMiAwIDAgMS0yLTJWOWEyIDIgMCAwIDEgMi0yaDEuOTk3YTIgMiAwIDAgMC44MTktLjE3NSIvPjxwYXRoIGQ9Ik05LjY5NSA0LjAyNEEyIDIgMCAwIDEgMTAuMDA0IDRoMy45OTNhMiAyIDAgMCAxIDEuNzYgMS4wNWwuNDg2LjkyYTIgMiAwIDAgMCAxLjczNyAxLjA5N0gyMGEyIDIgMCAwIDEgMiAydjcuMzQ0Ii8+PC9zdmc+';

const photoGrid = document.getElementById('photo-grid');
const photoSearch = document.getElementById('photo-search');
const photoFilterButtons = document.querySelectorAll('.filter-btn');
const photoSort = document.getElementById('photo-sort');
const prevPhotoPageBtn = document.getElementById('prev-photo-page');
const nextPhotoPageBtn = document.getElementById('next-photo-page');
const photoPageNumbers = document.getElementById('photo-page-numbers');

const modal = document.getElementById('photo-modal');
const modalClose = document.querySelector('.modal-close');
const modalPhotoContainer = document.getElementById('modal-photo-container');
const modalPhotoTitle = document.getElementById('modal-photo-title');
const modalPhotoCategory = document.getElementById('modal-photo-category');
const modalPhotoDate = document.getElementById('modal-photo-date');
const modalPhotoDescription = document.getElementById('modal-photo-description');
const modalDownloadBtn = document.getElementById('modal-download-btn');
const modalShareBtn = document.getElementById('modal-share-btn');

const categoryNames = {
    'events': 'Мероприятия',
    'production': 'Производство',
    'team': 'Команда',
    'office': 'Офис',
    'products': 'Продукция'
};

document.addEventListener('DOMContentLoaded', function() {
    initPhotoGallery();
    setupModalEvents();
});

function initPhotoGallery() {
    renderPhotos();
    setupPhotoEventListeners();
    updatePhotoPagination();
}

function setupPhotoEventListeners() {
    if (photoSearch) {
        photoSearch.addEventListener('input', function() {
            filterPhotos();
        });
    }
    
    photoFilterButtons.forEach(button => {
        button.addEventListener('click', function() {
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            this.classList.add('active');
            
            currentPhotoFilter = this.getAttribute('data-filter');
            currentPhotoPage = 1;
            filterPhotos();
        });
    });

    if (photoSort) {
        photoSort.addEventListener('change', function() {
            filterPhotos();
        });
    }
    
    if (prevPhotoPageBtn) {
        prevPhotoPageBtn.addEventListener('click', function() {
            if (currentPhotoPage > 1) {
                currentPhotoPage--;
                renderPhotos();
                updatePhotoPagination();
            }
        });
    }
    
    if (nextPhotoPageBtn) {
        nextPhotoPageBtn.addEventListener('click', function() {
            const totalPages = Math.ceil(filteredPhotos.length / photosPerPage);
            if (currentPhotoPage < totalPages) {
                currentPhotoPage++;
                renderPhotos();
                updatePhotoPagination();
            }
        });
    }
}

function setupModalEvents() {
    modalClose.addEventListener('click', function() {
        closeModal();
    });
    
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });
    
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });
    
    modalShareBtn.addEventListener('click', function() {
        sharePhoto();
    });
    
    modalDownloadBtn.addEventListener('click', function() {
        downloadPhoto();
    });
}

function renderPhotos() {
    if (!photoGrid) {
        return;
    }
    
    photoGrid.innerHTML = '';
    
    const startIndex = (currentPhotoPage - 1) * photosPerPage;
    const endIndex = startIndex + photosPerPage;
    const photosToShow = filteredPhotos.slice(startIndex, endIndex);
    
    if (photosToShow.length === 0) {
        photoGrid.innerHTML = `
            <div class="no-results" style="grid-column: 1 / -1; text-align: center; padding: 3rem; background-color: white; border-radius: 10px;">
                <img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMzZTE0MTkiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWJhbi1pY29uIGx1Y2lkZS1iYW4iPjxwYXRoIGQ9Ik00LjkyOSA0LjkyOSAxOS4wNyAxOS4wNzEiLz48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIvPjwvc3ZnPg==' alt="Нет результатов">
                <h3 style="color: var(--accent-color); margin-bottom: 1rem;">Фотографии не найдены</h3>
                <p>Попробуйте изменить параметры поиска или фильтрации</p>
            </div>`;
        return;
    }
    
    photosToShow.forEach(photo => {
        const photoElement = document.createElement('div');
        photoElement.className = `photo-item ${photo.category}`;
        photoElement.setAttribute('data-photo-id', photo.id);
        
        photoElement.innerHTML = `
            <div class="photo-thumbnail" style='position: relative; width: 100%; height: 200px; overflow: hidden; cursor: pointer; display: flex; justify-content: center; align-items: center; background-color: var(--complementary-color);'>
                <img src="${photo.img || altPhoto}" alt="${photo.title}" style="width: 70%; height: 70%; object-fit: contain; padding: 20px;">
                <div class="photo-overlay" style="position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(to top, rgba(0,0,0,0.7), transparent); padding: 10px; color: white; font-size: 14px;">
                    <div style="display: flex; justify-content: space-between;">
                        <span>${photo.date}</span>
                        <span>${photo.views} просмотров</span>
                    </div>
                </div>
            </div>
            <div class="photo-info">
                <h3 class="photo-title">${photo.title}</h3>
                <div class="photo-meta">
                    <span class="photo-category">${categoryNames[photo.category] || photo.category}</span>
                </div>
                <p class="photo-description">${photo.description.substring(0, 80)}${photo.description.length > 80 ? '...' : ''}</p>
                <button class="btn view-photo-btn" style="width: 100%; margin-top: 10px; padding: 10px;">
                    Подробнее
                </button>
            </div>
        `;
        
        const viewBtn = photoElement.querySelector('.view-photo-btn');
        const thumbnail = photoElement.querySelector('.photo-thumbnail');
        
        viewBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            openModal(photo);
        });
        
        thumbnail.addEventListener('click', function() {
            openModal(photo);
        });
        
        photoGrid.appendChild(photoElement);
    });
}

function openModal(photo) {
    modalPhotoTitle.textContent = photo.title;
    modalPhotoCategory.textContent = categoryNames[photo.category] || photo.category;
    modalPhotoDate.textContent = photo.date;
    modalPhotoDescription.textContent = photo.description;
    
    updateModalPhotoContainer(photo);
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function updateModalPhotoContainer(photo) {
    modalPhotoContainer.innerHTML = `
        <div class="photo-placeholder" style="width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; color: var(--accent-color); cursor: pointer;">
            <img src="${photo.img || altPhoto}" alt="${photo.title}" style="width: 300px; height: 300px; object-fit: contain; padding: 20px;">
        </div>
    `;
    
    const placeholder = modalPhotoContainer.querySelector('.photo-placeholder');
    if (placeholder) {
        placeholder.addEventListener('click', function() {
            if (photo.img) {
                window.open(photo.img, '_blank');
            }
        });
    }
}

function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function sharePhoto() {
    const photoTitle = modalPhotoTitle.textContent;
    const photoUrl = window.location.href;
    
    if (navigator.share) {
        navigator.share({
            title: photoTitle,
            text: `Посмотрите фото: ${photoTitle}`,
            url: photoUrl
        }).catch(console.error);
    } else {
        navigator.clipboard.writeText(photoUrl).catch(err => {
            const tempInput = document.createElement('input');
            tempInput.value = photoUrl;
            document.body.appendChild(tempInput);
            tempInput.select();
            document.execCommand('copy');
            document.body.removeChild(tempInput);
            alert('Ссылка скопирована в буфер обмена!');
        });
    }
}

function downloadPhoto() {
    const currentPhotoTitle = modalPhotoTitle.textContent;
    alert(`Скачивание фото: ${currentPhotoTitle}\n(В реальном приложении здесь будет скачивание файла)`);
}

function filterPhotos() {
    const searchTerm = photoSearch ? photoSearch.value.toLowerCase() : '';
    
    filteredPhotos = photos.filter(photo => {
        const matchesSearch = photo.title.toLowerCase().includes(searchTerm) || 
                             photo.description.toLowerCase().includes(searchTerm) || 
                             photo.date.includes(searchTerm);
        const matchesFilter = currentPhotoFilter === 'all' || photo.category === currentPhotoFilter;
        
        return matchesSearch && matchesFilter;
    });
    
    const sortOption = photoSort ? photoSort.value : 'newest';
    
    filteredPhotos.sort((a, b) => {
        switch(sortOption) {
            case 'oldest':
                return new Date(a.date.split('.').reverse().join('-')) - new Date(b.date.split('.').reverse().join('-'));
            case 'newest':
            default:
                return new Date(b.date.split('.').reverse().join('-')) - new Date(a.date.split('.').reverse().join('-'));
        }
    });
    
    currentPhotoPage = 1;
    renderPhotos();
    updatePhotoPagination();
}

function updatePhotoPagination() {
    if (!photoPageNumbers || !prevPhotoPageBtn || !nextPhotoPageBtn) return;
    
    const totalPages = Math.ceil(filteredPhotos.length / photosPerPage);
    
    prevPhotoPageBtn.disabled = currentPhotoPage === 1;
    nextPhotoPageBtn.disabled = currentPhotoPage === totalPages || totalPages === 0;
    
    photoPageNumbers.innerHTML = '';
    
    if (totalPages <= 1) return;
    
    addPhotoPageNumber(1);
    
    for (let i = Math.max(2, currentPhotoPage - 1); i <= Math.min(totalPages - 1, currentPhotoPage + 1); i++) {
        if (i > 1 && i < totalPages) {
            addPhotoPageNumber(i);
        }
    }
    
    if (totalPages > 1) {
        addPhotoPageNumber(totalPages);
    }
    
    document.querySelectorAll('#photo-page-numbers .page-number').forEach(pageBtn => {
        pageBtn.addEventListener('click', function() {
            currentPhotoPage = parseInt(this.textContent);
            renderPhotos();
            updatePhotoPagination();
            
            photoGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
}

function addPhotoPageNumber(page) {
    const pageNumber = document.createElement('span');
    pageNumber.className = `page-number ${page === currentPhotoPage ? 'active' : ''}`;
    pageNumber.textContent = page;
    photoPageNumbers.appendChild(pageNumber);
}