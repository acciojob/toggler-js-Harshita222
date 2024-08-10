        // const toggles = document.querySelectorAll('.toggle');
        // toggles.forEach(toggle => {
        //     toggle.addEventListener('change', () => {
        //         const checkedToggles = document.querySelectorAll('.toggle:checked');
        //         if (checkedToggles.length > 2) {
        //             checkedToggles[0].checked = false;
        //         }
        //     });
        // });

let checked = []; 

const checkboxes = document.querySelectorAll('.toggle');

checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('click', function() {
        if (checkbox.checked) {
            checked.push(checkbox); // add the checkbox to the list
            if (checked.length > 2) {
				let demo1 = checked[checked.length-1];
				checked.pop();
					let demo2 = checked[checked.length-1];
				checked.pop();
			
                demo2.checked = false; // uncheck the first checkbox
                checked.push(demo1)
				// checked.shift(); // remove the first checkbox from the list
            }
        } else {
            // if the checkbox is unchecked, remove it from the list
            const index = checked.indexOf(checkbox);
            if (index > -1) {
                checked.splice(index, 1);
            }
        }
    });
});
