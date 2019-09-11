# Primitive Datentypen

Bei den Datentypen unterscheidet man zwischen primitiven und komplexen Typen. Während die primitiven Typen in der Regel einen einzelnen Wert abbilden, sind komplexe Typen in der Regel eine Kombination aus mehreren primitiven Typen. Wir werden uns auf dieser Seite zunächst mit den primitiven Datentypen befassen.

## String oder Zeichenkette

Der erste Datentyp, den wir uns ansehen, kommt euch sicher bekannt vor! Es handelt sich um einen String oder zu deutsch eine Zeichenkette. 

"Hallo JavaScript" ist ein String. Anders als in der Sprache C, gibt es in JavaScript keinen eigenen Datentyp für ein einzelnes Zeichen, auch das ist ein String. Er kann entweder mit einfachen oder doppelten Anführungszeichen gebildet werden. Die folgenden beiden Zeilen sind also identisch.

```javascript
console.log('Hallo JavaScript');
console.log("Hallo JavaScript");
```

Wie auch schon beim Thema `;`, solltet ihr euch für eine Schreibweise entscheiden, und diese konsequent verwenden. Ich will euch an dieser Stelle keine Vorschrift machen, aber mein Eindruck ist, dass `"` in der JavaScript Welt häufiger eingesetzt wird als `'`. Ich persönlich komme aus der PHP Richtung, dort wird für normale Strings häufig `'` verwendet, da es einen minimalen Geschwindigkeitsvorteil bringen soll.

### Strings verbinden

Häufig kann es vorkommen, dass ihr zwei Strings miteinander verbinden/verketten müsst. Diese Aktion heißt auch Konkatenation. Um in JavaScript zwei Strings zu konkatenieren, verwendet ihr den `+` Operator. Das folgende Beispiel, ergibt die gleiche Ausgabe wie zuvor, verwendet aber Stringverkettung.

```javascript
console.log('Hallo' + ' ' + 'JavaScript');
```

Wenn ihr euch jetzt fragt, was das an dieser Stelle nützt, kann ich nur sagen, außer mehr Schreibarbeit nicht viel. Aber ich verspreche euch, wenn es in einem der nächsten Kapitel um Variablen geht, dann wird es klar. Auch ein drittes Zeichen, um einen String zu definieren, werde ich euch in Verbindung mit Variablen zeigen. Dieser macht die Konkatenation größtenteils überflüssig.

Bevor wir zum nächsten Datentyp kommen, möchte ich euch noch einen Operator zeigen, mit dem ihr den Typ überprüfen könnt. Schreibt in eure Datei die folgende Zeile, und schaut euch an, was in der Konsole ausgegeben wird.

```javascript
console.log(typeof 'Hallo JavaScript');
```

Die Ausgabe dieses Kommandos ist `string`. Beachtet, dass die Typen, die von `typeof` ausgegeben werden, immer klein geschrieben sind. 

## Zahlen

Der nächste Datentyp sind Zahlen. Anders als in anderen Sprachen, gibt es in JavaScript nur einen Typ für Zahlen, und das ist `number`. Dieser Typ kann sowohl Ganzzahlen als auch Dezimalzahlen abbilden.

```javascript
console.log(2019);
console.log(73.42);
```

In der ersten Zeile seht ihr eine Jahreszahl, welche als Ganzzahl geschrieben ist. Die zweite Zeile gibt eine Dezimalzahl mit zwei Nachkommastellen auf der Konsole aus. Beachtet, dass in der Programmierung als Dezimaltrennzeichen der `.` verwendet wird. Würdet ihr an dieser Stelle ein `,` verwenden, würden auf der Konsole die beiden Zahlen `73` und `42`, durch ein Leerzeichen getrennt, ausgegeben werden. Warum das so ist, werdet ihr im Kapitel über *Funktionen* lernen.

### Operatoren

Auf vielen Seiten, die euch Programmieren lernen wollen, wird Operatoren ein umfassendes, eigenes Kapitel gewidmet. Ich mache es an dieser Stelle bewusst als Unterpunkt des Zahlentyps, da es logisch einfach hier her passt.

Unter Operatoren versteht man einfach gesagt die Rechenoperationen, die ihr bereits aus der Schule kennt.

```javascript
console.log(1 + 1); // Addition
console.log(2 - 1); // Subtraktion
console.log(2 * 2); // Multiplikation
console.log(4 / 2); // Division
```

Einen Operator den ihr unter Umständen noch nicht gesehen habt, ist der Modulo Operator, der mit `%` geschrieben wird. Schaut euch am besten auf eurer Konsole mal das Ergebnis folgender Zeile an, und versucht herauszufinden, was der Operator macht, bevor ihr weiter lest.

```javascript
console.log(10 % 3); // 10 Modulo 3 => Ausgabe: 1
```

Und habt ihr es erraten? Der Modulo Operator gibt euch den Rest für eine ganzzahlige Division. Der Operator schaut also, wie oft `3` in `10` rein passt, und was dann noch übrig bleibt, ist das Ergebnis des Operators. Falls ihr euch fragt, wofür man diesen Operator verwenden kann, hier ein kleines Beispiel:

```javascript
if (5 % 2 === 1) {
    console.log('Das ist eine ungerade Zahl');
}
```

Ok, das Beispiel ist natürlich sehr konstruiert, aber wie ihr seht, könnt ihr z.B. prüfen, ob eine Zahl gerade oder ungerade ist. In diesem Beispiel wird auch eine Bedingung und ein Vergleichsoperator verwendet. Beide werden in spätere ausführlicher behandelt.

## Boolean oder Wahrheitswert

Der letzte primitive Typ, den wir uns anschauen wollen ist ein `boolean` oder auch Wahrheitswert. Dieser Typ kann nur zwei Zustände haben, wahr oder falsch. Hier entsprechend die Ausgabe auf der Konsole.

```javascript
console.log(true);
console.log(false);
```

Indirekt habt ihr einen Boolean bereits zuvor gesehen. Beim letzten Beispiel wird der Vergleichsoperator `===` verwendet. Das Ergebnis aller Vergleiche ist immer ein Wahrheitswert.

### Vergleichsoperatoren

Das nehme ich mal direkt als Anlass, euch die Operatoren für Vergleiche näher zu bringen. Vergleiche spielen eine sehr wichtige Rolle in der Programmierung und ihr werdet sie so ziemlich an jeder Ecke vorfinden. Hier anhand eines Beispiels die möglichen Vergleiche:

```javascript
console.log(2 == "2");  // true
console.log(2 === "2"); // false

console.log(2 >= 2); // true
console.log(2 > 2);  // false

console.log(4 <= 4); // true
console.log(4 < 4);  // false
```

Die ersten beiden Operatoren `==` und `===` prüfen, ob Werte gleich bzw. identisch sind. Wo ist der Unterschied denkt ihr jetzt vielleicht. Während `==` prüft, ob die beiden zu vergleichenden Werte gleich sind, prüft `===` auch, ob die verglichenen Typen übereinstimmen. Dieser Unterschied ist sehr oft entscheidend, wenn die Rückgabewerte von Funktionsaufrufen geprüft werden müssen. Mehr dazu in späteren Kapiteln.

Als nächstes haben wir `>=` und `>`. Ersterer prüft, ob der erste Wert größer oder gleich dem zweiten Wert ist. Der Zweite prüft, ob der erste Wert größer ist als der zweite.

Entsprechend gilt für `<` bzw. `<=` natürlich ob der erste Werte kleiner bzw. kleiner oder gleich dem zweiten Wert ist.

Wie gesagt, werden Vergleiche eine wichtige Rolle in der Programmierung mit JavaScript spielen, und auch in den nächsten Kapiteln, werdet ihr sie immer wieder sehen.