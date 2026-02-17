console.log("Script.js loaded!");
const products = [
  {
    id: 1,
    name: "Classic Everyday Product",
    price: 17.81,
    img: "Assets/images/product-01.jpg",
    desc: "A simple and reliable product with a clean finish. Designed for daily use, offering comfort, durability, and a neat modern look."
  },
  {
    id: 2,
    name: "Modern Casual Essential",
    price: 54.9,
    img: "Assets/images/product-02.jpg",
    desc: "Features a modern design with strong material quality. Ideal for casual wear and everyday styling with long-lasting performance."
  },
  {
    id: 3,
    name: "Premium Style Selection",
    price: 99,
    img: "Assets/images/product-03.jpg",
    desc: "An elegant product crafted with attention to detail. Its solid build and premium appearance make it perfect for a polished look."
  },
  {
    id: 4,
    name: "Smart Budget Choice",
    price: 29,
    img: "Assets/images/product-04.jpg",
    desc: "A lightweight and affordable option with a stylish design. Suitable for regular use while maintaining a clean and trendy look."
  },
  {
    id: 5,
    name: "Formal Leather Belt",
    price: 100.99,
    img: "Assets/images/belt 6.jpg",
    desc: "Made from high-quality leather with a smooth finish. A strong buckle and elegant design make it ideal for formal and office wear."
  },
  {
    id: 6,
    name: "Casual Everyday Belt",
    price: 40.99,
    img: "Assets/images/belt 7.jpg",
    desc: "A comfortable casual belt with a modern appearance. Designed to pair well with jeans and everyday outfits."
  }
];

// Save products in localStorage
localStorage.setItem("products", JSON.stringify(products));
console.log("Products saved to localStorage:", products);

try {
  //  HOMEPAGE  //
  const productsContainer = document.getElementById("products-container");
  if (productsContainer) {
    const productsData = JSON.parse(localStorage.getItem("products")) || [];
    
    productsData.forEach(product => {
     
      const card = document.createElement("div");
      // card.classList.add("product");

      card.innerHTML = `
        <div class="img-box">
          <img src="${product.img}" alt="${product.name}" style="width:200px; height:auto;">
          <span class="quick">Shop Quick</span>
        </div>
        <h3>${product.name}</h3>
        <p class="price">$${product.price.toFixed(2)}</p>
        <button class="view-btn" data-id="${product.id}">View Details</button>
      `;

      productsContainer.appendChild(card);
    });

    document.querySelectorAll(".view-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const id = e.target.getAttribute("data-id");
        
        localStorage.setItem("selectedProductId", id);
        window.location.href = "product.html";
      });
    });
  }

  //  PRODUCT DETAIL PAGE //
  const detailContainer = document.getElementById("product-detail-container");
  if (detailContainer) {
    
    const productsData = JSON.parse(localStorage.getItem("products")) || [];
    const selectedId = localStorage.getItem("selectedProductId");
   
    const product = productsData.find(p => p.id == selectedId);

   

    console.log("Showing product details:", product);
    detailContainer.innerHTML = `
      <div class="product-detail product-detail-card">
        <div class="img-box">
          <img src="${product.img}" alt="${product.name}">
        </div>
        <div class="product-info">
          <h2>${product.name}</h2>
          <p class="price">Price: $${product.price.toFixed(2)}</p>
          <p class="desc">${product.desc}</p>
        </div>
      </div>
    `;
  }

} catch (error) {
  console.error("Error in JS:", error);
  const container = document.getElementById("products-container") || document.getElementById("product-detail-container");
  if (container) container.innerHTML = "<p>Failed to load product data.</p>";
}





 