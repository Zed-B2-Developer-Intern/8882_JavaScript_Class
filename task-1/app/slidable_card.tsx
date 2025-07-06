"use client";
import React, { useEffect, useRef, useState } from "react";
import { Button, Card, Modal, Input, Checkbox } from "antd";

interface SlidableCardProps {
  task: string;
  onDelete: () => void;
  onEdit: (newTask: string) => void;
  onComplete: () => void;
}

function SlidableCard({ task, onDelete, onEdit, onComplete }: SlidableCardProps) {
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editedTask, setEditedTask] = useState(task);
  const cardRef = useRef<HTMLDivElement>(null);

  const maxSlide = 120;

  useEffect(() => {
    const handleTouchOutside = (e: TouchEvent | MouseEvent) => {
      if (cardRef.current && !cardRef.current.contains(e.target as Node)) {
        setTranslateX(0);
      }
    };

    document.addEventListener("touchstart", handleTouchOutside);
    document.addEventListener("mousedown", handleTouchOutside);
    return () => {
      document.removeEventListener("touchstart", handleTouchOutside);
      document.removeEventListener("mousedown", handleTouchOutside);
    };
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const dx = e.touches[0].clientX - startX;
    if (dx < 0) setTranslateX(Math.max(dx, -maxSlide));
    else setTranslateX(0);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    if (translateX < -40) setTranslateX(-maxSlide);
    else setTranslateX(0);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setStartX(e.clientX);
    setIsDragging(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const dx = e.clientX - startX;
    if (dx < 0) setTranslateX(Math.max(dx, -maxSlide));
    else setTranslateX(0);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (translateX < -40) setTranslateX(-maxSlide);
    else setTranslateX(0);
  };

  const handleEdit = () => {
    setIsModalVisible(true);
  };

  const handleModalOk = () => {
    onEdit(editedTask);
    setIsModalVisible(false);
  };

  const handleModalCancel = () => {
    setEditedTask(task);
    setIsModalVisible(false);
  };

  return (
    <div ref={cardRef} className="relative w-full overflow-hidden rounded shadow bg-white">
      <div className="absolute right-0 top-0 h-full flex items-center bg-red-100 pr-3 z-0">
        <Button danger type="primary" size="small" className="mr-2" onClick={onDelete}>
          Delete
        </Button>
        <Button size="small" onClick={handleEdit}>Edit</Button>
      </div>

      <div
        className="relative z-10 transition-transform duration-200 touch-pan-x"
        style={{ transform: `translateX(${translateX}px)` }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <Card className="m-0">  
          <p className="text-gray-800 inline mr-[1300px]">{task}</p>
          <Checkbox onChange={(e) => {
            if (e.target.checked) onComplete();
          }}>
          </Checkbox>
        </Card>
      </div>

      <Modal
        title="Edit Task"
        open={isModalVisible}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
        okText="Yes"
        cancelText="No"
      >
        <Input
          value={editedTask}
          onChange={(e) => setEditedTask(e.target.value)}
          placeholder="Edit your task"
        />
      </Modal>
    </div>
  );
}

export default SlidableCard;
