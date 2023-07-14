const rate_1 = document.getElementById('rate_1');
const rate_8 = document.getElementById('rate_8');
const rate_18 = document.getElementById('rate_18');
const rateRandom = document.getElementById('rateRandom');
const rateInput = document.getElementById('rateInput');
// const priceInput = document.querySelectorAll('#priceInput');
// const taxInclude = document.querySelectorAll('#taxInclude');
// const taxExcept = document.querySelectorAll('#taxExcept');
// const subTotal = document.querySelectorAll('#subTotal');
// const taxTotal = document.querySelectorAll('#taxTotal');
// const total = document.querySelectorAll('#total');

rate_1.addEventListener("click", (e) => {
    let clickedText = e.target.innerHTML;
    rateInput.value = clickedText;
})

rate_8.addEventListener("click", (e) => {
    let clickedText = e.target.innerHTML;
    rateInput.value = clickedText;
})

rate_18.addEventListener("click", (e) => {
    let clickedText = e.target.innerHTML;
    rateInput.value = clickedText;
})

rateRandom.addEventListener("click", function () {
    rateInput.focus(); //input alanına odaklanma
})

// yüzde girdiğimde klavye tuşu basılı olduğunda olayı dinlemesi için
rateInput.addEventListener("keydown", (e) => {
    // sadece sayıları ve silme olayını kabul etmesi için
    if (!(e.key === 'Delete' || e.key === '0' || e.key === '1' || e.key === '2' || e.key === '3' || e.key === '4' || e.key === '5' || e.key === '6' || e.key === '7' || e.key === '8' || e.key === '9')) {
        e.preventDefault();
    }
})