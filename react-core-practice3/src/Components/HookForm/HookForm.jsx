import React from 'react';
import useInputField from '../../Hooks/useInputField';

const HookForm = () => {
    const [name, nameOnChange] = useInputField('');
    const [email, emailOnChange] = useInputField('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Name: ${name}, Email: ${email}`);
        
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" defaultValue={name} onChange={nameOnChange} placeholder='your name' />
                <br />
                <input type="email" name="email" onChange={emailOnChange} defaultValue={email} placeholder='your e-mail' />
                <br />
                <br />
                <button type="submit">Submit</button>
            </form>

        </div>
    );
};

export default HookForm;