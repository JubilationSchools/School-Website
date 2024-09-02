document.getElementById('menuToggle').addEventListener('click', function() {
    const mainMenu = document.getElementById('mainMenu');
    mainMenu.classList.toggle('mobile-active');
    mainMenu.classList.toggle('show');
    this.classList.toggle('active');

    if (this.classList.contains('active')) {
      this.innerHTML = '✖';
    } else {
      this.innerHTML = '☰';
    }
  });