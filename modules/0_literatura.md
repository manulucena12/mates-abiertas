# Módulo 0: Literatura matemática

## Introducción

Este módulo sirve como introducción al curso. Antes de adentrarnos en el contenido, necesitamos entender cómo se escriben las matemáticas, principalmente por dos razones:

1. **No entiende de idiomas**: cualquier persona de cualquier parte del mundo puede entender la notación matemática.
2. **Nos ayuda a generalizar**: veremos tanto letras como símbolos que van a representar casos generales.

---

## Constantes y variables

René Descartes, en su obra *“La Geometría (1637)”*, usó las primeras letras del alfabeto ($a, b, c, \dots$) para representar valores que no cambiaban en ningún momento; a estas las llamaremos **constantes**. Para aquellas que tomaban un valor no determinístico, usó las últimas letras ($x, y, z$), a las que llamaremos **variables**.

Con estos dos conceptos podemos ya entender muchas expresiones, por ejemplo las funciones exponenciales, que son representadas de la siguiente forma:

$$
f(x) = a^x
$$

$f(x)$ son los valores que toma una variable (llamémosla $y$) respecto a los valores que toma la expresión de un valor constante $a$ elevado a un valor variable $x$. Para ejemplificar un caso específico podemos definir $a$ con un cierto valor concreto, sea $a = 2$:

$$
f(x) = 2^x
$$

Como podrás observar, el simple hecho de usar letras hace que la primera expresión pueda representar a todos los casos.

Otros ejemplos pueden ser:

- **Representación de polinomios:** $P(x) = ax^2 + bx + c$
- **Representación de logaritmos:** $L(x) = \log_a(x)$

---

## Operaciones

Hasta ahora hemos visto que las letras nos permiten representar valores de forma general. Ahora queremos aprender a operar con ellos.

Probablemente todos sabemos sumar. Definamos la operación suma:

$$
f(x, y) = x + y
$$

En este caso un valor cualquiera $x$ sumado a otro valor cualquiera $y$ nos dará un tercer valor $z$ que hemos expresado como $f(x, y)$, es decir, una operación que depende de dos valores.

Todos sabemos realizar estas operaciones. Vamos a ir un paso más allá: imagina que $z$ es simplemente una recta que representa un conjunto de números (por ejemplo, los naturales).

$$
\xleftrightarrow{\quad -3 \qquad -2 \qquad -1 \qquad 0 \qquad 1 \qquad 2 \qquad 3 \quad}
$$

En la operación suma tenemos dos valores concretos, cada uno tiene un rol: $x$ será el valor inicial de la recta en un momento concreto (debido a que es variable) e $y$ será el número de posiciones que se avance desde $x$. Por ejemplo, si $x = 0$ e $y = 2$, empezamos en dicha recta desde el $0$ y avanzaremos hasta la posición $2$; eso es básicamente una suma.

Es importante que te quedes con este concepto porque a partir de la suma vamos a obtener el resto de operaciones. Vamos con la resta:

Partimos desde el mismo razonamiento: $x$ es el punto de partida (por ejemplo $2$), y en este caso $y$ será el número de posiciones que vamos a retroceder en la recta. Si $y = 1$, $z$ será igual a $1$. Por tanto, la resta en sí es una suma pero en sentido opuesto. Llamamos a este sentido opuesto como **negativo** y podemos expresar esta nueva operación como:

$$
f(x, y) = x + (-y)
$$

Como ya estarás imaginando, la multiplicación también es una suma: $x \cdot y$ es básicamente sumar el número $x$ un número de $y$ veces; es una forma abreviada de realizar muchas sumas. Para ir un poco más lejos, vamos a expresar la multiplicación de una forma distinta:

$$
f(x, y) = \sum_{i=1}^{y} x
$$

El símbolo $\sum$ es una letra griega, **sigma**, y en matemáticas representa el sumatorio. El valor de abajo $i = 1$ es donde empieza la suma (límite inferior) y el valor de arriba $y$ es donde termina (límite superior). $i$ representa un índice; en este caso, como $x$ es un valor fijo, no nos hace falta. Por tanto, si por ejemplo $y = 3$ y $x = 2$, haremos el sumatorio desde $i = 1$ hasta $3$, lo que nos dice que tenemos que sumar el valor $x$ tres veces, es decir:

$$
x + x + x
$$

De esta forma ya hemos representado la multiplicación. Puedes pensar cómo podemos obtener la división a partir de las operaciones que hemos visto. Es importante que entiendas el sumatorio, pues en tu camino a las matemáticas lo vas a ver mucho; por ejemplo, la expresión general de un polinomio es realmente:

$$
P(x) = \sum_{i=0}^{n} a_i x^{n-i} = a_0 x^n + a_1 x^{n-1} + a_2 x^{n-2} + \dots + a_n
$$

Antes de terminar esta parte, detente un segundo en el límite superior: esta vez no es un $3$, sino una $n$. Es una variable, pues en este caso indica el grado del polinomio en cuestión. Prueba a construir un polinomio para $n = 2$.

---

## Proposiciones y Conjuntos

En matemáticas no solo trabajamos con números, variables y operaciones. También necesitamos expresar afirmaciones y determinar si estas son verdaderas o falsas.

Si bien para definir constantes y variables usamos las primeras y últimas letras del alfabeto, en el caso de las proposiciones usamos letras de la segunda mitad ($p, q, r, s$); a estas las llamaremos **variables proposicionales**. Por ejemplo:

> $p$: 2 es un número primo

Esta proposición, además de ser verdadera, la llamamos **atómica**, debido a que solo tiene un componente lógico. Si tiene más de uno, la representaremos con letras mayúsculas ($P, Q, \dots$) y las llamaremos **moleculares**. Para obtenerlas usamos conectores lógicos:

- **Disyunción $\lor$ ("o"):** Es verdadera si al menos una de las proposiciones es verdadera. Si $p$: "2 es par" y $q$: "3 es primo", entonces $P = p \lor q$ es verdadero.
- **Conjunción $\land$ ("y"):** Es verdadera si ambas proposiciones son verdaderas. Si $p$: "4 es par" y $q$: "4 es mayor que 2", entonces $P = p \land q$ es verdadero.
- **Negación $\neg$ ("no"):** Cambia el valor de verdad de una proposición. Si $p$: "7 es par", entonces $P = \neg p$ es verdadero.
- **Condicional $\to$ ("si... entonces"):** Es falsa únicamente cuando la primera proposición es verdadera y la segunda es falsa. Si $p$: "8 es divisible entre 4" y $q$: "8 es par", entonces $P = p \to q$ es verdadero.
- **Bicondicional $\leftrightarrow$ ("si y solo si"):** Es verdadera cuando ambas proposiciones tienen el mismo valor de verdad. Si $p$: "6 es divisible entre 2" y $q$: "6 es par", entonces $P = p \leftrightarrow q$ es verdadero.

Uno de los usos más frecuentes de las proposiciones lo hallamos en la **teoría de conjuntos**, donde mucha de la notación tiene símiles directos con los conectores lógicos.

En pocas palabras, un conjunto matemático es una colección de objetos bien definida, llamados **elementos**, que pueden ser números, letras o figuras. Se representan con letras mayúsculas y sus elementos van entre llaves. Un ejemplo simple es:

$$
A = \{1, 2, 3\}
$$

Podemos expresar relaciones entre elementos y conjuntos. Por ejemplo, sabemos que el 2 pertenece al conjunto $A$, lo cual expresamos como:

$$
2 \in A
$$

Sin embargo, el 5 no se encuentra en nuestro conjunto, por lo que escribimos:

$$
5 \notin A
$$

Estas expresiones constituyen proposiciones, pues podemos preguntarnos si son verdaderas o falsas:

- $p: 2 \in A$ (verdadera)
- $q: 5 \notin A$ (verdadera)
- $S: p \land q$ ($S$ es verdadera)

También tenemos relaciones entre conjuntos. Sea $B = \{1, 2, 3, 4, 5, 6\}$, podemos decir lo siguiente:

- **Subconjunto ($A \subseteq B$):** Todos los elementos de $A$ pertenecen a $B$. Un subconjunto puede ser igual al conjunto con el que se le compara.
- **Subconjunto propio ($A \subset B$):** Significa que $A$ está contenido en $B$, es decir, $A$ solo forma una parte de $B$, no su totalidad.
- **Conjuntos distintos ($A \neq B$):** Significa que $A$ y $B$ no tienen exactamente los mismos elementos.
- **Conjunto no vacío ($A \neq \emptyset$):** Sería falso solo si $A$ no tuviese ningún elemento ($A = \emptyset$).
- **Intersección ($A \cap B$):** Podemos definir un conjunto $C$ como los elementos comunes de ambos conjuntos, expresado como $A \cap B$. Debido a que $A$ es un subconjunto propio de $B$, tenemos que $C = A$.
- **Unión ($A \cup B$):** Podemos definir un conjunto $D$ como la combinación de los elementos comunes y no comunes de ambos conjuntos, expresado como $A \cup B$. Debido a que $A$ es un subconjunto propio de $B$, se cumple que $D = B$. Aquí sale a relucir una propiedad fundamental de los conjuntos: **los elementos no se repiten**.

Estas expresiones también tienen su equivalencia o negación lógica, por ejemplo:

$$
p: \neg(A \not\subset B) \quad (\text{donde } p \text{ es verdadera})
$$

Lo más probable es que conozcas conjuntos de elementos tan famosos como los **números naturales**, usados para contar y representados por $\mathbb{N}$:

$$
\mathbb{N} = \{1, 2, 3, 4, 5, \dots\}
$$

Usando proposiciones lógicas podemos crear subconjuntos a partir de conjuntos conocidos. Como ejemplo, te mostramos cómo definir todos los números naturales pares:

$$
A = \{x \in \mathbb{N} : 2 \mid x\}
$$

Se lee de la siguiente manera: "$A$ es el conjunto de todos los números $x$ pertenecientes a $\mathbb{N}$ tales que $x$ es divisible entre 2" ($2 \mid x$ es una proposición que comprueba si el resto o módulo al dividir $x$ entre 2 es igual a 0).

Podemos encapsular aún más esta expresión definiendo una **proposición abierta** (a diferencia de las cerradas vistas antes, las abiertas dependen de una variable y contienen más de un caso que las hacen verdaderas):

$$
p(x): 2 \mid x \quad (p(316) \text{ es verdadera}, p(217) \text{ es falsa})
$$

Ahora nuestro subconjunto puede escribirse sencillamente como:

$$
A = \{x \in \mathbb{N} : p(x)\}
$$

Aparte de $\mathbb{N}$, encontramos más conjuntos de números. Otro con el que seguramente te hayas cruzado son los **números enteros** ($\mathbb{Z}$):

$$
\mathbb{Z} = \{\dots, -3, -2, -1, 0, 1, 2, 3, \dots\}
$$

Los enteros incluyen a los naturales, sus opuestos (negativos) y el cero. Por tanto:

$$
\mathbb{N} \subseteq \mathbb{Z}
$$

Para ir un poco más lejos, tenemos los **números racionales** ($\mathbb{Q}$), aquellos que pueden expresarse como el cociente de dos números enteros (incluyendo por consiguiente a $\mathbb{Z}$), siempre que el denominador sea distinto de cero:

$$
\mathbb{Q} = \left\{ \frac{a}{b} : a, b \in \mathbb{Z} \land b \neq 0 \right\}
$$

Algunos ejemplos son $\frac{1}{2}, 5, -3$. Como has visto, incluye a todos los enteros además de sus posibles cocientes, por tanto:

$$
\mathbb{Z} \subseteq \mathbb{Q}
$$

Para terminar veremos los **números reales** ($\mathbb{R}$), que comprenden todos los números que pueden representarse en la recta real:

$$
\mathbb{R} = \mathbb{Q} \cup \{\text{Irracionales}\}
$$

Los números irracionales son aquellos que no pueden ser representados como un cociente de enteros y tienen una cantidad infinita de cifras decimales no periódicas (sin patrón repetitivo). Los más famosos son $\pi, e, \phi, \sqrt{2}$, etc.

---

Llegamos al final de este módulo. Esto es simplemente una pincelada de lo que vas a encontrar en este curso; aún falta mucha notación que irá apareciendo en los módulos posteriores. Esperamos que te haya servido; en caso afirmativo, sería de gran ayuda que compartas el curso a más personas que lo necesiten y, si tienes una cuenta de GitHub, que le entregues una estrella al proyecto.

Te dejamos algunos vídeos que pueden ayudarte:

- [Introducción a las proposiciones lógicas - Por Codemath](https://www.youtube.com/watch?v=nsB5Or3uZiM&t=95s)
- [¿Qué es la sumatoria? - Por Matemáticas profe Alex](https://www.youtube.com/watch?v=wRdhU_cvVQY)
- [¿Qué son realmente los números reales? - Por Eduardo Sáenz de Cabezón](https://www.youtube.com/watch?v=xOjQ3u7jSLQ)