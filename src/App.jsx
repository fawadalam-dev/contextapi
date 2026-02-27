import './App.css'
import Parent from './components/Parent'
import UserContextWrapper from './hooks/UserContext';


function App() {
  return (
    <>
      <UserContextWrapper>

        <Parent />
        <h1>Vite + React</h1>

      </UserContextWrapper>
    </>
  )
}

export default App