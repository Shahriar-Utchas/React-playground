import { useState } from "react";

const useInputField = (defaultValue) => {
    const [fieldValue, setFieldValue] = useState(defaultValue);

    const handleFieldOnChange = (event) => {
        setFieldValue(event.target.value);
    };

    return [fieldValue, handleFieldOnChange];
}
export default useInputField;