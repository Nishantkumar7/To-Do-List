import { Check, Pencil, Trash2, X } from 'lucide-react';
import { useState } from 'react';

export default function TodoItem({ todo, onDelete, onToggle, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    if (editText.trim()) {
      onEdit(todo.id, editText);
      setIsEditing(false);
    }
  };

  if (isEditing) {
    return (
      <div className="flex items-center gap-2 p-4 bg-gray-100 rounded-xl border border-blue-300 shadow-sm">
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          autoFocus
        />
        <button
          onClick={handleEdit}
          className="p-2 text-emerald-600 hover:text-emerald-700 hover:bg-emerald-100 rounded-lg transition-colors"
          aria-label="Save"
        >
          <Check className="h-5 w-5" />
        </button>
        <button
          onClick={() => setIsEditing(false)}
          className="p-2 text-rose-600 hover:text-rose-700 hover:bg-rose-100 rounded-lg transition-colors"
          aria-label="Cancel"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
    );
  }

  return (
    <div
      className={`group flex items-center gap-3 p-4 bg-white rounded-xl border border-blue-300 shadow-sm hover:border-blue-400 transition-all ${
        todo.completed ? 'bg-blue-50' : ''
      }`}
    >
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className="h-5 w-5 rounded-md border-blue-300 text-blue-600 focus:ring-blue-500 transition-colors"
      />
      <span
        className={`flex-1 text-gray-700 ${
          todo.completed ? 'line-through text-gray-400' : ''
        }`}
      >
        {todo.text}
      </span>
      <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={() => setIsEditing(true)}
          className="p-2 text-blue-600 hover:text-blue-700 hover:bg-blue-100 rounded-lg transition-colors"
          aria-label="Edit"
        >
          <Pencil className="h-5 w-5" />
        </button>
        <button
          onClick={() => onDelete(todo.id)}
          className="p-2 text-rose-600 hover:text-rose-700 hover:bg-rose-100 rounded-lg transition-colors"
          aria-label="Delete"
        >
          <Trash2 className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
