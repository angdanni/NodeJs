Ejercicio 1
==============

Ejercicio para trabajar conocimientos sobre Modules, Events y Console.

Hello Teacher!

Imaginemos que existe un aula en la que se va a impartir un curso de Node. Este aula será nuestro app.js. 
En dicho aula hay un profesor, Mr. Teacher, que pasará lista antes de impartir el curso. Para ello dispondrá de una lista que contiene cada uno de los nombres y apellidos de los alumnos inscritos. El profesor mencionará, uno a uno, los nombres de los alumnos. Los alumnos estarán escuchando atentamente al profesor y estos responderán, emitiendo un saludo, cuando su nombre sea pronunciado. El profesor estará atento a los saludos de los alumnos para tomar nota de los allí presentes.

Condiciones:
* profesor y alumnos tienen un nombre y apellidos.
* no existen dos alumnos que tengan el mismo nombre y apellidos.
* la lista de alumnos inscritos consistirá en un array de Strings.
* una vez entra el profesor en el aula no podrán entrar más alumnos.
* cada saludo, tanto por parte del profesor como por parte de los alumnos, será reflejado a través de la consola.
* previo a cada mensaje escribiremos el nombre de la persona que lo emite. 
	Por ejemplo:
	
		>> "Mr. Teacher: Daniel Sanjuán"
		
		>> "Daniel Sanjuán: Hello Mr. Teacher"
* el profesor tomará nota escribiendo, por consola, el nombre del alumno correspondiente. 

	Por ejemplo: 
		
		>> "Daniel Sanjuán is present".