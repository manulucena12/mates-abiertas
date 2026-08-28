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