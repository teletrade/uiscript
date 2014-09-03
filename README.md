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

- [x] change syntax to rx-style `on {event} "{source}" {reaction} {attribute} "{value}" to "{target}"`

- [x] support multiple class values

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
  on {event} "{source}" {reaction} {attribute} "{value}"
  on {event} "{source}" {reaction} {attribute} "{value}" to "{target}"
</script>
```
1. Any CSS selector.
2. `add`, `remove` or `toggle`.
3. Any class name.
4. Any CSS selector or nothing (which selects the clicked element).

You can add as many instructions as you want into your `<script>` element (and many `<script>` element as you want):

## Examples ([Original](http://uilang.com/))

* [jsFiddle: Simple notification banner](http://jsfiddle.net/q90pg96k/)
* [jsFiddle: Animated switch] (http://jsfiddle.net/nxLp5wv6/)
* [jsFiddle: Navigation popover] (http://jsfiddle.net/rqeypoxe/)
* [jsFiddle: Tabs] (http://jsfiddle.net/9r52k3kf/)
* [jsFiddle: Accordion] (http://jsfiddle.net/oez7qh3d/)
* [jsFiddle: Overlay] (http://jsfiddle.net/3gmkkzes/)

## Demos

* [jsFiddle: Simple gallery](http://jsfiddle.net/oho4b949/) ([Original] (http://demos.uilang.com/gallery/))
* [jsFiddle: Hamburger menu](http://jsfiddle.net/d5bxb5ac/) ([Original] (http://demos.uilang.com/hamburger-menu/))
* [jsFiddle: Looping Keynote-like presentation](http://jsfiddle.net/qznt3ohd/) ([Original] (http://demos.uilang.com/keynote/))
* [jsFiddle: Sliding panels](http://jsfiddle.net/3k5v96dg/) ([Original] (http://demos.uilang.com/sliding-panels/))
