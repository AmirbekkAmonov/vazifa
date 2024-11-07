const menuItems = document.querySelectorAll('.menu-item');

// Aktiv elementni saqlash uchun o'zgaruvchi
let activeItem = document.querySelector('.menu-item.active');

menuItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    // Hover qilinganda eski activ rangini olib tashlaydi
    activeItem.classList.remove('active');
  });

  item.addEventListener('mouseleave', () => {
    // Hover olib tashlanganida avvalgi activ rangini qaytaradi
    activeItem.classList.add('active');
  });

  item.addEventListener('click', () => {
    // Aktivni yangilaydi
    activeItem.classList.remove('active');
    item.classList.add('active');
    activeItem = item;
  });
});
