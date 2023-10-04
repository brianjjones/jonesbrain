// import styles from '@/styles/Home.module.css'
import React, { FC, ReactNode, ReactPropTypes } from 'react';
import Link from 'next/link'
import styles from '@/styles/Index.module.css'
import PartScanner from './partscanner'

// TODO BJONES: Maybe try making the whole background the SVG swirly, and keep the text see through?
// BJONES: sadly text shadow doesn't help because the text is actually a hole, to placing a shadow puts it on top of the background making it darker.
// function makeGridItem(item: String) {
//   return (
//     <div className={styles.gridItem}>
//       <PartScanner />
//     </div>    
//   )
// }

// function makeGridItem(item: ReactNode) {
//   return (
//     <div >
//       {item}
//     </div>    
//   )
// }

const pageInfo = {
  'partscanner' : 'Part Scanner',
  'blog' : 'Blog',
  'about' : 'About Me'
}

export default function Home() {
  // let partScanNode: ReactNode = <PartScanner />;
  // let mainWindow = document.querySelector(".main");
  // let classes = 'main ' + styles.mainFlex;
  let classes = "fancy flex flex-1 justify-center items-center bg-yellow-500 rounded-xl m-1 text-9xl font-sans font-bold";
  // let partScan = makeGridItem(<PartScanner />);
  return (
        <>
          <div className="flex flex-col justify-around h-screen m-4">
            <Card className="flex flex-1 justify-center items-center bg-yellow-500 rounded-xl m-4" title="Part Scanner" link="/partscanner"/>
            <Card className="flex flex-1 justify-center items-center bg-green-500 rounded-xl m-4" title="Blog" link="/blog"/>
            <Card className="flex flex-1 justify-center items-center bg-blue-500 rounded-xl m-4" title="About Me" link="/about"/>
          </div>
        </>
  )
}

type CardInfo = {
  className: string,
  title: string,
  link: string,
}

function Card(info: CardInfo) {
  let classes = styles.cutout + " font-sans font-bold"
  let linkclass = info.className + " " + styles.grade
  return (
    <>
    <Link className={linkclass} href={info.link}>
    <div className={classes} > {info.title}
    </div>
    </Link>
    </>
  )
}

//<div className="flex text-center  m-4">{info.title}</div>
{/* <Card className="flex flex-col flex-1 justify-around bg-yellow-500 border-solid rounded-xl m-1 text-center" title="Part Scanner"/> */}