// app.jsx
import { useState, useEffect } from "react";
import "./App.css";
import Closing from "./components/closing";
import Input from "./components/input";
import RadioGroup from "./components/radioGroup";
import Button from "./components/button";
import Card from "./components/card";

function App() {
  const [todos, setTodos] = useState(() => JSON.parse(localStorage.getItem("todos")) || []);
  const [form, setForm] = useState({ title: "", desc: "", status: "To do" });
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => localStorage.setItem("todos", JSON.stringify(todos)), [todos]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    const updated = [...todos];
    editIndex !== null ? (updated[editIndex] = form) : updated.push(form);
    setTodos(updated);
    setForm({ title: "", desc: "", status: "To do" });
    setEditIndex(null);
  };

  return (
    <>
      <Closing text="To do List" />

      <Input label="Judul" name="title" value={form.title} onChange={handleChange} placeholder="Masukan judul..." />
      <Input label="Deskripsi" name="desc" value={form.desc} onChange={handleChange} placeholder="Masukan deskripsi." />
      <RadioGroup label="Status" name="status" options={["To do", "In Progress", "Done"]} value={form.status} onChange={handleChange} />
      <Button onClick={handleSubmit}>{editIndex !== null ? "Update" : "Tambah"}</Button>

      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6 mt-4 place-self-center">
        {todos.map((todo, i) => (
          <Card
            key={i}
            {...todo}
            onEdit={() => { setForm(todo); setEditIndex(i); }}
            onDelete={() => setTodos(todos.filter((_, idx) => idx !== i))}
          />
        ))}
      </div>
    </>
  );
}

export default App;
