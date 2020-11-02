/*
The font-variant Property 

The CSS font-variant property allows you to convert your font to all small caps. The values can be set as normal, small-caps, and inherit. 

Not every font supports CSS font-variant, so be sure to test before you publish.



The vertical-align Property

Vertical align property does not act the same way for all elements.
For example, some additional CSS styling is needed for div elements.

The HTML: <div class="main">
   <div class="paragraph">
   This text is aligned to the middle
   </div>
</div>
The CSS:
.main {
    height: 150px; width: 400px;
    background-color: LightSkyBlue;
    display: inline-table;
}
.paragraph {
    display: table-cell;
    vertical-align: middle;
}

Result:
display: inline-table; and display: table-cell; styling rules are applied to make the vertical-align property work with divs.




The word-spacing Property

The word-spacing property specifies the space between words in a text. Just like the letter-spacing property, you can set the word-spacing values as normal, length, and inherit.

When a weird spacing is used, and it is necessary to keep the selected paragraph with normal word spacing, the normal option is usually used.

To define an extra space between words, you can use positive measurement values like px, pt, pc, cm, mm, inches, em, and ex.
Negative values are also permitted. Here is an example to show the difference.






The CSS Box Model

All HTML elements can be considered as boxes. The CSS box model represents the design and layout of the site. It consists of margins, borders, paddings, and the actual content.

The properties work in the same order: top, right, bottom, and left. 

The term "box model" is used when talking about design and layout.

More on Box Models

Every element of the webpage is a box.

CSS uses the box model to determine how big the boxes are and how to place them.
The box model is also used to calculate the actual width and height of the HTML elements.



The border Property

The CSS border property allows you to customize the borders of HTML elements.
In order to add a border to the element, you need to specify the size, style, and color of the border.
The example below shows how to add a solid green border to the paragraph.

Border Width

The properties for the border can be set separately. The border-width property specifies the width of the border.

p.first {
   padding: 10px;
   border-style: solid;
   border-width: 2px;
   border-color: blue;
}
p.second {
   padding: 10px;    
   border-style: solid;
   border-width: 2px;
   border-color: #FF6600;
} 
p.third {
   padding: 10px;    
   border-style: solid;
   border-width: 2px;
   border-color: rgb(0, 153, 0);
} 

The border-style Property

The default value of border-style is none, which defines no border.
There are various styles supported for the border-style property: dotted, dashed, double, etc. The example below illustrates the differences between them.

In CSS, it is possible to specify different borders for different sides, using the following properties: border-top-style, border-right-style, border-bottom-style, and border-left-style for the corresponding sides.

The background-image Property

The background-image property sets one or several background images in an element. Let's set a background-image for the <body> element.

The url specifies the path to the image file. Both relative and absolute paths are supported.

By default, a background-image is placed at the top-left corner of an element, and is repeated both vertically and horizontally to cover the entire element.

The background-image Property

Background-image can be set not only for the whole page, but for individual elements, as well.
Below we set a background image for the <p> element.


To specify more than one image, just separate the URLs with commas.








The CSS Box Model

All HTML elements can be considered as boxes. The CSS box model represents the design and layout of the site. It consists of margins, borders, paddings, and the actual content.

The properties work in the same order: top, right, bottom, and left.

The image below illustrates the box model:







More on Box Models

Every element of the webpage is a box.

CSS uses the box model to determine how big the boxes are and how to place them.
The box model is also used to calculate the actual width and height of the HTML elements.

Total Width of an Element

When working with boxes, it is important to understand how the total width of an element is calculated.
For example, the total width of the box with paddings will be the sum of width plus padding left and padding right.


Here is another box with margins, border, and paddings.
The total width is the sum of left and right margins, left and right borders, left and right paddings, and the actual width of the content.

When you set the width and height properties of an element with CSS, you set the width and height of the content area.
When setting a background-color to a box, it covers the content area, as well as the padding.

Total Height of an Element

The total height of an element is calculated the same way as the width.
The example below is the same box from the previous lesson with padding, border and margin.

To summarize, Total element height = height + top padding + bottom padding + top border + bottom border + top margin + bottom margin





The Table Properties

The look of an HTML table can be greatly improved with CSS.

The border-collapse property specifies whether the table borders are collapsed into a single border or separated as default. If the borders are separate, the border-spacing property can be used to change the spacing.

The caption-side Property

The caption-side property specifies the position of a table caption. The values can be set as top or bottom.
In the example below, we specify the placement of a table caption to top.

The empty-cells Property

The empty-cells property specifies whether or not to display borders and background on empty cells in a table.
Possible values are:
show: the borders of an empty cell are rendered
hide: the borders of an empty cell are not drawn

Here is the empty-cells property that is used to hide borders of empty cells in the <table> element.









Setting Styles to Links

Links can be styled with any CSS property (e.g., color, font-family, background, etc.).
In addition, links can be styled differently, depending on what state they are in. The following pseudo selectors are available:
a:link - defines the style for normal unvisited links
a:visited - defines the style for visited links
a:active - a link becomes active once you click on it
a:hover - a link is hovered when the mouse is over it

When setting the style for several link states, there are some order rules:
- a:hover MUST come after a:link and a:visited
- a:active MUST come after a:hover

Links' Text Decoration

By default, text links are underlined by the browser.
One of the most common uses of CSS with links is to remove the underline. In the example below, the text-decoration property is used to remove the underline.

The following properties are used to control the look and feel of links:
border:none - removes border from images with links
outline:none - removes the dotted border on clicked lines in IE







The cursor Property Values

There are numerous other possible values for the cursor property, such as:
default - default cursor
crosshair - cursor displays as crosshair
pointer - cursor displays hand icon
The list of possible values is quite long. 

Setting the Mouse Cursor Style

CSS allows you to set your desired cursor style when you mouse over an element. For example, you can change your cursor into a hand icon, help icon, and much more, rather than using the default pointer.







display:none

display:none hides an element, so it does not take up any space. The element will be hidden, and the page will be displayed as if the element is not there.

There are plenty of other display values, such as list-item, table, table-cell, table-column, grid, etc. Just play with values to see the difference. 






The visibility Property

The visibility property specifies whether an element is visible or hidden. The most common values are visible and hidden.

Hiding an element can be done by setting the display property to "none" or the visibility property to "hidden". However, notice that these two methods produce different results:
visibility:hidden hides an element, but it will still take up the same space as before. The element will be hidden, but it will still affect the layout:








Positioning Elements

The CSS positioning properties allow you to position an element. It can also place an element behind another, and specify what should happen when an element's content is too big.

Elements can be positioned using the top, bottom, left, and right properties. However, these properties will not work unless the position property is set first. They also work differently depending on the positioning method.

Static Positioning
HTML elements are positioned static by default. A static positioned element is always positioned according to the normal flow of the page.

p.position_static {
   position:static;
   top: 30px;
   right: 5px;
   color: red;
}

Static positioned elements are not affected by the top, bottom, left, and right properties.



Relative Positioning

A relative positioned element is positioned relative to its normal position.
The properties top, right, bottom, and left can be used to specify how the rendered box will be shifted.


The content of relatively positioned elements can be moved and overlap other elements, but the reserved space for the element is still preserved in the normal flow.
This value cannot be used for table cells, columns, column groups, rows, row groups, or captions.
Absolute Positioning
An absolute position element is positioned relative to the first parent element that has a position other than static. If no such element is found, the containing block is <html>.

Absolutely positioned elements are removed from the normal flow. The document and other elements behave like the absolutely positioned element does not exist.
Absolutely positioned elements can overlap other elements.








Floating

With CSS float, an element can be pushed to the left or right, allowing other elements to wrap around it.
Float is often used with images, but it is also useful when working with layouts.
The values for the float property are left, right, and none.
Left and right float elements in those directions, respectively. none (the default) ensures that the element will not float.
Below is an example of an image that is floated to the right.

Elements are floated horizontally, meaning that an element can only be floated left or right, not up or down.







Clearing the Float

Elements that come after the floating element will flow around it. To avoid this, use the clear property.
The clear property specifies the sides of an element where other floating elements are not allowed to be.

In the example below, if we set the float property to the div, only the paragraph that comes after the div will be wrapped around the image.


Using clear

Use the values right, left, and both to specify the sides of an element where other floating elements are not allowed to be.

The default value is none, which allows floating elements on both sides.

Clearing Floats

both is used to clear floats coming from either direction.

The HTML:This paragraph is above the div element 
and is not affected by the float right property. 
<br/><br/>
<div class="floating">
   <img src="css_logo.png" />
</div>
This paragraph comes after the div element 
and is affected by the float right property. 
<br/><br class="clearing"/>
This paragraph is out of the floating group 
and is not affected by the float right property.
<br/> <br/>
The CSS:
.floating {
   float: right;
}
.clearing {    
   clear: both;
}










The overflow Property

As discussed earlier, every element on the page is a box. If the height of the box is not set, the height of that box will grow as large as necessary to accommodate the content.


The CSS overflow property specifies the behavior that occurs when an element's content overflows the element's box.







The overflow Property

As discussed earlier, every element on the page is a box. If the height of the box is not set, the height of that box will grow as large as necessary to accommodate the content.

The CSS overflow property specifies the behavior that occurs when an element's content overflows the element's box.

The overflow Property Values

There are four values for the overflow property: visible (the default value), scroll, hidden, and auto.

The value scroll results in clipped overflow, but a scrollbar is added, so the rest of the content may be seen.

auto and hidden

auto - If overflow is clipped, a scroll-bar should be added to make it possible to see the rest of the content.
hidden - The overflow is clipped, and the rest of the content will be invisible.

The default value for the overflow property is visible.








Assigning the z-index Property

Assigning a higher z-index value to the blue div and a lower z-index value to the red div will result in the following:

The z-index works only on positioned elements (position:absolute, position:relative, or position:fixed).













CSS3

CSS3 is the latest standard for CSS.
CSS3 is completely backwards-compatible with earlier CSS versions.

Some of the most significant new features are:
Border radius - allows us to create rounded corners for elements.
Border images - allows us to specify an image as the border around an element.
Multiple backgrounds - applies multiple backgrounds to elements.
Animations and effects, and much more!
There are lots of other great features that will be discussed in upcoming lessons.

CSS3: New Features

To make web development easier and faster, CSS3 introduces additional new features, including the following:

Box Shadow
With the box-shadow property, you can attach one or more shadows to an element by specifying values for color, size, blur, and offset.

Gradients
CSS3 gradients allow us to set the background color of the element to a gradient. Two types of gradients are available: Linear and Radial.
Most of the new features have been implemented by major web browsers, so you can already enjoy the power of CSS3.

CSS3: New Features

Transforms allow you to rotate, scale, move, and skew elements.

Another popular feature is Transitions which allows you to animate from one CSS property value to another. You can combine it with transforms and animate the element's position, rotation, or scale.

The property attracting the most attention is Animations.
CSS Animations have their own specifications, and they allow you to create keyframes, set duration, easing, and more.
Most of the new features have been implemented by major web browsers, so you can already enjoy the power of CSS3.










CSS Vendor Prefixes

CSS vendor prefixes or CSS browser prefixes are a way for browser makers to add support for new CSS features during periods of testing and experimentation. Browser prefixes are used to add new features that may not be part of the final and formal CSS specification.

For example, the prefix for Safari and Chrome is -webkit. The border-radius property is currently supported in Chrome, Safari, and Mozilla, as long as it is accompanied by the browser prefix.
To specify the border-radius in Chrome and Safari, the following syntax is used:


The prefix is added to the property to make it work in the unsupported browsers. So, you might end up with multiple definitions of the same property, each with the specific browser prefix.
While most browsers today will work without prefixes, it is essential to know these for backwards capability and understanding older codes.

-webkit-border-radius: 24px;

firefox -moz-
safari  -webkit-
chrome  -webkit-
opera   -o-
internet explorer  -ms

It might feel annoying and repetitive to have to write the properties two to five times to get them to work in all browsers, but it's temporary. As browsers improve, they add support for the standards based version of the properties, and you can remove the prefixed versions.














The border-radius Property

With CSS3, you can give any element "rounded corners" by using the border-radius property.

Specific border radius values can be applied for the border-radius property in the following order: top-left, top-right, bottom-right, bottom-left. 

The value of border-radius can also be specified in percentages.

Creating a Circle

A rectangle can be turned into a circle using only CSS.
To create a circle, the border radius should be half of the height and the width.

The rectangle in the example below has a width and height of 200px. By setting the border radius to 100px, the corners will be rounded to form a circle:













The box-shadow Property

The CSS3 box-shadow property applies shadow to elements.
Components of the box-shadow property are decoded by browsers in the following manner:
- The first length for the horizontal offset will cast the shadow to the right of the box (required)
- The second length is for the vertical offset that will cast the shadow to below the box (required)
- The color of the shadow (optional)










Creating an Inner Shadow

The "inset" keyword allows to draw an inner shadow in the box. To show an inset shadow, just add the inset keyword:
box-shadow: inset 10px 10px 5px #888888;

You can simultaneously create inner and outer shadows by separating each shadow with a comma.

Layering Multiple Shadows

You can define as many shadows for the same box as you want by writing all of them comma-separated in the same rule.

In the example below, two inner shadows have been created by separating each shadow with a comma.

In case we specify more than one value, the one which comes last will be positioned at the back of all shadows.
Here is an example:










Transparency Effect

Before CSS3, transparent background images were used to create transparency effects. The new features of CSS3 now make it easier to create transparency effects.

CSS supports color names, hexadecimal, and RGB colors.
In addition, CSS3 introduces the following:

RGBA Colors
RGBA color values are an extension of RGB color values with an alpha channel, which specifies the opacity for a color.
An RGBA color value is specified with: rgba(red, green, blue, alpha). The alpha parameter is a number between 0.0 (fully transparent) and 1.0 (fully opaque).

HSL (Hue, Saturation, Lightness) Colors
An HSL color value is specified with: hsl(hue, saturation, lightness).
Hue is a degree on the color wheel ranging from 0 to 360
0 (or 360) is red, 120 is green, 240 is blue.
Saturation is a percentage value: 100% is the full color.
Lightness is also a percentage; 0% is dark (black) and 100% is white. HSLA color values are an extension of HSL color values with an alpha channel - which specifies the opacity for a color (just like RGBA).

Some of the properties used (like the background gradients) will be discussed in the upcoming lessons.













The text-shadow Property

The text-shadow property defines one or more comma-separated shadow effects, to be applied to the text content of the current element.


- The offset-x and offset-y values are required for the CSS text-shadow property.
- The color value is not required, but since the default for the text-shadow is transparent, the text-shadow will not appear unless you specify a color value.

Multiple Text Shadows

The text-shadow style can accept multiple values in a comma-separated list.
According to CSS2, the shadows are laid down in the order they appear, so if they overlap, the last one that is specified should appear on top. CSS3 has now changed that so they are applied in reverse order.

To create multiple shadows, the shadows are separated with a comma. 


To make a text shadow look realistic, remember these few shadow characteristics:

- A shadow which is close to the text is normally not as blurred as a shadow that is far from the text. A shadow that is far from the text usually implies a light source which is also far from the text. 
- A shadow which is close to the text usually implies that the underlying surface is close, that the light is close, or both. A close shadow is often darker than a distant shadow, because less light can get in between the shape and the underlying surface.
To remove a text-shadow, set the text-shadow property to none; no shadows will be associated with that element.













Working with Pseudo-Classes

The CSS pseudo-classes allow us to style elements, or parts of elements, that exist in the document tree without using JavaScript or any other scripts. A pseudo-class starts with a ":" (colon).
The most commonly used pseudo-classes are :first-child and :last-child.

The :first-child pseudo-class matches an element that is the first child element of some other element.
In the following example, the selector matches any <p> element that is the first child of the div element:


The :last-child pseudo-class matches an element that is the last child element of some other element. 











Working with Pseudo Elements

Pseudo elements are used to select specific parts of an element.
There are five pseudo elements in CSS, each starting with a double colon (::):

::first-line - the first line of the text in a selector
::first-letter - the first letter of the text in a selector
::selection - selects the portion of an element that is selected by a user
::before - inserts some content before an element
::after - inserts some content after an element

In the example below, the ::first-line pseudo element is used to style the first line of our text: 

Working with Pseudo Elements

Using ::before and ::after pseudo elements allows us to add a wide variety of content to the page.

In the example below, the ::before pseudo element is used to add an image before the list.

The CSS:
p::before {
   content: url("logo.jpg");
}

Note the content keyword in the syntax.

If you change the ::before element to ::after in the example above, the images will appear at the end of the list.


*/