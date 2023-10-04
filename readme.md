# Consegna

Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.

L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
Questo richiederà un minimo di ricerca.
Formule:
- prezzo base = numero km * prezzo per ogni km
- sconto = prezzo base * entità sconto / 100
- prezzo scontato = prezzo base - sconto

## Pseudocode

### Get user trip length in km
- Prompt user to input trip length
- Store in variable 'tripLength'

### Get user age
- Prompt user to input age
- Store in variable 'userAge'

### Calculate base price
- Calculate price 'tripBasePrice' = 'trip-length' * 0.21 

### Calculate final price
- IF user is a minor apply 20% discount with tripBasePrice * 0.8
- ELSE IF user is a senior apply 40% discount with tripBasePrice * 0.6
- ELSE no discount