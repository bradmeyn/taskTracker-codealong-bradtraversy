import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";

export default function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Go to gym",
      day: "Feb 5th at 2:30pm",
      reminder: false
    },
    {
      id: 2,
      text: "Go to gym again",
      day: "March 10th at 2:30pm",
      reminder: false
    },
    {
      id: 3,
      text: "Do groceries",
      day: "July 11th at 2:30pm",
      reminder: false
    }
  ]);
  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}
