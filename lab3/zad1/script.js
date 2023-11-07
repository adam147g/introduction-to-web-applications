async function logMovies() {
    const response = await fetch("https://dummyjson.com/products");
    const movies = await response.json();
    console.log(movies);
    
  }
  
logMovies();