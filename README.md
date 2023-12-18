# esercizio di oggi: **calcolo del prezzo del biglietto del treno**

cartella/repo `js-biglietto-treno`

1. Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

1. Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio secondo queste regole:

    - il prezzo del biglietto è definito in base ai km (0.21 € al km).
    - va applicato uno sconto del 20% per i minorenni.
    - va applicato uno sconto del 40% per gli over 65.

1. L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

---

## Scomposizione problema

1. Chiediamo all'utente il numero di km che deve percorrere.
1. Chiediamo all'utente l'età del passeggero.
1. Calcoliamo il prezzo del biglietto moltiplicandolo per la tariffa base.
    - se il passeggero ha <= 18 anni si applica il 20% di sconto.
    - se il passeggero ha >= 65 anni si applica il 40% di sconto.
1. Infine mostriamo il totale del prezzo per il biglietto in un messaggio in pagina.
