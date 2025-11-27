// Навигация по категориям
const categories = document.querySelectorAll('.category-nav li');
const sections = document.querySelectorAll('.category');

categories.forEach(cat => {
  cat.addEventListener('click', () => {
    const targetId = cat.dataset.category;
    document.getElementById(targetId).scrollIntoView({behavior: 'smooth'});
  });
});

// Подсветка категории при скролле
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) {
      current = section.id;
    }
  });

  categories.forEach(li => {
    li.classList.remove('active');
    if (li.dataset.category === current) {
      li.classList.add('active');
    }
  });
});

// Открытие фото во весь экран
const dishPhotos = document.querySelectorAll('.dish-photo img');
dishPhotos.forEach(img => {
  img.addEventListener('click', () => {
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = 0;
    overlay.style.left = 0;
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.background = 'rgba(0,0,0,0.8)';
    overlay.style.display = 'flex';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    overlay.style.zIndex = '1000';
    const fullImg = document.createElement('img');
    fullImg.src = img.src;
    fullImg.style.maxWidth = '90%';
    fullImg.style.maxHeight = '90%';
    overlay.appendChild(fullImg);
    overlay.addEventListener('click', () => overlay.remove());
    document.body.appendChild(overlay);
  });
});