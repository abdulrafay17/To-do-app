import type { Task } from "../types";

interface taskAdderProps {
    changeInput: string;
    setTask: React.Dispatch<React.SetStateAction<Task[]>>;
    setChangeInput: React.Dispatch<React.SetStateAction<string>>
}


export default function TaskAdder({changeInput, setTask, setChangeInput}: taskAdderProps) {

    function onSubmit(e: React.FormEvent) {
        e.preventDefault();
        setTask(prev=> [...prev, { id: Date.now() , name: changeInput }]);
        setChangeInput('')
    }

    return (
        <>
            <div className="adding-task-container">
                <div className="adding-task-content-container">
                    <h1>Task Tracker</h1>
                    <p>Add your tasks below</p>
                    <form onSubmit={onSubmit} id="task-form">
                    <input
                        type="text"
                        id="task-input"
                        placeholder="Enter a new task..."
                        required
                        value={changeInput}
                        onChange={(e)=> setChangeInput(e.target.value)}
                    />
                    <button className="add-task" type="submit">
                        <svg
                        className="add-task__icon"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        >
                        <path
                            fill="var(--c)"
                            d="M12 4a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2h-6v6a1 1 0 1 1-2 0v-6H5a1 1 0 1 1 0-2h6V5a1 1 0 0 1 1-1Z"
                        />
                        </svg>
                        Add Task
                    </button>
                    </form>
                </div>
            </div>
        </>
    )
}