# Programación Reactiva

### ¿Cuándo usar RxJS?
- Tiempo real
- Eventos en la interfaz de usuario
- Cuando es necesario notificar sobre cambios en un objeto
- Comunicaciones por sockets
- Cuando necesitamos trabajar con flujos de información
- etc...

### Piezas fundamentales de la programación Reactiva

### Observables
- Son la fuente de información
- Pueden emitir multiples valores, sólo uno o ninguno
- pueden emitir errores
- Pueden ser infinitos, finitos
- Pueden ser síncrono o asíncronos

### Subscribers
- Se subscriben a un observable, es decir, estar pendiente de lo que realiza el observable
- Consumen / observan la data del observable
- Pueden recibir los errores y eventos del observable
- Desconocen todo lo que se encuentra detrás del observable

### Operators / Operadores
- Usados para transformar Observables (map, group, scan...)
- Usados para filtrar observables (filter, distinct, skip, debounce...)
- Usados para combinar observables
- Usados para crear nuevos observables

## Beneficios de la programación reactiva
- Evitar el 'Callback Hell'
- Trabajar de forma simple tareas sincronas y asíncronas
- Uso de operadores para reducir y simpificar el trabajo
- Es fácil transformar los flujos (streams) de información
- Código más limpio y fácil de leer
- Fácil de implementar
- Fácil anexar procedimientos sin alterar el producto final

# ¿ReactiveX || rxjs?
- Una API para programación asíncrona usando observables
- Patrón observer hecho o implementad de manera correcta
- Es la combinación de las mejores ideas del patrón observer, el patrón iterador y la programación funcional

### Patrón Observer
- Es un patrón de diseño de software que define una dependencia del tipo uno a muchos entre objetos, de manera que cuando uno de los objetos cambia su estado, notifica este cambio a todos los dependientes.

### Patrón Iterador
- En POO, el patrón iterador define una interfaz que declara los métodos necesarios para acceder secuencialmente a un grupo de objetos de una colección.
Ejemplo:
primero(),siguiente(),hayMas() y elementoActual()

### Programación Funcional
- Es básicamente, crear un conjunto de funciones que tengan un objetivo específico. Es decir, si tengo una función que reciba 'A', y retorna 'A + 1', siempre que yo llame esa función, retornará 'A + 1' sin efectos secundarios, sin mutar la data.

### Observer Pattern
- Notificar cuando suceden cambios

### Iterator Pattern
- Poder ejecutar operaciones secuenciales

### Programación Funcional
- Tener funciones con tareas específicas que reciban argumentos y no muten la información

## Funciones para crear Observables
- of
- from
- fromEvent
- range
- interval and timer
- asyncScheduler

## Operadores usados regularmente
- map
- pluck
- mapTo
- filter
- tap
- reduce
- scan

## Operadores no tan comunes
- take
- first
- takeWhile
- takeUntil
- skip
- distinct

## Operaciones CRUD - Ajax con rxjs
- ajax-catchError
- getJSON
- POST-PUT-DELETE - ajax
