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
 
