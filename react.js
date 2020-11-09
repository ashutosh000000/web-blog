/*
What is Front-End Development?

Front-end development refers to what the end user (also commonly referred to as the "client") can see. In the most basic forms, front-end development consists of HTML, CSS, and JavaScript.

As a developer, you will find that it is very easy for your front-end (website, web application, etc.) to become very complex and have a lot of different moving parts. It makes solving problems much more difficult when you have to go through a maze of code to find the issue.

Eventually, developers decided that there must be a better way to manage all of that code, so they created libraries that could make life easier. React was one of those libraries.
React was created by Facebook and released to the public in May of 2013 and has been consistently maintained since then.


Why React?

React is one of the most popular JavaScript libraries for front-end web applications.

Here are some of the advantages of React:

Speed
Interactive websites need to update the DOM (Document Object Model) each time a change happens. This process is generally resourceful and slow.
Compared to other libraries that manipulate the DOM, React uses a Virtual DOM, allowing to update only the parts of the website that have changed. This increases the speed of updates dramatically, as modern web applications may contain thousands of elements.
We will learn more about the Virtual DOM in the coming lessons.

Ease of Use
React allows developers to group related code together, thereby making building and maintaining large scale applications much less complex.

Support
React has an amazingly large community and is open source. It is maintained by Facebook and the community.
Let's get started and dive into building our first React app!















Adding React

React can be added to a website without any special tools and installations.

First, we need to add the React library as two script tags to the head of our HTML document:<script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>

 <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script> 
Next, we need to add another script, to enable the use of JSX.
JSX is a syntax extension to JavaScript, and it is recommended to be used with React.
Don't worry, we will learn more about JSX in the next lessons. For now, let's just add the following script tag:<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script> 
This approach of adding React to a website is only suitable for creating small demos.
We will learn how to create a real project ready for production in the next lesson.



Adding React

After adding the required script tags, we can start building our React app!

We add a container, that will be used to display something using React.
<div id="container"></div>
You can use any id for your container. It will be used by React to find the container and add content to it.
Now, it's time for our first React code!
Let's display a simple message as a heading:
<script type="text/babel">
ReactDOM.render(
  <h1>Hello, React!</h1>,
  document.getElementById('container')
) 
</script>


The code finds the container div, and adds the h1 heading to it.
Tap Try It Yourself to explore the whole code and see React in action!
Don't worry about the new syntax. We will cover it in the coming lessons

*/