import { useState } from "react";
import { gsap } from "gsap/gsap-core";

const Form = () => {

    const [input, inputValue] = useState('');

    const submit = (e) => {
        e.preventDefault();
        console.log(input);
        inputValue();
    }

    

    return (
        <div className="form-div" >
            <form className="mx-10 px-10 h-[72vh]">
                <h1 className="heading">Your Name</h1>
                <input className="bg-white text-black px-2 py-3 my-3" value={input} onChange={(e) => inputValue(e.target.value)} type="text" placeholder="Enter your name" />
                <button onClick={(e) => {
                    submit(e)
                }} className="button">Submit Form</button>
            </form>
        </div>
    )
}

export default Form;