# uiscript (in progress)

uiscript is a simple programming language for web designers.
With uiscript, you write your code just like plain English, straight into your HTML using a `<script>` element. uiscript's logic relies on manipulating classes on HTML elements and using these classes in CSS to show, hide, animate and transform elements when a click occurs. This simple logic lets designers create most of the typical user interface behaviours: tabs, popovers, overlays, sliding menus, etc.

## Getting started

Include `uiscript.js` on your page:

```html
<script src="uiscript.js"></script>
```
You're now ready to write some uiscript. Your code should be inserted in a `<script>` element with a `type` attribute, anywhere in the page. The syntax looks like this:

```html
<script type="text/uiscript">
  on click "#source" add class "hidden" to ".target"
</script>
```

## Fork changelog

- [x] move `<code>` to `<script>`

- [x] change syntax to rx-style `on {action} "{source}" {reaction} {attribute} "{value}" to "{target}"`

- [x] support multiple classes

- [ ] adds support for events

```html
    var events = { 
        'click': 'click', 
        'context menu': 'contextmenu',
        'double click': 'dblclick',
        'mouse down': 'mousedown',
        'mouse up': 'mouseup',
        'mouse enter': 'mouseenter',
        'mouse leave': 'mouseleave',
        'mouse over': 'mouseover',
        'mouse out': 'mouseout',
        'input blur': 'blur',
        'input change': 'change',
        'input focus': 'focus',
        'form reset': 'reset',
        'form submit': 'submit'
      }
```
- [ ] add support to other attributes

- [ ] optional quotes in syntax

## Syntax

Let's deconstruct the syntax from our previous example:

```html
<script type="text/uiscript">
  on {action} "{source}" {reaction} {attribute} "{value}"
  on {action} "{source}" {reaction} {attribute} "{value}" to "{target}"
</script>
```
1. Any CSS selector.
2. `add`, `remove` or `toggle`.
3. Any class name.
4. Any CSS selector or nothing (which selects the clicked element).

You can add as many instructions as you want into your `<script>` element (and many `<script>` element as you want):

## Examples (from jsFiddle, in progress)

* [jsFiddle: Simple notification banner](http://jsfiddle.net/q90pg96k/)

<iframe width="100%" height="300" src="http://jsfiddle.net/q90pg96k/embedded/" frameborder="0"></iframe>

## Examples (for original uilang)

* [Simple gallery](http://demos.uilang.com/gallery/)
* [Hamburger menu](http://demos.uilang.com/hamburger-menu/)
* [Looping Keynote-like presentation](http://demos.uilang.com/keynote/)
* [Sliding panels](http://demos.uilang.com/sliding-panels/)

You'll find more examples on [uilang.com](http://uilang.com).
