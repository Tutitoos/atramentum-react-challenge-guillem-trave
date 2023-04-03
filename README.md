# Atramentum - Prueba Técnica

¡Claro! Atramentum es un proyecto que permite gestionar los clientes de una empresa de manera más eficiente. Con esta aplicación, puedes ver una lista de todos tus clientes en una pantalla, con información como su número de teléfono, correo electrónico y otras cosas importantes. También puedes editar los detalles de cada cliente individualmente, por ejemplo, si necesitas actualizar su dirección de correo electrónico o su número de teléfono.

## Pantallas

### Listado de Clientes

Se muestra el listado de clientes en un formato conveniente para el usuario. Como no se conoce la lógica de negocio y lo que podría ser más importante para cada uno de los ámbitos de la empresa, se ha diseñado una interfaz amigable y fácil de usar que permite visualizar los elementos de forma clara.

Los datos que se han utilizado del cliente son: id, phone1, phone2, email, customerCategoryId, observations, preferredCompanyBankAccountId, deleted, activated, sectorId.

### Edición de Cliente

Al hacer clic en un cliente del listado, se accede a una página de edición del cliente. Se han mostrado varias relaciones del cliente, tales como sus números de teléfono, correo electrónico, categoría de cliente, observaciones, cuenta bancaria preferida, entre otros. Aunque no es necesario cubrir todas las relaciones, se han mostrado varias para demostrar cómo gestionar diversas llamadas.

## Tecnologías utilizadas

- Next.js
- Jest
- Testing-library
- Redux (Toolkit)
- Next-Redux-Wrapper
- Styled-components
- ESLint
- Lint-staged
- Husky
- GitHub (Workflows, Actions)
- SonarCloud

## Instrucciones de instalación y uso

1. Clonar el repositorio
2. Ejecutar `npm install` para instalar las dependencias
3. Crea un archivo `.env` con las siguientes variables de entorno:

```env
NEXT_PUBLIC_WEB_URL="<URL de la página web. Ejemplo: http://localhost:3000>"
NEXT_PUBLIC_API_URL="<URL de la API. Ejemplo: http://localhost:8000/api>"
NEXT_PUBLIC_ADMIN_USERNAME="<Nombre de usuario del administrador.>"
NEXT_PUBLIC_ADMIN_PASSWORD="<Contraseña del administrador.>"
```

4. Ejecutar `npm run dev` para iniciar la aplicación en modo desarrollo
5. Abrir [http://localhost:3000](http://localhost:3000) en un navegador web para ver la aplicación

## Autor

Este proyecto fue desarrollado por Guillem Travé Font.
