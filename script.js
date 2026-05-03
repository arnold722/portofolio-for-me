const sidebar = document.querySelector('.sidebar');
const sidebarLinks = document.querySelectorAll('.sidebar a');

function showSidebar() {
    sidebar.classList.add('active');
}

function hideSidebar() {
    sidebar.classList.remove('active');
}

sidebarLinks.forEach(link => {
    link.addEventListener('click', hideSidebar);
});

document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
        hideSidebar();
    }
});
