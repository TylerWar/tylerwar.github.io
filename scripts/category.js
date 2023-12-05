document.addEventListener('DOMContentLoaded', function () {
    var categoryItems = document.querySelectorAll('.categories-default');
    var dropdownButton = document.getElementById('dropdownMenuButton');

    categoryItems.forEach(function (item) {
        item.addEventListener('click', function () {
            item.classList.toggle('selected-category');

            updateDropdownButtonText();
        });
    });

    function updateDropdownButtonText() {
        var selectedCategories = document.querySelectorAll('.selected-category');
        if (selectedCategories.length > 0) {
            if (selectedCategories.length === categoryItems.length) {
                dropdownButton.textContent = 'All';
            } else {
                var buttonText = Array.from(selectedCategories)
                    .map(function (category) {
                        return category.textContent;
                    })
                    .join(', ');

                dropdownButton.textContent = buttonText;
            }
        } else {
            dropdownButton.textContent = 'Select A Category';
        }
    }
});