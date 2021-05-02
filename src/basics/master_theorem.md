# Master Theorem

Das Mastertheorem ist ein Werkzeug zur Abschätzung der Laufzeit von rekursiven Algorithmen.

## Definition

Für positive Konstanten \\(\color{green} a\\), \\(\color{orange} b\\) und \\(\color{red} c\\)
sei \\(n = {\color{orange} b}^k\\) für ein \\(k \in \mathbb{N}\\)

\\[
\begin{align*}
T(n) = \begin{cases}
{\color{green} a }             & \text{falls } n = 1 \text{ (Basisfall) } \\\\
{\color{red} c } \ T\left(\frac{n}{{\color{orange} b }}\right) + f(n) & \text{falls } n > 1 \text{ (teile und herrsche) }
\end{cases}
\end{align*}
\\]

#### Legende

- \\(\color{green} a\\) : Anzahl an Anweisungen, wenn \\(n = 1\\) (meistens \\(1\\))
- \\(\color{orange} b\\) : Anzahl an Teilprobleme, gelöst durch ein Unterproblem
- \\(\color{red} c\\) : Anzahl an Unterprobleme in der Rekursion
- \\(f(n)\\) : Kosten (Aufwand, Nebenkosten) die durch die Division des Problems und die Kombination der Teillösungen entstehen

### Fälle

Das Master-Theorem unterscheidet drei Fälle, wobei sich höchstens ein Fall auf die gegebene Rekursion anwenden lässt.
Passt keiner der Fälle, so lässt sich das Master-Theorem nicht anwenden und man muss sich anderer Methoden bedienen.

Sei \\(\color{LimeGreen}{z} = \log_{\color{orange} b}{\color{red} c}\\)

#### 1. Fall

Falls für ein \\( \epsilon > 0 \\) gilt \\(\color{Goldenrod}{f(n)} \in \mathcal{O}\left( n^{\color{LimeGreen}{z} - \epsilon} \right)\\), dann ist \\( T(n) \in \mathcal{O}\left( n^{\color{LimeGreen}{z}} \right) \\)

#### 2. Fall

Falls es ein \\( k \geq 0\\) gibt für das gilt \\(\color{Goldenrod}{f(n)} \in \Theta \left( n^{\color{LimeGreen}{z}} * \log^k{n} \right)\\), dann ist \\( T(n) \in \Theta \left( n^{\color{LimeGreen}{z}} * \log^{k+1}{n} \right) \\)

#### 3. Fall

Falls für ein \\( \epsilon > 0 \\) gilt \\( \color{Goldenrod}{f(n)} \in \Omega \left( n^{\color{LimeGreen}{z} + \epsilon} \right) \\)
und es ein \\(k < 1\\) und ein \\(n_0 \in \mathbb{N}_{0}\\) gibt für die gilt 
\\(\forall n > n_0 : a * f \left( \frac{n}{b} \right) \leq k * \color{Goldenrod}{f(n)}\\),
dann ist \\(T(n) \in \Theta \left( \color{Goldenrod}{f(n)} \right)\\)

### Einfache Form

Vereinfacht gilt

\\[
\begin{align*}
T(n) \in \begin{cases}
\Theta(n)                                                           & \text{falls } {\color{red} c } < {\color{orange} b } \\\\
\Theta(n * \log{n})                                                 & \text{falls } {\color{red} c } = {\color{orange} b } \\\\
\Theta(n^{\log_{\color{orange} b }{\color{red} c }})                & \text{falls } {\color{red} c } > {\color{orange} b }
\end{cases}
\end{align*}
\\]

## Beispiele

- \\( d < b \\) : Median bestimmen
- \\( d = b \\) : Sortieralgorithmen wie mergesort, quicksort
- \\( d > b \\) : rekursive Multiplikation, Karatsuba-Ofman-Multiplikation
