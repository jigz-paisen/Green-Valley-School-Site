// Function to open the modal
function openModal(activity) {
    const modal = document.getElementById('activityModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');

   
    switch (activity) {
        case 'sports':
            modalImage.src = 'images/sports.jpg';
            modalTitle.textContent = 'Sports';
            modalDescription.textContent = 'Join our sports teams and stay active!';
            break;
        case 'music':
            modalImage.src = 'images/music.jpg';
            modalTitle.textContent = 'Music';
            modalDescription.textContent = 'Explore your musical talents with us.';
            break;
        case 'drama':
            modalImage.src = 'images/drama.jpg';
            modalTitle.textContent = 'Drama';
            modalDescription.textContent = 'Be part of our theater productions.';
            break;
        case 'art':
            modalImage.src = 'images/art.jpg';
            modalTitle.textContent = 'Art';
            modalDescription.textContent = 'Unleash your creativity in our art club.';
            break;
    }


    modal.style.display = 'flex';
}


function closeModal() {
    const modal = document.getElementById('activityModal');
    modal.style.display = 'none';
}


window.onclick = function (event) {
    const modal = document.getElementById('activityModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};

// Function to expand news content
function expandNews(newsId) {
    const newsCard = document.getElementById(newsId).parentElement;
    newsCard.classList.toggle('expanded');
}