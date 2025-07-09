// FitTrack Pro - Main Application Script
document.addEventListener('DOMContentLoaded', () => {
    console.log('Application initialisée');
    
    // Initialisation du calendrier
    initCalendar();
    
    // Gestion de la progression
    initProgressTracker();
});

function initCalendar() {
    const calendar = document.querySelector('.calendar-grid');
    if (!calendar) return;

    let html = '';
    for (let day = 1; day <= 30; day++) {
        const isCompleted = day <= 3;
        const isActive = day === 3;
        html += `
            <div class="calendar-day 
                ${isCompleted ? 'completed' : ''} 
                ${isActive ? 'active' : ''}">
                ${day}
            </div>`;
    }
    calendar.innerHTML = html;
}

function initProgressTracker() {
    const toggle = document.querySelector('.toggle-switch input');
    if (!toggle) return;

    toggle.addEventListener('change', function() {
        if (this.checked) {
            updateProgress();
        }
    });
}

function updateProgress() {
    const completedDays = document.querySelectorAll('.calendar-day.completed').length;
    const progress = Math.round((completedDays / 30) * 100);
    
    const progressBar = document.querySelector('.progress-bar');
    if (progressBar) {
        progressBar.style.width = `${progress}%`;
    }
    
    const progressText = document.querySelector('.progress-details span:last-child');
    if (progressText) {
        progressText.textContent = `${progress}% complété`;
    }
}