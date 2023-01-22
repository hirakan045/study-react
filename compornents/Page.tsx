import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { Links } from '@/compornents/Links'
import Headline from '@/compornents/Headline'

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
