const photos = [
    { 
        id: 1, 
        title: "Корпоративное мероприятие 2024", 
        date: "15.05.2025", 
        category: "events", 
        description: "Ежегодное корпоративное мероприятие для сотрудников компании",
        img: ""
    },
    { 
        id: 2, 
        title: "Производственный цех №1", 
        date: "22.04.2023", 
        category: "production", 
        description: "Основной производственный цех с современным оборудованием",
        img: "" 
    },
    { 
        id: 3, 
        title: "Команда отдела разработки", 
        date: "10.03.2024", 
        category: "team", 
        description: "Наши талантливые разработчики за работой",
        img: "" 
    },
    { 
        id: 4, 
        title: "Офис компании", 
        date: "05.02.2022", 
        category: "office", 
        description: "Современный офис с комфортными рабочими местами",
        img: "" 
    },
    { 
        id: 5, 
        title: "Презентация нового продукта", 
        date: "18.06.2025", 
        category: "events", 
        description: "Презентация инновационного продукта для партнеров",
        img: "" 
    },
    { 
        id: 6, 
        title: "Технологическая линия", 
        date: "30.01.2023", 
        category: "production", 
        description: "Автоматизированная технологическая линия",
        img: "" 
    },
    { 
        id: 7, 
        title: "Тренинг для сотрудников", 
        date: "12.04.2024", 
        category: "team", 
        description: "Обучающий тренинг по повышению квалификации",
        img: "" 
    },
    { 
        id: 8, 
        title: "Переговорная комната", 
        date: "08.03.2025", 
        category: "office", 
        description: "Современная переговорная для встреч с клиентами",
        img: "" 
    },
    { 
        id: 9, 
        title: "Выставка промышленного оборудования", 
        date: "25.05.2025", 
        category: "events", 
        description: "Участие в международной выставке промышленного оборудования",
        img: "" 
    },
    { 
        id: 10, 
        title: "Контроль качества продукции", 
        date: "14.02.2024", 
        category: "production", 
        description: "Строгий контроль качества на каждом этапе производства",
        img: "" 
    },
    { 
        id: 11, 
        title: "Продукция компании", 
        date: "20.06.2022", 
        category: "products", 
        description: "Готовая продукция перед отправкой клиентам",
        img: "" 
    },
    { 
        id: 12, 
        title: "Совещание руководителей", 
        date: "20.06.2024", 
        category: "team", 
        description: "Еженедельное совещание руководящего состава",
        img: "" 
    },
    { 
        id: 13, 
        title: "Ресепшн", 
        date: "03.01.2025", 
        category: "office", 
        description: "Приемная компании, где мы встречаем гостей",
        img: "" 
    },
    { 
        id: 14, 
        title: "Новое оборудование", 
        date: "11.04.2023", 
        category: "products", 
        description: "Новейшее оборудование, поступившее на производство",
        img: "" 
    },
]

let currentPhotoFilter = 'all'
let currentPhotoPage = 1
const photosPerPage = 6
let filteredPhotos = [...photos]

const altPhoto = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM2NTI0MjQiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNhbWVyYS1vZmYtaWNvbiBsdWNpZGUtY2FtZXJhLW9mZiI+PHBhdGggZD0iTTE0LjU2NCAxNC41NThhMyAzIDAgMSAxLTQuMTIyLTQuMTIxIi8+PHBhdGggZD0ibTIgMiAyMCAyMCIvPjxwYXRoIGQ9Ik0yMCAyMEg0YTIgMiAwIDAgMS0yLTJWOWEyIDIgMCAwIDEgMi0yaDEuOTk3YTIgMiAwIDAgMCAuODE5LS4xNzUiLz48cGF0aCBkPSJNOS42OTUgNC4wMjRBMiAyIDAgMCAxIDEwLjAwNCA0aDMuOTkzYTIgMiAwIDAgMSAxLjc2IDEuMDVsLjQ4Ni45QTIgMiAwIDAgMCAxOC4wMDMgN0gyMGEyIDIgMCAwIDEgMiAydjcuMzQ0Ii8+PC9zdmc+'

const photoGrid = document.getElementById('photo-grid')
const photoSearch = document.getElementById('photo-search')
const filterButtons = document.querySelectorAll('.filter-btn')
const photoSort = document.getElementById('photo-sort')
const prevPageBtn = document.getElementById('prev-page')
const nextPageBtn = document.getElementById('next-page')
const pageNumbers = document.getElementById('page-numbers')
const photoModal = document.getElementById('photo-modal')
const closePhotoModal = document.getElementById('close-photo-modal')
const prevPhotoBtn = document.getElementById('prev-photo')
const nextPhotoBtn = document.getElementById('next-photo')

let currentPhotoIndex = 0

document.addEventListener('DOMContentLoaded', function() {
    initPhotoGallery()
})

function initPhotoGallery() {
    renderPhotos()
    setupPhotoEventListeners()
    updatePagination()
}

function setupPhotoEventListeners() {
    if (photoSearch) {
        photoSearch.addEventListener('input', function() {
            filterPhotos()
        });
    }
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.remove('active')
            })
            this.classList.add('active')
            
            currentPhotoFilter = this.getAttribute('data-filter')
            currentPhotoPage = 1
            filterPhotos()
        })
    })
    
    if (photoSort) {
        photoSort.addEventListener('change', function() {
            filterPhotos()
        })
    }
    
    if (prevPageBtn) {
        prevPageBtn.addEventListener('click', function() {
            if (currentPhotoPage > 1) {
                currentPhotoPage--
                renderPhotos()
                updatePagination()
            }
        })
    }
    
    if (nextPageBtn) {
        nextPageBtn.addEventListener('click', function() {
            const totalPages = Math.ceil(filteredPhotos.length / photosPerPage)
            if (currentPhotoPage < totalPages) {
                currentPhotoPage++
                renderPhotos()
                updatePagination()
            }
        })
    }
}

function renderPhotos() {
    if (!photoGrid) return
    
    photoGrid.innerHTML = ''
    
    const startIndex = (currentPhotoPage - 1) * photosPerPage
    const endIndex = startIndex + photosPerPage
    const photosToShow = filteredPhotos.slice(startIndex, endIndex)
    
    if (photosToShow.length === 0) {
        photoGrid.innerHTML = `
            <div class="no-results" style="grid-column: 1 / -1; text-align: center; padding: 3rem; background-color: white; border-radius: 10px;">
                <img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMzZTE0MTkiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWJhbi1pY29uIGx1Y2lkZS1iYW4iPjxwYXRoIGQ9Ik00LjkyOSA0LjkyOSAxOS4wNyAxOS4wNzEiLz48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIvPjwvc3ZnPg=='></img>
                <i class="fas fa-search" style="font-size: 3rem; color: var(--complementary-color); margin-bottom: 1rem;"></i>
                <h3 style="color: var(--accent-color); margin-bottom: 1rem;">Фотографии не найдены</h3>
                <p>Попробуйте изменить параметры поиска или фильтрации</p>
            </div>
        `
        return
    }
    
    photosToShow.forEach((photo, index) => {
        const photoElement = document.createElement('div');
        photoElement.className = `photo-item ${photo.category}`;
        photoElement.setAttribute('data-index', startIndex + index);
        
        photoElement.innerHTML = `
            <img style='width: 100px; height: 100px; margin: 0 auto;' src="${photo.img || altPhoto}" alt="${photo.title}" class="photo-img">
            <div class="photo-info">
                <h3 class="photo-title">${photo.title}</h3>
                <span class="photo-date">${photo.date}</span>
                <span class="photo-category">${getCategoryName(photo.category)}</span>
            </div>
        `
        
        photoElement.addEventListener('click', function() {
            openPhotoModal(startIndex + index)
        })
        
        photoGrid.appendChild(photoElement)
    })
}

function filterPhotos() {
    const searchTerm = photoSearch ? photoSearch.value.toLowerCase() : '';
    
    filteredPhotos = photos.filter(photo => {
        const matchesSearch = photo.title.toLowerCase().includes(searchTerm) || photo.description.toLowerCase().includes(searchTerm) || photo.date.includes(searchTerm)
        const matchesFilter = currentPhotoFilter === 'all' || photo.category === currentPhotoFilter
        
        return matchesSearch && matchesFilter
    })
    
    const sortOption = photoSort ? photoSort.value : 'newest'
    
    filteredPhotos.sort((a, b) => {
        switch(sortOption) {
            case 'oldest':
                return new Date(a.date.split('.').reverse().join('-')) - new Date(b.date.split('.').reverse().join('-'));
            case 'newest':
            default:
                return new Date(b.date.split('.').reverse().join('-')) - new Date(a.date.split('.').reverse().join('-'));
        }
    });
    
    currentPhotoPage = 1
    renderPhotos()
    updatePagination()
}

function updatePagination() {
    if (!pageNumbers || !prevPageBtn || !nextPageBtn) return
    
    const totalPages = Math.ceil(filteredPhotos.length / photosPerPage)
    
    prevPageBtn.disabled = currentPhotoPage === 1
    nextPageBtn.disabled = currentPhotoPage === totalPages || totalPages === 0
    
    pageNumbers.innerHTML = ''
    
    addPageNumber(1)
    
    for (let i = Math.max(2, currentPhotoPage - 1); i <= Math.min(totalPages - 1, currentPhotoPage + 1); i++) {
        if (i > 1 && i < totalPages) {
            addPageNumber(i)
        }
    }
    
    if (totalPages > 1) {
        addPageNumber(totalPages)
    }
    
    document.querySelectorAll('.page-number').forEach(pageBtn => {
        pageBtn.addEventListener('click', function() {
            currentPhotoPage = parseInt(this.textContent);
            renderPhotos()
            updatePagination()
            
            photoGrid.scrollIntoView({ behavior: 'smooth', block: 'start' })
        })
    })
}

function addPageNumber(page) {
    const pageNumber = document.createElement('span')
    pageNumber.className = `page-number ${page === currentPhotoPage ? 'active' : ''}`
    pageNumber.textContent = page
    pageNumbers.appendChild(pageNumber)
}

function getCategoryName(category) {
    const categories = {
        'all': 'Все',
        'events': 'Мероприятия',
        'production': 'Производство',
        'team': 'Команда',
        'office': 'Офис',
        'products': 'Продукция'
    };
    
    return categories[category] || category
}