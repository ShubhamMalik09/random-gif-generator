import './App.css';
import Random from './components/Random';
import Tag from './components/Tag';

function App() {
  return (
    <div className='w-full h-full min-h-screen flex flex-col background'>
      <div className='bg-white rounded-md w-[90%] mx-auto mt-[40px] py-3'>
      <h1 className= 'text-center text-3xl font-bold'>RANDOM GIFS</h1>
      </div>
      
      <div className='flex flex-col items-center w-full mt-[30px]'>
        <Random/> 
        <Tag/>
      </div>
    </div>
  );
}

export default App;
