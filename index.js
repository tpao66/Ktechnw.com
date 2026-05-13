const menuBtn = document.getElementById('menuBtn');
const sidebar = document.getElementById('sidebar');

menuBtn.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});

window.addEventListener('click', (e) => {
  const clickedInsideSidebar = sidebar.contains(e.target);
  const clickedMenuBtn = menuBtn.contains(e.target);

  if (!clickedInsideSidebar && !clickedMenuBtn) {
    sidebar.classList.remove('active');
  }
});
