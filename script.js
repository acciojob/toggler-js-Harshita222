const checkboxes = document.querySelectorAll('.toggle');
let checked = [];
checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('click', function() {
        // your logic here
		if(checkbox.checked){
			checked.push(checkbox);
			if(checked.length >2){
				checked[0].checked = false;
				checked.shift();
			}else{
				const index = checked.indexOf(checkbox);
				if (index > -1) {
                checked.splice(index, 1);
            
			}
		}
		
    });
});