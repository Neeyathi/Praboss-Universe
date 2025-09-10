
const searchInput = document.getElementById('searchCover');
const galleryCards = document.querySelectorAll('#gallery .card');
const gallery = document.getElementById('gallery');

searchInput.addEventListener('input', function() {
  const query = this.value.toLowerCase().trim();
  let anyVisible = false;

  galleryCards.forEach(card => {
    const tags = card.getAttribute('data-tags').toLowerCase();
    const text = card.textContent.toLowerCase();

    if (tags.includes(query) || text.includes(query)) {
      card.style.display = '';
      anyVisible = true;
    } else {
      card.style.display = 'none';
    }
  });

  if (query.length > 0 && anyVisible) {
    // Scroll down smoothly to the gallery section
    gallery.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
});



