// Import useState hook from React for local component state
import { useState } from "react";

// This functional component receives props from the parent (App)
// - tasks: an array of task objects
// - deleteTask: function to delete a task by ID
// - updateForm: object holding current edit form state
// - setUpdateForm: function to update edit form state
// - updateTask: function to submit updates to a task
export default function Tasks({
  tasks,
  deleteTask,
  updateForm,
  setUpdateForm,
  updateTask,
}) {
  // State to keep track of which task is currently being edited (by its ID)
  const [editingId, setEditingId] = useState(null);

  // Trigger edit mode for a specific task and prefill the form with its data
  const startEditing = (task) => {
    setEditingId(task.id); // Mark this task as being edited
    setUpdateForm({ title: task.title, description: task.description }); // Prefill form with task values
  };

  // Exit edit mode and clear the update form
  const stopEditing = () => {
    setEditingId(null); // Exit edit mode
    setUpdateForm({ title: "", description: "" }); // Reset the form
  };

  return (
    <div className="p-4">
      {/* Check if there are any tasks */}
      {tasks && tasks.length > 0 ? (
        <ul className="space-y-2">
          {/* Loop through each task in the array */}
          {tasks.map((task) => (
            <li
              key={task.id} // Unique key per task
              className="flex justify-between items-center border-b pb-2"
            >
              {/* If this task is currently being edited, show the edit form */}
              {editingId === task.id ? (
                <div className="p-4 max-w-md mx-auto space-y-3 w-full">
                  {/* Input field for updating the task title */}
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
                    placeholder="Title"
                    value={updateForm.title}
                    onChange={(e) =>
                      setUpdateForm({ ...updateForm, title: e.target.value })
                    }
                  />
                  {/* Input field for updating the task description */}
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
                    placeholder="Description"
                    value={updateForm.description}
                    onChange={(e) =>
                      setUpdateForm({
                        ...updateForm,
                        description: e.target.value,
                      })
                    }
                  />
                  <div className="flex gap-2">
                    {/* Button to save/update the task */}
                    <button
                      onClick={() => {
                        updateTask(task.id); // Call parent function to update task
                        stopEditing(); // Exit edit mode
                      }}
                      className="bg-blue-500 text-white text-sm font-medium py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200 cursor-pointer"
                    >
                      Update Task
                    </button>
                    {/* Button to cancel editing */}
                    <button
                      onClick={stopEditing}
                      className="text-sm text-gray-500 hover:underline"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                // If not editing, show the task details
                <div className="flex flex-col w-full">
                  <p className="font-medium">{task.title}</p>
                  <p className="text-sm text-gray-600">{task.description}</p>
                </div>
              )}

              {/* Action buttons for Edit and Delete */}
              <div className="flex gap-4 ml-4">
                {/* Edit button triggers edit mode */}
                <button
                  onClick={() => startEditing(task)}
                  className="text-blue-400 hover:underline cursor-pointer text-sm"
                >
                  Edit
                </button>
                {/* Delete button calls parent deleteTask function */}
                <button
                  onClick={() => deleteTask(task.id)}
                  className="text-red-500 hover:underline cursor-pointer text-sm"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        // If no tasks exist, show a message
        <p className="text-gray-600">No Tasks!</p>
      )}
    </div>
  );
}
