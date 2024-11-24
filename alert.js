
        const popupOverlay = document.getElementById('po');
        const closePopupButton = document.getElementById('c');
        closePopupButton.addEventListener('click', () => {
            popupOverlay.classList.add('hidden');
        });
