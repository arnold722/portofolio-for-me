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

const carousel = document.getElementById("carousel");
let rotY=0, drag=false, startX;
const panels = carousel.querySelectorAll(".panel");
document.addEventListener("mousedown", e=>{ drag=true; startX=e.clientX; });
document.addEventListener("mouseup", ()=> drag=false );
document.addEventListener("mousemove", e=>{
    if(!drag) return;
    rotY += (e.clientX-startX)*0.4;
    carousel.style.transform=`rotateY(${rotY}deg)`;
    startX = e.clientX;
    updatePanels();
});
function auto() {
    if(!drag){ rotY+=0.25; carousel.style.transform=`rotateY(${rotY}deg)`; updatePanels();}
    requestAnimationFrame(auto);
}
