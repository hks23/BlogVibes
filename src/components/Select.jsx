// common bnutton to eliminate the need of writing CSS everywhere
import React, {useId} from "react";

function Select({
    options,
    label,
    className = "",
    ...props

}, ref) {
    const id = useId()
    return (
        <div className="w-full">
            {label && <label htmlFor= {id} className=''> </label>}    
            <select id={id} {...props} ref={ref} className={`px-3 py-2 rounded-lg bg-white text-black
                        outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}>
                            {/* options provide an array so we have to loop over it */}
                            {options?.map((option)=>(
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
            </select>
         </div>
    )
}

//in Input.jsx we defined forward refrence so that status of the Input field can be accessed somewhere else
//but instead of defining it like that we can also simply write as `below`
export default React.forwardRef(Select)