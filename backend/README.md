# TISSINI-API Documentacion

# ENDPOINTS

## /api/products --- *GET*

retorna un Array con todos los productos disponibles

|Propiedad | Tipo de Dato |             
|----------------|--------|
| sizes | Array    |           
|name | String     |
|refere | String |
|price| Number |           
|imageUrl | String     |
|ProductLine| String |
|instantDelivey| Boolean|           
|gender| String     |
|stock| Number|
|productImages | Array    |  

## /api/products -- *POST*   
recibe como parametros en el body de la peticion:    
|Propiedad | Tipo de Dato |             
|----------------|--------|
| sizes | Array    |           
|name | String     |
|refere | String |
|price| Number |           
|imageUrl | String     |
|ProductLine| String |
|instantDelivey| Boolean|           
|gender| String     |
|stock| Number|
|productImages | Array    |    

## /api/auth/login -- *POST*
recive como parametro en el body de la peticion un **phoneNumber** y retorna un JsonWebToken con el _id del usuario
## /api/auth/register -- *POST*
recive como parametro en el body de la peticion un  **phoneNumber, name, email, password** 

## /api/user -- *POST*
recibe en el body de la peticion un **jsToken** y retorna un array con la informacion del usuario
