import { useEffect, useState } from "react";
import Background from "./components/background";
import Footer from "./components/footer";
import Sidebar from "./components/sidebar";
import TaskAdder from "./components/taskAdder";
import type { Task } from "./types";

function App() {

  const [tasks, setTask] = useState<Task[]>(()=> {

  const saved = localStorage.getItem('task');
    return saved ? (JSON.parse(saved) as Task[]) : []
  })
  const [changeObject, setChangeObject] = useState<Task | null>(null)
  console.log(changeObject)
  const [open, setOpen] = useState<boolean>(false)
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true)
  const [changeInput, setChangeInput] = useState<string>('')
  const [name, setName] = useState<string>('')
  

  useEffect(()=> {
    localStorage.setItem("task", JSON.stringify(tasks))
  }, [tasks])

  
  useEffect(() => {
    if (changeObject) {
      setName(changeObject.name);
    }
  }, [changeObject]);

  function nameChanged(id: number) {
    setTask(prev=> prev.map(cTask=> cTask.id === id ? {...cTask, name: name} : cTask))
  }
  
  return (
    <>
      <Background />

      <div className="main-container">
        <TaskAdder setTask={setTask} setChangeInput={setChangeInput} changeInput={changeInput} />

        {sidebarOpen && <Sidebar task={tasks} setOpen={setOpen} setChangeObject={setChangeObject} setSidebarOpen={setSidebarOpen} setTask={setTask} />}

        {open && <div className="quick-edit-modal">
          <div className="modal-content">
            <span className="bi bi-x-octagon" onClick={()=> setOpen(false)}></span>
            <h2>Edit Task</h2>
            <form id="edit-task-form">
              <input
                type="text"
                id="edit-task-input"
                placeholder="Edit your task..."
                value={name}
                onChange={(e)=> setName(e.target.value)}
                required
              />
              <button onClick={(e)=> {e.preventDefault(); setOpen(false); if (changeObject) nameChanged(changeObject.id);}} type="submit">Save Changes</button>
            </form>
          </div>
        </div>}

        <Footer />
      </div>
    </>
  );
}

export default App;
