let checked = []; 

const checkboxes = document.querySelectorAll('.toggle');

checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('click', function() {
        if (checkbox.checked) {
            checked.push(checkbox); // add the checkbox to the list
        } else {
            // if the checkbox is unchecked, remove it from the list
            const index = checked.indexOf(checkbox);
            if (index > -1) {
                checked.splice(index, 1);
            }
        }
    });
});