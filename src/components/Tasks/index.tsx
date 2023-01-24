import { ITask } from '../../App'
import { Task } from '../Task'
import styles from './task.module.css'

interface Props {
  tasks: ITask[];
  onDelete: (taskId: string) => void;
  onComplete: (taskId: string) => void;
}

export function Tasks({ tasks, onDelete, onComplete }: Props) {
  const taskQuant = tasks.length
  const completedTasks = tasks.filter(task => task.isCompleted).length;
  return (
    <section className={styles.tasks}>
      <header className={styles.header}>
        <div>
          <p>Tarefas criadas</p>
          <span>{taskQuant}</span>
        </div>
        <div>
          <p>Concluidas</p>
          <span> {completedTasks} de {taskQuant}</span>
        </div>
      </header>

      <div className={styles.list}>
        {tasks.map((task) => (
          <Task key={task.id} task={task} onDelete={onDelete} onComplete={onComplete} />
        ))}
      </div>
    </section>
  )
}