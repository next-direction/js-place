# Einführung

Mit der folgenden Einführung will ich euch zunächst zeigen, wie ihr mit der Entwicklung starten könnt. Wir werden uns in den ersten Abschnitten mit der Entwicklung im Browser beschäftigen. In späteren Kapiteln werde ich euch dann zeigen, wie ihr euren Code auf der Kommandozeile bzw. auf dem Server ausführen könnt.

## Überblick

Was werdet ihr lernen? Beginnen werden wir mit den allgemeinen Grundlagen jeder Programmiersprache. Dazu zählen Variablen, einfache und komplexe Datentypen, Operatoren, Schleifen und Kontrollstrukturen. Im Anschluss werden wir uns mit Funktionen beschäftigen. Zum einen welche Standardfunktionen JavaScript selbst mitbringt, aber auch, wie ihr eure eigenen Funktionen schreiben, und somit den Umfang der Sprache mit wiederverwendbaren Bestandteilen erweitern könnt.

Nach den Grundlagen folgen dann weiterführende Themen, wie Objektorientierung in JavaScript, DOM Manipulationen, oder der Kontext der Ausführung eures Codes. Wenn euch diese Begriffe noch nichts sagen, dann fürchtet euch nicht. Wir werden all das und noch viel mehr sehr ausführlich in den folgenden Kapiteln behandeln.

## Einstieg

Nun aber genug der allgemeinen Worte. Starten wir mit der Entwicklung. Wie gesagt, werden wir uns zunächst auf die Ausführung im Browser beschränken. Aus dem einfachen Grund, dass der Start damit wesentlich schneller geht. Es gibt verschiedene Möglichkeiten, wie ihr mit der Programmierung eures Codes beginnen könnt. Ich werde euch zwei davon vorstellen und ihr könnt euch für die entscheiden, die euch besser gefällt.

### Online

Wenn ihr die ersten Versuche nicht gleich auf eurem PC machen, sondern erstmal testen wollt, wie es euch ergeht, dann empfehle ich euch Webseiten wie [Codepen](https://codepen.io/pen). Die erlauben das Schreiben und Ausführen von HTML, CSS und JavaScript direkt in der Oberfläche. Nach dem Öffnen von Codepen, könnt ihr zunächst die unnötigen Editoren für HTML und CSS minimieren. So habt ihr die komplette Fensterbreite für den JavaScript Editor, mit dem wir für die Grundlagen ausreichend versorgt sind. 

![Disable CodePen Tab](../_media/basics/disableCodepenTab.png ':size=200')

Links unten auf der Seite, könnt ihr noch die integrierte Konsole öffnen.

![Open CodePen Console](../_media/basics/openCodepenConsole.png ':size=200')

Jedes mal wenn ihr für kurze Zeit nichts mehr im JavaScript Editor eingebt, wird der bisher geschriebene Code ausgeführt. Für den Anfang werden wir an dieser Stelle viel auf der Konsole ausgeben.

Nun seid ihr einsatzbereit und könnt den nächsten Abschnitt überspringen und direkt zum ["Hallo JavaScript"](#hallo-javascript) Absatz springen.

### Lokal mit Editor

Wenn ihr direkt mit der lokalen Entwicklung starten möchtet, dann benötigt ihr zunächst einen Editor. Es gibt eine ganze Reihe an Editoren, die ihr kostenlos einsetzen könnt. Einige die ich euch nennen möchte sind [Sublime](https://www.sublimetext.com/), [Atom](https://atom.io/) und [Visual Studio Code](https://code.visualstudio.com/). Zur Erstellung dieser Seite verwende ich z.B. auch Visual Studio Code. Allen Editoren gemein ist die Tatsache, dass ihr sie mit unzähligen Erweiterungen aus der Community ausstatten könnt. Für diese Seite verwende ich z.B. eine Erweiterung die für [Markdown](https://de.wikipedia.org/wiki/Markdown) Dateien eine Vorschau anzeigen kann.

Wer nach bezahlten Editoren sucht bzw. direkt auf eine integrierte Entwicklungsumgebung (IDE) setzen möchte, der kann sich WebStorm von JetBrains anschauen. Denn je mehr man in die Entwicklung einsteigt, desto mehr Funktionen wird man davon später Nutzen.

Wenn ihr euch entschieden habt, dann erstellt auf eurer Festplatte an gewünschter Stelle einen leeren Ordner, und öffnet diesen mit dem Editor eurer Wahl. Erstellt dann eine HTML-Datei mit folgendem Inhalt:

```html
<!DOCTYPE html>
<html lang="de">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="x-ua-compatible" content="ie=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <title></title>
  </head>

  <body>
    <script src="script.js"></script>
  </body>
</html>
```

Wenn ihr HTML bereits kennt, dann wird euch der nächste Schritt nicht überraschen. Wir erstellen jetzt die im HTML Dokument verknüpfte Skript Datei, die sich im gleichen Ordner wie die HTML Datei befinden muss. Als Namen könnt ihr `script.js` wählen, damit müsst ihr am HTML Code nichts anpassen. Natürlich könnt ihr auch einen eigenen Namen verwenden, dann müsst ihr das `<script>` Tag entsprechend anpassen.

Als nächstes öffnet ihr die HTML Datei per Doppelklick in eurem Standardbrowser. Da die HTML Datei außer dem Einbinden der JavaScript Datei nichts macht, erscheint eine komplett weiße Seite in eurem Browser.

Abschließend müsst ihr im Browser noch die Entwicklerwerkzeuge öffnen und den Konsolen Tab anklicken.

In **Google Chrome** findet ihr die unter dem **Menü mit den drei Punkten > weitere Tools > Entwicklertools**.<br>
Bei **Mozilla Firefox** gibt es einen ähnlichen **Punkt im Hamburgermenü > Web-Entwickler > Werkzeuge ein-/ausblenden**.

In beiden Fällen gibt es jeweils einen Tab namens **Konsole**. Wenn der geöffnet ist, dann seid ihr auch in der lokalen Umgebung nun bereit für die ersten Zeilen JavaScript.

## Hallo JavaScript

In so gut wie jedem Tutorial und jedem Programmierkurs, wird mit dem klassischen "Hallo Welt" Programm begonnen. Um euch nicht gleich zu Beginn zu langweilen, habe ich das ein bisschen abgewandelt, und wir werden stattdessen "Hallo JavaScript" auf der Konsole ausgeben!

Mach euch also bereit für die extrem komplexe, erste Zeile JavaScript Code, die wir schreiben:

```javascript
console.log('Hallo JavaScript');
```

Wie beschrieben, sollte Codepen euren Code sofort ausführen, und ihr müsstet in der Konsole den Text "Hallo JavaScript" sehen. Solltet ihr stattdessen lokal in einem Editor programmieren, dann müsst ihr die JavaScript Datei speichern, und im Browser die Seite aktualisieren. Im Anschluss solltet ihr auch hier die Ausgabe in der Konsole der Entwicklerwerkzeuge sehen.

Obwohl JavaScript den Abschluss einer Zeile mit `;` nicht zwingend erfordert, komme ich doch aus Sprachen, die zwingend den Abschluss darüber vorsehen. Daher werde ich auch in meinen Beispielen immer einen Strichpunkt am Ende der Zeilen schreiben. Auch wenn ihr mehrere Anweisungen in eine Zeile schreiben wollt, müsst ihr dazwischen ein `;` setzen. Normalerweise sollte aber pro Zeile sowieso nur eine Anweisung stehen, alles andere sorgt nur für schlecht lesbaren Code! Bei Editoren wie Visual Studio Code, könnt ihr einstellen, ob am Ende der Zeile ein Strichpunkt stehen soll oder nicht. Bei jedem Speichern wird euer Code dann entsprechend angepasst. Wichtig ist einfach, dass ihr euch für eine Variante entscheidet, und dabei bleibt.

Ich möchte an dieser Stelle gar nicht so sehr auf die restlichen Bestandteile dieser ersten Zeile eingehen, da für jeden Teil ein eigener Abschnitt folgen wird.