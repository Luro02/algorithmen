# Chapter 1


## Definition von Algorithmus

Rechenvorschrift zur Lösung eines Problems, bestehend aus endlich vielen, wohldefinierten Einzelschritten

## Eigenschaften eines Algorithmus

- ein Algorithmus besitzt eine Eingabe und eine Ausgabe
- das Verfahren muss eindeutig und endlich beschreibbar sein (Finitheit)
- jeder Schritt des Verfahrens muss tatsächlich ausführbar sein (Ausführbarkeit)
- das Verfahren darf zu jedem Zeitpunkt nur endlich viel Speicherplatz
benötigen (dynamische Finitheit, Platzkomplexität)
- das Verfahren darf nur endlich viele Schritte benötigen
(Terminierung, Zeitkomplexität)


## Erster Algorithmus: Langzahl-Multiplikation

### Gegeben:
- Zahlen als Ziffernfolgen ("digits") zur Basis B
- \\( \vec{a} = (a_{n-1}, ... , a_{0}) \\) mit Ziffern \\( a_i = \\{ 0, ..., B - 1 \\} \\)
- beschreibt die Zahl \\( a_{0} * B^{0} + a_{1} * B^{1} + a_{2} * B^{2} + ... + a_{n-1} * B^{n-1} \\)

### Aufgabe:
Berechne das Produkt zweier Langzahlen \\( \vec{a} \\) und \\( \vec{b} \\).

#### Algorithmus zur Addition zweier Langzahlen

Eingabe: zwei Langzahlen \\( \vec{a} = (a_{n-1}, ... , a_{0}) \\) und \\( \vec{b} = (b_{n-1}, ... , b_{0}) \\)

Verfahren:

```pseudocode
c = 0 : Digit // carry, Überlauf

for i := 0 to n - 1 do
    (c, s_i) := a_i + b_i + c

s_n := c
```

Ausgabe: Summe \\( \vec{s} = (s_{n}, ... , s_{0}) \\)

Satz: Addition von zwei \\(n\\)-Ziffern-Zahlen benötigt \\(n\\) (Ziffern-)Additionen

#### Algorithmus zur Multiplikation mit einer Ziffer

```pseudocode
Function numberTimesDigit(a: Array[0..n-1] of Digit, b: Digit)

r: Array[0..n] of Digit
    c = 0 : Digit
    (hi', lo) := a[0] * b // Ziffernmultiplikation
    r[0] := lo

    for i := 1 to n - 1 do
        (hi, lo) := a[i] * b // Ziffernmultiplikation
        (c, r[i]) := c + hi' + lo // Ziffernaddition
        hi' := hi
    r[n] := c + hi'
    return r
```

Anzahl an Multiplikationen: \\( (n - 1) + 1 = n \\)

Anzahl an Additionen: \\( (n - 1) + 1 = n \\)
