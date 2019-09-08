# Kommentare

Bevor wir mit dem nächsten wichtigen Thema weiter machen, möchte ich euch kurz die Möglichkeiten der Kommentare zeigen. In der Regel solltet ihr euren Code so schreiben, dass so wenig wie nötig kommentiert werden muss. Oft sind eure Anweisungen aber komplexer und es kann nicht schaden, an entscheidenden Stellen Kommentare zu hinterlassen. Andere Entwickler, die euren Code anschauen, werden es euch danken. Aber glaubt mir, dass ihr auch selbst manchmal froh darüber sein werdet, wenn ihr aufwändigere Logik über Kommentare näher beschreibt.

## Einzeilige Kommentare

Einzeilige Kommentare werden mit `//` eingeleitet. Alles was in der Zeile danach kommt, wird von JavaScript nicht mehr interpretiert.

```javascript
// gibt die Zeichenkette "Hallo JavaScript" auf der Konsole aus
console.log('Hallo JavaScript');
```

Ihr könnt einzeilige Kommentare auch am Ende der Zeile anhängen.

```javascript
console.log('Hallo JavaScript'); // Konsolenausgabe
```

## Mehrzeilige Kommentare

Mehrzeilige Kommentare werden in der Regel dafür verwendet, Lizenztexte am Anfang von JavaScript Dateien zu hinterlegen. Auch wenn ein Kommentar für eine Zeile zu lang wird, bietet es sich an, ihn auf mehrere Zeilen zu verteilen.

```javascript
/* Das ist ein merzeiliger
Kommentar, der sonst nur
schwer in eine Zeile
gepasst hätte! */
```

Mehrzeilige Kommentare werden mit `/*` eingeleitet und mit `*/` beendet. Für eine bessere Übersicht, werden mehrzeilige Kommentare oft wie folgt formatiert, und in jeder Zeile des Kommentars zu Beginn nochmal ein `*` geschrieben.

```javascript
/*
 * Das ist ein merzeiliger
 * Kommentar, der sonst nur
 * schwer in eine Zeile
 * gepasst hätte!
 */
```

Für JavaScript haben die zusätzlichen `*` keine Bedeutung. Der Entwickler, der den Kommentar liest, findet sich aber sehr schneller zurecht.

Wenn wir uns in einem späteren Kapitel dann Funktionen anschauen, werde ich euch noch eine dritte Möglichkeit für Kommentare zeigen. Sie ist ähnlich zu den mehrzeiligen Kommentaren und wird dazu dienen, Funktionen für integrierte Entwicklungsumgebungen, kurz IDEs, näher beschreiben zu können.