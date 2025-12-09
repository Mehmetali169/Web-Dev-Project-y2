const app = document.getElementById('root');

const container = document.createElement('div');
container.setAttribute('class', 'container');
app.appendChild(container);

const fallbackURL = "Products.json";

// Fetch all products
fetch(fallbackURL)
  .then(handleResponse)
  .then(handleData)
  .catch(handleError);

function handleResponse(response) {
  return response.json();
}

function handleData(data) {
  console.log("API response:", data);

  if (!data || data.length === 0) {
    handleError(new Error("No Product Data Returned"));
    return;
  }

  data.products.forEach(ProductCard);
}

function handleError(error) {
  const errorMessage = document.createElement('marquee');
  errorMessage.textContent = `Error: ${error.message}`;
  errorMessage.style.color = "red";
  app.appendChild(errorMessage);
}

function ProductCard(product) {
  const card = document.createElement('div');
  card.setAttribute('class', 'card');

  // product name
  const name = document.createElement('h1');
  name.textContent = `${product.name}`;

  // Product image
  const image = document.createElement('img');
  image.src = product.image;
  image.alt = product.name;
  image.style.width = "100px";

  // product price
  const price = document.createElement('p');
  price.textContent = `Price: $${product.price}`;

  // Product rating
  const rating = document.createElement('p');
  rating.textContent = `Rating: ${product.rating}`;

  card.appendChild(image);
  card.appendChild(name);
  card.appendChild(price);
  card.appendChild(rating);

  container.appendChild(card);
}