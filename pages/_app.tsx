import '@/styles/globals.css'
// import '@/styles/NavBar.module.css'
import type { AppProps } from 'next/app'
import NavBar from './navbar'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className='app'>
      <NavBar />
      <Component {...pageProps} />
    </div>
  )
}
