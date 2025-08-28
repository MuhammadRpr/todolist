import Button from "./button";

function Card({ title, desc, status, onEdit, onDelete }) {
    return (
        <div className="bg-white shadow rounded-lg p-4 text-center space-y-2 border-4 border-double border-amber-600">
            <h3 className="font-semibold rounded-lg space-y-2">{title}</h3>
            <p className="text-sm rounded-lg space-y-2">{desc}</p>
            <p className="text-xs mt-2 text-blue-600 font-medium rounded-lg space-y-2">{status}</p>

            <div className="flex gap-1 mt-2 justify-center items-center rounded-lg p-4">
                <Button variant="warning" className="rounded-lg space-y-2" onClick={onEdit}>
                    Edit
                </Button>
                <Button variant="danger" className="rounded-lg space-y-2" onClick={onDelete}>
                    Hapus
                </Button>
            </div>
        </div>
    );
}

export default Card;