const products = [
  {
    id: "1",
    title: "Baby Yoda",
    description:
      "An adorable and collectible Baby Yoda figurine, perfect for Star Wars fans and lovers of the Mandalorian series. This cute character brings a touch of the galaxy to your home.",
    image: "img/baby-yoda.svg",
    price: 10.99,
  },
  {
    id: "2",
    title: "Banana",
    description:
      "A vibrant and playful banana illustration, ideal for adding a fun and tropical vibe to your designs or decorations. Great for fruit enthusiasts and creative projects.",
    image: "img/banana.svg",
    price: 12.99,
  },
  {
    id: "3",
    title: "Girl",
    description:
      "A charming and artistic depiction of a girl, perfect for storytelling, educational materials, or simply adding a touch of elegance to your collection.",
    image: "img/girl.svg",
    price: 11.99,
  },
  {
    id: "4",
    title: "Viking",
    description:
      "A bold and fierce Viking warrior illustration, embodying strength and adventure. Ideal for history buffs, fantasy lovers, or anyone who appreciates Norse mythology.",
    image: "img/viking.svg",
    price: 11.59,
  },
];

function renderProducts(products) {
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
                    Buy - ${product.price}
                </button>
            </div>
        </article>`;
  }
  const productsContainer = document.querySelector(".products__list");
  productsContainer.innerHTML = productsHtml;
}

renderProducts(products);

