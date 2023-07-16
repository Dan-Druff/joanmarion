import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <p>MAIN PAGE</p>
      <Link href="/threeD">3D</Link>
    </div>
  )
}
