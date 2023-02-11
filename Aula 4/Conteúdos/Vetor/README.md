Qual a diferença de "var i, a = [];" para "var i, a = new Array();"?


A primeira declaração, var i, a = [], cria uma variável i e uma variável a que aponta para um novo array vazio. É uma forma de inicializar um array em JavaScript.

A segunda declaração, var i, a = new Array(), também cria uma variável i e uma variável a, mas neste caso a variável a aponta para um novo objeto Array. Isso significa que ao invés de criar uma array literal, estamos criando um novo objeto Array usando o construtor Array.

A diferença entre ambos é que o primeiro é uma forma mais simples e direta de criar um array, enquanto o segundo permite criar arrays com argumentos que especificam o tamanho do array ou seus elementos iniciais. Por exemplo, var a = new Array(5) cria um novo objeto Array com 5 elementos vazios, enquanto var a = new Array(1, 2, 3) cria um objeto Array com os elementos 1, 2, 3.

Em geral, é recomendável usar a primeira forma de criar arrays, pois é mais curta e mais fácil de ler.