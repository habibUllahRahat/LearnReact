import Clock from './components/classcompo';
import './App.css'
import ClockFn from './components/funtionalCompo';

function App() {
  return (
    <>
      <Clock locale="bn-BD" />
      <ClockFn locale="bn-BD" />
    </>
  )
}

export default App
