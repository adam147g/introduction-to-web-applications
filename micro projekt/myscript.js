document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const formData = new FormData(this);
  
    fetch("https://formspree.io/adasadas223@wp.pl", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          // Udało się wysłać e-mail
          alert("Wiadomość została wysłana. Dziękujemy!");
          this.reset();
        } else {
          // Wystąpił błąd
          alert("Wystąpił błąd podczas wysyłania wiadomości.");
        }
      });
  });
  