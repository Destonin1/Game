import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
import './style.css'
import init from './weather'
import initGame from './game'

const root = document.getElementById('root');

menu();

function empty() {
    root.innerHTML = ' ';
};

function addUpperMenu(){
    const backBlock = document.createElement('button');
    backBlock.classList.add('back');
    const icon = document.createElement('i');
    icon.classList.add('fas');
    icon.classList.add('fa-arrow-left');
    icon.classList.add('menu-arrow');
    backBlock.textContent = 'Back';
    backBlock.prepend(icon);
    backBlock.onclick = menu;
    return backBlock
}

function menu() {
    root.innerHTML = ' ';
    const htmlOptions = document.createElement('div');
    htmlOptions.classList.add('menu-container');
    htmlOptions.insertAdjacentHTML('beforeend', `
    <div class="options">
        <button id="option1" class="option">Weather in Ukraine</button>
        <button id="option2" class="option">Game</button>
    </div>`);
    root.appendChild(htmlOptions);
    document.getElementById('option1').onclick = weatherUkraine;;
    document.getElementById('option2').onclick = Game;;
}

function weatherUkraine() {
    empty();
    init(addUpperMenu());
};

function Game() {
    initGame(addUpperMenu());
};
