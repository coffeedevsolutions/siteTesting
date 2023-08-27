const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    // Remove 'active' class from all menu items
    menuItems.forEach(item => {
      item.classList.remove('active');
    });
    
    // Add 'active' class to the clicked menu item
    item.classList.add('active');
  });
});

function sortMenuItems() {
    const menuContainer = document.getElementById('floating-menu');
    const menuItems = Array.from(menuContainer.getElementsByClassName('menu-item'));
  
    // Sort the menu items alphabetically based on the title (ignoring "The" or "A ")
    menuItems.sort((a, b) => {
      const titleA = a.querySelector('.menu-item-title').textContent.trim();
      const titleB = b.querySelector('.menu-item-title').textContent.trim();
      
      const adjustedTitleA = titleA.replace(/^(The|A)\s+/i, '');
      const adjustedTitleB = titleB.replace(/^(The|A)\s+/i, '');
  
      return adjustedTitleA.localeCompare(adjustedTitleB);
    });
  
    // Clear the container
    menuContainer.innerHTML = '';
  
    // Append sorted menu items back to the container
    menuItems.forEach(item => {
      menuContainer.appendChild(item);
    });
  }
  
  // Call the sorting function
  sortMenuItems();