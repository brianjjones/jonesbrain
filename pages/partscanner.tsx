import Link from 'next/link'

export default function PartScanner() {
    return (
      <>
        <div>Welcome to Part Scanner</div>
        <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about">About Us</Link>
      </li>
    </ul>
      </>
    )
  }