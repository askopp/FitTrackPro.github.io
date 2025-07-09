// Gestion de la progression
document.addEventListener('DOMContentLoaded', function() {
    const toggleSwitch = document.querySelector('.toggle-switch input');
    
    if (toggleSwitch) {
        toggleSwitch.addEventListener('change', function() {
            if(this.checked) {
                // Marquer le jour comme complété
                const activeDay = document.querySelector('.calendar-day.active');
                if (activeDay) {
                    activeDay.classList.add('completed');
                    activeDay.classList.remove('active');
                }
                
                // Mise à jour de la progression
                updateProgress();
            }
        });
    }

    function updateProgress() {
        const completedDays = document.querySelectorAll('.calendar-day.completed').length;
        const progressBar = document.querySelector('.progress-bar');
        const progressText = document.querySelector('.progress-details span:last-child');
        
        if (progressBar && progressText) {
            const progress = (completedDays / 30) * 100;
            progressBar.style.width = `${progress}%`;
            progressText.textContent = `${Math.round(progress)}% complété`;
        }
    }
});

// Ajoutez ici d'autres fonctions si nécessaire