import { InputHTMLAttributes } from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
}

const Input = ({...rest}: IProps) => {
    return (
        <input className='border-2 border-gray-800/20 bg-white/5 backdrop-blur-xl shadow-md focus:outline-none rounded-lg focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 px-3 py-2' {...rest}/>
    )
}

export default Input;