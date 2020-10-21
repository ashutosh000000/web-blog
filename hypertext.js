creating table


/*
Table data tags <td> act as data containers within the table.
They can contain all sorts of HTML elements, such as text, images, lists, other tables, and so on


Table


The border attribute is not supported in HTML5.



Images

In case the image cannot be displayed, the alt attribute specifies an alternate text that describes the image in words. The alt attribute is required.


Loading images takes time. Using large images can slow down your page, so use them with care.


Inline and Block Elements

In HTML, most elements are defined as block level or inline elements.
Block level elements start from a new line.
For example: <h1>, <form>, <li>, <ol>, <ul>, <p>, <pre>, <table>, <div>, etc.

Inline elements are normally displayed without line breaks.
For example: <b>, <a>, <strong>, <img>, <input>, <em>, <span>, etc.


form

The type "checkbox" allows the user to select more than one option: 

If we change the input type to radio, it allows the user select only one of a number of choices: 



HTML 5

HTML5

When writing HTML5 documents, one of the first new features that you'll notice is the doc type declaration: <!DOCTYPE HTML> 
The character encoding (charset) declaration is also simplified: <meta charset="UTF-8">
New Elements in HTML5
<article>, <aside>, <audio>, <canvas>, <datalist>, <details>, <embed>, <footer>, <header>, <nav>, <output>, <progress>, <section>, <video>, and even more!
The default character encoding in HTML5 is UTF-8.




Content Models

Metadata: Content that sets up the presentation or behavior of the rest of the content. These elements are found in the head of the document.
Elements: <base>, <link>, <meta>, <noscript>, <script>, <style>, <title>

Embedded: Content that imports other resources into the document.
Elements: <audio>, <video>, <canvas>, <iframe>, <img>, <math>, <object>, <svg>

Interactive: Content specifically intended for user interaction.
Elements: <a>, <audio>, <video>, <button>, <details>, <embed>, <iframe>, <img>, <input>, <label>, <object>, <select>, <textarea>

Heading: Defines a section header.
Elements: <h1>, <h2>, <h3>, <h4>, <h5>, <h6>, <hgroup>

Phrasing: This model has a number of inline level elements in common with HTML4.
Elements: <img>, <span>, <strong>, <label>, <br />, <small>, <sub>, and more.

The same element can belong to more than one content model. 





    COURSES
    CODE PLAYGROUND
    DISCUSS
    TOP LEARNERS

HTML
HTML5 HTML5
header, nav & footer
XP 163
2/3
The <footer> Element

The footer element is also widely used. Generally we refer to a section located at the very bottom of the web page as the footer. <footer>…</footer>
The following information is usually provided between these tags:
- Contact Information
- Privacy Policy
- Social Media Icons
- Terms of Service
- Copyright Information
- Sitemap and Related Documents
Q&A 12307
ashutosh jaiswaal
bewdababa4@gmail.com
Reset
Sign out
© 2020 SoloLearn Inc.




The <header> Element

In HTML4, we would define a header like this: <div id="header">
In HTML5, a simple <header> tag is used, instead.

The <header> element is appropriate for use inside the body tag. 



The <nav> Element

This tag represents a section of a page that links to other pages or to certain sections within the page. This would be a section with navigation links.

Here is an example of a major block of navigation links:
<nav>
   <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">About us</a></li>
   </ul>
</nav>
Try It Yourself

Not all of the links in a document should be inside a <nav> element. The <nav> element is intended only for major blocks of navigation links. Typically, the <footer> element often has a list of links that don't need to be in a <nav> element.



The <aside> Element

<aside> is secondary or tangential content which could be considered separate from but indirectly related to the main content.
This type of content is often represented in sidebars.
When an <aside> tag is used within an <article> tag, the content of the <aside> should be specifically related to that article.
<article>
   <h1> Gifts for everyone </h1>
   <p> This website will be the best place for choosing gifts </p>
   <aside>
      <p> Gifts will be delivered to you within 24 hours </p>
   </aside>
</article>
Try It Yourself

When an <aside> tag is used outside of an <article> tag, its content should be related to the surrounding content.




The <article> Element

Articleis a self-contained, independent piece of content that can be used and distributed separately from the rest of the page or site. This could be a forum post, a magazine or newspaper article, a blog entry, a comment, an interactive widget or gadget, or any other independent piece of content.

The <article> element replaces the <div> element that was widely used in HTML4, along with an id or class.
<article> 
   <h1>The article title</h1> 
   <p>Contents of the article element </p>
</article>
Try It Yourself

When an <article> element is nested, the inner element represents an article related to the outer element. For example, blog post comments can be <article> elements nested in the <article> representing the blog post




The <section> Element

<section> is a logical container of the page or article.
Sections can be used to divide up content within an article.
For example, a homepage could have a section for introducing the company, another for news items, and still another for contact information.

Each <section> should be identified, typically by including a heading (h1-h6 element) as a child of the <section> element.
<article>
   <h1>Welcome</h1>
   <section>
      <h1>Heading</h1>
      <p>content or image</p>
   </section>
</article>
Try It Yourself

If it makes sense to separately syndicate the content of a <section> element, use an <article> element instead.




Audio on the Web

Before HTML5, there was no standard for playing audio files on a web page.
The HTML5 <audio> element specifies a standard for embedding audio in a web page.

There are two different ways to specify the audio source file's URL. The first uses the source attribute:
<audio src="audio.mp3" controls>
   Audio element not supported by your browser
</audio>
Try It Yourself

The second way uses the <source> element inside the <audio> element:
<audio controls>
   <source src="audio.mp3" type="audio/mpeg">
   <source src="audio.ogg" type="audio/ogg">
</audio>
Try It Yourself

Multiple <source> elements can be linked to different audio files. The browser will use the first recognized format.





Types of Web Storage Objects


There are two types of web storage objects:
- sessionStorage()
- localStorage()

Local vs. Session
- Session Storage is destroyed once the user closes the browser
- Local Storage stores data with no expiration date
You need to be familiar with basic JavaScript in order to understand and use the API.



Presenting Data

User location can be presented in two ways: Geodetic and Civic.

1. The geodetic way to describe position refers directly to latitude and longitude.
2. The civic representation of location data is presented in a format that is more easily read and understood by the average person.

Each parameter has both a geodetic and a civic representation:
The getCurrentPosition() method returns an object if it is successful. The latitude, longitude, and accuracy properties are always returned.



Using HTML Geolocation

The Geolocation API’s main method is getCurrentPosition, which retrieves the current geographic location of the user's device. navigator.geolocation.getCurrentPosition();
Parameters:
showLocation (mandatory): Defines the callback method that retrieves location information.
ErrorHandler(optional): Defines the callback method that is invoked when an error occurs in processing the asynchronous call.
Options (optional): Defines a set of options for retrieving the location information.
You need to be familiar with basic JavaScript in order to understand and use the API.





DRAG AND DROP API STUDY HTML









Drawing Shapes

The fillRect(x, y, w, h) method draws a "filled" rectangle, in which w indicates width and h indicates height. The default fill color is black.

A black 100*100 pixel rectangle is drawn on the canvas at the position (20, 20):
var c=document.getElementById("canvas1");
var ctx=c.getContext("2d");
ctx.fillRect(20,20,100,100);
Try It Yourself

Result:
The fillStyle property is used to set a color, gradient, or pattern to fill the drawing.
Using this property allows you to draw a green-filled rectangle.
var canvas=document.getElementById("canvas1");
var ctx=canvas.getContext("2d");
ctx.fillStyle ="rgba(0, 200, 0, 1)";
ctx.fillRect (36, 10, 22, 22);
Try It Yourself

Result:
The canvas supports various other methods for drawing:

Draw a Line
moveTo(x,y): Defines the starting point of the line.
lineTo(x,y): Defines the ending point of the line.

Draw a Circle
beginPath(): Starts the drawing.
arc(x,y,r,start,stop): Sets the parameters of the circle.
stroke(): Ends the drawing.

Gradients
createLinearGradient(x,y,x1,y1): Creates a linear gradient.
createRadialGradient(x,y,r,x1,y1,r1): Creates a radial/circular gradient.

Drawing Text on the Canvas
Font: Defines the font properties for the text.
fillText(text,x,y): Draws "filled" text on the canvas.
strokeText(text,x,y): Draws text on the canvas (no fill).
There are many other methods aimed at helping to draw shapes and images on the canvas.









Canvas vs. SVG

Canvas
- Elements are drawn programmatically
- Drawing is done with pixels
- Animations are not built in
- High performance for pixels-based drawing operations
- Resolution dependent
- No support for event handlers
- You can save the resulting image as .png or .jpg
- Well suited for graphic-intensive games

SVG
- Elements are part of the page's DOM (Document object model)
- Drawing is done with vectors
- Effects, such as animations are built in
- Based on standard XML syntax, which provides better accessibility
- Resolution independent
- Support for event handlers
- Not suited for game applications
- Best suited for applications with large rendering areas (for example, Google Maps)

You can actually use both SVG and canvas on the same page, if needed.
However, you cannot just draw SVG onto a canvas, or vice-versa.

*/

