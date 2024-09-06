const slider = document.querySelector('.slider');

function activate(e) {
  const items = document.querySelectorAll('.item');
  e.target.matches('.next') && slider.append(items[0])
  e.target.matches('.prev') && slider.prepend(items[items.length-1]);
}

function redirectToHome() {
  window.location.href = 'index.html'; // Redirige a index.html
}



document.addEventListener('click',activate,false);