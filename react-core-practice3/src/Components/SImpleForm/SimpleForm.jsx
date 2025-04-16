import React from 'react';

const SimpleForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        console.log(e.target.name.value); // Access the input value using e.target
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name='name' placeholder="Enter your name" />
                <br />
                <input type="submit" value="Submit" />
            </form>

        </div>
    );
};

export default SimpleForm;