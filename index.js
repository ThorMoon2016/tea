
  // Funkcija za prikazivanje proizvoda na stranici
  function displayProducts() {
    const productList = document.getElementById("product-list");
  
    // Prolazimo kroz sve proizvode i dodajemo ih na stranicu
    products.forEach(product => {
      const productElement = document.createElement("div");
      productElement.innerHTML = `<h3>${product.name}</h3><p>Cijena: ${product.price} USD</p>`;
      productList.appendChild(productElement);
    });
  }
  
  // Pozivamo funkciju za prikazivanje proizvoda kada se stranica ucita
  window.addEventListener("load", displayProducts);
  
  // Funkcija za pretvaranje vremena u format "mm:ss"
function formatTime(minutes, seconds) {
    return (
      String(minutes).padStart(2, '0') +
      ':' +
      String(seconds).padStart(2, '0')
    );
  }
  
  // Funkcija za otkucavanje tajmera
  function countdownTimer() {
    var timerElement = document.querySelector('.timer');
    var time = timerElement.innerHTML.split(':');
    var minutes = parseInt(time[0]);
    var seconds = parseInt(time[1]);
  
    // Smanji sekunde
    seconds--;
  
    // Smanji minute ako su sekunde istekle
    if (seconds < 0) {
      minutes--;
      seconds = 59;
    }
  
    // Ažuriraj tajmer na stranici
    timerElement.innerHTML = formatTime(minutes, seconds);
  
    // Provjeri da li je vrijeme isteklo
    if (minutes === 0 && seconds === 0) {
      clearInterval(timerInterval); // Zaustavi tajmer
      // Dodaj ovdje kod koji želite izvršiti kada tajmer istekne
    }
  }
  
  // Pokreni tajmer kada se stranica učita
  window.addEventListener('load', function () {
    var timerElement = document.querySelector('.timer');
    var time = timerElement.innerHTML.split(':');
    var minutes = parseInt(time[0]);
    var seconds = parseInt(time[1]);
    var totalSeconds = minutes * 60 + seconds;
  
    // Prikazi pocetno vrijeme tajmera
    timerElement.innerHTML = formatTime(minutes, seconds);
  
    // Pokreni tajmer
    var timerInterval = setInterval(function () {
      // Provjeri da li je vrijeme isteklo
      if (totalSeconds <= 0) {
        clearInterval(timerInterval); // Zaustavi tajmer
        // Dodaj ovdje kod koji želite izvršiti kada tajmer istekne
      }
  
      // Izračunaj minute i sekunde
      minutes = Math.floor(totalSeconds / 60);
      seconds = totalSeconds % 60;
  
      // Ažuriraj preostalo vrijeme
      timerElement.innerHTML = formatTime(minutes, seconds);
  
      // Smanji preostalo vrijeme za jednu sekundu
      totalSeconds--;
    }, 1000);
  });
  
  // Skripta za sortiranje proizvoda
function sortirajProizvode(sortiranje) {
  const kontejner = document.getElementById("productContainer");
  const proizvodi = Array.from(kontejner.children);

  proizvodi.sort((a, b) => {
      const cijenaA = parseFloat(a.querySelector("p").textContent);
      const cijenaB = parseFloat(b.querySelector("p").textContent);

      if (sortiranje === "low-to-high") {
          return cijenaA - cijenaB;
      } else {
          return cijenaB - cijenaA;
      }
  });

  while (kontejner.firstChild) {
      kontejner.removeChild(kontejner.firstChild);
  }

  proizvodi.forEach((proizvod) => {
      kontejner.appendChild(proizvod);
  });
}

document.getElementById("sortSelect").addEventListener("change", function () {
  const odabranoSortiranje = this.value;
  if (odabranoSortiranje === "low-to-high" || odabranoSortiranje === "high-to-low") {
      sortirajProizvode(odabranoSortiranje);
  }
});


