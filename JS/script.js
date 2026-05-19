let index = 0;
const items = document.querySelectorAll('.carousel-item');

function showItem(i) {
  items.forEach(item => item.classList.remove('active'));
  items[i].classList.add('active');
}

function nextItem() {
  index = (index + 1) % items.length;
  showItem(index);
}

// inicia o carrossel
showItem(index);
setInterval(nextItem, 3000); // troca a cada 3 segundos
