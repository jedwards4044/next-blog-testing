import styles from './navbar.module.css'
import Link from 'next/dist/client/link'

const Navbar = () => {
    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                <Link href="/">
                    <a>Home</a>
                </Link>
                <Link href="/first-post">
                    <a>First Post</a>
                </Link>
            </div>
        </div>
    )
}

export default Navbar
