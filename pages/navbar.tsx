import {useRouter} from 'next/router';
import JBMenu from './dropdown';

const pageNames = {
  'partscanner' : 'Part Scanner',
  'blog' : 'Blog',
  'about' : 'About Me'
}
export default function NavBar() {
  const router = useRouter()
  let currUrl: string = router.pathname.slice(1);
  currUrl = pageNames.hasOwnProperty(currUrl) ? pageNames[currUrl as keyof typeof pageNames] : "";

    return (
      <>
      <div className='flex bg-black'> 
        <JBMenu />
        <div id='currapp' className='flex-1 text-white text-center'>{currUrl}</div>
      </div>
      </>
    )
  }
