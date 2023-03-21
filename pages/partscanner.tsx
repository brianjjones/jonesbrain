import Link from 'next/link'
import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
// import styles from '@/styles/Home.module.css'

export default function PartScanner() {
    return (
      <>
      <div className='main'>
        <div>Welcome to Part Scanner</div>
        <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about">About Us</Link>
      </li>
    </ul>
    
    </div>
    
  </>
    )
  }

  // interface ButtonProps {
  //   className: string;
  //   ariaHidden: string;
  // }

  // function EditInactiveIcon(props: ButtonProps) {
  //   return (
  //     <svg
  //       className={props.className}
  //       aria-hidden="true"
  //       viewBox="0 0 20 20"
  //       fill="none"
  //       xmlns="http://www.w3.org/2000/svg"
  //     >
  //       <path
  //         d="M4 13V16H7L16 7L13 4L4 13Z"
  //         fill="#EDE9FE"
  //         stroke="#A78BFA"
  //         strokeWidth="2"
  //       />
  //     </svg>
  //   )
  // }
  