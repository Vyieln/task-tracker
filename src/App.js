import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'


function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
      id: 2,
      text: 'Doctors Appointment',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
  }
])
  return (
    <div className="container">
      <h1> Hello From React </h1>
      <Header />
      <Tasks tasks={tasks}/>
    </div>
  );
}


export default App;
