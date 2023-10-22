### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
  Front End Frameworks with larger JS libraries

- What is Babel?
  JavaScript transcompiler that is mainly used to convert ECMAScript 2015+ code into backwards-compatible JavaScript code

- What is JSX?
  JSX is like HTML embedded in JavaScript

- How is a Component created in React?
  by defining JavaScript classes or functions

- What are some difference between state and props?
  state is managed within the components while props are passed down from their parent components

- What does "downward data flow" refer to in React?
  Passing down data from parent componets to their child components

- What is a controlled component?
  values controlled by the React component's state like input fields

- What is an uncontrolled component?
  values not controlled by the React component's state and instead by DOM

- What is the purpose of the `key` prop when rendering a list of components?
  It is to help React identify and update individual components in the list

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
  Because it can cause issues when items are reordered in the list

- Describe useEffect. What use cases is it used for in React components?
  It performs side effects in your functional components.
  Data fetching, DOM manipulation, Event listeners

- What does useRef do? Does a change to a ref value cause a rerender of a component?
  it manages mutable references to elements across re-renders.
  Np, it does not.

- When would you use a ref? When wouldn't you use one?
  When performing tasks that involve direct manipulation of the DOM and manage values across rerenders without triggering rerenders of the component.

- What is a custom hook in React? When would you want to write one?
  Custom hooks are logics that can be reused across different components. We write one when we want to reuse that logic else where.
