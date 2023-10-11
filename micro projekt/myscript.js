document.getElementById("contact-form").addEventListener("submit", function (e) {
  var firstName = document.getElementById("firstName").value.trim();
  var lastName = document.getElementById("lastName").value.trim();
  var phoneNumber = document.getElementById("phoneNumber").value.trim();

  // Sprawdzenie, czy imię i nazwisko nie są puste
  if (firstName === "" || lastName === "") {
      alert("Proszę wprowadzić zarówno imię, jak i nazwisko.");
      e.preventDefault();
      return;
  }

  // Sprawdzenie, czy imię i nazwisko zaczynają się od dużej litery i nie zawierają cyfr
  var namePattern = /^[A-ZŁŚ][a-ząćęłńóśźżA-ZŁŚĆĘŃÓŚŹŻ ]+$/;
  if (!namePattern.test(firstName) || !namePattern.test(lastName)) {
      alert("Imię i nazwisko muszą zaczynać się od dużej litery i nie mogą zawierać cyfr.");
      e.preventDefault();
      return;
  }

  // Sprawdzenie, czy numer telefonu składa się z dokładnie 9 cyfr
  var phonePattern = /^\d{9}$/;
  if (!phonePattern.test(phoneNumber)) {
      alert("Numer telefonu musi składać się z dokładnie 9 cyfr.");
      e.preventDefault();
      return;
  }

    var message = document.getElementById("message").value;
    var emailBody = "Imię i Nazwisko: " + fullName + "\nNumer telefonu: " + phoneNumber + "\nWiadomość: " + message;
    var emailLink = "mailto:adasadas223@wp.pl?subject=Nowa wiadomość&body=" + encodeURIComponent(emailBody);
    window.location.href = emailLink;
});

