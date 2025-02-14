---
title: Cheatsheet HTB
published: false
---

---
En esta apartado especialmente se mostrara una hoja de trucos basica para hack the box nivel principiante, en esta seccion se encontrara contenido de ayuda como por ejemplo preguntas frecuentes conceptos metodologias guias comandos uso de herramientas ejemplos practicos diagramas imagenes tips y muchisimo mas todo eso en esta seccion.

---


<head>
	<link rel="icon" href="../images/htb-dark.webp">
</head>


# Índice

- <a href="#preguntas-frecuentes">Preguntas Frecuentes</a>
	- <a>Acronimos</a>
- <details>
	<summary><a style="cursor: pointer;">Puertos</a></summary>
		<details>
			<summary><a style="cursor: pointer;">Puertos TCP</a></summary>
			<ul>
				<li><a href="#21-ftpfile-transfer-protocol">21 ftp</a></li>
				<li><a href="#23-telnet">23 Telnet</a></li>
				<li><a href="#80-httphypertext-transfer-protocol">80 http</a></li>
				<li><a href="#443-httpshypertext-transfer-protocol-secure">443 https</a></li>
				<li><a href="#445-smbserver-message-block">445 smb</a></li>
				<li><a href="#6379-redis">6379 redis</a></li>
			</ul>
		</details>
	
		<details>
			<summary><a style="cursor: pointer;">Puertos UDP</a></summary>
			<ul>
				<li><a></a></li>
			</ul>
		</details>
  </details>

- <a href="#tools">Tools</a>
	- <a href="#gobuster">Gobuster</a>
- <a href="#ataques">Ataques</a>
	- <a href="#sql-injection">sql injection</a>


# Preguntas frecuentes

#### ¿Qué es VM?

**VM** (Virtual Machine o Maquina virtual) conciste en una maquina no alajada localmente en tu sistema operativo base, esta maquina esta montada en un servicio en la nube, normalmente se usa para pruebas o entornos controlados.

#### ¿Qué herramienta utilizamos para interactuar con el sistema operativo con el fin de emitir comandos a través de la línea de comandos?

Terminal o consola.

#### ¿Qué servicio usamos para formar nuestra conexión VPN en laboratorios HTB?

openvpn.

#### ¿Qué herramienta usamos para probar nuestra conexión al objetivo con una solicitud de eco ICMP(Internet Control Message Procotol)?

ping.

#### Cuál es el nombre de la herramienta más común para encontrar puertos abiertos en un objetivo? 

nmap (Network Mapper).

#### Cómo se llama una carpeta en la terminología de aplicación web? 
directory.

# Puertos TCP (Transmission Control Protocol)
----
En esta seccion se encontrara preguntas sobre puertos en especifocos tips comandos conceptos.

----

## 21 ftp(File Transfer Protocol)

<dl id="questions">
	<dt><b>Qué significa el acrónimo FTP de 3 letras? 
</b></dt>
	<dd>Protocolo de Transferencia de Archivos.</dd>
	<dt><b>FTP envía datos a la claridad, sin ningún cifrado. Qué acrónimo se utiliza para un protocolo posterior diseñado para proporcionar una funcionalidad similar a FTP pero de forma segura, como una extensión del protocolo SSH? 
</b></dt>
	<dd>sftp (Secure File Transfer Protocol).
</dd>
	<dt><b>Cuál es el comando que tenemos que ejecutar para mostrar el menú de ayuda al cliente 'ftp'? 
</b></dt>
	<dd>help.
</dd>
	<dt><b>Qué es el nombre de usuario que se utiliza a través de FTP cuando desea iniciar sesión sin tener una cuenta? 
</b></dt>
	<dd>anonymous.</dd>
	<dt><b>Cuál es el código de respuesta que obtenemos para el mensaje FTP 'Login successful'? 
</b></dt>
	<dd>230 Login succesful.</dd>
	<dt><b>Cuál es el comando utilizado para descargar el archivo que encontramos en el servidor FTP? 
</b></dt>
	<dd>get.</dd>
	
	<dt><b>Cómo conectarse con ftp</b></dt>
	<dd>ftp 129.100.1.16</dd>
</dl>


## 23 Telnet

<dl id="questions">
	<dt><b>Qué servicio identificamos en el puerto 23/tcp durante nuestros escáneres? 
</b></dt>
	<dd>telnet</dd>
	
	<dt><b>Qué nombre de usuario es capaz de conectarse al objetivo sobre telnet con una contraseña en blanco? </b></dt>
	<dd>root</dd>
	<dt><b>Cómo conectarse con telnet</b></dt>
	<dd>telnet 10.129.21.64</dd>
</dl>

## 80 http(HyperText Transfer Protocol)
<dl id="questions">
	<dt><b>Cuál es el código de respuesta HTTP que se da para errores de 'No encontrado'? </b></dt>
	<dd>404 not found</dd>
</dl>


## 443 https(HyperText Transfer Protocol Secure)

## 445 SMB(Server Message Block)
<dl id="questions">
	<dt><b>Qué significa el acrónimo de 3 letras SMB? </b></dt>
	<dd>Bloque de Mensajes al servidor</dd>

	<dt><b>Qué es la 'banda' o 'interrupción' que podemos usar con la utilidad de smbcliente para 'listar' las acciones disponibles en Dancing? </b></dt>
	<dd>smbclient -L //100.20.11.30/</dd>

	<dt><b>Cuál es el comando que podemos usar dentro de la shell SMB para descargar los archivos que encontramos? </b></dt>
	<dd>get</dd>
</dl>

## 3306 MySql
<dl id="questions">
	<dt><b></b></dt>
	<dd></dd>
</dl>

## 6379 redis
<dl id="questions">
	<dt><b>Qué tipo de base de datos es Redis? Elija entre las siguientes opciones: i) Base de datos de memoria, (ii) Base de datos tradicional </b></dt>
	<dd>Base de datos de memoria</dd>

	<dt><b>Qué utilidad de línea de comando se utiliza para interactuar con el servidor Redis? Introduzca el nombre del programa que usted introduciría en el terminal sin ningún argumento. </b></dt>
	<dd>redis-cli</dd>

	<dt><b>Qué bandera se utiliza con la utilidad de línea de comandos Redis para especificar el nombre de host? </b></dt>
	<dd>-h</dd>

	<dt><b>Una vez conectado a un servidor Redis, qué comando se utiliza para obtener la información y estadísticas sobre el servidor Redis? </b></dt>
	<dd>info</dd>

	<dt><b>Qué comando se utiliza para seleccionar la base de datos deseada en Redis? </b></dt>
	<dd>select</dd>

	<dt><b>Qué comando se utiliza para obtener todas las teclas en una base de datos? </b></dt>
	<dd>keys *</dd>
</dl>


# Puertos UDP

# Tools

## Gobuster
<dl id="#questions">
	<dt><b>Gobuster es una herramienta utilizada para los directorios de fuerza bruta en un servidor web. Qué interruptor usamos con Gobuster para especificar que estamos buscando descubrir directorios, y no subdominios? </b></dt>
	<dd>dir</dd>
</dl>


# Ataques

## sql injection
<dl id="questions">
	<dt><b>Qué significa el acrónimo SQL? </b></dt>
	<dd>Structured Query Language</dd>

	<dt><b>Cuál es uno de los tipos más comunes de vulnerabilidades SQL?</b></dt>
	<dd>sql injection</dd>

	<dt><b>Cuál es la clasificación 2021 OWASP Top 10 para esta vulnerabilidad? </b></dt>
	<dd>A03:2021-injection</dd>

	<dt><b>Qué personaje único se puede utilizar para comentar el resto de una línea en MySQL? </b></dt>
	<dd>#</dd>
</dl>







<script src="../assets/script-bash.js"></script>

