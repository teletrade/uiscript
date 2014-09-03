# uiscript (fork from [uilang](https://github.com/bendc/uilang))

uiscript is a simple event-driven language for web designers, just write your code in plain English.

When click occurs change CSS classes to show, hide, animate and transform elements.

This simple logic lets you create most of the typical user interface behaviours: tabs, popovers, overlays, sliding menus, etc.

## Getting started

Include `uiscript.js` or `uiscript.min.js` on your page (it's less than 1 KB):

```html
<script src="uiscript.js"></script>
```

Insert a `<script>` element with a `type="text/uiscript"` attribute. Write some uiscript:

```html
<script type="text/uiscript">
  on click "#source" add class "hidden" to ".target"
</script>
```

## Syntax

Syntax is pretty simple:

```html
  on {event} "{source}" {reaction} {attribute} "{value}"
  on {event} "{source}" {reaction} {attribute} "{value}" to "{target}"
```
1. Support different events: click (other in progress)
2. Source is any CSS selector.
3. Support simple class manipulations `add`, `remove` or `toggle` (other in progress)
4. Support different attributes: class (other planned)
5. Target is any CSS selector or nothing (which apply reaction to current element)

You can add as many instructions as you want into your `<script>` element (and many `<script>` element as you want)
Comments is also supported:
```html
<!-- I'm a comment. -->
<script type="text/uiscript">
  on click ".hide" add class "hidden" to "div"
</script>
```

## Fork changelog

- [x] move `<code>` to `<script>`

- [x] change syntax to rx-style `on {event} "{source}" {reaction} {attribute} "{value}" to "{target}"`

- [x] support multiple class values

- [ ] adds support for more events and reactions

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
