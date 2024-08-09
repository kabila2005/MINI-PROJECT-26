document.addEventListener("DOMContentLoaded", function () {
    // Fetch products from the Fake Store API
    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => {
            const clothingSection = document.querySelector('#clothing .products');
            const footwearSection = document.querySelector('#footwear .products');
            const accessoriesSection = document.querySelector('#accessories .products');

            // Filter and categorize products
            const clothing = data.filter(product => product.category === "men's clothing" || product.category === "women's clothing");
            const footwear = data.filter(product => product.category === "jewelery");  // Assuming footwear as jewelery for demo purposes
            const accessories = data.filter(product => product.category === "electronics");

            // Display products
            displayProducts(clothingSection, clothing);
            displayProducts(footwearSection, footwear);
            displayProducts(accessoriesSection, accessories);
        })
        .catch(error => console.error('Error fetching products:', error));

    function displayProducts(section, products) {
        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.className = 'product';
            productDiv.innerHTML = `
                <img src="${product.image}" alt="${product.title}">
                <h3>${product.title}</h3>
                <p>Price: $${product.price}</p>
                <button onclick="addToCart('${product.id}')">Add to Cart</button>
            `;
            section.appendChild(productDiv);
        });
    }
});

function addToCart(productId) {
    alert(`Product ${productId} added to cart`);
}
