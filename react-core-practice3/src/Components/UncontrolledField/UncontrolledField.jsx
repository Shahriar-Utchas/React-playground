import React, { useRef } from 'react';

const UncontrolledField = () => {
    const nameRef = useRef('');
    const emailRef = useRef('');
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={nameRef} type="text" name="" />
                <br />
                <input ref={emailRef} type="email" name="" />
                <br />
                <input type="submit" value="Submit" />
            </form>

        </div>
    );
};

export default UncontrolledField;