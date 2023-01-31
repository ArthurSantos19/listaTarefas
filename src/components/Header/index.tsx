import { ChangeEvent, FormEvent, useState } from 'react';
import logo from '../../assets/logo.svg'
import styles from './header.module.css'

interface Props {
  addTask: (taskTitle: string) => void;
}

export function Header({ addTask }: Props) {
  const [title, setTitle] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (title === "") {
      alert('Favor digite a tarefa desejada!')
    } else {
      addTask(title);
      setTitle("");
    }

  }

  function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value)
  }


  return (
    <header className={styles.header}>
      <img src={logo} />

      <form className={styles.newTaskForm} onSubmit={handleSubmit}>
        <input placeholder='Adicione uma nova tarefa' onChange={onChangeTitle} value={title} />
        <button>Criar</button>
      </form>
    </header>
  )
}