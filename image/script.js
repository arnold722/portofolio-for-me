function showsidebar(){
    const sidebar = document.querySelector('.sidebar');
    if (sidebar.style.display === 'flex') {
      sidebar.style.display = 'none';
    } else {
      sidebar.style.display = 'flex';
    }
  }
  function hidesidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
  }