# websovellus

Basic HTML structure on käytetty kaikilla välilehdillä samoin kuin listoja otsikoita etc.
HTML formia käytin contact välilehdessä. Mediaa ja linkkejä löytyy portfolio,galleria ja contacts välilehdistä. Tables löytyy hobbies välilehdeltä jossa harrastukset on laitettu taulukkoon.

CSS tyylejä löytyy style.css filusta jossa on muokattu CSS-valitsimia,taustoja, fontteja, mediaa etc. Responsiivistä suunnittelua on jonkin verran esim kännykälle skaalaus on välilehdissä olemassa ja hobbies välilehdessä on taulukon skaalaus laitettu. Galleryssä on kuvat laitettu Grid-containeriin ku en muutakaan keksiny. Siellä on leikitty tyyleillä taustakuvilla väreillä etc. Napit esim. vaihtaa väriä hover ominaisuudella. Displayssä on käytetty ainakin flexiä ja blockia. Myös sää ruudukko on tehty containeriin.

Javascriptissä on käytetty alertti ikkunoita anakin Home välilehden Time napin takana ja contact välilehdessä kun tulee onnistunut submittaus. event listeners on kans käytetty näissä kuin myös weather napin kans. weather.js on käytetty if, fetch, .then, get, return, console.error ja timeria ainakin. Jokaisella välilehdellä on näkyvissä weather nappi ja sen vieressä teksti kenttä johon syötetään kaupunki josta sää tiedon haluaa. Tässä on hyödynnetty timeria niin että sää on näkyvissä vain 1 minuutin ja katoaa sen jälkeen. AJAX:a on hyödynnetty niin että käyttäjä kirjoittaa haluamansa paikkakunnan jolloin selain lähettää pyynnön netin välityksellä sään tarjoavalle palvelimelle josta tulee kyseisen paikkakunnan sää tiedot takaisin ja viimein näkyville käyttäjälle. Tähän tosiaan käytetään myös fetch toimintoa. Myös .catch error on käytössä tässä jolloin tulee consoliin tieto epäonnistuneesta säätiedon hausta. Error tulee myös consoliin jos API key on jostakin syystä viallinen.
