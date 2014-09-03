# uiscript (fork from [uilang](https://github.com/bendc/uilang))

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

* [jsFiddle: Simple notification banner](http://jsfiddle.net/L9kaoo62/)
* [jsFiddle: Animated switch] (http://jsfiddle.net/cm6uow15/)
* [jsFiddle: Navigation popover] (http://jsfiddle.net/tdwtLjbd/)
* [jsFiddle: Tabs] (http://jsfiddle.net/mmfxn9fj/)
* [jsFiddle: Accordion] (http://jsfiddle.net/2czv6sL6/)
* [jsFiddle: Overlay] (http://jsfiddle.net/mgn5ryjq/)

## Demos

* [jsFiddle: Simple gallery](http://jsfiddle.net/8n9hwrbj/) ([Original] (http://demos.uilang.com/gallery/))
* [jsFiddle: Hamburger menu](http://jsfiddle.net/8xnp67g7/) ([Original] (http://demos.uilang.com/hamburger-menu/))
* [jsFiddle: Looping Keynote-like presentation](http://jsfiddle.net/jf2Lxpat/) ([Original] (http://demos.uilang.com/keynote/))
* [jsFiddle: Sliding panels](http://jsfiddle.net/exrjL8pt/) ([Original] (http://demos.uilang.com/sliding-panels/))
