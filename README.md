# TaskManager

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.5.

## Introducción

Este tutorial te llevará a experimentar y conocer el mundo de Angular paso a paso creando tu propio Administrador de tareas.

Durante este tutorial vamos a utilizar Angular CLI, local storage y vamos a deployar la aplicación con firebase.

Al finalizar este tutorial tendrás tu propia aplicación de administrador de tareas que mostrará una lista de tareas y te permitirá añadir, completar, editar y eliminar una tarea. La lista de tareas será almacenada en el local storage del navegador de esta amnera todos los cambios que realices se mantendrán incluso cuando refresques la página (siempre que uses el mismo navegador en la misma computadora y no en modo incógnito).

Hecha un vistazo a lo que lograrás al completar este tutorial [Demo](https://tw-task-manager.web.app).

![Imagen de la aplicación](assets/todo-list-app.PNG)

En este tutorial aprenderás conceptos básicos e importantes de Angular, después te animamos a continuar desarrollando y añadiendo muchas más mejoras y características de usabilidad a tu propio administrador de tareas (dale tu toque).

Bueno, ¡empecemos!

## ¿Qué es Angular?

Angular es un framework que nos ayuda a desarrollar sitios web de manera fácil y rápida

Angular es un framework de aplicaciones web, gratuito de código abierto (open source) desarrollado en typescript, creado y mantenido por Google, utilizado para el desarrollo de aplicaciones web de una sola página (Single page Application - SPA).

Los frameworks nos sirven para que not engamos que reinventar la rueda cada vez y crear applicaciones de manera más rápida.

## ¿Qué es una Single Page Aplication (SPA)?

Conocida como web de una sola página en la cual la navegación entre secciones y páginas de la aplicación, así como la carga de datos se realiza de manera dinámica, casi instantánea, asincronamente haciendo llamadas al servidor y sobre todo sin refrescar la página en ningún momento.

Es decir las aplicaciones web que podemos hacer con Angular son reactivas y nor recargan el navegador, todo es dinámico.

## Intalación del ambiente de desarrollo

Para poder realizar este tutorial necesitamos:

- Un navegador instalado (Chrome/Firefox)
- [NodeJs](https://nodejs.org/en/) y NPM instalado en nuestra computadora para ejecutar scripts y buscar librerias adicionales (cuando instales NodeJs se te intalará NPM automáticamente).
- Un editor de código por ejemplo: [VSCode](https://code.visualstudio.com/download).
- Para finalizar y poder deployar tu aplicación necesitarás de una cuenta gmail para usar Firebase.

**Plugins:** Los plugins ayudan a los editores a entender el código. Si decides usar VS Code, te recomiendo intalar los siguientes plugins: [Angular Essentials extension pack](https://marketplace.visualstudio.com/items?itemName=johnpapa.angular-essentials), [Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens)

**NodeJS:** Permite correr código JavaScript en tu computadora. Se usa para correr un servidor local en el cual se levantará la aplciacion como si fuera un servidor web real.

**NPM:** Permite descargar e intalar diferentes librerias de internet y manejar sus diferentes versiones.

## Crear un proyecto con Angular CLI

Angular CLI en una herramienta poderosa que simplifica mucho el proceso de desarrollo. Te permite instalar librerias que se usarán en el proyecto actual y futuro.

Intalaremos Angular CLI globalmente utilizando NPM corriendo el siguiente comando en la terminal de tu computadora:

```shell
$ npm i -g @angular/cli
```

Este comando corre NPM para buscar el paquete Angular CLI e instalarlo en nuestra computadora.

Una vez tengas instalado Angular CLI podrás crear un proyecto Angular en cualquier dirección de tu computadora. Cuando te encuentres en la carpeta donde quieras crear el proyecto, ejecuta el siguiente comando:

```shell
$ ng new task-manager --prefix=tm --skip-tests --verbose
```

- ```ng new [proyect-name]``` es el comando que se utiliza en Angular CLI para que se nos genere un nuevo proyecto con Angular
- ```--[options]``` son configuraciones añadidas al momento de crear nuestro proyecto.
  - --prefix=tm: permitira que nuestro prefijo para cada componente sea ```tm```
  - --skip-tests: para que no se generen automaticamente archivos "spect.ts" que son los archivos para escribir test, por ahora para este tutorial no nos interesa crear esos archivos.
  - --verbose: para que se nos muestre el progreso en consola a detalle cuando se crea el proyecto. [[documentación]](https://angular.io/cli/new)

## Revisar el proyecto

Antes de empezar a hacer código revisaremos el proyecto que nos generámos con Angular CLI, la estructura del módulo, componente y cómo funciona Angular.

Abre el folder ```task-manager``` en tu editor de código. Todos los archivos relevantes se encuentran dentro de la carpeta src.

Abre el archivo index.html. el contenido que se renderiza en la ventana del navegador es la representación de todo el código que vemos dentro de la etiqueta `<body>`. Te habrás dado cuenta que todo lo que se encuentra dentro de esa etiqueta es otra etiqueta no html: `<tm-root></tm-root>`. Esta etiqueta es un componente Angular que está definido en el componente app/app.component.ts con la clase AppComponent.

Por lo tanto `<tm-root></tm-root>` no es una etiqueta HTML, es un componente de Angular. Cuando la aplicación esta lista, el contenido del componente es insertado dentro de `<tm-root></tm-root>` y de esa manera podrás visualizarlo en el navegador.

## NgModule

Angular necesita que definamos las cosas que queremos compilar. Para eso definimos modulos o NgModules que son como paquetes de cosas relacionadas. Estos paquetes puede incluir componentes, servicios, directivas, pipes y otros módulos. Nosotros ya tenemos un modulo raíz definido en al archivo app/app.module.ts. Demos un vistazo al archivo.

La última línea define una clase en JavaScript.

```typescript
export class AppModule { }
```

export es una palabra reservada en JS. Exporta lo que se define despues de la palabra expor, en este caso es una clase AppModule, de esa manera otros archivos pueden usar el código exportado utilizando la declaración import.

Cada entidad en Angular (NgModule, components, directives, services and pipes) es solo una clase con un decorador. el decorador le dice a Angular cúal es el papel de esta clase.

```@NgModule({...})``` es un decorador. Un decorador es una función. un decorador mira lo que está escrito justo después de la llamada a la función y lo recibe como argumento. Por ejemplo en este caso, NgModule recibe la clase AppModule y le agrega métodos y paramétros que luego serán usados por Angular. De esta manera Angular reconocerá que esta clase representa un NgModule.

Lo que pasamos a la funciona decoradora es usado por Angular para "decorar" la clase. Puedes observar que pasamos un objeto con diferentes atributos, cada atributo es una lista de otras clases.

- **Declarations:** es una lista de elementos de Angular que son relevantes para este módulo. pueden usarse entre si. Por ahora apsamos solo un componente: AppComponent, porque es todo lo que tenemos en nuestra aplicación en este momento.
- **imports:** es una lista de otros NgModules que son necesarios para este módulo, por ejemoplo puse ser que se necesite usar elementos del módulo FormModule dentro del componente AppComponent.
- **bootstrap:** este atributo es relevante solo NgModule raíz. Este atributo le dice a Angular qué componente debe usarse como componente raíz de la aplciación. Cada componente puede utilizar otros componentes en sus platillas pero tenemos un componente raíz que inicia toda la aplicación. Entonces en realidad obtenemos una estructura en árbol de los componentes que contruyen nuestra aplicación. En este caso el componente raíz es AppComponent (con el selector ```<tm-root></tm-root>```).

¿Cómo Angular sabe que AppModule el el NgModule raíz?. Esto está definido en el archivo main.ts.

```typescript
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
```

## Componente

Un enfoque en el desarrollo we es la arquitectura basada en componentes.

Un componente es un objeto de software, destinado a interactuar con otros componentes, encapsulando cierta funcioanlidad o un conjunto de funcionalidades.

En las aplicaciones web, un componente controla una vista. Es parte de lo que eventualmente se verá en pantalla. Tiene una plantilla que define su estructura visual. También tiene una lñogica que define el comportamiento de los valores dinñamicos. La parte lógica es el código JavaScript y se llama controlador.

Daremos un vistazo al componente que ha sido creado por Angula CLI. Abrir el archivo src/app/app.component.ts

De la misma manera que con NgModules, un componente es definido por una clase con un decorador:

```typescript
export class AppComponent {
  title = 'task-manager';
}
```

Esta clase tiene un propiedad llamado title que es usado en el archivo app.component.html:

```html
<span>{{ title }} app is running!</span>
```

Las llaves dobles y su contenido son llamados interpolación. Es una forma de enlace de datos en Angular. Cuando Angular compila el código lo convierte a código JS. En uno de los pasos de compilación Angular busca por los enlaces dentro del template.

esta es una forma de vincular miembros del controlador del componente a su plantilla. ¿Cómo sabe Angular que esta es la plantilla del componente de la aplicación?

En el archivo app.component.ts vemos algunos metadatos dentro del decorador `@Component({...})`

```typescript
@Component({
  selector: 'tm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
```

pasamos un objeto de definiciones al decorador, muy similar a lo que vimos con el decorador NgModule. La segunda propiedad `templateUrl`, le dice a Angular dónde buscar la plantilla adjunta al componente. La tercera propiedad `styleUrls` le dice a Angular dónde buscar los archivos de estilos de este componente. Puede tener varios archivos de estilos por esa razón `styleUrls` es una lista. La primera propiedad `selector`, le dice a Angular cúal será el nombre de la etiqueta que se usará para llamar al componente. [[Documentación]](https://angular.io/guide/component-overview)

## Crear componente

Vamos a crear un nuevo componente que nos permitirá añadir una nueva tarea a nuestro administrador de tareas. Este componente estará compuesto por un input o una caja de texto de entrada y un botón. Lo llamaremos `input-button`.

usaremos Angular CLI para generar todos los archivos necesarios

Abre otra terminal o consola y escribe el siguiente comando para crear un nuevo componente:

```shell
$ ng generate component input-button
```

Como vimos en ejemplos anteriores, `ng` es el comando para usar Angular CLI. Existe una versión corta para escribir el comando de arriba `ng g c input-button` cualquiera de los dos comandos funciona bien (solo ejecuta uno).

daremos un vistazo a la nueva carpeta creada. La carpeta se llama src/app/input-button, dentro tenemos tres archivos:

- **input-button.component.css:** aquí se colocarán los estilos específicos para este componente.
- **input-button.component.ts:** es el archivo del componente donde definiremos la lógica.
- **input-button.component.html** es la plantilla HTML.

Abre el archivo input-button.component.ts. Podrás observar que Angular CLI a generado la configuración del componente por nosotros, incluyendo el selector.

Ahora podemos utilizar el componente `<tm-input-button></tm-input-button>` tal y como está y ver los resultados.

Abre el archivo app.component.html y copia el siguiente código:

```html
<h1>{{title}}</h1>

<tm-input-button></tm-input-button>
```

¡Revisa que vemos en el navegador!.

Añadamos cósigo a nuestro controlador input-button.component.ts, le añadiremos una propiedad title, el cúal representará el título de nuestras tareas.

```typescript
export class InputButtonComponent implements OnInit {
  title = 'Hello World';
```

Esta nueva propiedad no va a interferir con la propiedad title dentro de app.component.ts, ya que el contenido de cada componente está encapsulado dentro de él.

input-button.component.html

```html

  <p>
    input-button works!
    The title is: {{ title }}
  </p>
```

## Clase

Una clase es una estructura de programación especial. Una clase puede tener propiedades y métodos. Las instancias de la clase se crean generalmente llamando al operador `new`. Por ejemplo: `let myInstance = new myClass()`. La instancia creada es un objeto en el cual puedes llamar a los métodos de clase y obtener/establecer los valores de sus propiedades. Se pueden crear varias instancias a partir de una clase.

## En Angular

Angular se encarga de crear instancias de las clases que definamos. El decorador hace esa conexión con Angular.

Cada vez que utilizamos un componente dentro una plantilla de código HTML, se crea una nueva instancia de ese componente. Por ejemplo aquí se crearán tres instancias de la clase `InputButtonComponent`:

```html
  <tm-input-button></tm-input-button>
  <tm-input-button></tm-input-button>
  <tm-input-button></tm-input-button>
```

## implements OnInit

Miremos el archivo input-button.component.ts.

Lo primero que vemos es algo que se añadió al nivel de la declaración de la clase:

```typescript
export class InputButtonComponent implements OnInit {
  ...
}
```

**OnInit** es una interfaz (una estructura definida pero no implementada como clase). Define que propiedades y/o métodos deberían existir en la clase que lo implementa. En este caso OnInit es una interfaz para los componentes de Angular que implementa el método `ngOnInit`. Este método es un método de ciclo de vida del componente [[documentación](https://angular.io/guide/lifecycle-hooks)]. Angular llamará a este método después de que se cree la instancia del componente.

Angular CLI agrega esta implementación para recordarnos que es mejor inicializar cosas en el componente a través del método ngOnInit.

## Contructor

Es un método que es llamado por JavaScript cuando una instancia de la clase es creada. Cualquier cosa que se encuentre dentro este método es usado para crear la instancia. Por esa razón se llama antes que el método ngOnInit.

## Vinculación de propiedades (Property Binding)

 Ahora tenemos nuestro componente input-button, pero no tiene mucha funcionalidad. Vamos a llevarlo a la vida.

 Añadiremos un botón y un cuadro de entrada de texto (input) y haremos que se muestre el contenido de la propiedad title. Dentro del archivo input-button.component.html:

 ```html
  <p>
    input-button works!
    The title is: {{ title }}
  </p>

  <input>
  <button>Save</button
 ```

Recordemos que utilizamos la interpolación para mostrar el valor dentro la propiedad title en la vista.

¿Cómo hacemos que el valor de title se muestre dentro el cuadro de texto (input)?

Cada elemento `input` tiene un atributo `value`, que contiene la cadena que se muestra dentro del cuadro de texto. En HTML podemos pasar directamente un texto al atributo value del elemento:

```html
<input value="Hello World">
```

Pero perderiamos el enlace dinámico entre la propiedad en el controlador y la plantilla.

Angular nos permite enlazar propiedad a las plantillas de manera fácil y conveniente; Ya revisamos cómo funciona la interpolación. Ahora veremos cómo enlazar la propiedad de un elemento and la propiedad de una clase. Rodeamos la propiedad deseada con corchetes y le pasamos el miembro de la clase.

```html
<input [value]="title">
```

¡Mira el resultado en el navegador! [[Documentación]](https://angular.io/guide/template-syntax#property-binding--property-)

## Enlazamiento de eventos (Event Binding)

Queremos que nuestra aplicación reaccione a las acciones que realiza el usuario. Queremos actualizar el título de una tarea cuando el usuario lo cambie, o añadir una nueva tarea cuando el usuario presione el botón Guardar o la tecla Enter.

todavía no tenemos una lista completa de tareas para mostrar, por el momento usaremos otra forma de mostrar la acción.

El archivo input-button.component.html debe contener el siguiente código:

```html
<p>
  input-button-unit works!
  The title is: {{ title }}
</p>

<input [value]="title">
<button>Save</button>
```

El archivo input-button.component.ts debe contener el siguiente código:

```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tm-input-button',
  templateUrl: './input-button.component.html',
  styleUrls: ['./input-button.component.css'],
})
export class InputButtonComponent implements OnInit {
  title = 'Hello World';

  constructor() { }

  ngOnInit() {
  }
}
```

Ahora implementaremos la acción

Implementemos el método `changeTitle`. el método recibirá un nuevo título como parámetro. dentro del archivo input-button.component.ts añadir:

```typescript
changeTitle(newTitle: string) {
  this.title = newTitle;
}
```

Al igual que la vinculación a las propiedades de los elementos, podemos vincular a los eventos que emiten los elementos. Nuevamente Angular nos brinda una manera fácil de hacer esto. Encierre entre paréntesis en nombre del evento y pásele el método que debe ejecutarse cuando se emite ese evento.

input-button.component.html

```html
<p>
  input-button-unit works!
  The title is: {{ title }}
</p>

<input [value]="title">
<button (click)="changeTitle('Button Clicked!')">
  Save
</button>
```

## Datos del evento

En el ejemplo anterior pasamos una cadena estática "Button Clicked!", pero nosotros queremos pasar el valor que el usuario ha escrito dentro la entrada de texto.

Añadiremos la funcionalidad para que cuando el usuario presione Enter el titulo de la tarea se actualice:

input-button.component.html

```html
  <input [value]="title" (keyup)="changeTitle('Button Clicked!')">
```

**keyup event:** cuando el usuario usa el teclado varios eventos son emitidos. Por ejemplo keydown (cuando se presiona una tecla) y keyup (cuando se suelta la tecla presionada).

**\$event object:** Angular nos permite acceder al objeto del evento. Es pasado al enlace de eventos como `$event`, por lo que podemos usarlo cuando llamamos a changeTitle().

El objeto de evento emitido en el evento keyup tiene una referencia al elemento que emitió el evento (en este caso en cuadro de texto). La referencia se ecnuentra en la propiedad `target` del evento.

input-button.component.html

```html
<input [value]="title"
       (keyup)="changeTitle($event.target.value)">
```

## La tecla enter

Podemos hacer que el titulo se actulize solo cuando el usuario presione la tecla Enter. Angular hace esto muy fácil. El evento keyup tiene ciertas propiedades que son eventos específicos. Así que simplemente es agregar el nombre de la tecla que queremos escuchar.

input-button.component.html

```html
<input [value]="title"
       (keyup.enter)="changeTitle($event.target.value)">
```

## Element ref - \#

Ahora sabemos cómo crear un botón y ejecutar un método cuando el usuario presione el botón. Ahora necesitamos pasar algunos datos de un elemento diferente al método. Queremos usar el valor que el usuario introduce a la caja de texto desde el botón.

Angular nos ayuda con esto. Podemos guardar la referencia de el elemento que queremos en una variable con el nombre que escojamos.

input-button.component.html

```html
<input #inputId
        [value]="title"
        (keyup.enter)="changeTitle($event.target.value)">

<button (click)="changeTitle(inputId.value)">
  Guardar
</button>
```

## Task Manager View

- Crear lista de tareas y exlpicar *ngFor directiva
- Explciar Directivas

- Crear un componente todo-item
- @Input() explicar 
- link https://angular.io/api/core/Input

- Interfaces, qué es, crear interfaz usando ng generate interface interfaces/todo-item

- @Output explicar
- Refactorizar, crear componente padre ng n c list-manager
- Añadir estilos

**Services**

- crear un servicio con el comando ng generate service services/todo-list
- Explicar decorador @Injectable
- link https://angular.io/tutorial/toh-pt4
- Añadir el metodo get al servicio e inyectarlo en el componente correspondiente
- Añadir el metodo add al servicio
- Añadir el metodo update al servicio
- Añadir el metodo remove al servicio

- Añadir remove item a la vista
- Añadir checkbox a la vista y usar update
- Añadir ngClass y explicar link https://angular.io/api/common/NgClass

**Local Storage**

- Qué es
- Crear el servicio
- Implementar metodos
- Test

**ViewChild**

- link https://angular.io/api/core/ViewChild

Deploy the app with firebase hosting
- Install firebase npm install -g firebase-tools
- login to firebase since your own app firebase login
- Crear proyecto desde console.firebase.google.com
- inicializar firebase comando -> firebase init
