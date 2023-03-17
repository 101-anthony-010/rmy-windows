import React from 'react'

import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/level.enum';
import TaskComponent from '../pure/task'

const TaskListComponent = () => {
  
    const defaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL);

    const changeState = (id) => {
        console.log('Cambiar estado de una tarea')
    }

    return (
    <div>
        <div>
            Your Tasks: 
        </div>
        {/* Todo : Aplicar un For/Map para renderizar una lista */}
        <TaskComponent task={defaultTask}></TaskComponent>
    </div>
  )
};


export default TaskListComponent;
