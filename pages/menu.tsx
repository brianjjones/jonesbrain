import styles from '@/styles/Menu.module.css'
import { Fragment } from 'react'
import { Menu } from '@headlessui/react'

const links = [
    { href: '/home', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/blog', label: 'Blog' },
    { href: '/partscanner', label: 'Part Scanner' },
]

export default function JBMenu() {
    return (
        <Menu>
            <Menu.Button>
                {({ open }) => (
                    <div> {open ? "OPEN" : "CLOSED"} </div>
                )}
            </Menu.Button>
            <Menu.Items>
                {links.map((link) => (
                    /* Use the `active` state to conditionally style the active item. */
                    <Menu.Item key={link.href} as={Fragment}>
                        {({ active }) => (
                            <div className={active ? styles.bgBlue : ''}>
                            <a
                                href={link.href}
                                className={`${active ? 'bg-blue-500 text-white' : 'bg-white text-black'
                                    }`}
                            >
                                {link.label}
                            </a>
                            </div>
                        )}
                    </Menu.Item>
                ))}                
            </Menu.Items>
        </Menu>
    )
}