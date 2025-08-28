function Input({ text, label, name, value, onChange, placeholder, type = "text" }) {
    return (
        <>
            <h3 className="text-left">{label}</h3>
            <input className="border rounded p-2 outline-none w-full py-6 gap-6 border-solid border-amber-600"
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