#Carvajal WishList

***
Proyecto para carvajal S.A, este proyecto permite al usuario ingresar a la pagina de los productos de carvajal S.A y de este modo interactuar con estos, puede agregar, listar y eliminar los diferentes productos que observe en la interfaz, si alguno de esos productos no está en stock, el usuario tendrá la posibilidad de agregarlo pero será notificado en la pantalla de la whislist.
***


#Table of Contents
1. [General Info]
2. [Technologies]
3. [Installation]
4. [FAQs]

***


## General Info
***

el programa está enfocado en los microservicios, por lo cual tiene diferentes puertos y un usuario y contraseña para la base de datos:

para ingresar a la base de datos el usuario por defecto y la contraseñara serán:

spring.datasource.username=root
spring.datasource.password=123456

el usuario podrá validar esto en los aplications.propierties de los microservicios.

los diferentes puertos usados son:

para el microservicio de products:
server.port=8082

para el microservicio de Users:
server.port=8083

para el microservicio de desiredList:
server.port=8083

para el microservicio de historico:
server.port=8085

la base de datos usada para este caso fue MySQL.
Para la parte del frontEnd se usó angular en el puerto 4200 y los diferentes, Urls ya vienen conectados e implementados.


***


##2. Technologies
***
1. https://angular.io/
2. https://www.mysql.com/
3. https://spring.io/projects/spring-boot
4. https://www.docker.com/products/docker-desktop/

***



##3.Installation
***
1. abra git bash
2. git clone https://github.com/alejogiraldot/CarvajalBackend.git y https://github.com/alejogiraldot/CarvajalFrontend.git


***
##4. FAQs

****

1. el producto tiene spring security?.

-Si, está implementado para el login en Angular sin embargo, por cuestiones de tiempo no se logró implementar en La parte del Back.


2. el producto presenta algun bug?.

-hasta el momento es funcional y no se ha hallado bugs.

