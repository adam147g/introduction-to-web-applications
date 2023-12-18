# react-router-app

## Opis

Krótk strona React'owa wykorzystująca [React Router](https://www.w3schools.com/react/react_router.asp) oraz prosty serwer Flask do obsługi żądań backendowych.

Strona wświetla podstawowe informacje. Nie wszystkie zawierają prawdziwe dane. Jest to tylko wzór.
Jako jedną z podstron jest <i>Produkty</i>. <br>
Po wejściu w tę zakładkę wyświetlają się nam przykładowe produkty zapisane w <i>public/products.json</i><br>
Na stronie głównej mamy możliwość logowania. Logowanie realizowane jest z użyciem <b>jwt</b>.<br>
Po zalogowaniu wracamy na stronę główną, gdzie wita nas komunikat z informacją, że jesteśmy zalogowani.<br>
Widzmy, że teraz pojawia się opcja wylogowania.<br>
Po zalogowaniu dostajemy możliwość edycji nazwy, opisu i ceny produktów.

## Jak Uruchomić Projekt

### 1. Uruchomienie Serwera Flask (Backend)

Przejdź do katalogu `zad3/react-router-app/server/`:

```bash
cd zad3/react-router-app/server/
```
Uruchom serwer Flask:

```bash
python app.py
```

Serwer powinien zostać uruchomiony na http://localhost:5000/.

### 2. Uruchomienie Aplikacji React (Frontend)

Przejdź do katalogu `zad3/react-router-app/`:

```bash
cd zad3/react-router-app/
```

Uruchom aplikację React:
```bash
npm start
```

Aplikacja powinna być dostępna pod adresem http://localhost:3000/.