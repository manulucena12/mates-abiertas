# Módulo 1: Estudio de sistemas de ecuaciones lineales

## Introducción

En nuestro paso por la educación secundaria, hemos resueltos sistemas de ecuaciones lineales con dos incógnitas, por ejemplo:

$$
\begin{cases}
x + y = 2 \\
3x - y = 2
\end{cases} \quad
$$

Simplemente llegamos a aprender de forma superficial cómo resolver estos sistemas, por ejemplo, usando el método de sustitución o el método de igualación. En este módulo, vamos a estudiar los componentes que conforman un sistema de ecuaciones lineales, así como su naturaleza.

Nota: El material de este curso es continuo, nos apoyaremos en los conocimientos adquiridos en los módulos anteriores para construir este, por tanto, te recomendamos que sigas el orden propuesto. 

## Vectores

Es uno de los componentes principales de un sistema, hasta ahora hemos trabajado con números, pero para describir otros elementos como una posición en un plano necesitamos coordenadas, es decir, un conjunto ordenados de números, los cuales llamaremos **vectores**.

$$
\vec{v} = (v_1, v_2, \dots, v_n), \quad v_i \in \mathbb{R}
$$

Algunos ejemplos pueden ser $\vec{v} = (1,2)$ y $\vec{w} = (\sqrt{2}, -1)$. En la definición de vector anterior puedes ver que puede tener hasta n coordenadas (la llamaremos **componentes**), el número de componentes define la dimensión a la que pertenece dicho vector, por tanto:

$$
\vec{v} = (v_1, v_2, \dots, v_n), \quad v_i \in \mathbb{R}, \quad \vec{v} \in \mathbb{R}^n
$$

Por tanto, si bien el vector $\vec{v}=(1,2)$ pertenece a $\mathbb{R}^2$,  el vector $\vec{w}=(\sqrt{2}, -1, 3)$ se encuentra en $\mathbb{R}^3$. La diferencia entre un vector y un conjunto de números es que el vector tiene un orden y una dirección. Podemos decir que $A = \{1, 2\}$ es igual a  $B = \{2,1\}$, pero el vector $\vec{v} = (1,2)$ no es igual al vector $\vec{w} = (2,1)$. Debido a que cada componente representa un lugar en el espacio.

<svg width="300" height="250" viewBox="-30 -20 280 230" style="display: block; margin: 20px auto;">
  <defs>
    <marker id="arrow-red" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
      <path d="M 0 0 L 6 3 L 0 6 z" fill="#e74c3c"/>
    </marker>
    <marker id="arrow-blue" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
      <path d="M 0 0 L 6 3 L 0 6 z" fill="#3498db"/>
    </marker>
  </defs>
  
  <!-- Ejes (Y invertido para matemática) -->
  <line x1="0" y1="200" x2="230" y2="200" stroke="#ccc" stroke-width="1"/>
  <line x1="0" y1="200" x2="0" y2="0" stroke="#ccc" stroke-width="1"/>
  
  <!-- Marcas en ejes X -->
  <line x1="80" y1="197" x2="80" y2="203" stroke="#ccc" stroke-width="1"/>
  <line x1="160" y1="197" x2="160" y2="203" stroke="#ccc" stroke-width="1"/>
  
  <!-- Marcas en ejes Y -->
  <line x1="-3" y1="120" x2="3" y2="120" stroke="#ccc" stroke-width="1"/>
  <line x1="-3" y1="40" x2="3" y2="40" stroke="#ccc" stroke-width="1"/>
  
  <!-- Vector v = (1,2) en rojo -->
  <line x1="0" y1="200" x2="80" y2="40" stroke="#e74c3c" stroke-width="2" marker-end="url(#arrow-red)"/>
  <circle cx="80" cy="40" r="3" fill="#e74c3c"/>
  <text x="88" y="38" fill="#e74c3c" font-size="13" font-family="monospace">v = (1,2)</text>
  
  <!-- Vector w = (2,1) en azul -->
  <line x1="0" y1="200" x2="160" y2="120" stroke="#3498db" stroke-width="2" marker-end="url(#arrow-blue)"/>
  <circle cx="160" cy="120" r="3" fill="#3498db"/>
  <text x="168" y="118" fill="#3498db" font-size="13" font-family="monospace">w = (2,1)</text>
</svg>

$$
\text{Figura 1: Representación de los vectores } \vec{v} \text{ y } \vec{w}, \quad \vec{v},\vec{w} \in \mathbb{R}^2
$$

Podemos leer los vectores como los pasos que damos para llegar a un punto desde el origen. Por tanto, para el vector $\vec{v}=(1,2)$ damos un paso en la dirección del eje x y dos pasos en la dirección del eje y. De aquí surge la notación binomial, y podemos denotar $\vec{v}$ como: 

$$
v = \vec{i} + 2 \vec{j}
$$

Llamos a $\vec{i}$ y $\vec{j}$ como los vectores base o unitarios de $\mathbb{R}^2$, los estudiaremos más a fondo en el siguiente punto.

## Dependencia lineal

Podemos estudiar la relación que existe o no entre vectores, determinando si un vector proviene de uno o varios vectores (si está construido a partir de otros es dependiente), para conocer esto tenemos que saber que es una combinación lineal.

Una combinación lineal es una suma de elementos, cada uno multiplicado por un parámetro (un número real que llamaremos escalar cuando trabajemos con vectores).

$$
\sum_{i=1}^{n} \lambda_i {e}_i = \lambda_1 {e}_1 + \lambda_2 {e}_2 + \dots + \lambda_n {e}_n, \quad \lambda_i \in \mathbb{R}
$$

Los elementos ${e}_i$ pueden números, constantes, variables, vectores, etc. Lo que nos permite hacer infinitas combinaciones, por ejemplo:

- Entre números: El número $5$ puede ser expresado usando el $2$ y el $3$:

$$
5 = 1(2) + 1(3) \quad (\lambda_1=1, \lambda_2=1, e_1=2, e_2=3)
$$

- Entre polinomios: El polinomio $P(x) = 4x² + 6$ es el resultado de la siguiente combinación lineal:

$$
4x² + 6 = 4(x²) + 1(6) \quad (\lambda_1=4, \lambda_2=1, {e}_1=x², {e}_2=6)
$$

La combinación lineal toma especial relevancia cuando trabajamos con vectores, decimos que un vector $\vec{v}$ es **linealmente dependiente** de otro vector $\vec{w}$ si $\vec{v}$ puede escribirse como una combinación lineal de $\vec{w}$. En el caso más simple, con un único vector, esto se reduce a:
 
$$
\vec{v} = k \vec{w}, \quad \vec{v}, \vec{w} \in \mathbb{R}^n, \quad k \in \mathbb{R}
$$

Donde $k$ es un escalar. Por ejemplo, el vector $(2,0)$ guarda una dependencia lineal con el vector $(1,0)$ (y viceversa), ya que:
 
$$
(2,0) = 2 \cdot (1,0) \quad (\lambda_1=2, \vec{e}_1=(1,0))
$$

Podemos generalizar esta idea a más de un vector y decir que un vector $\vec{v}$ es linealmente dependiente de un conjunto de $n$ vectores $\{\vec{w}_1, \vec{w}_2, \dots, \vec{w}_n\}$ si existe una combinación lineal de ellos que sea igual a $\vec{v}$:
 
$$
\vec{v} = \sum_{i=1}^{n} \lambda_i \vec{w}_i, \quad \vec{w}_i,\ \vec{v} \in \mathbb{R}^n,  \quad \lambda_i \in \mathbb{R},
$$

En todas las dimensiones, existen conjuntos de vectores que generan a qualquier otro, a estos conjuntos los llamaremos bases, hay infinitas bases, la más conocida de $\mathbb{R}^2$ es la canónica:

$$
B = \{ \vec{i}, \vec{j} \} = \{ (1,0), (0,1) \}
$$

Con ella podemos representar cualquier vector en $\mathbb{R}^2$ como una combinación lineal de ellos, el ejemplo del vector anterior $\vec{v}=(1,2)$ con esta base es:

$$
\vec{v} = 1 \cdot \vec{i} + 2 \cdot \vec{j} = (1,2) \quad (\lambda_1=1, \lambda_2=2, \vec{e}_1=\vec{i}, \vec{e}_2=\vec{j})
$$

La base canónica de $\mathbb{R}^3$ es:

$$
B = \{ \vec{i}, \vec{j}, \vec{k} \} = \{ (1,0,0), (0,1,0), (0,0,1) \}
$$

Y la de $\mathbb{R}^n$ es:

$$
B = \{ \vec{e}_1, \vec{e}_2, \dots, \vec{e}_n \} = \{ (1,0,\dots,0), (0,1,\dots,0), \dots, (0,0,\dots,1) \}
$$

Las bases tienen dos propiedades fundamentales:

1. Si trabajamos en $\mathbb{R}^n$, la base tiene $n$ vectores.
2. Todos los vectores de la base son linealmente independientes entre sí, intenta escribir el vector $\vec{i}$ como combinación lineal de $\vec{j}$ y $\vec{k}$, verás que no es posible. 

Decimos que un vector es linealmente independiente de un conjunto de vectores si no es linealmente dependiente de ellos, es decir, si no existe ninguna combinación lineal de dicho conjunto que sea igual a él. Cuando esto se cumple entre todos los vectores de un mismo conjunto, decimos que el conjunto completo es linealmente independiente.

Sea $V = \{\vec{v}_1, \vec{v}_2, \dots, \vec{v}_n\}$ un conjunto de vectores:

$$
\text{V es linealmente independiente } \iff \nexists\, \vec{v}_k \; : \; \vec{v}_k = \sum_{\substack{i=1 \\ i \neq k}}^{n} \lambda_i \vec{v}_i, \quad \lambda_i \in \mathbb{R}
$$

Es decir, ningún vector del conjunto puede escribirse como combinación lineal de los demás. En este sumatorio aparece una condición nueva debajo del límite inferior, $i \neq k$. Lo que significa que el sumatorio se hace para todos los vectores del conjunto excepto para el vector que estemos analizando. Lo veremos en futuros ejemplos, no hace falta que lo entendamos del todo ahora.

## Matrices

Hasta ahora hemos hablado de vectores de uno en uno, y de cómo se relacionan entre sí (dependencia, bases). Pero en la práctica casi nunca trabajamos con un único vector aislado: manejamos conjuntos enteros de ellos (una base, por ejemplo) y necesitamos una forma compacta de guardarlos y operar con todos a la vez. Para eso usamos las matrices. 

Al igual que ocurría con los vectores frente a los conjuntos, el orden importa: una matriz no es un conjunto de vectores, sino una colección *ordenada* de ellos. Si tomamos $n$ vectores de $\mathbb{R}^m$ y los colocamos uno junto a otro como columnas, obtenemos una matriz:
 
$$
A = \begin{pmatrix} \vec{v}_1 & \vec{v}_2 & \dots & \vec{v}_n \end{pmatrix}, \quad \vec{v}_i \in \mathbb{R}^m
$$
 
El resultado es una tabla de $m$ filas y $n$ columnas: decimos que $A$ tiene **dimensión** $m \times n$. Por ejemplo, si tomamos los vectores de la base canónica de $\mathbb{R}^3$: $\vec{i}=(1,0,0)$, $\vec{j}=(0,1,0)$, $\vec{k}=(0,0,1)$ y los colocamos **como columnas**, obtenemos:
 
$$
A = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix}
$$

Como los vectores de esta base pertenecen a $\mathbb{R}^3$, $m = 3$ filas, y hay 3 vectores, $n = 3$ columnas. Al tener $n=m$ decimos que la matriz es cuadrada.

Otro ejemplo, si tenemos un conjunto $V=\{ (0,3,4,1), (2,0,6,2), (12,6,6,0) \}$. Los vectores pertenecen a $\mathbb{R}^4$ entonces $m=4$, y hay 3 vectores, $n=3$. Su matriz es:

$$ 
A = \begin{pmatrix} 0 & 2 & 12 \\ 3 & 0 & 6 \\ 4 & 6 & 6 \\ 1 & 2 & 0 \end{pmatrix}
$$

Cada elemento de una matriz se identifica con dos índices en vez de uno: $a_{ij}$ representa el elemento situado en la fila $i$, columna $j$. Así, la matriz completa se puede escribir de forma compacta como:
 
$$
A = (a_{ij}), \quad i=1,\dots,m, \quad j=1,\dots,n, \quad i,j \in \mathbb{N}, \quad A \in \mathbb{R}^{m\times n} 
$$

Si queremos obtener un elemento concreto, por ejemplo el de la fila $i=2$ y la columna $j=3$ de la matriz $A$ anterior, nos movemos por la matriz hasta la intersección de la segunda fila y la tercera columna: 

$$
 a_{23} = 6 
$$
 
## Rango

Una matriz está formada por varios vectores, pero no todos aportan necesariamente algo nuevo, ya vimos que un vector puede ser combinación lineal de otros, en cuyo caso no añade ninguna información que no tuviéramos ya. El rango de una matriz mide precisamente esto: cuántos de sus vectores columna son realmente independientes entre sí, es decir, cuánta información genuinamente distinta contiene la matriz con la que estamos trabajando.

Si una matriz está formada por tres vectores, su rango será como mucho tres, ya que nunca puede haber más direcciones independientes que vectores tengamos. Será exactamente tres si los tres son linealmente independientes entre sí, dos si solo dos de ellos lo son (y el tercero depende de esos dos), y así sucesivamente.

Veamos un ejemplo, tomemos la matriz de la base canónica de $\mathbb{R}^3$ que ya vimos en el apartado anterior:
 
$$
A = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix}, \quad \vec{v}_1=(1,0,0), \; \vec{v}_2=(0,1,0), \; \vec{v}_3=(0,0,1)
$$

Para determinar su rango, tenemos que ver la cantidad de vectores que no son combinación lineal entre sí, es decir, que son linealmente independientes.

$$
\mathrm{Rg}(A) = 3 \iff \nexists\, \vec{v}_k \; : \; \vec{v}_k = \sum_{\substack{i=1 \\ i \neq k}}^{3} \lambda_i \vec{v}_i, \quad \lambda_i \in \mathbb{R}
$$

Empezemos con el primer vector ($k=1$):

$$
 \vec{v}_1 = \lambda_2 \vec{v}_2 + \lambda_3 \vec{v}_3, \quad \lambda_2, \lambda_3 \in \mathbb{R}
$$

Conocemos estos tres vectores, la pregunta es: ¿existen $\lambda_2$ y $\lambda_3$ que cumplan esta igualdad?, fijate bien en el primer componente de cada vector, el vector $\vec{v}_1$ tiene un $1$, mientras que los otros dos tienen un $0$. Por tanto, no existe ningún valor que podamos darle a $\lambda_2$ y a $\lambda_3$ porque todos los vectores que obtendremos usando una combinación lineal de $\vec{v}_2$ y $\vec{v}_3$ tendrán un $0$ siempre como primer componente. Por lo tanto, $\vec{v}_1$ es linealmente independiente de $\vec{v}_2$ y $\vec{v}_3$.

Sigamos con el segundo vector ($k=2$):

$$
 \vec{v}_2 = \lambda_1 \vec{v}_1 + \lambda_3 \vec{v}_3, \quad \lambda_1, \lambda_3 \in \mathbb{R}
$$

Aquí pasa lo mismo que antes, pero con el segundo componente. El vector $\vec{v}_2$ tiene un $1$, mientras que los otros dos tienen un $0$. Por lo tanto, no existe ningún valor que podamos darle a $\lambda_1$ y a $\lambda_3$, $\vec{v}_2$ es también linealmente independiente.

Prueba ahora a estudiar el tercer vector, verás que pasa lo mismo, también es linealmente independiente, por tanto podemos concluir que el rango de la matriz es 3.

## Transformaciones lineales

Lo que más nos interesa de las matrices, es las operaciones que podemos realizar con ellas, concretamente las operaciones que pueden hacer sobre un vector, esta puede convertirlo en otro vector distinto, incluso de una dimensión diferente. Esto es exactamente lo que hace una función matemática, piensa en $f(x) = x^2$, que toma un valor y te devuelve otro. Una matriz, cuando actúa sobre un vector, hace lo mismo: **transforma** el vector de entrada en uno de salida. Por eso la llamamos **transformación lineal**.

Escribimos una transformación como:
 
$$
T: \mathbb{R}^n \to \mathbb{R}^m
$$

Donde $T$ es el nombre de la transformación, $\mathbb{R}^n$ es el **espacio de origen** (la dimensión de los vectores que le entregamos) y $\mathbb{R}^m$ es el **espacio de destino** (la dimensión de los vectores que obtenemos tras la transformación). Si $n = m$, es decir, si el vector de salida vive en el mismo espacio que el de entrada, decimos que la transformación es un **endomorfismo** (del griego *endo*, "dentro") pues no salimos del espacio en el que empezamos.

Ya sabemos que una matriz $A$ de dimensión $m \times n$ está formada por $n$ vectores columna $\vec{v}_1, \vec{v}_2, \dots, \vec{v}_n \in \mathbb{R}^m$. Dado un vector $\vec{x} = (x_1, x_2, \dots, x_n) \in \mathbb{R}^n$, definimos la transformación de $\vec{x}$ mediante $A$ como:
 
$$
T(\vec{x}) = A\vec{x} = \sum_{i=1}^{n} x_i \vec{v}_i = x_1 \vec{v}_1 + x_2 \vec{v}_2 + \dots + x_n \vec{v}_n
$$

Fíjate en que no hemos definido ninguna operación nueva: transformar $\vec{x}$ mediante $A$ es, literalmente, hacer una combinación lineal de las columnas de $A$, usando las componentes de $\vec{x}$ como parámetros $\lambda_i$. Veámoslo con la matriz identidad de $\mathbb{R}^3$ que ya conocemos, y un vector cualquiera $\vec{x}=(2,-1,5)$:

$$
T(\vec{x}) = 2\vec{i} + (-1)\vec{j} + 5\vec{k} = 2(1,0,0) - 1(0,1,0) + 5(0,0,1) = (2,-1,5)
$$

Esta transformación es especial, pues nos da el vector de entrada sin alterar, debido a esto, llamamos a la matriz de la base canónica la matriz identidad.

Veamos una transformación $T: \mathbb{R}^3 \to \mathbb{R}^4$, representada por una matriz $A$ de dimensión $4 \times 3$ (sus columnas viven en $\mathbb{R}^4$, y necesitamos $3$ de ellas para poder combinarlas con un vector de $\mathbb{R}^3$):
 
$$
A = \begin{pmatrix} 1 & 0 & 2 \\ 2 & 1 & -1 \\ 0 & 3 & 1 \\ -1 & 2 & 0 \end{pmatrix}, \qquad \vec{v} = (2, 1, -1)
$$
 
Aplicamos exactamente la misma idea de antes: combinar las columnas de $A$, usando las componentes de $\vec{v}$ como parámetros.
 
$$
T(\vec{v}) = A\vec{v} = 2\begin{pmatrix}1\\2\\0\\-1\end{pmatrix} + 1\begin{pmatrix}0\\1\\3\\2\end{pmatrix} + (-1)\begin{pmatrix}2\\-1\\1\\0\end{pmatrix} = \begin{pmatrix}2\\4\\0\\-2\end{pmatrix} + \begin{pmatrix}0\\1\\3\\2\end{pmatrix} + \begin{pmatrix}-2\\1\\-1\\0\end{pmatrix} = \begin{pmatrix}0\\6\\2\\0\end{pmatrix}
$$
 
Entramos con un vector de $\mathbb{R}^3$ y obtenemos un vector de $\mathbb{R}^4$: la transformación cambió la dimensión, tal como anunciaba su notación $T:\mathbb{R}^3\to\mathbb{R}^4$. Fíjate que las transformaciones lineales requieren que la matriz tenga tantos vectores como dimensiones tenga el espacio de origen, y que la dimensión del espacio de destino sea igual a la dimensión de los vectores que forman la matriz.

## Descomposición y estudio de sistemas de ecuaciones

Volvamos al sistema del inicio:

$$
\begin{cases}
x + y = 2 \\
3x - y = 2
\end{cases} \quad
$$

Ya tenemos todo lo necesario para poder entender la naturaleza de este sistema. Primero, vamos a obtener sus componentes, a la izquierda tenemos incógnitas, acompañadas de sus coeficientes y a la derecha los términos independientes, ¿y si separamos todo?

Si obtenemos únicamente los coeficientes de las incógnitas, obtendremos el siguiente endomorfismo:

$$
T:\mathbb{R}^2 \to \mathbb{R}^2,
\qquad
A =
\begin{pmatrix}
1 & 1 \\
3 & -1
\end{pmatrix}
$$

Tenemos una transformación lineal definida, por tanto el resto de componentes han de ser vectores, el vector de incógnitas que será la entrada de nuestra transformación y el vector solucion que será la salida

$$
\vec{x} = (x,y), \quad \vec{b} = (2,2)
$$

Por tanto, al resolver un sistema de ecuaciones, buscamos un vector de entrada $\vec{x}$ que, tras ser transformado por $A$, obtengamos $\vec{b}$, siendo la ecuación fundamental:

$$
 A\vec{x} = \vec{b} 
$$

No todas las transformaciones lineales tienen que ser endomorfismos. De forma general, podemos tener un sistema de la forma:

$$
A\vec{x} = \vec{b}, \qquad A \in \mathbb{R}^{m \times n}, \; \vec{x} \in \mathbb{R}^n, \; \vec{b} \in \mathbb{R}^m
$$

Esto quiere decir que la matriz $A$ tendrá $m$ filas y $n$ columnas, por tanto, la transformación lineal será $T: \mathbb{R}^n \to \mathbb{R}^m$. Y nuestro sistema ahora queda de la forma:

$$ 
\begin{cases}
  a_{11}x_1 + a_{12}x_2 + \dots + a_{1n}x_n = b_1 \\
  a_{21}x_1 + a_{22}x_2 + \dots + a_{2n}x_n = b_2 \\
  \vdots \\
  a_{m1}x_1 + a_{m2}x_2 + \dots + a_{mn}x_n = b_m
\end{cases} 
$$

Una vez obtenidos todos los componentes, solo nos queda estudiar el sistema, para ello, vamos a utilizar el teorema de Rouché-Fröbenius, que nos ayuda a determinar si un sistema tiene solución o no simplemente obteniendo el rango de las dos siguientes matrices:

$$
A = \begin{pmatrix}
  a_{11} & a_{12} & \dots & a_{1n} \\
  a_{21} & a_{22} & \dots & a_{2n} \\
  \vdots & \vdots & \ddots & \vdots \\
  a_{m1} & a_{m2} & \dots & a_{mn}
\end{pmatrix}, \qquad 

A|b = \begin{pmatrix}
  a_{11} & a_{12} & \dots & a_{1n} & b_1 \\
  a_{21} & a_{22} & \dots & a_{2n} & b_2 \\
  \vdots & \vdots & \ddots & \vdots & \vdots \\
  a_{m1} & a_{m2} & \dots & a_{mn} & b_m
\end{pmatrix}
$$

La primera ya la conocemos, es la matriz de coeficientes, la transformación lineal. La segunda es simplemente la matriz que obtenemos al incluir el vector de términos independientes como una columna más de la matriz. Se suele representar con una barra vertical para separar ambos componentes y la llamamos matriz ampliada.

¿Por qué ampliamos esta matriz? ¿qué relación tiene el rango de una con la otra?, todo converge a lo mismo, la matriz $A$ está compuesta por $n$ vectores columna, y la matriz $A|b$ tiene exactamente $n+1$ vectores columna. Por tanto:

$$
Rg(A) \leq n\quad Rg(A|b) \leq n+1
$$

Recuerda que el rango de una matriz es el número de vectores linealmente independientes que podemos obtener de ella. Por tanto, si el rango de $A$ y $A|b$ es el mismo, significará que el vector de términos independientes es una combinación lineal de los vectores de $A$. Es decir, una solución del sistema. Concluimos entonces que:

- Si $Rg(A) = Rg(A|b)$, el sistema tiene solución, llamado sistema compatible.
- Si $Rg(A) \neq Rg(A|b)$, el sistema no tiene solución, llamado sistema incompatible.

Hemos dado un gran paso, ahora antes de resolver un sistema, sabemos si tiene solución o no. Sólo nos queda responder a la pregunta ¿cuántas soluciones tiene un sistema compatible?

Recordemos que tanto $A$ como $b$ están predefinidos, son datos del problema, por tanto, el único vector que podemos alterar es el vector de entrada, es decir, $\vec{x}$. Recordemos su definición:

$$ 
\vec{x} = (x_1, x_2, \dots, x_n) \in \mathbb{R}^n 
$$

Es decir tenemos un número $n$ de incógnitas, si este número de incógnitas es igual al rango, obtendremos una solución única, debido a que tenemos la información justa y necesaria para obtener una única solución, a estos sistemas se les conoce como sistemas compatibles determinados.

Sin embargo, si tenemos más incógnitas que vectores linealmente independientes, es decir, si $n > Rg(A)$, obtendremos infinitas soluciones, se les conoce como sistemas compatibles indeterminados. 

Veamos algunos ejemplos de sistemas de ecuaciones:

$$
\begin{cases}
x_1+x_2=5\\
2x_1+2x_2=12
\end{cases}
$$

El rango de la matriz de coeficientes $A$ es $1$, puedes verlo fácilmente porque ambos vectores columna son iguales, sin embargo, el rango de la matriz ampliada $A|b$ es $2$, por tanto, no existe solución para este sistema de ecuaciones.

$$
\begin{cases}
x_1+x_2=2\\
3x_1-x_2=2
\end{cases} \quad
$$

En este caso, el rango de $A$ es $2$, y si te fijas bien, podemos obtener $\vec{b}$ si sumamos ambas columnas de $A$, es decir, mediante una combinación lineal:

$$ 
\begin{pmatrix} 1 \\ 3 \end{pmatrix} + \begin{pmatrix} 1 \\ -1 \end{pmatrix} = \begin{pmatrix} 2 \\ 2 \end{pmatrix} = \vec{b}\quad (\lambda_1 = 1, \lambda_2 = 1, \vec{e}_1 = \vec{v}_1, \vec{e}_2 = \vec{v}_2)
$$

Por tanto el rango de $A|b$ es $2$, y el número de incógnitas es $2$, por lo que el sistema es compatible determinado, es decir, tiene una única solución ($x_1=x_2=1$).

$$
\begin{cases}
x_1+x_2=5\\
2x_1+2x_2=10
\end{cases}
$$

En este caso, la ecuación de la segunda fila es el doble de la primera, por lo que podemos obtener:

$$
\begin{cases}
x_1+x_2=5
\end{cases}
$$

Tenemos $Rg(A) = Rg(A|b) = 1$, sin embargo tenemos dos incognitas por lo que el sistema es compatible determinado. Por tanto tiene infinitas soluciones.

$$
x_1=5-x_2 (\forall x_2 \in \mathbb{R})
$$

No nos vamos a extender en las resoluciones en si, ya que no es el objetivo principal del capítulo, queremos que entiendas todos los componentes que existen en un sistema de ecuaciones y cómo se relacionan entre sí para poder llegar a una solución lógica y no mecanizada. Llegamos al final de este módulo. Esperamos que te haya servido, en caso afirmativo, sería de gran ayuda que compartas el curso a más personas que lo necesiten y, si tienes una cuenta de GitHub, que le entregues una estrella al [proyecto](https://github.com/manulucena12/mates-abiertas).

Te dejamos un curso que puede ayudarte:

- [Esencia del Álgebra Lineal - Por 3Blue1Brown](https://youtube.com/playlist?list=PLIb_io8a5NB2DddFf-PwvZDCOUNT1GZoA&si=MucnF-VJOQ4UyWcz)