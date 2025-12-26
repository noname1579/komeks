const videos = [
    { 
        id: 1, 
        title: "Презентация нового оборудования НПФ 'КОМЭКС'", 
        duration: "5:24", 
        date: "15.05.2025",
        views: "1.2K",
        category: "presentation", 
        description: "Подробный обзор нового производственного оборудования, внедренного в 2023 году. Демонстрация возможностей и преимуществ.",
        img: "../img/видео_презентация.jpg", 
    },
    { 
        id: 2, 
        title: "Репортаж с корпоратива НПФ 'КОМЭКС'", 
        duration: "8:12", 
        date: "10.04.2025",
        views: "2.4K",
        category: "report", 
        description: "Яркие моменты с ежегодного корпоративного мероприятия компании. Интервью с сотрудниками и руководством.",
        img: "../img/видео_корп.jpg", 
    },
    { 
        id: 3, 
        title: "Интервью с генеральным директором НПФ 'КОМЭКС'", 
        duration: "12:45", 
        date: "28.03.2025",
        views: "3.1K",
        category: "interview", 
        description: "Беседа с руководителем компании о планах развития и новых проектах. Ответы на вопросы о будущем компании.",
        img: "../img/видео_интервью.jpg", 
    },
    { 
        id: 5, 
        title: "Презентация годовых результатов НПФ 'КОМЭКС'", 
        duration: "15:20", 
        date: "20.01.2025",
        views: "2.7K",
        category: "presentation", 
        description: "Отчет о деятельности компании за 2022 год и планы на будущее. Финансовые показатели и достижения.",
        img: "../img/видео_презентация_2.jpg", 
    },
    { 
        id: 6, 
        title: "Интервью с ведущим инженером НПФ 'КОМЭКС'", 
        duration: "9:15", 
        date: "15.12.2025",
        views: "1.5K",
        category: "interview", 
        description: "Рассказ о технических инновациях и разработках компании. Объяснение сложных технологий простым языком.",
        img: "../img/видео_интервью_2.jpg", 
    }
]

let currentVideoFilter = 'all';
let currentVideoPage = 1;
const videosPerPage = 6;
let filteredVideos = [...videos];

const altVideo = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM2NTI0MjQiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNhbWVyYS1vZmYtaWNvbiBsdWNpZGUtY2FtZXJhLW9mZiI+PHBhdGggZD0iTTE0LjU2NCAxNC41NThhMyAzIDAgMSAxLTQuMTIyLTQuMTIxIi8+PHBhdGggZD0ibTIgMiAyMCAyMCIvPjxwYXRoIGQ9Ik0yMCAyMEg0YTIgMiAwIDAgMS0yLTJWOWEyIDIgMCAwIDEgMi0yaDEuOTk3YTIgMiAwIDAgMC44MTktLjE3NSIvPjxwYXRoIGQ9Ik05LjY5NSA0LjAyNEEyIDIgMCAwIDEgMTAuMDA0IDRoMy45OTNhMiAyIDAgMCAxIDEuNzYgMS4wNWwuNDg2LjkyYTIgMiAwIDAgMCAxLjczNyAxLjA5N0gyMGEyIDIgMCAwIDEgMiAydjcuMzQ0Ii8+PC9zdmc+';

const videoGrid = document.getElementById('video-grid');
const videoSearch = document.getElementById('video-search');
const videoFilterButtons = document.querySelectorAll('.filter-btn');
const videoSort = document.getElementById('video-sort');
const prevVideoPageBtn = document.getElementById('prev-video-page');
const nextVideoPageBtn = document.getElementById('next-video-page');
const videoPageNumbers = document.getElementById('video-page-numbers');

const modal = document.getElementById('video-modal');
const modalClose = document.querySelector('.modal-close');
const modalVideoContainer = document.getElementById('modal-video-container');
const modalVideoTitle = document.getElementById('modal-video-title');
const modalVideoCategory = document.getElementById('modal-video-category');
const modalVideoDate = document.getElementById('modal-video-date');
const modalVideoDuration = document.getElementById('modal-video-duration');
const modalVideoViews = document.getElementById('modal-video-views');
const modalVideoDescription = document.getElementById('modal-video-description');
const modalVideoLink = document.getElementById('modal-video-link');
const modalShareBtn = document.getElementById('modal-share-btn');

const categoryNames = {
    'presentation': 'Презентация',
    'report': 'Репортаж',
    'interview': 'Интервью',
    'tutorial': 'Обучающее видео',
    'event': 'Событие'
};

document.addEventListener('DOMContentLoaded', function() {
    initVideoGallery();
    setupModalEvents();
});

function initVideoGallery() {
    renderVideos();
    setupVideoEventListeners();
    updateVideoPagination();
}

function setupVideoEventListeners() {
    if (videoSearch) {
        videoSearch.addEventListener('input', function() {
            filterVideos();
        });
    }
    
    videoFilterButtons.forEach(button => {
        button.addEventListener('click', function() {
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            this.classList.add('active');
            
            currentVideoFilter = this.getAttribute('data-filter');
            currentVideoPage = 1;
            filterVideos();
        });
    });

    if (videoSort) {
        videoSort.addEventListener('change', function() {
            filterVideos();
        });
    }
    
    if (prevVideoPageBtn) {
        prevVideoPageBtn.addEventListener('click', function() {
            if (currentVideoPage > 1) {
                currentVideoPage--;
                renderVideos();
                updateVideoPagination();
            }
        });
    }
    
    if (nextVideoPageBtn) {
        nextVideoPageBtn.addEventListener('click', function() {
            const totalPages = Math.ceil(filteredVideos.length / videosPerPage);
            if (currentVideoPage < totalPages) {
                currentVideoPage++;
                renderVideos();
                updateVideoPagination();
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
        shareVideo();
    });
}

function renderVideos() {
    if (!videoGrid) {
        return;
    }
    
    videoGrid.innerHTML = '';
    
    const startIndex = (currentVideoPage - 1) * videosPerPage;
    const endIndex = startIndex + videosPerPage;
    const videosToShow = filteredVideos.slice(startIndex, endIndex);
    
    if (videosToShow.length === 0) {
        videoGrid.innerHTML = `
            <div class="no-results" style="grid-column: 1 / -1; text-align: center; padding: 3rem; background-color: white; border-radius: 10px;">
                <img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMzZTE0MTkiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWJhbi1pY29uIGx1Y2lkZS1iYW4iPjxwYXRoIGQ9Ik00LjkyOSA0LjkyOSAxOS4wNyAxOS4wNzEiLz48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIvPjwvc3ZnPg==' alt="Нет результатов">
                <h3 style="color: var(--accent-color); margin-bottom: 1rem;">Видео не найдены</h3>
                <p>Попробуйте изменить параметры поиска или фильтрации</p>
            </div>`;
        return;
    }
    
    videosToShow.forEach(video => {
        const videoElement = document.createElement('div');
        videoElement.className = `video-item ${video.category}`;
        videoElement.setAttribute('data-video-id', video.id);
        
        videoElement.innerHTML = `
            <div class="video-thumbnail" style='position: relative; width: 100%; height: 200px; overflow: hidden; cursor: pointer; display: flex; justify-content: center; align-items: center;'>
                <img src="${video.img || altVideo}" alt="${video.title}" style="width: 100%; height: 100%; object-fit: cover;">

                <div class="video-overlay" style="position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(to top, rgba(0,0,0,0.7), transparent); padding: 10px; color: white; font-size: 14px;">
                    <div style="display: flex; justify-content: space-between;">
                        <span>${video.duration}</span>
                        <span>${video.views}</span>
                    </div>
                </div>
            </div>
            <div class="video-info">
                <h3 class="video-title">${video.title}</h3>
                <div class="video-meta">
                    <span class="video-category">${categoryNames[video.category] || video.category}</span>
                    <span class="video-date">${video.date}</span>
                </div>
                <p class="video-description">${video.description}</p>
                <button class="btn view-video-btn" style="width: 100%; margin-top: 10px; padding: 10px;">
                    Смотреть видео
                </button>
            </div>
        `;
        
        const viewBtn = videoElement.querySelector('.view-video-btn');
        const thumbnail = videoElement.querySelector('.video-thumbnail');
        
        viewBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            openModal(video);
        });
        
        thumbnail.addEventListener('click', function() {
            openModal(video);
        });
        
        videoGrid.appendChild(videoElement);
    });
}

function openModal(video) {
    modalVideoTitle.textContent = video.title;
    modalVideoCategory.textContent = categoryNames[video.category] || video.category;
    modalVideoDate.textContent = video.date;
    modalVideoDuration.textContent = video.duration;
    modalVideoViews.textContent = `${video.views} просмотров`;
    modalVideoDescription.textContent = video.description;
    
    if (modalVideoLink && video.videoUrl) {
        modalVideoLink.href = video.videoUrl;
    }
    
    updateModalVideoContainer(video);
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function updateModalVideoContainer(video) {
    modalVideoContainer.innerHTML = `
        <div class="video-placeholder" style="width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; color: white; cursor: pointer;" onclick="window.open('${video.videoUrl || '#'}', '_blank')">
            <img src="${video.img || altVideo}" alt="${video.title}" style="width: 300px; height: 300px; object-fit: cover;">
        </div>
    `;
}

function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function shareVideo() {
    const videoTitle = modalVideoTitle.textContent;
    const videoUrl = modalVideoLink.href;
    
    if (navigator.share) {
        navigator.share({
            title: videoTitle,
            text: `Посмотрите видео: ${videoTitle}`,
            url: videoUrl
        }).catch(console.error);
    } else {
        navigator.clipboard.writeText(videoUrl).catch(err => {
            const tempInput = document.createElement('input');
            tempInput.value = videoUrl;
            document.body.appendChild(tempInput);
            tempInput.select();
            document.execCommand('copy');
            document.body.removeChild(tempInput);
        });
    }
}

function filterVideos() {
    const searchTerm = videoSearch ? videoSearch.value.toLowerCase() : '';
    
    filteredVideos = videos.filter(video => {
        const matchesSearch = video.title.toLowerCase().includes(searchTerm) || 
                             video.description.toLowerCase().includes(searchTerm) || 
                             video.date.includes(searchTerm);
        const matchesFilter = currentVideoFilter === 'all' || video.category === currentVideoFilter;
        
        return matchesSearch && matchesFilter;
    });
    
    const sortOption = videoSort ? videoSort.value : 'newest';
    
    filteredVideos.sort((a, b) => {
        switch(sortOption) {
            case 'oldest':
                return new Date(a.date.split('.').reverse().join('-')) - new Date(b.date.split('.').reverse().join('-'));
            case 'duration':
                return parseDuration(a.duration) - parseDuration(b.duration);
            case 'newest':
            default:
                return new Date(b.date.split('.').reverse().join('-')) - new Date(a.date.split('.').reverse().join('-'));
        }
    });
    
    currentVideoPage = 1;
    renderVideos();
    updateVideoPagination();
}

function parseDuration(duration) {
    const parts = duration.split(':');
    return parseInt(parts[0]) * 60 + parseInt(parts[1]);
}

function updateVideoPagination() {
    if (!videoPageNumbers || !prevVideoPageBtn || !nextVideoPageBtn) return;
    
    const totalPages = Math.ceil(filteredVideos.length / videosPerPage);
    
    prevVideoPageBtn.disabled = currentVideoPage === 1;
    nextVideoPageBtn.disabled = currentVideoPage === totalPages || totalPages === 0;
    
    videoPageNumbers.innerHTML = '';
    
    if (totalPages <= 1) return;
    
    addVideoPageNumber(1);
    
    for (let i = Math.max(2, currentVideoPage - 1); i <= Math.min(totalPages - 1, currentVideoPage + 1); i++) {
        if (i > 1 && i < totalPages) {
            addVideoPageNumber(i);
        }
    }
    
    if (totalPages > 1) {
        addVideoPageNumber(totalPages);
    }
    
    document.querySelectorAll('#video-page-numbers .page-number').forEach(pageBtn => {
        pageBtn.addEventListener('click', function() {
            currentVideoPage = parseInt(this.textContent);
            renderVideos();
            updateVideoPagination();
            
            videoGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
}

function addVideoPageNumber(page) {
    const pageNumber = document.createElement('span');
    pageNumber.className = `page-number ${page === currentVideoPage ? 'active' : ''}`;
    pageNumber.textContent = page;
    videoPageNumbers.appendChild(pageNumber);
}