export default function RadioGroup({ label, name, options, value, onChange }) {
    return (
        <div className="mb-4 ">
            {label && <p className="mb-1 font-medium text-left">{label}</p>}
            <div className="flex-col gap-4">
                {options.map((opt, i) => (
                    <label key={i} className="flex gap-2 cursor-pointer ">
                        <input
                            type="radio"
                            name={name}
                            value={opt}
                            checked={value === opt}
                            onChange={onChange}
                            className="h-4 w-4 text-blue-500"
                        />
                        {opt}
                    </label>
                ))}
            </div>
        </div>
    );
}