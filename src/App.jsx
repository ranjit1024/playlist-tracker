import { useState,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { linkAtom, fetchedDataSelector } from './atom/atom'

import { useRecoilValue, useRecoilState, RecoilRoot, useSetRecoilState} from 'recoil'

function App() {

  return (
    <>
    <RecoilRoot>

     <div>
      <MainApp/>
     </div>
     </RecoilRoot>
    </>
  )
}
function MainApp(){
  const link = useRef();
  const [playlistId, setPlaylistId] = useRecoilState(linkAtom);

  const fetchedData = useRecoilValue(fetchedDataSelector);
  

  return <div className='main'>
      <div className='playlist-link'>
        <input type="text" ref={link} placeholder='Enter A Playlist Link'/>
        <button onClick={(e)=>{
          setPlaylistId(link.current.value);
        }}>Get Playlist</button>
      </div>
    </div>
}
export default App
