export default function Button({ children, onClick, type = "button", variant = "primary" }) {
    const base = "px-4 py-2 rounded-lg text-white flex justify-start items-start";
    const styles = {
        primary: "bg-orange-500 hover:bg-orange-600",
        success: "bg-green-500 hover:bg-green-600",
        warning: "bg-orange-600 hover:bg-orange-700",
        danger: "bg-gray-900 hover:bg-gray-500",
    };

    return (
        <button type={type} onClick={onClick} className={`${base} ${styles[variant]}`}>
            {children}
        </button>
    );
}