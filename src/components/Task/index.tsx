import styles from './task.module.css'
import { BsTrash } from 'react-icons/bs'
import { ITask } from '../../App'
import { BsFillCheckCircleFill } from 'react-icons/bs'

interface Props {
  task: ITask;
  onDelete: (taskId: string) => void;
  onComplete: (taskId: string) => void;
}

export function Task({ task, onDelete, onComplete }: Props) {

  return (
    <div className={styles.task}>
      <button className={styles.check} onClick={() => {
        onComplete(task.id)
      }}>
        {task.isCompleted ? <BsFillCheckCircleFill /> : <div />}
      </button>

      <p>{task.title}</p>

      <button className={styles.deleteButton} onClick={() => onDelete(task.id)}>
        <BsTrash size={20} />
      </button>
    </div>
  )
}