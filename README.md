# TaskManager

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.5.

## Introducción

Este tutorial te llevará a experimentar y conocer el mundo de Angular paso a paso creando tu propio Administrador de tareas.

Durante este tutorial vamos a utilizar Angular CLI, local storage y vamos a deployar la aplicación con firebase.

Al finalizar este tutorial tendrás tu propia aplicación de administrador de tareas que mostrará una lista de tareas y te permitirá añadir, completar, editar y eliminar una tarea. La lista de tareas será almacenada en el local storage del navegador de esta manera todos los cambios que realices se mantendrán incluso cuando refresques la página (siempre que uses el mismo navegador en la misma computadora y no en modo incógnito).

Hecha un vistazo a lo que lograrás al completar este tutorial [Demo](https://tw-task-manager.web.app).

![Imagen de la aplicación](/src/assets/todo-list-app.PNG)

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

- ```ng new [project-name]``` es el comando que se utiliza en Angular CLI para que se nos genere un nuevo proyecto con Angular
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
  input-button works!
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
  input-button works!
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

## Construyamos nuestro admistrador de tareas

Lo primero que vamos a hacer es crear una lista de tareas por defecto. Abre el componente app.component.ts y añade la lista de tareas dentro de la clase AppComponent como una lista de objetos, a este punto cada tarea solo tendrá un título.

app.component.ts

```typescript
export class AppComponent {
  title = 'todo-list';
  todoList = [
    { title: 'Prepara el ambiente de desarrollo' },
    { title: 'Instalar Angular' },
    { title: 'Crear componentes' },
    { title: 'Añadir estilos' },
    { title: 'Separar funcionalidades' },
    { title: 'Deployar la aplicación' },
  ];
}
```

Ahora le diremos al navegador que muestre esas tareas. Para lograr esto usaremos una **directiva** de Angular `*ngFor`. Funciona similar a los ciclos en Java. La notación `*` hace que Angular use el elemento actual como plantilla al representar la lista.

app.component.html

```html
<h1>
    Welcome to {{ title }}!
  </h1>

  <tm-input-button></tm-input-button>

  <ul>
    <li *ngFor="let todoItem of todoList">
      {{ todoItem.title }}
    </li>
  </ul>
```

Esto significa "revisar todos los elementos de la lista todoList definida en la clase e imprimir una lista que contiene los titulos de los elementos". Mientras recorremos todoList, cada elemento se asigna a la variable de la plantilla todoItem, y podemos usar esta variable dentro del elemento en el que lo definimos (en este caso el elemento li) y sus hijos.

## Directivas de Angular (Angular directives)

Las directivas son piezas de lógica (escritas como clases) que se pueden adjuntar a elementos y componentes. Se utilizan para cambiar la visualización o el comportamiento del elemento. Angular viene con algunas directivas integradas.

Como vimos la directiva `ngFor` modifica la plantilla en tiempo de jecución repitiendo el elemento al que se llama y su contenido. Otra directiva es por ejemplo `ngIf`, que recibe una expresión booleana. Angular solo mostrará y representará el elemento y su contenido si la expresión es verdadera.  También necesita el prefijo `*` porque usa el elemento de destino como plantilla, similar a la directiva `ngFor`.

Hay otras directivas en Angular que no son estructurales (las culaes se usan sin `*`). Por ejemplo `ngStyles` y `ngClass`, con los que se pueden aplicar estilos y clases dinamicamente al elemento. [[Documentación]](https://angular.io/api/common#directives)

## Nuevo componente: todo-item

Ahora vamos a crear un componente nuevo para mostrar cada una de las tareas representadas en la lista. Al inicio será un componente sencillo pero se le irá añadiendo más funcionalidad en el transcurso del tutorial. Lo importante es que se obtendrá cada item (tarea) como una entrada de su componente principal. De esta manera este componente puede ser re-usable y no depender directamente de los datos y el estado de la aplicación.

Usando la terminal, crear un nuevo componente `todo-item`:

```shell
$ ng g c todo-item
```

Retornando a tu editor de texto verás que se ha creado una nueva carpeta `todo-item`, con los archivos necesarios dentro.

Ahora usaremos el nuevo componente creado dentro nuestra lista:

```html
<ul>
  <li *ngFor="let todoItem of todoList">
    <tm-todo-item></tm-todo-item>
  </li>
</ul>
```

¡Revisa el navegador!

## @Input

Queremos mostrar el título de cada tarea dentro del componente todo-item. Para hacer esto encesitamos enviar la tarea actual dentro del ciclo al componente todo-item.

Angular hace que esto sea sencillo utilizando el decorador @Input [[Documentación]](https://angular.io/api/core/Input)

Dentro del archivo todo-item.component.ts, dentro de la clase TodoItemComponent añadir:

```typescript
@Input() item;
```

Esto le dice al componente que espere una entrada y se la asigne a la propiedad de la clase llamado item. Asegurese de que Input se agregue a la declaración de importación.

Ahora podemos utilizar la tarea dentro de la plantilla todo-item y extraer el título de la tarea usando la interpolación ``{{item.title}}`.

todo-item.component.html

```html
 <p>{{ item.title }}</p>
```

Ahora necesitamos pasar un elemento (tarea) donde usamos el componente `<tm-todo-item></tm-todo-item>`. Regresamos al componente raíz de la aplicación y pasaremos el elemento al componente todo-item.

app.component.html

```html
<ul>
  <li *ngFor="let todoItem of todoList">
    <app-todo-item [item]="todoItem"></app-todo-item>
  </li>
</ul>
```

el elemento aquí entre corchete es el mismo que se ha declarado como `@Input` del componente.

## Interfaz

Queremos utilizar la capacidad de typeScript para saber qué tipo de objeto pasamos como elemento al componente de todo-item. Esto para segurarnos también que no se envié un objeto no deseado que no contenga la propiedad title. Nos aseguraremos de que el item sea del tipo correcto. Definiremos el tipo del item usando una iterfaz.

Crearemos una interfaz llamada `todo-item` dentro de un forlder llamado `interfaces`:

```shell
$ ng g i interfaces/todo-item
```

Abre el nuevo archivo generado todo.item.ts. Ahora podemos definir las propiedades y/o métodos que cada item (tarea) debería tener. En esté punto añadiremos dos propiedades:

- **title** el cual debe ser de tipo string.
- **completed** el cual es de tipo boolean y además es una propiedad opcional

```typescript
export interface TodoItem {
  title: string;
  completed?: boolean;
}
```
Actualicemos el elemento `@Input` para que sea del tipo que hemos creado.

todo-item.component.ts

```typescript
export class TodoItemComponent implements OnInit {
  @Input() item: TodoItem;
```

OJO: necesitamos importar la interfaz para utilizarlo:

todo-item.component.ts

```typescript
import { TodoItem } from '../interfaces/todo-item';
```

Ahora, definamos la lista de elementos de tareas pendientes para contener objetos del tipo TodoItem.

app.component.ts

```typescript
export class AppComponent {
  title = 'task-manager';
  todoList: TodoItem[] = [
    { title: 'Prepara el ambiente de desarrollo' },
    { title: 'Instalar Angular' },
    { title: 'Crear componentes' },
    { title: 'Añadir estilos' },
    { title: 'Separar funcionalidades' },
    { title: 'Deployar la aplicación' },
  ];
}
```

**Experimenta:** trata de eliminar el título a una tarea, agregale nuevas propiedades, ¿qué pasa?.

## Añadir items

Queremos añadir items a nuestra lista. Haremos esto desde el componente input-button que creamos anteriormente. Lo cambiaremos de tal manera que cuando el usuario introduzca algo a la caja de texto y luego presiones enter o el botón guardar, este valor se convierta en el título de una nueva tarea y además esta tarea sea agregada a nuestra lista de tareas.

Pero no queremos que el componente input-button sea responsable de agregar esa nueva tarea a nuestra lista. Queremos que este componente tenga responsabilidad mínima y delegue la acción a su componente padre. Una de las ventajas de este enfoque es que este componente sea re-utilizable. Por ejemplo en este caso lo usaremos para crear una nueva tarea pero también se puede usar en un futuro para editar una tarea, el primer caso la acción guardar añadiría una tarea en cambio en el segundo caso la acción guardar editaria una tarea.

entonces, lo que realmente queremos hacer es emitir un evento desde el componente input-button cada vez que se cambia el título. Y con Angular podemos hacer esto de manera sencilla.

## @Output()

Añadir la sigueinte línea de código dentro la clase InputButtonComponent, el cula definirá una salida para el componente:

input-button.component.ts

```typescript
export class InputButtonComponent implements OnInit {
  @Output() save: EventEmitter<string> = new EventEmitter();
```

La propiedad de salida se llama `save` y es de tipo `EventEmitter` que tiene el método `emit`. `EventEmitter` es un tipo genérico; le pasamos otro tipo que se usará internamente en este caso es una cadena (string). Es el tipo de objeto que emitirá el método `emit`.

Ahora, siempre que llamemos a `this.save.emit()`, se emitirá un evento al componente padre. llamemoslo en el método changeTitle:

input-button.component.ts

```typescript
changeTitle(newTitle: string) {
  this.save.emit(newTitle);
}
```

Pasamos newTitle cuando emitimos el evento. Todo lo que pasemos en `emit()` estará disponible para el padre como `$event`. Los eventos emitidos desde keyup.enter y click siguen llamando al mismo método, pero el método en si ha cambiado.

El nombre del método ya no coincide con la acción que porporciona. Cambiemosle por algo más apropiado: saveValue.

input-button.component.ts

```typescript
saveValue(newTitle: string): void {
  this.save.emit(newTitle);
}
```

input-button.component.html

```html
<input #inputId [value]="title" (keyup.enter)="saveValue(inputId.value)">
<button (click)="saveValue(inputId.value)">Guardar</button>
```

## Escuchando el evento

Ahora todo lo que tenemos que hacer es capturar el evento en el componente principal y adjuntarle lógica.

app.component.html

```html
<tm-input-button (save)="addItem($event)"></tm-input-button>
```

Ahora todo lo que queda es implementar el método `addItem`, que recibe una cadena, crear un objeto con la cadena como la propiedad título y agregarlo a la lista.

app.component.ts

```typescript
addItem(title: string): void {
  this.todoList.push({ title });
}
```

## Refactorizar código

Vamos a realizar una pequeña refactorización. La raíz de la aplicación no debería tener una lógica ni plantilla tan grande, debería simplemente llamar a otro componente que se ocupe de eso.

Crear un nuevo componente llamado `list-manager`.

```shell
$ ng g c list-manager
```

- Mueve todo el código dentro de `tm-root` a `list-manager`.
- Se puede mantener la propiedad título en `tm-root`.

app.component.html

```html
<h1>
  Welcome to {{ title }}!
</h1>
```

app.component.ts

```typescript
export class AppComponent {
  title = 'TiquipayaWasi Task Manager';
}
```

list-manager.component.html

```html
<tm-input-button (save)="addItem($event)"></tm-input-button>

<ul>
  <li *ngFor="let todoItem of todoList">
    <tm-todo-item [item]="todoItem"></tm-todo-item>
  </li>
</ul>
```

list-manager.component.ts

```typescript
export class ListManagerComponent implements OnInit {
  todoList: TodoItem[] = [
    {title: 'install NodeJS'},
    {title: 'install Angular CLI'},
    {title: 'create new app'},
    {title: 'serve app'},
    {title: 'develop app'},
    {title: 'deploy app'},
  ];

  constructor() {}

  ngOnInit(): void {
  }

  addItem(title: string): void {
    this.todoList.push({ title });
  }
}
```
Llame al nuevo componente desde `tm-root`:

app.component.html

```html
<h1 class="app-title">{{title}}</h1>

<tm-list-manager></tm-list-manager>
```

Y listo, terminamos la refactorización.

## Añadiendo estilos

Con Angular podemos darle estilo a los componentes de una manera que no afectará al resto de la aplicación. Sin embargo en este tutorial no nos enfocaremos demasiado en cómo manejar las clases de estilos, por lo tanto tenemos ya una sección de estilos que puedes utilizar. Angular CLI ha generado una hoja de estilo general en src/style.css copiar y pegar el en este [link](https://github.com/mariagarciaflores/task-manager/blob/master/src/styles.css) ahí.

Si miramos el archivo de estilos, agregamos estilo directamente a los elementos (html, body, div, span, h1, ul, etc) que afectarán a nuestra aplciación de inmediato. También agregamos estilos usando selectores de clase css. Necesitamos agregar estos nombres de clase a los elementos relevantes:

En el archivo app.component.html añadir la clase `app-title` al elemento `h1`.

```html
<h1 class="app-title">{{title}}</h1>

<tm-list-manager></tm-list-manager>
```

En el archivo input-button.component.html añadir la clase ``btn`` al elemento `button` y la clase `todo-input` al elemento `input`, además añadiremos un nuevo atributo html llamado `placeholder`.

```html
<input #inputId class="todo-input" placeholder="Añadir tarea..." [value]="title"
  (keyup.enter)="saveValue(inputId.value)">
<button class="btn" (click)="saveValue(inputId.value)">Guardar</button>
```

En el archivo list-manager.component.html envolveremos el contenido de este componente con un elemento `<div>` y le añadiremos la clase `todo-app`.

```html
<div class="todo-app">
  <tm-input-button (save)="addItem($event)"></tm-input-button>

  <ul>
    <li *ngFor="let todoItem of todoList">
      <tm-todo-item [item]="todoItem"></tm-todo-item>
    </li>
  </ul>
</div>
```

Para finalizar, en el archivo todo-item.component.html envolveremos el contenido con otro elemenot `<div>` y le agregaremos la clase `todo-item`.

```html
<div class="todo-item">
  {{item.title}}
</div>
```

## Servicios

En Angular, un servicio es una clase de JavaScript que es responsable de realizar una tarea específica que necesita la aplicación. En nuestra aplicación de administración de tareas, crearemos un servicio que se encargará de guardar y administrar todas las tareas, y lo usaremos inyectándolo en los componentes.


### Crear un servicio con Angular

En la terminal ejecutar el siguiente comando:

```shell
$ ng g s services/todo-list
```

Este comando va a generar un archivo todo-list.service.ts. El servicio es una clase simple llamada TodoListService. Tiene el decorador `@Injectable()` que le permite usar Inyección de Dependencias.

```typescript
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoListService {

  constructor() {
  }
}
```

Ahora podemos mover la lista de tareas de la clase ListManagerComponent a nuestro servicio.

todo-list.service.ts

```typescript
private todoList: TodoItem[] = [
  { title: 'Prepara el ambiente de desarrollo' },
  { title: 'Instalar Angular' },
  { title: 'Crear componentes' },
  { title: 'Añadir estilos' },
  { title: 'Separar funcionalidades' },
  { title: 'Deployar la aplicación' },
];
```

Ahora crearemos un me´todo que nos permita retornar la lista de tareas.

```typescript
import { Injectable } from '@angular/core';

import { TodoItem } from '../interfaces/todo-item';

@Injectable({
  providedIn: 'root',
})
export class TodoListService {
  private todoList: TodoItem[] = [
    { title: 'Prepara el ambiente de desarrollo' },
    { title: 'Instalar Angular' },
    { title: 'Crear componentes' },
    { title: 'Añadir estilos' },
    { title: 'Separar funcionalidades' },
    { title: 'Deployar la aplicación' },
  ];

  constructor() {}

  getTodoList(): TodoItem[] {
    return this.todoList;
  }
}
```

Bien, ahora que ya tenemos nuestro servicio vamos a utilizarlo. Para eso inyectaremos nuestro servicio en los componentes que lo vayan a usar. La inyección de dependencias que maneja Angular es simple, pasamos el parámetro por el constructor, el parámetro es del tipo del servicio creado. Angular asigna la instancia a un parámetro dentro del componente y de esa manear podemos usarlo.

En el archivo list-manager.component.ts añadir:

```typescript
export class ListManagerComponent implements OnInit {
  todoList: TodoItem[];

  constructor(private todoListService: TodoListService) {}
```

Asegurate que el servicio TodoListService se ha importado.

Ahora añadiremos código para obtener la lista de tareas dentro del método ngOnInit.

```typescript
export class ListManagerComponent implements OnInit {
  todoList: TodoItem[];

  constructor(private todoListService: TodoListService) {}

  ngOnInit(): void {
    this.todoList = this.todoListService.getTodoList();
  }
```

### Añadir una nueva tarea

Ahora vamos a añadir un nuevo método para añadir tareas a nuestro servicio, este método se llamará ``additem``.

todo-list.service.ts

```typescript
addItem(item: TodoItem): void {
  this.todoList.push(item);
}
```

Ahora podemos actualizar nuestro ListManagerComponent para llamar al método ``addItem`` directamente desde el servicio.

```typescript
addItem(title: string): void {
  this.todoListService.addItem({ title });
}
```

### Eliminar una tarea

El usuario debería tener la funcionalidad de eliminar una tarea. Para eliminar una tarea vamos a añadirle un botón `x` a cada tarea.

**Agregar el botón x**

Primero debemos agregar el botón para eliminar a cada tarea con un evento click que llamará a un método ``deleteItem``.

todo-item.component.html

```html
<div class="todo-item">
  {{item.title}}
  <button class="btn btn-red" (click)="deleteItem()">
    X
  </button>
</div>
```

Añadir un nuevo `@Output` al componente TodoItemComponent, el cual emitirá la tarea a eliminarse a la clase ListManagerComponent cuando se presione el botón eliminar.

todo-item.component.ts

```typescript
  @Output() delete: EventEmitter<TodoItem> = new EventEmitter();
```

Implementar el método deleteItem en todo-item el cual va a emitir el evento.

```typescript
deleteItem(): void {
  this.delete.emit(this.item);
}
```
Ahora que cada item puede emitir el evento delete cuando el usuario hace click al boton x, aseguremonos que el componente list-manager escuche el evento y elimine la tarea de la lista.

list-manager.component.html

```html
<tm-todo-item [item]="todoItem" (delete)="deleteTask($event)"></tm-todo-item>
```
Ahora debemos agregar el método `deleteTask` en el componente list-manager.

list-manager.component.ts

```typescript
deleteTask(item: TodoItem): void {
  this.todoListService.deleteItem(item);
}
```

y finalmente añadir el método `deleteItem` a nuestro todo-list.service.ts

```typescript
deleteItem(item: TodoItem): void {
  const index = this.todoList.indexOf(item);
  this.todoList.splice(index, 1);
}
```

## Editar una tarea

Ahora queremos ponerle un estado de completo a nuestras tareas y cuando el usuario marque sus tareas como completas queremos ver una linea de tachado de tareas.

Añadamos un checkbox a nuestras tareas. Vamos al componente todo-item.component.html y agregemosle el sigueinte código justo delate del título de la tarea:

```html
<input  type="checkbox" class="todo-checkbox" (click)="completeItem()">
```

Cuando el usuario haga click en el checkbox vamos a ejecutar el método `completeItem`. Hablemos sobre qué es lo que este método debe hacer. Queremos que un estilo que tache nuestra tarea completa sea añadido al elemento que contiene el título de la tarea. De igual manera queremos que el estado `compelted` de la tarea se guarde por lo cual debemos editar la tarea y añadirle su estado. Para poder realizar esta acción vamos a emitir un evento `update` con el nuevo estado de la tarea y lo vamos a capturar en el componente padre.

todo-item.component.ts

```typescript
export class TodoItemComponent implements OnInit {
  @Input() item: TodoItem;
  @Output() delete: EventEmitter<TodoItem> = new EventEmitter();
  @Output() update: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  deleteItem(): void {
    this.delete.emit(this.item);
  }

  completeItem(): void {
    this.update.emit({
      item: this.item,
      changes: { completed: !this.item.completed },
    });
  }
}
```
¿Cómo vamos a hacer que el estilo de que va a tachar una tarea completa sea añadido a nuestro titulo dinámicamente?. Angular tiene una directiva llamada `ngClass`. Esta directiva aplica o elimina una clase css basado en una expresión booleana. [[documentación]](https://angular.io/api/common/NgClass). Lo usaremos de la siguiente manera:

todo-item.component.html

```html
<span class="todo-title" [ngClass]="{'todo-complete': item.completed}">
  {{item.title}}
</span>
```

En el código de arriba, usando la directiva `ngClass` le decimos a Angular que si el item.completed es verdadero le añada la clase `todo-complete` al elemento span que contiene el titulo de la tarea, si item.completed es falso entonces la clase `todo-complete` no será agregada al elemento span.

El siguiente paso es decirle al componente padre (list-manager) qué debe hacer cuando el evento `update` es emitido. Para hacer esto debemos enlazar la acción `update` y el método de que va a actualizar nuestra tarea dentro de nuestro servicio.

list-manager.component.ts

```typescript
updateTask(item: TodoItem, changes: any): void {
  this.todoListService.updateItem(item, changes);
}
```

Y finalmente añadiremos nuestro método `updateItem` dentro de nuestro servicio todo-list.service.ts

```typescript
updateItem(item: TodoItem, changes: any): void {
  const index = this.todoList.indexOf(item);
  this.todoList[index] = { ...item, ...changes };
}
```
 ¡Revisa el navegador y empieza a jugar con lo que ya tenemos implementado!

## Local Storage

¿Qué pasa si añades tareas, las editas, las eliminas y luego actualizas el navegador?. Si, todos los cambios realizados desaparecen y la aplicación vuelve a su estado inicial. Nos gustaría guardar el estado de la lista de tareas y de nuestras tareas, idealmente la lista se debería guardar en una base de datos, pero para este tutorial implementaremos una versión simple usando el almacenamiento del navegador.

**¿Qué es local storage?**

Local storage es una herramienta para almacenar datos localmente. Al igual que las coockies, el local storage almacena los datos en la computadora del usuario y nos brinda una forma rápida de acceder a estos datos tanto para leerlos como para escribirlos.

Primero, para usar el local storage, simplemente podemos acceder a una instancia que está expuesta a nosotros globalmente. Esto significa que podemos llamar a todos los métodos disponibles en esta interfaz simplemente usando esta instancia.

Local storage almacena datos como claves y valores. Tiene dos métodos principales: `getItem` y `setItem`. Aquí tienes un ejemplo de como usarlos:

```typescript
localStorage.setItem('name', 'Angular');

let name = localStorage.getItem('name');
console.log(name);
```

Bueno, ¡ahora usemos lo aprendido!. Vamos a crear un nuevo servicio para utilizar localStorage donde seremos capaz de almacenar nuestras tareas. Creamos nuestro servicio ejecutando el siguiente comando:

```shell
$ ng g s services/storage
```
Ahora añadiremos los métodos para guardar datos y obtener los datos almacenados. Añadir el siguiente código a nuestro servicio storage.sertice.ts.

```typescript
getData(key: string): any {
    return JSON.parse(localStorage.getItem(key));
  }

setData(key: string, data: any): void {
  localStorage.setItem(key, JSON.stringify(data));
}
```
Posiblemente veas algo nuevo en el código de arriba. ¿Por qué usamos `JSON.parse` y `JSON.stringify`?. local storage almacena datos de tipo cadena (string) por lo tanto para almacenar un dato convertimos el dato que queramos almacenar a una cadena y de la misma manera al obtener el dato almacenado lo convertimos a objeto para usarlo en typescript.

Ahora, usaremos el servicio de local storage en nuestro servicio todo-list.service.ts para mandar a guardar nuestras tareas y manetener su estado.

inyectaremos el servicio del storage a nuestro servicio todo-list de igual manera que hicimos antes inyectando el servicio todo-list al componente list-manager.

todo-list.service.ts

```typescript
import { Injectable } from '@angular/core';

import { TodoItem } from '../interfaces/todo-item';
import { StorageService } from './storage.service';

const TODO_LIST_KEY = 'Todo_List';

const TODO_LIST = [
  { title: 'Prepara el ambiente de desarrollo' },
  { title: 'Instalar Angular' },
  { title: 'Crear componentes' },
  { title: 'Añadir estilos' },
  { title: 'Separar funcionalidades' },
  { title: 'Deployar la aplicación' },
];

@Injectable({
  providedIn: 'root',
})
export class TodoListService {
  private todoList: TodoItem[];

  constructor(private storageService: StorageService) {
    this.todoList = this.storageService.getData(TODO_LIST_KEY) || TODO_LIST;
  }

  getTodoList(): TodoItem[] {
    return this.todoList;
  }

  addItem(item: TodoItem): void {
    this.todoList.push(item);
    this.storageService.setData(TODO_LIST_KEY, this.todoList);
  }

  updateItem(item: TodoItem, changes: any): void {
    const index = this.todoList.indexOf(item);
    this.todoList[index] = { ...item, ...changes };
    this.storageService.setData(TODO_LIST_KEY, this.todoList);
  }

  deleteItem(item: TodoItem): void {
    const index = this.todoList.indexOf(item);
    this.todoList.splice(index, 1);
    this.storageService.setData(TODO_LIST_KEY, this.todoList);
  }
}
```

Observemos el código de arriba y notaremos que:

- inyectamos el servicio `StorageService` a nuestro TodoListService e importamos el mismo.
- Convertimos la lista de datos predefinida en una constante que esta localizada fuera de la clase.
- Creamos una constante que representa la llave con la cual manejaremos el local storage
- En el contructo, obtenemos la lista de tareas almacenadas en el local storage y si no existiese retornamos la lista predefinida
- En los métodos `addItem`, `updateItem` y `deleteitem` llamamos al método setItem del storageService que nos actualiza los datos en el local storage

¡Listo!. ya tenemos un administrador de tareas que mantiene su estado siempre y cuando estés en la misma computadora y en el mismo navegador.

## Retos

Al finalizar el tutorial notarás algunos aspecto visuales que podemos corregir:

- Al guardar una tarea el título de la misma se mantiene en el cuadro de texto, una mejora que podemos realizar es limpiar el cuadro de texto después que el usuario añada una nueva tarea.
- Podemos guardar tareas vacías. Deberiamos evitar que el usuario pueda realizar esta acción.
- Implementa la funcionalidad de editar el título de una tarea reutilizando el componente input-button que ya tenemos.

## Publica la aplicación en un servicio de hosting

Para publicar nuestra aplicación utilizaremos firebase. Seguiremos los siguientes pasos: [[documentación]](https://firebase.google.com/docs/hosting)

- Ingresar a https://console.firebase.google.com, crear una cuenta y añadir un proyecto.
- Instalar firebase tools con el siguiente comando `npm install -g firebase-tools`
- Iniciar sesión con el siguiente comando `firebase login` (usa tu cuenta de google)
- Dentro la aplicación, iniciar firebase con el comando `firebase init`
- Al hacer esto tendrás que escoger la opción hosting, el proyecto que creamos al inicio, marcar que la aplicación es una SPA y escribir la ruta de nuestro distribuible `dist/task-manager`
- Para generar el distribuible usamos el siguiente comando `ng build --prod`
- Finalmente, para publicar nuestro distribuible usamos el comando `firebase deploy`
