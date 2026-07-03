const profileBtn = document.getElementById('profileBtn');
const avatarContainer = document.querySelector('.avatar-container')

profileBtn.addEventListener('click', () => {
    avatarContainer.classList.toggle('active');
})

const openStatsBtn = document.getElementById('openStatsBtn');
const closeStatsBtn = document.getElementById('closeStatsBtn');
const statsModal = document.getElementById('statsModal');

openStatsBtn.addEventListener('click', () => {
    statsModal.classList.add('show');
})

closeStatsBtn.addEventListener('click', () => {
    statsModal.classList.remove('show');
})

statsModal.addEventListener('click', (e) => {
    if (e.target === statsModal) {
        statsModal.classList.remove('show');
    }
})