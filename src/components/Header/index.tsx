import logo from '../../assets/logo.svg'
import styles from './header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} />

      <form className={styles.newTaskForm}>
        <input placeholder='Adicione uma nova tarefa' />
        <button>Criar</button>
      </form>
    </header>
  )
}