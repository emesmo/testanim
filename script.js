let totalRedLiquid = 10;
let totalWater = 20;
let pouredRedLiquid = 0;

function pourLiquid(amount) {
    if (totalRedLiquid >= amount) {
        totalRedLiquid -= amount;
        pouredRedLiquid += amount;

        const redLiquid = document.querySelector('.redLiquid');
        const water = document.querySelector('.water');

        redLiquid.style.height = `${(totalRedLiquid / 10) * 100}px`;
        water.style.height = `${(totalWater + pouredRedLiquid) / 2}px`;

        const redConcentration = (pouredRedLiquid / (totalWater + pouredRedLiquid)) * 255;
        water.style.backgroundColor = `rgb(${redConcentration}, 128, 255)`;

        if (totalRedLiquid === 0) {
            document.getElementById('resetButton').style.display = 'block';
        }
    }
}

function resetExperiment() {
    totalRedLiquid = 10;
    pouredRedLiquid = 0;

    const redLiquid = document.querySelector('.redLiquid');
    const water = document.querySelector('.water');

    redLiquid.style.height = '100px';
    water.style.height = '40px';
    water.style.backgroundColor = '#a0e0ff';

    document.getElementById('resetButton').style.display = 'none';
}
