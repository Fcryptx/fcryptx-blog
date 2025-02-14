---
title: Google Hacking
published: false
---

<head>
	<link rel="icon" href="../images/google-icon.png">
	<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=search" />
</head>

---
**Google hacking** (también conocido como **google dorking**) se refiere a la búsqueda avanzada que realizamos dentro de Google utilizando los operadores que este mismo nos proporciona para realizar estas búsquedas avanzadas, pudiendo llegar a encontrar sitios web con fallos de seguridad, servidores públicos o simplemente información sensible, la cual es de nuestro interés.

---

## Índice
- <a href="#introducción-al-google-hacking">Introducción al google hacking</a>
	- <a href="#qué-es-osint">Qué es OSINT?</a>
	- <a href="#qué-es-un-dork">Qué es un Dork?</a>
- <a href="#operadores">Operadores</a>
	- <a href="#operadores-basicos">Operadores basicos</a>
	- <a href="#operadores-avanzados">Operadores avanzados</a>
- <a href="#dorks">Dorks</a>

## Introducción al google hacking
Bueno, para no aburrir contando historias o temas que no van de la mano, pasemos a los términos que realmente se usan en el Google Hacking, aunque su verdadero nombre sería **Google Dorking**, ya que se trata de usar **dorks** para agilizar nuestras búsquedas. Además, Google Dorking se utiliza como herramienta para **OSINT**.

### Qué es OSINT?
¿Qué es **OSINT** (_Open Source Intelligence_)? Bueno, la traducción en español sería Inteligencia de Fuentes Abiertas, la cual se suele usar para buscar información sensible, ya sea de cualquier red social o página web que sea pública o esté indexada por Google.

En nuestro caso, con Google Hacking ocurre lo mismo, solo que dentro del OSINT tenemos muchísimas más herramientas. Básicamente, Google Hacking es solo otra herramienta más dentro de OSINT.

### Qué es un Dork?
Un **dork** es la combinación de dos o más **operadores** que nos sirven para buscar algo en concreto o, al menos, acercarnos más a nuestra búsqueda de interés. Estos operadores, que Google nos proporciona, los he clasificado en dos categorías: operadores básicos y operadores avanzados.

Bueno, nos habíamos quedado en que Google Hacking, como concepto o metodología, nos permitirá utilizar estas técnicas a nuestro favor. Para ello, será fundamental aprender a usar correctamente estos operadores que Google nos proporciona, comprender bien su uso y combinarlos para crear nuestros propios dorks, con el fin de buscar información de nuestro interés.

## Operadores
Estos operadores, como ya mencionamos, son proporcionados por el mismo Google. No son más que palabras clave o caracteres especiales que, según su significado, nos permitirán realizar tareas específicas.

Por ley, catalogamos los operadores se clasificarán en dos tipos: **operadores básicos** y **operadores avanzados**.

### Operadores basicos


<dl>
	<div id="operadores">
		<dt><b>""</b></dt>
			<dd>El operador de dobles comillas nos permite calibrar mejor nuestra búsqueda y hacerla más precisa.</dd>
			<dd id="searching"><span class="material-symbols-outlined">search</span><b>"Haz lo que puedas donde estés con lo que tienes y no te preocupes por el resto"</b></dd>
			<dd>En este caso, nosotros usamos el operador de dobles comillas para encontrar esta frase; como resultado, tendremos información sobre esta frase aún más relevante.</dd>
		<dt><b>-</b></dt>
			<dd>El operador dde resta o <b>"-"</b> nos permite exluir palabras claves de nuestra busqueda</dd>
			<dd id="searching"><span class="material-symbols-outlined">search</span><b>"Messi" -ronaldo</b></dd>
			<dd>Por ejemplo queremos buscar informacion relacionada con messi pero no queremos ver informacion relacionado con ronaldo(Cristano ronaldo), podemo susar el operador <b>"-"</b> para exluuirlo y de igualmanera se le puede exluir aun mas agregando mas palabras claves con el mismo operador (-ronaldo -cr7 -CR7 -bicho)</dd>

		<dt><b>+</b></dt>
			<dd>El operador de suma o <b>"+"</b> al contrario del de resta este operador nos permite agregar mas palabras claves a nuestra busqueda en vez de exluir</dd>
			<dd id="searching"><span class="material-symbols-outlined">search</span><b>Pasteles +menta</b></dd>
			<dd>Por ejemplo buscaremos pasteles pero usando el operador de suma "+" podemos incluir a nuestra busqueda mas palabras claves como "mnta", la cual estaremos viendo en los resultados de nuestra busqueda</dd>

		<dt><b>*</b></dt>
			<dd>Este operador "*" sustituiye palabras claves en nuestra busqueda.</dd>
			<dd id="searching"><span class="material-symbols-outlined">search</span><b>"el * carro"</b></dd>
			<dd>Este ejemplo va a indexar cual informacion en la que haya la palabra el *(cualquier palabra) carro, por ejemplo el peor carro, el mejor carro, el primer carro etc.</dd>

		<dt><b>site:</b></dt>
			<dd>Este operador <b>"site"</b> nos permitira indexar el contenido respecto al sitio web que nosotros le especifiquemos.</dd>
			<dd id="searching"><span class="material-symbols-outlined">search</span><b>peliculas site:dive.google.com</b></dd>
			<dd>Por ejemplo aqui estamos buscando "peliculas" en el sitio web que nosotros le proporcionemos que en este caso es drive de google, esto nos indexara espacios en la nube publicos lo cual tienen este contenido relevante para nosotros</dd>

		<dt><b>filetype:</b></dt>
			<dd>Este operador filtrará por el tipo de archivo el cual nosotros le especifiquemos.</dd>
			<dd id="searching"><span class="material-symbols-outlined">search</span><b>libros filetype:pdf</b></dd>
			<dd>Este ejemplo nos permitira indexar por el tipo de archivo el cual es "pdf" y buscar relacionado a "libros", entonces tendremos libros con extencion .pdf el cual podemos leer publicamente.</dd>

		<dt><b>ext:</b></dt>
			<dd>Este operador es similar al de <b>filetype:</b> pero el operador <b>ext:</b> no confirma si los archivos son del tipo de archivo que nosotos le hayamos especificado.</dd>
			<dd id="searching"><span class="material-symbols-outlined">search</span><b>libros ext:pdf</b></dd>
			<dd>Como vemos el operador "ext" es similar al "filetype" pero ext no confirma que el archivo sea estrictamente del tipo que nosotros le hayamos especificado al inicio de la busqueda.</dd>

		<dt><b>inurl:</b></dt>
			<dd>Este operador indexa por una palabras clave dentro de la url especifica.</dd>
			<dd id="searching"><span class="material-symbols-outlined">search</span><b>inurl:google-dorking</b></dd>
			<dd>Si vemos bien al realizar esta busqueda dentro de las url's la cuales nos indexo google vemos que la palabra clave se encuentra en esa url.</dd>
			
		<dt><b>allinurl:</b></dt>
			<dd>Este operador indexa por mas de una palabra clave en una url especifica</dd>
			<dd id="searching"><span class="material-symbols-outlined">search</span><b>allinurl:google dorking</b></dd>
			<dd>Por ejemplo en nuestro ejemplo pasado usamos uso de una palabra clave, con "allinurl" podemos usar mas de una palabra clave como google o dorking o aun mas.</dd>

		<dt><b>intext:</b></dt>
			<dd>Este operador nos permite indexar por contenido dentro de una pagina web, siendo mas exactos dentro de la etiqueta <b>&lt;body&gt;</b> de la pagina web.</dd>
			<dd id="searching"><span class="material-symbols-outlined">search</span><b>intext:"google dorking"</b></dd>
			<dd>Por ejemplo buscaremos "google dorking", esta busqueda se centrara en buscar el contenido que nosotros le especificamos dentro de la etiqueta html &lt;body&gt;.</dd>
		<dt><b>allintext:</b></dt>
			<dd>Este operador al igual que "allinurl" se usa para buscar mas de una palabra clave</dd>
			<dd id="searching"><span class="material-symbols-outlined">search</span><b>allintext: google dorking</b></dd>
			<dd>Vemos que podemos buscar con mas de una palabra clave con este nuevo operador.</dd>
		<dt><b>intitle:</b></dt>
			<dd>El operador <b>intitle</b> se usa para indexar por el contenido dentro de la etiqueta title de la pagina web.</dd>
			<dd id="searching"><span class="material-symbols-outlined">search</span><b>intitle:"hacking google"</b></dd>
			<dd>Por ejemplo nostros buscaremos hacking google, esto nos va a mostrar paginas web que en su titulo llevan estas palabras claves.</dd>
		<dt><b>allintitle:</b></dt>
			<dd>Este operador al igual que intitle se usa para especificarle mas de una palabra clave</dd>
			<dd id="searching"><span class="material-symbols-outlined">search</span><b>allintitle:gogle hacking</b></dd>
			<dd>En esta ocasion nosotros estaremos buscando paginas web que en su titulo tengo la palabra clave google y hacking.</dd>
	</div>
</dl>



### Operadores avanzados
Ya habiendo visto las operadores basicos que nos proporciona el mismo google, ya es de cada uno que quiera buscar y concatenar o juntar cuantos pueda de operadores para hacer un dork, ahora les mostrare los operadores que son un poco mas avanzados.

Estos operadores son mas avanzados que los basicos ya que usamos conceptos de lenguajes de programacion hasta base de datos o como esta compuesto una pagina web.

<dl>
	<div id="operadores">
		<dt><b>AND</b></dt>
			<dd>Este operador <b>AND</b> sirve como cualquier otro operador logico and.</dd>
			<dd id="searching"><span class="material-symbols-outlined">search</span><b>intext:"Google hacking" AND filetpye:pdf</b></dd>
			<dd id="searching"><span class="material-symbols-outlined">search</span><b>intext:"Google hacking" && filetpye:pdf</b></dd>
			<dd>Bueno, como vemos, ya empezamos a crear dorks juntando varios operadores en la misma búsqueda. Ahora, expliquemos la función de este operador lógico. </dd><dd>Lo que observamos, por así decirlo, son dos condiciones. El operador "AND" funciona de tal manera que, si la primera condición es correcta, la segunda también se tomará como correcta. Pero si la primera no se cumple, la segunda tampoco lo hará.</dd><dd>Ahora habran pensado que eso es iugal que "intext:"Google hacking" filetype:pdf" basicamente es lo mismo, pero puse aqui este operador para que vean como trabaja.</dd>
		<dt><b>OR</b></dt>
			<dd>Este operador funciona he igual que un operador logico or.</dd>
			<dd id="searching"><span class="material-symbols-outlined">search</span><b>intext:"cualqcosanoindexada" OR intext:"google dorking"</b></dd>
			
			<dd id="searching"><span class="material-symbols-outlined">search</span><b>intext:"cualqcosanoindexada" || intext:"google dorking"</b></dd>
			<dd>Vemo q en este operador hay dos condiciones, bueno el operador logico or trabaja con q si una condicion no es correcto pasa ala siguiente condicion o almenos la que sea correcta en este caso "correcto" signifca que si tiene informacion para indexar.</dd>
	</div>
</dl>

## Dorks
En esta sección veremos algunos dorks de ejemplo y explicaremos para que se usa cada dork
<dl>
	<div id="dorks">
		<dt id="searching"><span class="material-symbols-outlined">search</span><b>filetype:txt intext:gmail.com intext:password</b></dt>
			<dd>Con este dork podremos buscar archivos con contraseñas almacenadas.</dd>
	</div>
</dl>

