# [JavaScript Design Patterns: Building a Mental Model](https://medium.com/launch-school/javascript-design-patterns-building-a-mental-model-68c2d4356538) by Adrian Carroll

## Developing a Mental Model

Each object is linked to another object. Here's a diagram to represent this "linking" concept:

terrier --> dog --> animal

Every object in JavaScript has an internal `[[Prototype]]` property that can be accessed directly by a `__proto__` property. This property, referred to as the "dunder proto", essentially points to another object. It can be thought of as a link to another object.

terrier [[Prototype]] --> dog [[Prototype]] --> animal