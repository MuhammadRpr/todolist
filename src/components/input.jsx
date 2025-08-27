function Input({ text, label, name, value, onChange, placeholder, type = "text" }) {
    return (
        <>
            <h3 className="text-left">{label}</h3>
            <input className="border rounded p-2 focus:ring-2 focus:ring-blue-400 outline-none w-full py-6 gap-6 m"
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
        </>
    );
}

export default Input;