document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('change-color-btn');

    const neutralColors = [
        "#f5f5f5", // Light gray
        "#dcdcdc", // Gainsboro
        "#a9a9a9", // Dark gray
        "#808080", // Gray
        "#696969", // Dim gray
        "#2f4f4f", // Dark slate gray
        "#708090", // Slate gray
        "#b0c4de"  // Light steel blue
    ];

    function getRandomNeutralColor() {
        const randomIndex = Math.floor(Math.random() * neutralColors.length);
        return neutralColors[randomIndex];
    }

    button.addEventListener('click', function () {
        const randomColor = getRandomNeutralColor();
        document.body.style.backgroundColor = randomColor;
    });
});
