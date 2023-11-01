import { ThemeProvider } from 'react-bootstrap'
import './App.css'
import Home from './pages/home/home'

function App() {
  return (
    <>
      <ThemeProvider
        breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
        minBreakpoint="xxs"
      >
        <Home />
      </ThemeProvider>
    </>
  )
}

export default App
