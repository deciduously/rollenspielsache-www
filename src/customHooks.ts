import { useState } from 'react';

// Use a form - wraps input change and submit handling
// Pass a callback to replace default form submission
export const useForm = (callback: () => void) => {
    const [input, setInput] = useState("1d6");
    const handleSubmit = (evt: React.FormEvent) => {
        if (evt) {
            evt.preventDefault();
        }
        callback();
    }
    /* To set multiple...
      const handleInputChange = (event) => {
    event.persist();
    setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
  }
    */
    const handleInputChange = (evt: React.FormEvent<HTMLInputElement>) => {
        evt.persist();
        setInput((evt.target as HTMLInputElement).value)
    }
    return {
        handleSubmit,
        handleInputChange,
        input
    }
}
