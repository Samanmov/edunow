# MEAN-edunow

# [![MEAN Logo](http://mean.io/system/assets/img/logos/meanlogo.png)](http://mean.io/) 

MEAN is a framework for an easy starting point with [MongoDB](https://www.mongodb.org/), [Node.js](http://www.nodejs.org/), [Express](http://expressjs.com/), and [AngularJS](https://angularjs.org/) based applications. 

Method | CRUD           | HTTP                              |
------ | -------------- | --------------------------------- | 
GET    | Read           | http://localhost:3000/index.html  | 
POST   | Create         | http://localhost:3000/add.html    |
PUT    | Update/Replace | http://localhost:3000/update.html | 
DELETE | Delete         | http://localhost:3000/delete.html |
GET    | Search         | http://localhost:3000/search.html | 

#### Creating a package.json  

To create a package.json run:

```shell
 npm init
```

#### npm-install  

```shell
 npm install
```
#### nodemon reload, automatically

```shell
sudo npm install -g nodemon
```

#### express Installation  

```shell
$ npm install express
```

#### mongoose Installation 

```shell
 npm install mongoose
```

#### body-parser 

Node.js body parsing middleware

#### body-parser Installation 

```shell
$ npm install body-parser
```

```JSON
{
weeks: [
{
_id: "571767450cf39fef0db5818f",
CourseInfo: "Grundläggande JavaScriptprogrammering",
Weeks: [
{
_id: "571de7e9f64557ca0271054a",
week: 38,
intro: "Vad är IT?",
text: "IT består av två ord Information och teknik Ofta när folk tänker på IT så poppar ord som datorer, nätverk, internet och telekom upp. Mycket teknik",
question: "Vad är en variabel?",
answer: "Nu ska vi prata om en av de viktigaste och mest grundläggande koncepten som finns i javascript samt i all annan programmering också. Variabler! En variabel kan ses ungefär som en lagringsplats som innehåller ett värde, som en icakasse som innehåller ett äpple eller kanske en banan. Man använder kassen till att tillfälligt förvara frukten när den fraktas från affären och för att det ska bli enklare att bära den. När man väl har anlänt till sin destination kan frukten enkelt plockas fram och användas (antagligen ätas). Kassen har då fyllt sin funktion och kan antingen kastas i papperskorgen eller sparas undan för att användas vid ett senare tillfälle. Med programmeringslogik skulle frukten också kunna ätas igen då.",
title: "Funktioner",
definition: "function parameters are the names listed in the function definition. JavaScript function definitions do not specify data types for parameters. if a function is called with missing arguments (less than declared), the missing values are set to: undefined. ",
edit: true
},
{
_id: "571de7e9f64557ca02710549",
week: 39,
intro: "Array",
text: "The JavaScript Array object is a global object that is used in the construction of arrays; which are high-level, list-like objects.",
question: "Vad är Objekt i JavaScript?",
answer: "an object is a collection of properties. a property is an association between a name (or key) and a value. a property of an object can be explained as a variable that is attached to the object. dot-notation eller [ ] för att komma åt värdena",
title: "If-satser",
definition: "If-satser kommer i två versioner: den (vanligare) som kan ha fler än två alternativ och den som endast kan hantera två alternativ. Vi börjar med den större varianten. Det enda som är obligatoriskt med if-satser är villkoret och satserna som ska exekveras om villkoret är sant. D.v.s. else if och else delen av if-satsen nedan är inte obligatoriska. Och om endast en sats ska exekvera (om villkoret är sant) kan man utelämna hakparenteserna.",
edit: true
}
]
},
```
