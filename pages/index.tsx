// import styles from '@/styles/Home.module.css'
import React, { FC, ReactNode, ReactPropTypes } from 'react';
import styles from '@/styles/Index.module.css'
import PartScanner from './partscanner'

// function makeGridItem(item: String) {
//   return (
//     <div className={styles.gridItem}>
//       <PartScanner />
//     </div>    
//   )
// }

function makeGridItem(item: ReactNode) {
  return (
    <div className={styles.gridItem}>
      {item}
    </div>    
  )
}

export default function Home() {
  // let partScanNode: ReactNode = <PartScanner />;
  // let mainWindow = document.querySelector(".main");
  // let classes = 'main ' + styles.mainFlex;
  let partScan = makeGridItem(<PartScanner />);
  return (
        <div className={'main ' + styles.mainFlex}>
          <div id={styles.appGrid}>
            {partScan}
            <div className={styles.gridItem}>Blog</div>
            <div className={styles.gridItem}>About me</div>
          </div>
        </div>
  )
}
