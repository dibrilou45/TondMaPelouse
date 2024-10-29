function filterBy(zone) {
    const tondeurs = document.querySelectorAll('.tondeur-card');

    tondeurs.forEach(tondeur => {
        const zones = tondeur.getAttribute('data-zones').split(',');

        if (zones.includes(zone)) {
            tondeur.style.display = 'flex';
        } else {
            tondeur.style.display = 'none';
        }
    });
}
