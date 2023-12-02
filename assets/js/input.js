const inputval = document.querySelector(`#inputval`);
const quantityup = document.querySelector(`.quantity-button.quantity-up`);
const quantitydown = document.querySelector(`.quantity-button.quantity-down`);
quantityup.addEventListener(`click`, function(){
    let currentValue = parseInt(inputval.value, 10);
    inputval.value = currentValue + 1;
})
quantitydown.addEventListener(`click`, function(){
    let currentValue = parseInt(inputval.value, 10);
    inputval.value = currentValue - 1;
})