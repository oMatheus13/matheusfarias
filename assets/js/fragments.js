document.addEventListener('DOMContentLoaded', function () {
  const filterButtons = document.querySelectorAll('.fragments__filter-button');
  const fragmentCards = document.querySelectorAll('.fragment-card');
  const filterList = document.getElementById('fragmentFilters'); // Get the filter list

  // Function to extract all unique tags from the cards
  function getAllTags() {
    const allTags = new Set(); // Use a Set to store unique tags
    fragmentCards.forEach(card => {
      const tagsString = card.dataset.tags;
      const tagsArray = tagsString.split(' ');
      tagsArray.forEach(tag => allTags.add(tag));
    });
    return Array.from(allTags); // Convert the Set to an Array
  }

  // Function to generate filter buttons
  function generateFilterButtons(tags) {
    filterList.innerHTML = ''; // Clear existing filters
    filterList.appendChild(createFilterButton('all', 'Todos')); // Add "Todos" filter

    tags.forEach(tag => {
      filterList.appendChild(createFilterButton(tag, tag)); // Create button for each tag
    });

    // Re-attach event listeners after regenerating buttons (MOST IMPORTANT)
    attachFilterListeners();
  }

  // Helper function to create a filter button
  function createFilterButton(filterValue, buttonText) {
    const listItem = document.createElement('li');
    const button = document.createElement('button');
    button.classList.add('fragments__filter-button');
    button.dataset.filter = filterValue;
    button.textContent = buttonText;
    listItem.appendChild(button);
    return listItem;
  }

  function attachFilterListeners() {
    const filterButtons = document.querySelectorAll('.fragments__filter-button'); // Re-select buttons

    filterButtons.forEach(button => {
      button.addEventListener('click', function () {
        const filter = this.dataset.filter;

        filterButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');

        fragmentCards.forEach(card => {
          const tags = card.dataset.tags;

          if (filter === 'all' || tags.includes(filter)) {
            card.classList.remove('hidden');
          } else {
            card.classList.add('hidden');
          }
        });
      });
    });

    // Initially select 'all' filter after listeners are attached
    document.querySelector('[data-filter="all"]').classList.add('active');
  }


  // Get all unique tags
  const allUniqueTags = getAllTags();

  // Generate filter buttons dynamically
  generateFilterButtons(allUniqueTags);

  // Attach filter listeners (moved into its own function)
  attachFilterListeners();

});