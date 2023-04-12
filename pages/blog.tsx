import styles from '@/styles/Home.module.css'
import { Tab } from '@headlessui/react'
import { Menu } from '@headlessui/react'


export default function Blog() {
    return (
    <Tab.Group vertical>
      <Tab.List>
        <Tab>Tab 1</Tab>
        <Tab>Tab 2</Tab>
        <Tab>Tab 3</Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>Content 1</Tab.Panel>
        <Tab.Panel>Content 2</Tab.Panel>
        <Tab.Panel>Content 3</Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  )
}
      // <div className={styles.main}>
      //   <div>What I'm up to</div>
      // </div>

  // interface MenuProps {
  //   // itemCss: string;
  //   itemText: string;
  //   itemLink: string;
  // }

  // // function MenuItem (props: MenuProps) {
  //   function MenuItem({itemText, itemLink}:MenuProps) {
  //   return (
  //   <div >
  //     <a 
  //       href={itemLink}
  //     >
  //       {itemText}
  //     </a>
  //   </div>
  //   )
  // }