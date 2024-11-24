
        const popupOverlay = document.getElementById('popupOverlay');
        const closePopupButton = document.getElementById('closePopup');
        closePopupButton.addEventListener('click', () => {
            popupOverlay.classList.add('hidden');
        });
