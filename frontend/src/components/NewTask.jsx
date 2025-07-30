export default function NewTask({ createTask, setForm, form }) {
  return (
    <div className="p-4 max-w-md mx-auto space-y-3">
      <input
        type="text"
        className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
        placeholder="Title"
        onChange={(e) => setForm({ ...form, title: e.target.value })}
        value={form.title}
      />
      <input
        type="text"
        className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
        placeholder="Description"
        onChange={(e) => setForm({ ...form, description: e.target.value })}
        value={form.description}
      />
      <button
        onClick={createTask}
        className="w-full bg-blue-500 text-white text-sm font-medium py-2 rounded-md hover:bg-blue-600 transition duration-200 cursor-pointer"
      >
        Add Task
      </button>
    </div>
  );
}
