# JS Pokédex - Case Study

## Obiettivo

Realizzare un Pokedex con infinite scrolling.

## Contenuto della repository

All'interno della repository sono presenti quattro versioni dello stesso progetto.

### Versione uno

Le Promise delle request vengono gestite singolarmente. Le promise vengono risolte in tempi differenti, quindi l'ordine di stampa delle card non rispetta l'ordine numerico dei Pokémon all'interno del Pokédex;

### Versione due - async/await

Le request vengono gestite attraverso async/await. L'obiettivo è quello di ottenere tutte le card in ordine, rispettando l'ordine dei Pokémon all'interno del Pokédex;

### Versione tre - Promise.all( ).

Alla primo load dell'applicativo viene eseguito un ciclo for con cui viene riempito un array di url; ogni url ha un indice che rappresenta un Pokémon nel Pokedéx (es. https://url/1 --> Bulbasaur).

Vengono realizzate tre variabili globali: start, limit e crosser.
Start e limit vengono icrementate di un valore crosser ogni volta che si vogliono richiedere al server nuovi pokemon da index start a index limit.

Gli url vengono presi attraverso uno slice(start, limit) dall'array degli url riempito in precedenza.

### Versione four - utilizzo di Promise.all( )

[Pokédex]("https://codesandbox.io/s/js-pokemon-infinity-scrolling-promise-all-zuq4uw")

Vengono realizzate tre variabili globali start, limit e crosser.
Al primo download, attraverso un ciclo for, viene riempito un array di Pokémon che va da start a limit.

Start e limit vengono icrementate di un valore crosser ogni volta che si vogliono richiedere al server nuovi pokemon da index start a index limit.

Gli url vengono presi attraverso uno ciclo for dall'array degli url riempito a ogni giro.
