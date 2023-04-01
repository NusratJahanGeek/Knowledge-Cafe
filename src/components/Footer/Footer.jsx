import React from 'react';

const Footer = () => {
    return (
        <div>
            <h1>Answers to the questions:</h1>
            <h2>Props vs state</h2>
            <p>State can be updated by the component itself. State is the local state of a component which can't be accessed or modified outside of the component. Whereas props can't be  changed on the child level. It can be modified outside of the component. Props make the component reusable, which can be accessed and read by the parent element.</p>
            <h2>How does useState work?</h2>
            <p>useState() returns an array with two values. One is the current state and the other is a function to update the state. It takes the initial value and shows it until the new value updates it. It allows to add state to a functional component</p>
            <h2>Purpose of useEffect other than fetching data.</h2>
            <p>useEffect() performs the side effects on the components. Other than fetching data, it updates the DOM directly, allows to show indiviual data if the second argument is used. useEffect() allows to perform an action more than once. It ignores teh unwanted side effects of the class components. </p>
            <h2>How Does React work?</h2>
            <p>React is a Javascript library that can be used for mobile and web application development. It's not any Javascript framework. React components work similarly to Javascript function. It takes the inputs as properties which is also called props. It's an unidirectional library, meaning data can be received from parent to child, not the other way around. Also, React provides faster user experience through doing so. It sets the build environment into development for Node and Babel. React uses JSX which literally means Javascript XML. It looks like HTML, but actually, it's not.</p>
        </div>
    );
};

export default Footer;