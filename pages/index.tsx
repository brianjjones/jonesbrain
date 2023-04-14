// import styles from '@/styles/Home.module.css'
import React, { FC, ReactNode, ReactPropTypes } from 'react';
// import styles from '@/styles/Index.module.css'
import PartScanner from './partscanner'

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
  // let partScan = makeGridItem(<PartScanner />);
  return (
        <>
          <div className="flex flex-col justify-around h-screen m-4">
            <Card className="flex flex-1 justify-center items-center bg-yellow-500 rounded-xl m-1" title="Part Scanner"/>
            <Card className="flex flex-1 justify-center items-center bg-green-500 rounded-xl m-1" title="Blog"/>
            <Card className="flex flex-1 justify-center items-center bg-blue-500 rounded-xl m-1" title="About Me"/>
          </div>
        </>
  )
}

type CardInfo = {
  className: string,
  title: string,
}

function Card(info: CardInfo) {
  return (
    <>
    <div className={info.className} > {info.title}
      
    </div>
    </>
  )
}

//<div className="flex text-center  m-4">{info.title}</div>
{/* <Card className="flex flex-col flex-1 justify-around bg-yellow-500 border-solid rounded-xl m-1 text-center" title="Part Scanner"/> */}