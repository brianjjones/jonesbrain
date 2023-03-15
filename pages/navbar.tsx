import Link from 'next/link'

export default function NavBar() {
    return (
      <div>
        <li>
            <Link href="/">Home</Link>
        </li>
        <li>
            <Link href="/about">About Us</Link>
        </li>
        <li>
            <Link href="/partscanner">Part Scanner</Link>
        </li>
        <li>
            <Link href="/blog">Blog</Link>
        </li>
      </div>
    )
  }