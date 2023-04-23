//populating the website with data from a fake api store

fetch("https://fakestoreapi.com/products")
  .then((data) => {
    return data.json();
  })
  .then((completedata) => {
    let data1 = "";
    completedata.map((values) => {
      data1 += `<div class="card">
    <h1 class="title">${values.title}</h1>
    <img src=${values.image}
    alt="img" class="images">
    <p class="category">${values.category}</p>
    <p class="price" style="font-size:1.5rem" data-price="${values.price}">${values.price}</p>

</div>`;
    });

    document.getElementById("cards").innerHTML = data1;
  })
  .catch((err) => {
    console.log(err);
  });

// Get exchange rate from API
function getExchangeRate(targetCurrency) {
  // const url = `https://v6.exchangerate-api.com/v6/b9dd02de2570891bbf605d4a/latest/USD`;
  return fetch(url)
    .then((response) => response.json())
    .then((data) => data.conversion_rates[targetCurrency]);
}

// Update prices based on selected currency
// Update prices based on selected currency
function updatePrices(targetCurrency) {
  const prices = document.querySelectorAll(".price");
  prices.forEach((price) => {
    const currentPrice = parseFloat(price.dataset.price);
    if (!isNaN(currentPrice)) {
      getExchangeRate(targetCurrency).then((rate) => {
        const convertedPrice = (currentPrice * rate).toFixed(2);
        price.textContent = `${targetCurrency} ${convertedPrice}`;
      });
    }
  });
}

// Initial update based on default currency (USD)
updatePrices("USD");

// Handle select change event
const select = document.getElementById("currency-selector");
select.addEventListener("change", (event) => {
  updatePrices(event.target.value);
});

//nav menu
const hamburger = document.querySelector(".hamburger");
const navLink = document.querySelector(".nav-link");

hamburger.addEventListener("click", () => {
  navLink.classList.toggle("show");
});
