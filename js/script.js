// Initialisation de FitTrack Pro
document.addEventListener('DOMContentLoaded', function() {
    console.log('FitTrack Pro initialisé');
    
    // Gestion du toggle switch
    const toggleSwitch = document.querySelector('.toggle-switch input');
    if (toggleSwitch) {
        toggleSwitch.addEventListener('change', function() {
            if(this.checked) {
                markDayCompleted();
                updateProgress();
            }
        });
    }

    // Génération du calendrier
    generateCalendar();
});

function markDayCompleted() {
    const activeDay = document.querySelector('.calendar-day.active');
    if (activeDay) {
        activeDay.classList.add('completed');
        activeDay.classList.remove('active');
    }
}

function updateProgress() {
    const completedDays = document.querySelectorAll('.calendar-day.completed').length;
    const progressBar = document.querySelector('.progress-bar');
    const progressText = document.querySelector('.progress-details span:last-child');
    
    if (progressBar && progressText) {
        const progress = Math.round((completedDays / 30) * 100);
        progressBar.style.width = `${progress}%`;
        progressText.textContent = `${progress}% complété`;
    }
}

function generateCalendar() {
    const grid = document.querySelector('.calendar-grid');
    if (!grid) return;
    
    let html = '';
    for (let i = 1; i <= 30; i++) {
        const completed = i <= 3 ? 'completed' : '';
        const active = i === 3 ? 'active' : '';
        html += `<div class="calendar-day ${completed} ${active}">${i}</div>`;
    }
    grid.innerHTML = html;
}