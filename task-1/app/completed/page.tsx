"use client";
import React, { useEffect, useState } from "react";
import { Modal } from "antd";
import HoldableCard from "./holdable_card";
import BottomNav from "../botton_nav";

export default function CompletedTasksPage() {
  const [completedTasks, setCompletedTasks] = useState<string[]>([]);
  const [selectedTask, setSelectedTask] = useState<string | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("completed");
    if (stored) {
      setCompletedTasks(JSON.parse(stored));
    }
  }, []);

  const handleLongPress = (task: string) => {
    setSelectedTask(task);
    setIsModalVisible(true);
  };

  const handleDelete = () => {
    if (!selectedTask) return;
    const updated = completedTasks.filter((t) => t !== selectedTask);
    setCompletedTasks(updated);
    localStorage.setItem("completed", JSON.stringify(updated));
    setSelectedTask(null);
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setSelectedTask(null);
    setIsModalVisible(false);
  };

  return (
    <div className="p-6 pb-28 min-h-screen bg-gradient-to-b from-slate-50 to-slate-200">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-800 drop-shadow-sm">✅ Completed Tasks</h1>

      {completedTasks.length === 0 && (
        <p className="text-gray-500 text-center italic">No completed tasks found.</p>
      )}

      <div className="space-y-4">
        {completedTasks.map((task, index) => (
          <HoldableCard
            key={index}
            task={task}
            onHold={() => handleLongPress(task)}
          />
        ))}
      </div>

      <Modal
        title="Delete Task?"
        open={isModalVisible}
        onOk={handleDelete}
        onCancel={handleCancel}
        okText="Delete"
        cancelText="Cancel"
      >
        <p className="text-base">
          Are you sure you want to delete the task:
          <strong className="text-red-500"> {selectedTask}</strong>?
        </p>
      </Modal>

      <BottomNav />
    </div>
  );
}