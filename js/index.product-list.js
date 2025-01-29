const response = await fetch('api/products.json');
const products = await response.json();
renderProducts(products);

// fetch("api/products.json")
//   .then((response) => response.json())
//   .then(renderProducts);

function renderProducts(products, rate = 1) {
  let productsHtml = "";
  for (const product of products) {
    productsHtml += `
        <article class="products__item">
            <img class="products__image" src="${product.image}" alt="${product.title}">
            <h3 class="products__name">${product.title}</h3>
            <p class="products__description">${product.description}
            </p>
            <div class="products__actions">
                <button class="products__button products__button--info button button-card">
                    Info
                </button>
                <button class="products__button products__button--buy button button-card">
                    Buy - ${(product.price * rate).toFixed(2)}
                </button>
            </div>
        </article>`;
  }
  const productsContainer = document.querySelector(".products__list");
  productsContainer.innerHTML = productsHtml;
}


let currencies;
async function changeCurrency() {
  const currencyName = document.querySelector('.products__currency').value;
  if (!currencies) {
    const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
    currencies = await response.json();
  }
  const rate = currencies.rates[currencyName];
  renderProducts(products, rate);
}

document.querySelector('.products__currency').addEventListener('change', changeCurrency);
