# Marvel Marathon

Persoonlijke kijkgids voor het Marvel Cinematic Universe: kies een route (releasevolgorde, chronologisch, essentials, of álles inclusief series en shorts), bekijk per titel info en de trailer, zie waar hij nu streamt, en vink af wat je gezien hebt. Voortgang wordt lokaal bewaard.

Eén bestand, geen build: open `index.html` of serveer de map met een statische webserver:

```bash
python3 -m http.server 3210
```

## Live streamingdata (optioneel)

Voor actuele "nu te zien op"-informatie heb je een gratis [TMDB API-key](https://www.themoviedb.org/settings/api) nodig. Open de app eenmalig met:

```
http://localhost:3210/?tmdbkey=JOUW_KEY
```

De key wordt in localStorage van je browser bewaard (bewust niet in de code). Zonder key toont de app de vaste platform-indicatie.

## Credits

Filmposters, artwork en streamingdata via [TMDB](https://www.themoviedb.org) (JustWatch-data). Deze app gebruikt de TMDB API maar is niet gemaakt of onderschreven door TMDB.
