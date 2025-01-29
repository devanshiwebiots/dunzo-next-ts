import React from "react";
import { toast } from "react-toastify";
import { Button, CardHeader, Input, InputGroup } from "reactstrap";
import { AddTask, ToDoPlaceholder } from "@/Constant/constant";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { addNewTodo, setTask } from "@/Redux/Reducers/ToDoSlice";

export const ToDoHeader = () => {
  const {task} = useAppSelector((state)=>state.todo)
  const dispatch=useAppDispatch()

  const handleNewTask = () => {
    if (task.trim() === "") {
      toast.error("please add your todo");
    } else {
      dispatch(addNewTodo(task));onTaskChanged
      dispatch(setTask(""));
      toast.success(`Task Add ${task}`);
    }
  };

  const onTaskChanged = (e:React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setTask(e.currentTarget.value));
  };

  return (
    <CardHeader className="b-bottom">
      <div className="todo-list-header">
        <InputGroup className="new-task-wrapper">
          <Input value={task} placeholder={ToDoPlaceholder} id="new-task" onChange={(e)=>onTaskChanged(e)} bsSize="lg" className="" />
          <Button color="primary" className="add-new-task-btn" onClick={handleNewTask} id="add-task">{AddTask}</Button>
        </InputGroup>
      </div>
    </CardHeader>
  );
};