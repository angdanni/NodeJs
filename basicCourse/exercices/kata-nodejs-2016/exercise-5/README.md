Ejercicio 2
==============

Ejercicio para trabajar conocimientos sobre Modules, Path, Events, Streams, FileSystem, y Console.

Continuando con el ejercicio anterior trataremos de:

* La salida de consola será redirigida a un fichero de log, strout y strerror.
* La lista de alumnos inscritos leida por el profesor consistirá en un fichero .txt que contendrá los nombres y apellidos de cada alumno en una línea diferente.
* El profesor anotará en un fichero .txt los nombres y apellidos de cada uno de los alumnos presentes, en una línea cada uno, en el momento en el que escucha la respuesta del mismo.

Condiciones:
* tratar de emplear una única instancia para llevar a cabo la trazas en los logs.
* emplear 'fs.createReadStream' para lectura del fichero. Realizar la lectura carácter a carácter.
* emplear 'fs.createWriteStream' para escritura de los alumnos presentes.