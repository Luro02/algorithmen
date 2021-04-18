# Rekursive Multiplikation

```pseudocode
Function recMult(a, b : Array[0..n-1] of Digit)                 // T(n) Ops
    assert a und b haben n Ziffern, sei k = [n/2]
    if n = 1 then
        return a * b                                            // 1 Op

    Schreibe a als a_1 * B^k + a_0                              // 0 Ops
    Schreibe b als b_1 * B^k + b_0                              // 0 Ops

    return recMult(a_1, b_1) * B^(2k)                           // T(n/2) + 2n Ops
            + (recMult(a_0, b_1) + recMult(a_1, b_0)) • B^k     // 2T(n/2) + 2n Ops
            + recMult(a_0, b_0)                                 // T(n/2) + 2n Ops
```

Laufzeit: \\( T(n) \leq 4T (n/2) + 6n \\)