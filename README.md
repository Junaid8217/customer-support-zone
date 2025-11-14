Customer Support Zone

This project is a React-based Customer Support Zone designed to display customer tickets, track progress, and mark them as resolved. It follows a Figma design and includes additional features like status management, responsiveness, and toast notifications using React-Toastify.

React Concepts Explanation

1️⃣ What is JSX, and why is it used?
JSX (JavaScript XML) is a syntax extension for JavaScript used in React to describe what the UI should look like. It allows developers to write HTML-like code inside JavaScript, making the structure of components easier to understand and maintain. JSX improves readability and helps React efficiently update the UI using the Virtual DOM.

2️⃣ What is the difference between State and Props?
State is a data storage that is managed inside a component. It can change over time based on user interaction and re-renders the UI when updated. Props (properties), on the other hand, are read-only values passed from parent components to child components. Props cannot be modified by the receiving component and are mainly used to share data between components.

3️⃣ What is the useState hook, and how does it work?
The useState hook is a special function in React that enables functional components to manage state. It returns an array with two values: the current state and a function to update that state. When the update function is called, React re-renders the component with the new state value, ensuring the UI stays updated.

4️⃣ How can you share state between components in React?
State can be shared between components by lifting the state up to a common parent component and passing the necessary data and functions down through props. In more complex applications, global state management tools like Context API, Redux, or Zustand can also be used to share state easily across multiple components.

5️⃣ How is event handling done in React?
Event handling in React is done using event handler functions written in camelCase, such as onClick, onChange, or onSubmit. These handlers are passed as functions inside JSX, and they receive a synthetic event object that works similarly across all browsers. This ensures consistent and smooth event management.
