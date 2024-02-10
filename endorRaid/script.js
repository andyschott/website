const targetScores = [
    2700000,
    2000000,
    1400000,
    1400000,
    900000,
    600000,
    600000,
    600000
]

function calculate() {
    const inputs = document.getElementsByClassName('raidScore');
    let score = 0;
    let targetScore = 0;
    for (let index = 0; index < inputs.length; index++) {
        const currentScore = Number(inputs[index].value);
        score += currentScore;

        if (currentScore !== 0) {
            targetScore += targetScores[index];
        }
    }

    const aheadBehind = score - targetScore;

    document.getElementById('output').innerText = score.toLocaleString();

    const aheadBehindCtrl = document.getElementById('aheadBehind');
    aheadBehindCtrl.innerText = aheadBehind.toLocaleString();
    if (aheadBehind < 0) {
        aheadBehindCtrl.classList.add('behind');
    }
    else {
        aheadBehindCtrl.classList.remove('behind');
    }
}

document.addEventListener("DOMContentLoaded", () => {
    let targetScore = 0;

    const targets = document.getElementsByClassName('target');
    for (let index = 0; index < targets.length; index++) {
        targets[index].innerText = targetScores[index].toLocaleString();

        targetScore += targetScores[index];
    }

    document.getElementById('targetScore').innerText = targetScore.toLocaleString();
});
