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
*/