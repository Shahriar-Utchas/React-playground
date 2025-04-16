import React from 'react';

const FormAction = () => {
    const handleSubmit = (FormData) => {
        console.log(FormData.get('name')); // Access the input value using FormData.get

    }
    return (
        <div>
            <form action={handleSubmit}>
                <input type="text" name='name' placeholder="Enter your name" />
                <br />
                <input type="submit" value="Submit" />
            </form>

        </div>
    );
};

export default FormAction;