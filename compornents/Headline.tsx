import styles from '@/styles/Home.module.css'

export default function Headline(props: {title: string}) {
  return (
    <div>
      <div className={styles.center}>
        <h1>{props.title}</h1>
      </div>
    </div>
  )
}
