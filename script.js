
checkbox.addEventListener('click', function() {
    console.log(`Clicked on checkbox: ${checkbox.id}`);
    if (checkbox.checked) {
        checked.push(checkbox); // add the checkbox to the list
        console.log(`Added checkbox to checked list: ${checkbox.id}`);
    } else {
        // if the checkbox is unchecked, remove it from the list
        const index = checked.indexOf(checkbox);
        if (index > -1) {
            checked.splice(index, 1);
            console.log(`Removed checkbox from checked list: ${checkbox.id}`);
        }
    }
    console.log(`Current checked list: ${checked.map(c => c.id).join(', ')}`);
});