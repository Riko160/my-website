document.getElementById('bloomButton').addEventListener('click', function() {
    const flowerContainer = document.getElementById('flowerContainer');
    const flower = document.createElement('div');
    flower.classList.add('flower');
    flowerContainer.appendChild(flower);

    // Remove the flower after animation to allow for multiple clicks
    setTimeout(() => {
        flowerContainer.removeChild(flower);
    }, 3000);
});
