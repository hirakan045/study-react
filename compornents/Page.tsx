import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Page(props: {page: string}) {
  return (
    <>
      <p>
        Get started by editing&nbsp;
        <code className={styles.code}>pages/{props.page}.tsx</code>
      </p>
    </>
  )
}
