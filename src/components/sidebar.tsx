import type { Task } from "../types";

interface SidebarProps {
  setTask: React.Dispatch<React.SetStateAction<Task[]>>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setChangeObject: React.Dispatch<React.SetStateAction<Task | null >>;
  task: Task[];
}


export default function Sidebar ({ task, setTask, setOpen, setChangeObject, setSidebarOpen }: SidebarProps) {

  const deleteTask = (id: number)=> {
    setTask(prev=> prev.filter(t=> t.id !== id))
  }

    return (
        <>
        <div className="task-list-container">
          <div className="task-list-header">
            <h2 className="font-bold text-5xl font-sans">Task List</h2>
            <i className="bi bi-list-task" onClick={()=> setSidebarOpen(false)} ></i>
          </div>

        <div className="task-list-content">
            {task.map((event: Task)=> (
                <div className="task" key={event.id}>
                    <div className="list">
                      <span className="task-text">{event.name}</span>
                      <div className="actions">
                        <i onClick={()=> {setOpen(true); setChangeObject(event); }} className="bi bi-pencil-square edit-icon"></i>
                        <i onClick={()=> deleteTask(event.id)} className="bi bi-trash delete-icon"></i>
                      </div>
                    </div>
                    {/* <span className="task-text">{event}</span> */}
                </div>
            ))}
        </div>

          <i className="bi bi-list task-list-toggle"></i>
        </div>
        </>
    )
}