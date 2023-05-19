import React, { Component } from 'react';



class Qeight extends Component {


    render() {
        return (
            <>

                <p>To change the state of the React component is useful when you are working on a single page application, it simply replaces the content of the existing component for the user without reloading the webpage.</p>

                <p>We have to set initial state value inside constructor function and set click event handler of the element upon which click, results in changing state. Then pass the function to the click handler and change the state of the component inside the function using setState. The setState function used to change the state of the component directly or with the callback approach as mentioned below.</p>
                
                <img src="E:\amir_work\ReactJs_assignments\assignment\src\ClassCompo\img-1.jpg" alt="" />
            </>
        );
    }
}

export default Qeight;