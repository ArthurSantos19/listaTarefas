import styles from './task.module.css'
import { BsTrash } from 'react-icons/bs'
import { ITask } from '../../App'

interface Props {
  task: ITask;
}

export function Task({ task }: Props) {
  return (
    <div className={styles.task}>
      <button className={styles.check}>
        <div />
      </button>

      <p>{task.title}</p>

      <button className={styles.deleteButton}>
        <BsTrash size={20} />
      </button>
    </div>
  )
}