import { useState } from 'react'
import React from 'react'
import { TaskCreator } from './TaskCreator'
import { PendingTask } from './PendingTask'

function App() {
  return <>
    <h1>To-Do App</h1>
    <TaskCreator />
    <PendingTask />
  </>
}

export default App
