import Link from 'next/link'

export default function Header() {
    return (
        <header>
            <main>
            <div>
                <h1>My Blog</h1>

         </div>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                {/* <li><Link href="/contact">Contact</Link></li> */}
                <li><Link href="/course">Course</Link></li>

            </ul>
            </main>
        </header>
    )
}