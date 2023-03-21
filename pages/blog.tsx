import styles from '@/styles/Home.module.css'
import { Menu } from '@headlessui/react'


export default function Blog() {
    return (
      <Menu>
      <Menu.Button>
      {({ open }) => (
        <div> {open ? "OPEN" : "CLOSED"} </div>
      )}
      </Menu.Button>
      <Menu.Items>
        <Menu.Item>
          {({ active }) => (
            <div className={active ? styles.bgBlue : ''}>
            <a
              href="/blog"
            >
              Home
            </a>
            </div>
          )}
        </Menu.Item>
        <Menu.Item>
          <MenuItem itemText="Testing" itemLink='/blog' />
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a
              className={active ? styles.bgBlue : ''}
              href="/about"
            >
              About us
            </a>
          )}
        </Menu.Item>
        <Menu.Item disabled>
          <span className={styles.opacity75}>Invite a friend (coming soon!)</span>
        </Menu.Item>
      </Menu.Items>
    </Menu>
      // <div className={styles.main}>
      //   <div>What I'm up to</div>
      // </div>
    )
  }

  interface MenuProps {
    // itemCss: string;
    itemText: string;
    itemLink: string;
  }

  // function MenuItem (props: MenuProps) {
    function MenuItem({itemText, itemLink}:MenuProps) {
    return (
    <div >
      <a 
        href={itemLink}
      >
        {itemText}
      </a>
    </div>
    )
  }