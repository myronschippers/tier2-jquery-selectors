# jQuery Selectors and DOM Manipulation

## Selectors

* select by ID - `$('#some-id')`
* select by class - `$('.some-class')`
* select descendants - `$('ul li')`
* select multiple elements - `$('.mic, .check')`
* find elements within a selection - `$('#solid').find('.rock')`

**Selectors** return an jQuery specific **Object** that has properties and functions we can call.


## DOM Traversal

Once we select an element, we can navigate to other elements in the DOM tree.

* navigate to parent element - `$('.some-child').parent()`
* get the first-level children of an element - `$('ul').children()`


## DOM Manipulation

Once we select an element, we can change how that element appears on the DOM.

* change an elements text color - `$('#once-blue').css('color', 'blue')`


## Manipulating Classes

Allows us to easily change which pre-defined CSS classes are applied to any element. We can further react to events by applying CSS rules which have visual changes, even animations associated with them.

```JavaScript
addClass('className');    // adds a CSS class by name
removeClass('className'); // removes CSS class by name
toggleClass('className'); // adds if it isn't on the element, removes if it is

// CSS file
 .className {
  color: blue;
}
```


## Appending/Removing from DOM

- `.append()`
- `.remove()`
- `.empty()`


## References

* [jQuery Selector Documentation](http://api.jquery.com/category/selectors/)
* [jQuery Manipulation Documentation](http://api.jquery.com/category/manipulation/)