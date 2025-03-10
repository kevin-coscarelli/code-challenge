import { useEffect, useState } from 'react';
import './App.css'
import { ItemGrid } from './components/ItemGrid'
import { AddItem } from './components/AddItem';

function App() {

  const [searchTerm, setSearchterm] = useState<string>();
  const [displayGrid, setDisplayGrid] = useState(true);

  useEffect(() => {
    setSearchterm(undefined);
  }, [displayGrid]);

  return (
    <div className='flex flex-col' style={{ maxHeight: 'calc(100vh - 64px' }}>
      <header role='navigation' className='flex justify-between'>
        <h1 className='text-3xl font-bold underline'>Grid Items</h1>
        {displayGrid ? <div className='flex items-baseline gap-2'>
          <label htmlFor="search" className="block mb-2 text-sm font-medium text-gray-900 text">Search</label>
          <input
            id='search'
            name='search'
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
            type='text'
            placeholder='search items...'
            value={searchTerm}
            onChange={(e) => setSearchterm(e.target.value)}
          /></div> : null}
        <div>
          <button
            role='button'
            className='focus:outline-none text-lg font-bold text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 rounded-lg px-5 py-2.5 me-2 mb-2'
            type='button'
            onClick={() => setDisplayGrid(!displayGrid)}>{displayGrid ? '+' : 'Back to Grid'}</button>
        </div>
      </header>
      {displayGrid ? <ItemGrid searchTerm={searchTerm} /> : <AddItem />}

    </div>
  )
}

export default App
