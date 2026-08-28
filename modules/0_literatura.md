# Módulo 0: Literatura matemática

## Introducción

Este módulo sirve como introducción al curso. Antes de adentrarnos en el contenido, necesitamos entender cómo se escriben las matemáticas, principalmente por dos razones:

1. **No entiende de idiomas**: cualquier persona de cualquier parte del mundo puede entender la notación matemática.
2. **Nos ayuda a generalizar**: veremos tanto letras como símbolos que van a representar casos generales.

## Constantes y variables

René Descartes, en su obra *"La Geometría (1637)"*, usó las primeras letras del alfabeto ($a, b, c, \dots$) para representar valores que no cambiaban en ningún momento, a estas las llamaremos **constantes**. Para aquellas que podían variar, usó las últimas letras ($x, y, z$), a las que llamaremos **variables**. Esta es una convención habitual, no una regla obligatoria.

Veamos un ejemplo simple. Si decimos que $a = 3$, entonces $a$ es una constante dentro de este contexto. En cambio, si decimos que $x$ es una variable, $x$ puede tomar cualquier valor: $1, 2, 10, -5, \dots$

La utilidad de mezclar constantes y variables es que podemos escribir expresiones generales. Por ejemplo:

$$
2x
$$

Esto se lee *"dos veces $x$"*. Si $x = 4$, entonces $2x = 8$. Si $x = 10$, entonces $2x = 20$. La expresión $2x$ sirve para **todos** los casos, y solo cambiamos el valor de $x$ para obtener un resultado distinto.

Podemos hacer expresiones un poco más completas:

$$
ax + 1, \quad a = 1
$$

Donde $a$ es una constante. Si $x = 2$, entonces $ax + 1 = 3$. Si en cambio $x = 5$, entonces $ax + 1 = 6$. Observa que el valor de $a$ queda fijo, pero al cambiar $x$ obtenemos distintos resultados, pues el valor de $x$ sí puede variar.

Para poder representar casos generales, como por ejemplo fórmulas, nos apoyaremos en variables y constantes, por ejemplo, la expresión general de un polinomio de grado dos es:

$$
ax^2 + bx + c
$$

Donde $a, b, c$ son constantes y $x$ es una variable.

## El alfabeto griego

Para no saturar las letras del alfabeto latino, recurrimos a las **letras griegas**. Se usan tanto para representar constantes especiales como para nombrar variables o incluso operaciones.

**Constantes especiales:**

- $\pi \approx 3{,}1416$: relación entre la circunferencia y su diámetro.
- $\phi \approx 1{,}618$: la proporción áurea, presente en algunas construcciones geométricas y modelos de la naturaleza.

**Variables en trigonometría:**

- $\alpha$, $\beta$, $\gamma$: suelen representar ángulos en un triángulo.
- $\theta$: ángulo genérico, muy usado en funciones trigonométricas como $\sin(\theta)$.

**Operaciones:**

La letra griega más importante que vas a encontrar es la **sigma mayúscula** ($\sum$), que representa el **sumatorio**: una forma abreviada de escribir sumas repetidas.

$$
\sum_{i=1}^{n} a_i
$$

Esto se lee *"suma de $a_i$ desde $i = 1$ hasta $n$"*. El símbolo $i$ es un **índice** que toma los valores enteros desde $1$ hasta $n$, y $n$ indica cuándo se detiene la suma. Por ejemplo, si $n = 3$:

$$
\sum_{i=1}^{3} a_i = a_1 + a_2 + a_3
$$

Veámoslo con valores. Si $a_1 = 2$, $a_2 = 5$ y $a_3 = 1$:

$$
\sum_{i=1}^{3} a_i = 2 + 5 + 1 = 8
$$

El sumatorio es fundamental porque nos permite escribir expresiones de forma compacta. Por ejemplo, la expresión general de un **polinomio de grado menor o igual que $n$** se escribe así:

$$
P(x) = \sum_{i=0}^{n} a_i x^{i} = a_0 + a_1 x + a_2 x^2 + \dots + a_n x^n
$$

Donde cada $a_i$ es una constante (el coeficiente del término $x^i$) y $x$ es la variable. Observa los tres puntos ($\dots$): indican que hay un **patrón que se repite** y que se simplifica hasta llegar a la $n$-ésima repetición. En este caso, el patrón es $a_i x^i$ y los puntos sustituyen los términos intermedios que seguirían la misma lógica.

Si $n = 2$, tenemos un polinomio de grado menor o igual que dos:

$$
P(x) = a_0 + a_1 x + a_2 x^2
$$

Observa cómo el sumatorio nos permite representar cualquier polinomio, sin importar su grado, usando una sola fórmula.

Además del sumatorio, hay otros símbolos griegos que verás frecuentemente en cálculo y física:

- **Productorio** ($\prod$): funciona igual que el sumatorio, pero en vez de sumar, multiplica. 

$$
\prod_{i=1}^{3} a_i = a_1 \cdot a_2 \cdot a_3
$$

- **Delta mayúscula** ($\Delta$): representa un cambio o diferencia. Por ejemplo, $\Delta t = t_f - t_i$ significa *"cambio en el tiempo"* (tiempo final menos tiempo inicial). Es muy usado en física para expresar variaciones.

## Proposiciones lógicas

En matemáticas no solo trabajamos con números y expresiones. También necesitamos expresar afirmaciones y determinar si estas son verdaderas o falsas. Una **proposición** es cualquier enunciado que pueda ser verdadero o falso.

Por ejemplo, si $x$ es una variable, la expresión $x > 5$ es una proposición abierta: su valor de verdad depende de qué valor le demos a $x$. Si $x = 7$, es verdadera, mientras que si $x = 3$, es falsa. Usaremos letras de la segunda mitad del alfabeto ($p, q, r, s$) para representar proposiciones.

Para combinar proposiciones entre sí usamos **conectores lógicos**. 

- **Conjunción $\land$ ("y"):** Es verdadera si **ambas** proposiciones son verdaderas. Sean $a$ y $b$ dos constantes con $a < b$. Definimos:

$$
p: x > a \quad q: x < b \quad
$$

Ahora combinamos ambas en una nueva proposición usando el conector lógico $\land$:

$$
p \land q \quad (\text{Verdadero si } a < x < b)
$$


- **Disyunción $\lor$ ("o"):** Es verdadera si **al menos una** es verdadera. 

$$
p: x < a \quad q: x > b \quad
$$

$$
p \lor q \quad (\text{Verdadero si } x < a \text{ o } x > b)
$$

- **Condicional $\to$ ("si... entonces"):** Conecta una hipótesis con una conclusión.

$$
p: x > a \quad q: \sqrt{x} > \sqrt{a} \quad
$$

$$
p \to q \quad (\text{si } x > a, \text{ entonces } \sqrt{x} > \sqrt{a})\quad
$$

- **Bicondicional $\leftrightarrow$ ("si y solo si"):** Indica que ambas proposiciones tienen el mismo valor de verdad.

$$
p: x = 0 \quad q: x^2 = 0 \quad
$$

$$
p \leftrightarrow q \quad (\text{si } x = 0, \text{entonces } x^2 = 0 \text{ y si } x^2 = 0, \text{entonces } x = 0)\quad
$$

## Conjuntos

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

Una serie de conjuntos que vale la pena recordar son los **conjuntos numéricos**.
Quizás ya conozcas algunos, como los **números naturales**, usados para contar y representados por $\mathbb{N}$:

$$
\mathbb{N} = \{1, 2, 3, 4, 5, \dots\}
$$

Usando proposiciones lógicas podemos crear subconjuntos a partir de conjuntos conocidos. Como ejemplo, te mostramos cómo definir todos los números naturales pares:

$$
A = \{x \in \mathbb{N} : 2 \mid x\}
$$

Se lee de la siguiente manera: "$A$ es el conjunto de todos los números $x$ pertenecientes a $\mathbb{N}$ tales que $x$ es divisible entre 2" ($2 \mid x$ es una proposición que comprueba si el resto o módulo al dividir $x$ entre 2 es igual a 0).

Aparte de $\mathbb{N}$, encontramos más conjuntos de números. Otro con el que seguramente te hayas cruzado son los **números enteros** ($\mathbb{Z}$):

$$
\mathbb{Z} = \{\dots, -3, -2, -1, 0, 1, 2, 3, \dots\}
$$

Los enteros incluyen a los naturales, sus opuestos (negativos) y el cero. Por tanto:

$$
\mathbb{N} \subseteq \mathbb{Z}
$$

Nota: El símbolo $\subseteq$ se lee como "es un subconjunto de", es decir, todos los elementos que encontramos en los naturales $\mathbb{N}$ también se encuentran en los enteros $\mathbb{Z}$.

Para ir un poco más lejos, tenemos los **números racionales** ($\mathbb{Q}$), aquellos que pueden expresarse como el cociente de dos números enteros (incluyendo por consiguiente a $\mathbb{Z}$), siempre que el denominador sea distinto de cero:

$$
\mathbb{Q} = \left\{ \frac{a}{b} : a, b \in \mathbb{Z} \land b \neq 0 \right\}
$$

Algunos ejemplos son $0.5, 5, -3$. Como has visto, incluye a todos los enteros además de sus posibles cocientes, por tanto:

$$
\mathbb{Z} \subseteq \mathbb{Q}
$$

Los **números irracionales** son los números reales que no pueden expresarse como el cociente de dos números enteros. Tienen una expansión decimal infinita no periódica. Algunos ejemplos son $\sqrt{2}$, $\pi$, $e$ y $\phi$. El conjunto de los números irracionales se representa mediante $\mathbb{I}$.

La **unión** ($\cup$) reúne todos los elementos que pertenecen a uno de los conjuntos o a ambos. Por tanto, los números reales ($\mathbb{R}$) se obtienen uniendo los racionales y los irracionales:

$$
\mathbb{R} = \mathbb{Q} \cup \mathbb{I}
$$

Se representan mediante los puntos de la recta real. En particular:

$$
\mathbb{Q} \subseteq \mathbb{R}
$$

Por tanto, tenemos la inclusión:

$$
\mathbb{N} \subseteq \mathbb{Z} \subseteq \mathbb{Q} \subseteq \mathbb{R}
$$

## Intervalos

Un intervalo matemático es un conjunto de números comprendidos entre dos valores fijos llamados **extremos**. Es una forma abreviada de definir conjuntos, normalmente sobre los números reales.

**Abiertos:** Los extremos quedan excluidos, usamos paréntesis.

$$
I = (a, b), \quad a,b \in \mathbb{R}, \quad a < b
$$

Equivale a definir el conjunto de la siguiente forma:

$$
I = \{x \in \mathbb{R} : a < x < b\}
$$

Por ejemplo:

$$
(1, 5) \cap \mathbb{N} = \{2, 3, 4\}.
$$

El símbolo $\cap$ representa la **intersección** y sirve para seleccionar los elementos comunes entre conjuntos. Como hay infinitos números reales entre $1$ y $5$, seleccionamos únicamente los números naturales para que el ejemplo sea más sencillo. Observa que ni el $1$ ni el $5$ aparecen en el conjunto, porque están excluidos.

**Cerrados:** Los extremos quedan incluidos, usamos corchetes.

$$
I = [a, b], \quad a,b \in \mathbb{R}, \quad a < b
$$

Equivale a:

$$
I = \{x \in \mathbb{R} : a \leq x \leq b\}
$$

Por ejemplo:

$$
[1, 5] \cap \mathbb{N} = \{1, 2, 3, 4, 5\}.
$$

Esta vez sí incluimos los extremos.

**Semiabiertos:** Un extremo queda excluido y el otro incluido. Puede ser el inferior o el superior:

$$
[1, 5) \cap \mathbb{N} = \{1, 2, 3, 4\}
$$

$$
(1, 5] \cap \mathbb{N} = \{2, 3, 4, 5\}
$$

**Infinitos:** Un extremo es un valor numérico (incluido o excluido) y el otro es infinito.

$$
I = [1, +\infty), \quad I \subseteq \mathbb{R}
$$

El infinito **siempre** lleva paréntesis, porque no es un número que pueda incluirse en el conjunto. No existe el "último número natural".

Observa que en este caso:

$$
[1, +\infty) \cap \mathbb{N} = \mathbb{N}.
$$

Nota: si no se especifica el conjunto de partida, se asume que trabajamos con números reales $\mathbb{R}$.

## Cuantificadores

Las proposiciones abiertas son muy útiles, sin embargo, tenemos que comprobar caso por caso si los elementos de nuestro conjunto cumplen con dicha proposición. Aquí entran los **cuantificadores**, que nos permiten convertir estas proposiciones abiertas en proposiciones cerradas, indicando sobre qué valores queremos hacer una afirmación.

Sea el conjunto $A = \{1, 3, 5\}$ y $p(x): 2 \nmid x^2$. Dado que $1^2$, $3^2$ y $5^2$ no son divisibles entre 2, podemos usar el **cuantificador universal** ($\forall$) para expresar lo siguiente:

$$
\forall x \in A, \; 2 \nmid x^2
$$

Podemos leer esta expresión como *"para todo $x$ perteneciente a $A$, su cuadrado no es par"*. Como puedes ver, este símbolo nos dice que todos los elementos mencionados van a cumplir cierta condición. Es una abreviación de escribir:

$$
p(1) \land p(3) \land p(5)
$$

La abreviación parece poco útil debido a que este conjunto es muy pequeño, sin embargo, cuando trabajamos con conjuntos de elementos infinitos (por ejemplo, los números naturales $\mathbb{N}$), el cuantificador universal es muy útil.

Pero, ¿qué ocurre si no necesitamos que la proposición sea verdadera para todos los elementos? ¿Y si nos basta con que sea verdadera para al menos uno? Para eso necesitamos otro cuantificador, concretamente el **existencial** ($\exists$). Vamos a redefinir nuestra proposición anterior: sea $p(x): 9 \mid x^2$ y el mismo conjunto $A$. Se da el caso de que ni $1^2$ ni $5^2$ son divisibles entre 9, pero $3^2$ sí lo es. Por tanto, podemos expresarlo como:

$$
\exists x \in A, \; 9 \mid x^2
$$

Esto se lee como *"existe al menos un elemento $x$ perteneciente a $A$ cuyo cuadrado es divisible entre 9"*. Si te detienes a entender su funcionamiento, puedes ver que es una abreviación de:

$$
p(1) \lor p(3) \lor p(5)
$$

Llegamos al final de este módulo. Esto es simplemente una pincelada de lo que vas a encontrar en este curso, aún falta mucha notación que irá apareciendo en los módulos posteriores. Esperamos que te haya servido, en caso afirmativo, sería de gran ayuda que compartas el curso a más personas que lo necesiten y, si tienes una cuenta de GitHub, que le entregues una estrella al [proyecto](https://github.com/manulucena12/mates-abiertas).

Te dejamos algunos vídeos que pueden ayudarte:

- [¿Qué es la sumatoria? - Por Matemáticas profe Alex](https://www.youtube.com/watch?v=wRdhU_cvVQY)
- [Introducción a las proposiciones lógicas - Por Codemath](https://www.youtube.com/watch?v=nsB5Or3uZiM)
- [¿Qué son realmente los números reales? - Por Eduardo Sáenz de Cabezón](https://www.youtube.com/watch?v=xOjQ3u7jSLQ)
- [Notación de conjuntos - Por Matemáticas profe Alex](https://www.youtube.com/watch?v=RHHA-bDhfGw)
- [Cuantificadores - Por Tu profe en línea](https://www.youtube.com/watch?v=ChfOh0xG7Ok)
