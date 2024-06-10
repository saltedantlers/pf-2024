document.addEventListener('DOMContentLoaded', () => {
  const galleryItems = document.querySelectorAll('.gallery-item');

  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      // Check if the item is already expanded
      const isExpanded = item.classList.contains('expanded');

      // Remove the expanded class from all items
      galleryItems.forEach(i => {
        i.classList.remove('expanded');
        const overlay = i.querySelector('.overlay');
        const description = i.querySelector('.description');
        if (description) description.remove(); // Remove the description if it exists
        overlay.style.position = 'absolute'; // Restore overlay position for non-expanded items
      });

      if (!isExpanded) {
        // Add the expanded class to the clicked item
        item.classList.add('expanded');

        // Update the overlay position for the expanded item
        const overlay = item.querySelector('.overlay');
        overlay.style.position = 'static';

        // Create and insert the description element
        const description = document.createElement('div');
        description.className = 'description';
        description.innerText = item.dataset.description;

        item.appendChild(description);
      }
    });
  });
});
