const rate_1 = document.getElementById('rate_1');
const rate_8 = document.getElementById('rate_8');
const rate_18 = document.getElementById('rate_18');
const rateRandom = document.getElementById('rateRandom');
const rateInput = document.getElementById('rateInput');
const priceInput = document.getElementById('priceInput');
const taxInclude = document.getElementById('taxInclude');
const taxExcept = document.getElementById('taxExcept');
const subTotal = document.getElementById('subTotal');
const taxTotal = document.getElementById('taxTotal');
const total = document.getElementById('total');

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
    if (!(e.key === 'Backspace' || e.key === 'Delete' || e.key === '0' || e.key === '1' || e.key === '2' || e.key === '3' || e.key === '4' || e.key === '5' || e.key === '6' || e.key === '7' || e.key === '8' || e.key === '9')) {
        e.preventDefault();
    }
})

priceInput.addEventListener("keydown", (e) => {
    // sadece sayıları ve silme olayını kabul etmesi için
    if (!(e.key === 'Backspace' || e.key === 'Delete' || e.key === '0' || e.key === '1' || e.key === '2' || e.key === '3' || e.key === '4' || e.key === '5' || e.key === '6' || e.key === '7' || e.key === '8' || e.key === '9')) {
        e.preventDefault();
    }
})

taxInclude.addEventListener("click", () => {
    let rateValue = rateInput.value; // yüzde değerini al

    // yüzde değeri "%" işaretini kaldır
    if (rateValue.startsWith("%")) {
        rateValue = rateValue.substring(1);
    }

    const rate = parseFloat(rateValue); // rateInput'tan değeri alıp sayısal veriye dönüştürürüz
    const price = parseFloat(priceInput.value);

    // rate ve price sayısal değer ise işlemi yap
    if (!isNaN(rate) && !isNaN(price)) {
        const taxAmount = (rate / 100) * price;
        const totalAmount = price + taxAmount;

        subTotal.textContent = "₺" + price.toFixed(2); // virgülden sonra 2 basamakla sınırlandırır
        taxTotal.textContent = "₺" + taxAmount.toFixed(2);
        total.textContent = "₺" + totalAmount.toFixed(2);
    }
});

taxExcept.addEventListener("click", () => {
    const price = parseFloat(priceInput.value);

    if (!isNaN(price)) {
        subTotal.textContent = "₺" + price.toFixed(2);
        taxTotal.textContent = "₺0.00";
        total.textContent = "₺" + price.toFixed(2);
    }
})