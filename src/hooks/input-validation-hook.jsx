import { useState } from "react"

const useInput = valFunc =>{

    const [enteredInput, setEnteredInput] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const validInput = valFunc(enteredInput);
    const hasError = !validInput && isTouched;

    const handleEnteredInput = e =>{
        setEnteredInput(e.target.value)
    }

    const handleBlur = () =>{
        setIsTouched(true);
    }

    const resetInput = () =>{
        setEnteredInput('')
        setIsTouched(false)
    }

    return{
        value: enteredInput,
        valid: validInput,
        hasError,
        handleEnteredInput,
        handleBlur,
        resetInput
    }

}

export default useInput