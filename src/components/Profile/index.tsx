/* eslint-disable @next/next/no-img-element */
import styles from './index.module.css'

export function Profile() {
  return (
  <div className={styles.profile}>
    <img className={styles.avatar} src='https://github.com/AmandaSchererMeirelles' alt="Foto de Camila Sbrussi"/>
    <h1 className={styles.name}>Amanda Scherer</h1>
  </div>
  )
}