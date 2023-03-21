import Link from 'next/link'
import JBMenu from './menu';
import { useRouter } from 'next/router'
import styles from '@/styles/NavBar.module.css'

export default function NavBar() {
  const router = useRouter();

    return (
      
      <div className={styles.navbar}> 
        <JBMenu />
        <div>NAME OF CURRENT APP</div>
      </div>
    )
  }

  // <button className={styles.navbaritem} type="button" onClick={() => router.push('/')}>
  // Home
  // </button>
  // <button className={styles.navbaritem} type="button" onClick={() => router.push('/about')}>
  // About Us
  // </button>
  // <button className={styles.navbaritem} type="button" onClick={() => router.push('/partscanner')}>
  // Part Scanner
  // </button>
  // <button className={styles.navbaritem} type="button" onClick={() => router.push('/blog')}>
  // Blog
  // </button>