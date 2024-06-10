document.addEventListener('DOMContentLoaded', () => {
  const galleryItems = document.querySelectorAll('.gallery-item');

  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      // Check if the item is already expanded
      const isExpanded = item.classList.contains('expanded');

      // Remove the expanded class from all items
      galleryItems.forEach(i => i.classList.remove('expanded'));

      if (!isExpanded) {
        // Add the expanded class to the clicked item
        item.classList.add('expanded');

        // Create and insert the title and description elements
        const title = document.createElement('div');
        title.className = 'overlay';
        title.innerText = item.dataset.title;

        const description = document.createElement('div');
        description.className = 'description';
        description.innerText = item.dataset.description;

        item.appendChild(title);
        item.appendChild(description);
      }
    });
  });
});
