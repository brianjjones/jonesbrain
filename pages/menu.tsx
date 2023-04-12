import styles from '@/styles/Menu.module.css'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'

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
                    <div> ||| </div>
                )}
            </Menu.Button>
            <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
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
            </Transition>
        </Menu>
    )
}