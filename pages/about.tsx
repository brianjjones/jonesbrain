import { useRouter } from 'next/router'


export default function About() {
    const router = useRouter()

    return (
      <>
        <div>About Brian</div>
        <button type="button" onClick={() => router.push('/partscanner')}>
        Click me
        </button>
      </>
    )
  }