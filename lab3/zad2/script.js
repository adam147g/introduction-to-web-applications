document.addEventListener('DOMContentLoaded', function () {
  var inputFilter = document.querySelector("#input-filter");
  var sortAsc = document.querySelector("#sort-asc");
  var sortDsc = document.querySelector("#sort-dsc");
  var noSort = document.querySelector("#no-sort");
  var listElement = document.querySelector("#product-list");
  var sortId = 0;
  var originalResults;
  
  if (inputFilter && sortAsc && sortDsc && noSort && listElement) {
    // Możesz tutaj użyć zmiennych bez obaw o ich wartość null

    // sortId -  1 dla sort-asc
    //          -1 dla sort-desc
    //           0 dla no-sort
    logMovies(sortId);


    sortAsc.addEventListener('click', function () {
      sortId = 1;
      console.log('sortId ustawione na 1');
      clearElementChildren();
      logMovies(sortId);
    });

    sortDsc.addEventListener('click', function () {
      sortId = -1;
      console.log('sortId ustawione na -1');
      clearElementChildren();
      logMovies(sortId);
    });

    noSort.addEventListener('click', function () {
      sortId = 0;
      console.log('sortId ustawione na 0');
      clearElementChildren();
      logMovies(sortId);
    });

    inputFilter.addEventListener('input', function () {
      clearElementChildren();
      logMovies(sortId);
    });

    function clearElementChildren() {
      // Usunięcie wszystkich dzieci elementu
      while (listElement.firstChild) {
      listElement.removeChild(listElement.firstChild);     
      }
    }

    async function logMovies(sortOrder) {
        const response = await fetch("https://dummyjson.com/products");
        const movies_not_sorted = await response.json();
        var searchTerm = inputFilter.value.toLowerCase();
      
        const results = [];
        
        for (let i = 0;  i < movies_not_sorted.products.length; i++) {
          const product = movies_not_sorted.products[i];
          const productInfo = {
            nazwa: product.title,
            opis: product.description,
            ikonka: product.thumbnail
          };
          results.push(productInfo);
        }

        var filteredResults = results.filter(function (result) {
          return result.nazwa.toLowerCase().includes(searchTerm);
        });

        // Sortowanie danych gdy znaczenie ma duża/mała litera
        // if (sortOrder == 1) {
        //   results.sort((a, b) => (a.nazwa > b.nazwa) ? 1 : -1); // Sortowanie rosnące
        // } else if (sortOrder == -1) {
        //   results.sort((a, b) => (a.nazwa > b.nazwa) ? -1 : 1); // Sortowanie malejące
        // }


        if (sortOrder!=0){
          filteredResults.sort((a, b) => customCompare(a.nazwa, b.nazwa, sortOrder));
        }
        // Ograniczenie liczby wyświetlanych produktów do pierwszych 30
        const limitedResults = filteredResults.slice(0, 30);

        limitedResults.forEach((result, index) => {
          const listItem = document.createElement("li");
          listItem.innerHTML = `<strong>Produkt ${index + 1}:</strong><br>Nazwa: ${result.nazwa}<br>Opis: ${result.opis}<br><img src="${result.ikonka}" alt="Ikonka produktu">`;
          listElement.appendChild(listItem);
        });

        function customCompare(a, b, sortOrder) {
          const normalize = (str) => str.replace(/[a-zA-Z]/g, (match) => match.toLowerCase());
          const normalizedA = normalize(a);
          const normalizedB = normalize(b);
          return sortOrder*normalizedA.localeCompare(normalizedB);
        }
      }
  } else {
    console.error('Nie znaleziono jednego lub więcej elementów na stronie.');
  }
});
