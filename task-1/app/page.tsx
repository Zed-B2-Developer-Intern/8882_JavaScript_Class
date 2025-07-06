"use client";
import React, { useEffect, useState } from "react";
import { Button } from "antd";
import Link from "next/link";
import SlidableCard from "./slidable_card";
import BottomNav from "./botton_nav";

function TaskPage() {
  const [tasks, setTasks] = useState<string[]>([]);

  useEffect(() => {
    let storedTasks: string[] = [];
    const tasksFromStorage = localStorage.getItem("tasks");
    if (tasksFromStorage) storedTasks = JSON.parse(tasksFromStorage);

    const newTask = localStorage.getItem("task");
    if (newTask) {
      storedTasks.push(newTask);
      localStorage.setItem("tasks", JSON.stringify(storedTasks));
      localStorage.removeItem("task");
    }

    setTasks(storedTasks);
  }, []);

  const handleComplete = (index: number) => {
    const completedTask = tasks[index];

    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));

    const completedFromStorage = localStorage.getItem("completed");
    const completed = completedFromStorage ? JSON.parse(completedFromStorage) : [];
    completed.push(completedTask);
    localStorage.setItem("completed", JSON.stringify(completed));
  };


  const handleDelete = (index: number) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
    localStorage.setItem("tasks", JSON.stringify(updated));
  };

  const handleEdit = (index: number, newTask: string) => {
    const updated = [...tasks];
    updated[index] = newTask;
    setTasks(updated);
    localStorage.setItem("tasks", JSON.stringify(updated));
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6 relative">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          <img className="h-15 inline" src="/image.png" alt="loading" /> Tasks
        </h1>
      </div>

      <div className="grid gap-4 pb-20">
        {tasks.length === 0 ? (
          <p className="text-gray-500 text-sm">No tasks yet. Click + to add.</p>
        ) : (
          tasks.map((task, index) => (
            <SlidableCard
              key={index}
              task={task}
              onDelete={() => handleDelete(index)}
              onEdit={(newTask) => handleEdit(index, newTask)}
              onComplete={() => { handleComplete(index) }}
            />
          ))
        )}
      </div>

      <Link href="/add-task-page">
        <Button
          type="primary"
          shape="circle"
          className="!fixed !bottom-24 !right-6 !w-16 !h-16 !text-2xl flex items-center justify-center z-50 shadow-lg"
        >
          +
        </Button>
      </Link>
      <BottomNav/>
    </div>
  );
}

export default TaskPage;
