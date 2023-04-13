// import Link from 'next/link'
import JBMenu from './dropdown';
// import { useRouter } from 'next/router'
// import styles from '@/styles/NavBar.module.css'

export default function NavBar() {
  // const router = useRouter();

    return (
      <>
      <div className='flex bg-black'> 
        <JBMenu />
        <div className='flex-1 text-white text-center'>NAME OF CURRENT APP</div>
      </div>
      </>
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