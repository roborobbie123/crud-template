export default function Tasks({ tasks, deleteTask }) {
  return (
    <div className="p-4">
      {tasks && tasks.length > 0 ? (
        <ul className="space-y-2">
          {tasks.map((task, index) => (
            <li
              key={index}
              className="flex justify-between items-center border-b pb-2"
            >
              <div>
                <p className="font-medium">{task.title}</p>
                <p className="text-sm text-gray-600">{task.description}</p>
              </div>
              <button
                onClick={() => deleteTask(task.id)}
                className="text-red-500 hover:underline cursor-pointer text-sm"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600">No Tasks!</p>
      )}
    </div>
  );
}
