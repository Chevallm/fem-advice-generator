// Elements
const randomButton = document.getElementById('randomAdvice');
const adviceText = document.getElementById('advice');
const adviceId = document.getElementById('advice-id');

interface Advice {
    id: number
    advice: string
}

const url = 'https://api.adviceslip.com/advice';
function getRandomAdvice(): Promise<Advice> {
    return new Promise(resolve => {
        fetch(url).then(response => {
            response.json().then(json => {
                resolve(json.slip)
            })
        })
    });
}

function addAdvice(advice: Advice) {
    adviceText.innerText = advice.advice;
    adviceId.innerText = advice.id.toString();
}

getRandomAdvice().then(addAdvice);

randomButton.addEventListener('click', () => {
    getRandomAdvice().then(addAdvice);
})
