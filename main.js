document.addEventListener('DOMContentLoaded', () => {
  const galleryItems = document.querySelectorAll('.gallery-item');

  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      // Check if the item is already expanded
      const isExpanded = item.classList.contains('expanded');

      // Remove the expanded class and clean up any existing descriptions
      galleryItems.forEach(i => {
        i.classList.remove('expanded');
        const description = i.querySelector('.description');
        if (description) description.remove(); // Remove the description if it exists
        // Restore overlay styles
        const overlay = i.querySelector('.overlay');
        if (overlay) overlay.style.position = 'absolute';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
        overlay.style.color = '#fff';
        overlay.style.opacity = '0'; // Keep the hover effect for non-expanded items
      });

      if (!isExpanded) {
        // Add the expanded class to the clicked item
        item.classList.add('expanded');

        // Update the overlay styles for the expanded item
        const overlay = item.querySelector('.overlay');
        overlay.style.position = 'static';
        overlay.style.backgroundColor = 'transparent';
        overlay.style.color = '#333';
        overlay.style.opacity = '1'; // Make sure the title is visible

        // Create and insert the description element
        const description = document.createElement('div');
        description.className = 'description';
        description.innerText = item.dataset.description;

        item.appendChild(description);
      }
    });
  });
});
