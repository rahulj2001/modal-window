'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModal = document.querySelector('.close-modal');
const showModal = document.querySelectorAll('.show-modal');

function open_handler() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

function close_handler() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

for (let i = 0; i < showModal.length; i++){
    showModal[i].addEventListener('click', open_handler);
}

closeModal.addEventListener('click', close_handler);
overlay.addEventListener('click', close_handler);

document.addEventListener('keydown', function(e) {
    if (e.key == 'Escape' && !modal.classList.contains('hidden')){
        close_handler();
    }
});

