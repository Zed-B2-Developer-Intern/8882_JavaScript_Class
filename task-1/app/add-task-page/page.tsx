"use client"
import { Button, Input } from 'antd'
import Link from 'next/link'
import React, { useState } from 'react'

function AddTaskPage() {
  const [task, setTask] = useState("")

  return (
    <div className="flex flex-col justify-between min-h-screen bg-gradient-to-br from-white to-slate-100 p-6 pb-28">
      <div className="mt-12">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-900">📝 Add a Task</h2>
        <Input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder='Enter your task'
          className='mb-6 text-lg py-2 px-4'
        />

        <Link href="/">
          <Button
            type='primary'
            block
            size='large'
            className='mt-2'
            onClick={() => {
              if (task.trim()) {
                localStorage.setItem("task", task)
              }
            }}
          >
            Save Task
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default AddTaskPage