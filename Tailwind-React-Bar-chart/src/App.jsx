import axios from 'axios'
import './App.css'
import ResultChart2 from './Components/ResultChart/ResultChart2'
import ResultCharts from './Components/ResultChart/ResultCharts'
import { Suspense } from 'react';

const marksPromise = axios.get('marks.json');

function App() {

  return (
    <>
      <ResultCharts />
      <Suspense fallback={<div>Loading...</div>}>
        <ResultChart2 marksPromise={marksPromise} />
      </Suspense>
    </>
  )
}

export default App
