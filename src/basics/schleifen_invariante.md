# Schleifeninvariante

Die Schleifeninvariante muss an folgenden Stellen gelten:
 - Direkt nach Initialisierung der Laufvariable
 - Vor bzw. nach der Überprüfung, ob die Schleife ausgeführt werden soll
 - Nach Ausführung des Schleifenrumpfes (dieser beinhaltet auch das Inkrementieren der Laufvariable)
 - Nach Ende der Schleife, die Laufvariable darf hierbei noch als existent angesehen werden

## Beispiele

```pseudocode
Function power(a : ℝ; n_0 : ℕ) : ℝ
    assert n_0 >= 0 and ¬(a = 0 und n_0 = 0) // Vorbedingung
    p = a : ℝ
    r = 1 : ℝ
    n = n_0 : ℕ // p^n * r = a^(n_0) hier 2^5 * 1 = 2^5

    while n > 0 do
        invariant p^n * r = a^(n_0) und n >= 0 // Schleifeninvariante
        if n is odd then
            n--
            r := r * p
        else
            (n, p) := (n/2, p * p)

    assert r = a^(n_0) // Nachbedingung
    return r
```

Falls n gerade: Invariante gilt wegen \\((p * p)^{\frac{n}{2}} = p^n \\), wobei \\(p * p \\) = neues p und \\(n/2\\) = neues p.