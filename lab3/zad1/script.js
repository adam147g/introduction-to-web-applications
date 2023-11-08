async function logMovies() {
    const response = await fetch("https://dummyjson.com/products");
    const movies = await response.json();
    // console.log(movies);
    const results = [];
    
    for (let i = 0; i < 30 && i < movies.products.length; i++) {
      const product = movies.products[i];
      const productInfo = {
        nazwa: product.title,
        opis: product.description,
        ikonka: product.thumbnail
      };
      results.push(productInfo);
    }

    const listElement = document.getElementById("product-list");

    results.forEach((result, index) => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `<strong>Produkt ${index + 1}:</strong><br>Nazwa: ${result.nazwa}<br>Opis: ${result.opis}<br><img src="${result.ikonka}" alt="Ikonka produktu">`;
      listElement.appendChild(listItem);
    });

  }
  
logMovies();