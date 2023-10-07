import Link from 'next/link'

export default function NotFound() {
  return <div>
      <h1>Not found – 404!</h1>
      <div>
        <Link href="/">
            <button>
            Go back to Home </button>
            </Link>
      </div>
  </div>
}