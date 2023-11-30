const searchInput = document.getElementById('searchInput');
const searchButton = document.querySelector('button');
const listItems = document.querySelectorAll('li');

searchButton.addEventListener('click', () => {
  const searchTerm = searchInput.value.toLowerCase();
  listItems.forEach((item) => {
    const text = item.textContent.toLowerCase();
    if (text.includes(searchTerm)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
});
