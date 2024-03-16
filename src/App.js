import { useEffect } from 'react';
import './App.css';
import TopBar from "./TopBar/TopBar";
import Page  from './Page/Page';
function App() {
  useEffect(()=>{
  });

  return (
        <section className="h-screen w-screen bg-my-gray flex justify-center items-center">
          <div className='bg-my-light h-3/4 w-full sm:w-3/4 rounded-xl flex flex-col justify-between slideIn border-b-4 border-r-4 border-gray-800'>
              <TopBar></TopBar>
              <Page></Page>
          </div>
        </section>
  )
}

export default App;
