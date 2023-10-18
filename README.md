# websovellus

## HTML

- Basic HTML structure on käytetty kaikilla välilehdillä samoin kuin listoja otsikoita etc.
- HTML formia käytin contact välilehdessä.
- Mediaa ja linkkejä löytyy portfolio, galleria ja contacts välilehdistä.
- Portfolio välilehdessä on linkki aikasempaan projektiini
- Contact välilehdessä on mailto linkki mistä pääsee suoraan laittaam s-postia minulle.
- Tables löytyy hobbies välilehdeltä jossa harrastukset on laitettu taulukkoon.

## CSS

- CSS tyylejä löytyy style.css tiedostosta, jossa on muokattu CSS-valitsimia, taustoja, fontteja, mediaa jne.
- Responsiivistä suunnittelua on jonkin verran, esimerkiksi:
  - Kännykälle skaalaus välilehdissä ja taulukossa
- Galleryssä on kuvat laitettu Grid-containeriin ku en muutakaan keksiny.
  - Myös sää ruudukko on tehty containeriin.
- Siellä on leikitty tyyleillä, taustakuvilla, väreillä jne.
  - Napit esim. vaihtaa väriä 'hover' ominaisuudella.
  - Displayssä on käytetty ainakin flexiä ja blockia.

## Javascript

- Javascriptissä on käytetty alertti ikkunoita anakin Home välilehden, Time napin takana ja contact välilehdessä kun tulee onnistunut submittaus.
- Event listeners on kans käytetty näissä kuin myös weather napin kans.
- weather.js käytettyjä HTTP methodeja: GET and FETCH
- weather.js käytettyjä funktio kutsuja ja virheiden käsittelyä:
  - if, then, return, cosole.error ja timeria
- Jokaisella välilehdellä on näkyvissä weather nappi ja sen vieressä teksti kenttä johon syötetään kaupunki, josta sää tiedon haluaa.
  - Tässä on hyödynnetty timeria niin että sää on näkyvissä vain 1 minuutin ja katoaa sen jälkeen.
- AJAX:a on hyödynnetty niin että käyttäjä kirjoittaa haluamansa paikkakunnan, jolloin selain lähettää pyynnön netin välityksellä sään tarjoavalle palvelimelle, josta tulee kyseisen paikkakunnan sää tiedot takaisin ja viimein näkyville käyttäjälle.
  - Tähän tosiaan käytetään myös fetch toimintoa. Myös .catch error on käytössä tässä jolloin tulee consoliin tieto epäonnistuneesta säätiedon hausta. Error tulee myös consoliin, jos API key on jostakin syystä viallinen.
