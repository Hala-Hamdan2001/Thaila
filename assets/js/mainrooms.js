const inputvals = document.querySelector(`#inputvals`);
const quantityups = document.querySelector(`.quantity-ups`);
const quantitydowns = document.querySelector(`.quantity-downs`);
const rooms = document.querySelector(`.rooms`);
const scrolltotoprooms = document.querySelector('.scroll-to-top-rooms');

quantityups.addEventListener(`click`, function() {
    let currentValues = parseInt(inputvals.value, 10);
    inputvals.value = currentValues + 1;
});

quantitydowns.addEventListener(`click`, function() {
    let currentValues = parseInt(inputvals.value, 10);
    inputvals.value = currentValues - 1;
});

scrolltotoprooms.addEventListener('click', function() {
    try {
        window.scroll({
            top: 0,
            behavior: 'smooth',
        });
    } catch (error) {
        // Handle any potential errors here
        console.error('Error scrolling to the top:', error);
    }
});

window.addEventListener(`scroll`, function() {
    console.log('Scrolling...');
    console.log('scrollY:', window.scrollY);
    console.log('rooms.offsetTop:', rooms.offsetTop);

    if (window.scrollY >= rooms.offsetTop) {
        console.log('Show scroll-to-top button');
        scrolltotoprooms.classList.remove(`opacity-0`, `invisible`);
    } else {
        console.log('Hide scroll-to-top button');
        scrolltotoprooms.classList.add(`opacity-0`, `invisible`);
    }
});
