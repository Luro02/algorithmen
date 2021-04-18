# Pseudo Code

# Syntax

| Symbol    | Bedeutung                        | Beispiele      |
| --------- | -------------------------------- | -------------- |
| `{ident}` | Ein Bezeichner für eine Variable |                |
| `{value}` | Ein Wert                         | `"hallo"`, `2` |
| `{type}`  | Datentyp der Variable            | `Digit`, `ℕ`   |

---


| Symbol                       | Name                             | Beispiel                               |
| ---------------------------- | -------------------------------- | -------------------------------------- |
| `{ident} := {value}`         | Zuweisung                        | `c := 0`                               |
| `{ident} = {value} : {type}` | Variablendeklaration             | `d = 1 : Digit` oder `answer = 42 : ℕ` |
| `//`                         | Kommentar                        | `// dies ist ein Kommentar`            |
| `({ident}, {ident})`         | Tupel                            | `(a, b)`, (1, 2, 3)                    |
| `{statement} ; {statement}`  | Mehrere Ausdrücke in einer Zeile | `c = 0 ; d = 1`                        |

## Elementare Datentypen

| Datentyp  | Bedeutung                        | Wertebereich    |
| --------- | -------------------------------- | --------------- |
| `integer` | ganze Zahlen                     |                 |
| `Boolean` | Boolsche Werte                   | `true`, `false` |
| `Element` | Wenn der Datentyp irrelevant ist |                 |

Die numerischen Typen werden manchmal um die Werte \\( - \infty \\) und \\( \infty \\) erweitert.

## Schleifen

| Abkürzungen                    | Volle Formulierung                    |
| ------------------------------ | ------------------------------------- |
| `while C do I`                 | `if C then repeat I until ¬C`         |
| `for i := a to b do I`         | `i := a; while i <= b do I; i++`      |
| `for i := a to ∞ while C do I` | `i := a; while C do I; i++`           |
| `foreach e ∈ s do I`           | `for i := 1 to \|s\| do e := s[i]; I` |

## Besondere Werte

### Undefinierter Wert (`⊥`)

Manchmal werden Typen um einen undefinierten Wert (bezeichnet mit dem Symbol ⊥) erweitert,
der von den „eigentlichen“ Objekten vom Typ T unterscheidbar sein soll.

#### Beispiele

```pseudocode
p = ⊥ : Digit
```

### Zeigertypen (`Pointer to T`)

Besonders bei Zeigertypen ist ein undefinierter Wert hilfreich.

Werte des Zeigertyps (`Pointer to T`) sind "Griffe" (engl.: *handle*) für Objekte vom Typ T.

Im RAM-Modell ist ein solcher Griff einfach der Index (die "Adresse") der ersten Zelle eines Speichersegments, in dem Objekt vom Typ T gespeichert ist.

#### Beispiele

```pseudocode
p = ⊥ : Pointer to T
```

### Arrays

Deklaration `a : Array [i..j] of T` stellt einen Array `a` bereit, der aus `j - i + 1` Einträgen vom Typ T besteht,
die in `a[i]`, `a[i+1]`, ..., `a[j]` gespeichert sind.


Arrays werden als zusammenhängende Speichersegmente realisiert. (= Es gibt keine Lücken im Array)

Um den in `a[k]` abgelegten Eintrag zu finden, genügt es,
die Startadresse von `a` und die Größe eines Objektes vom Typ `T` zu kennen.

Wenn beispielsweise Register `R_a` die Startadresse des Arrays `a[0..k]` enthält und `R_i` den Index `42`,
und wenn jeder Eintrag ein Speicherwort ist,
dann lädt die Befehlsfolge `R_1 :=R_a + R_i; R_2 := S[R_1]` den Inhalt von `a[42]` in Register
`R_2`.


```pseudocode
R_a = /* enthält die Startadresse von a[0..k] */
R_i = 42 : Index

R_i := R_a + R_i
R_2 := S[R_1]
```

Die Größe eines Arrays wird festgelegt, wenn die Deklaration ausgeführt wird; solche Arrays heißen statisch.

### Klassen

Eine Deklaration `c : Class age : N, income : N end` stellt eine Variable `c` bereit, deren Werte Paare von ganzen Zahlen sind.

#### Zugriff auf die Felder einer Klasse

Die Komponenten von c werden mit `c.age` und `c.income` angesprochen.
Für eine Variable `c`liefert `addressof c` einen Griff für `c` (d. h. die Adresse von `c`).
Wenn `p` eine Variable vom passenden Zeigertyp ist, dann können wir mit `p := addressof c` diesen Griff in `p` speichern;
mit `∗p` erhalten wir das Objekt `c` zurück.

Die beiden "Felder" von `c` können dann auch durch `p→age` und `p→income` angesprochen werden.
Die alternative Schreibweise `(∗p).age` und `(∗p).income` ist möglich, aber ungebräuchlich.

### `allocate`, `dispose`

Arrays und Objekte, auf die mit Zeigern verwiesen wird, können mit den Anweisungen
`allocate` und `dispose` bereitgestellt und mit einem Namen versehen
bzw. wieder freigegeben werden. Beispielsweise stellt die Anweisung
`p := allocate Array [1..n] of T` ein Array von `n` Objekten vom Typ `T` bereit, d. h., es wird ein zusammenhängendes
Speichersegment reserviert, dessen Länge für genau `n` Objekte
vom Typ `T` ausreicht, und die Variable `p` erhält als Wert den Griff für das Array (die
Startadresse dieses Speichersegments). Die Anweisung `dispose p` gibt den Speicherbereich
frei und macht ihn damit für anderweitige Benutzung verfügbar.

Mit den Operationen `allocate` und `dispose` können wir das Array `S` der RAM-Speicherzellen
in disjunkte Stücke zerlegen, auf die man individuell zugreifen kann.

### Übernommene Datentypen aus der Mathematik

#### Tupel (`(1, 2, 3)`)

Einige zusammengesetzte Datentypen werden wir aus der Mathematik übernehmen.
Insbesondere verwenden wir Tupel, (endliche) Folgen und Mengen. (Geordnete)
Paare, Tripel und andere Tupel werden in Klammern geschrieben, wie in `(3,1)`, `(3,1,4)` und `(3,1,4,1,5)`.
Weil sie nur eine im Typ festgelegte Anzahl von Komponenten
enthalten, können Operationen auf Tupeln auf offensichtliche Weise in
Operationen auf diesen Komponenten zerlegt werden. Eine Folge, geschrieben mit
spitzen Klammern, speichert Objekte eines Typs in einer spezifizierten Reihenfolge;
dabei legt der Typ die Anzahl der Einträge nicht fest.

#### Folgen (\\(\left \langle 3, 1, 4, 1 \right \rangle\\))

Beispielsweise deklariert die Anweisung „\\(s = \left \langle 3, 1, 4, 1 \right \rangle\\) : Sequence of \\(\mathbb{Z}\\)“
eine Folge `s` von ganzen Zahlen und initialisiert sie mit der Folge
\\(\left \langle 3, 1, 4, 1 \right \rangle\\) der Zahlen 3, 1, 4 und 1, in dieser Reihenfolge.

Die leere Folge wird als \\(\left \langle \right \rangle\\) geschrieben. Folgen sind eine natürliche Abstraktion
vieler Datenstrukturen wie `Dateien` (Files), `Strings` (Zeichenreihen), `Listen`, `Stapel`
(`Stacks`) und `Warteschlangen` (`Queues`).

#### Mengen

Mengen spielen eine wichtige Rolle in mathematischen Überlegungen; wir werden
sie auch in unserem Pseudocode benutzen. Es werden also Deklarationen wie
„M = {3,1,4} : Set of ℕ“ vorkommen, die analog zu Deklarationen von Arrays oder
Folgen zu verstehen sind. Die Implementierung des Datentyps „Menge“ erfolgt meist
über Folgen.


## Anweisungen

TODO: Im Buch 2.3.2 Anweisungen