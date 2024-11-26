function openModal(projectId) {
    document.getElementById(projectId).style.display = 'block';
}

function closeModal(projectId) {
    document.getElementById(projectId).style.display = 'none';
}

// Close modal when clicking outside the modal content
window.onclick = function(event) {
    const modals = document.getElementsByClassName('modal');
    for (let i = 0; i < modals.length; i++) {
        if (event.target === modals[i]) {
            modals[i].style.display = 'none';
        }
    }
};
