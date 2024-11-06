function TextInput({id='', label='', type="text", value = '', onChange, placeholder = ''}){

    return (
        <div>
            <label htmlFor={id} className="block text-sm font-medium text-gray-700">
                {label}                
            </label>
            <input type={type}
            id={id}
            value={value}
            onChange={onChange} 
            required
            className="w-full px-3 py-2 mt-1 border border-gray-300 
            rounded-md shadow-sm focus:outline-none focus:ring-indigo-500
            focus:border-indigo-500"
            placeholder={placeholder}/>
        </div>
    )
}

export default TextInput;