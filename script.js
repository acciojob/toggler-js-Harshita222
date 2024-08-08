        const toggles = document.querySelectorAll('.toggle');
        toggles.forEach(toggle => {
            toggle.addEventListener('change', () => {
                const checkedToggles = document.querySelectorAll('.toggle:checked');
                if (checkedToggles.length > 2) {
                    checkedToggles[0].checked = false;
                }
            });
        });
