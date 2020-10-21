console.log("hello!!!");


/*10 * '5' or '10' * '5' gives the same result. Multiplying a number with string values like 'sololearn' * 5 returns NaN (Not a Number).*/




/*
Multiple Parameters

If you pass more arguments than are defined, they will be assigned to an array called arguments. They can be used like this: arguments[0], arguments[1], etc.
*/


/*
Calling Functions

You can also call a function using this syntax: myFunction.call(). The difference is that when calling in this way, you're passing the 'this' keyword to a function. You'll learn about it later.

*/

function sayHello(name,age)
{
document.write(name+" is "+age+" years old:");
}

sayHello.call(null	,"Ashutosh",21);



/*

You can access object properties in two ways.

objectName.propertyName
//or
objectName['propertyName']
*/

/*
Sometimes, we need to set an "object type" that can be used to create a number of objects of a single type.
The standard way to create an "object type" is to use an object constructor function. 


function person(name, age, color) {
  this.name = name;
  this.age = age;
  this.favColor = color;
}
*/


/*
Working with DOM

Each element in the DOM has a set of properties and methods that provide information about their relationships in the DOM:
element.childNodes returns an array of an element's child nodes.
element.firstChild returns the first child node of an element.
element.lastChild returns the last child node of an element.
element.hasChildNodes returns true if an element has any child nodes, otherwise false.
element.nextSibling returns the next node at the same tree level.
element.previousSibling returns the previous node at the same tree level.
element.parentNode returns the parent node of an element.

We can, for example, select all child nodes of an element and change their content

*/


/*
Changing Style

All CSS properties can be set and modified using JavaScript. Just remember, that you cannot use dashes (-) in the property names: these are replaced with camelCase versions, where the compound words begin with a capital letter.
For example: the background-color property should be referred to as backgroundColor.

*/

/*
Creating Elements


Use the following methods to create new nodes:
element.cloneNode() clones an element and returns the resulting node.
document.createElement(element) creates a new element node.
document.createTextNode(text) creates a new text node.

For example:
*/

/*
Removing Elements

An alternative way of achieving the same result would be the use of the parentNode property to get the parent of the element we want to remove:
var child = document.getElementById("p1");
child.parentNode.removeChild(child);



https://cognitiveclass.ai/
*/
