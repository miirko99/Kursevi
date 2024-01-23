import Home from "./Home"
import NavBar from "./NavBar"
import DodajKurs from "./DodajKurs";
import Kurs from "./Kurs";
import { Routes , Route} from 'react-router-dom'
import LoginRegisterModal from "./LoginRegisterModal";
import { LoginRegisterProvider } from "./UserLogInContext";


//export const Context=createContext()

function App() {

  //const [state,setState]= useState(
    //{
    //  userName: null,
    //  showLogin: false,
    //  showReg:false
    //})

  return (
  <>
  <LoginRegisterProvider>
    <>
    <NavBar/>
    <LoginRegisterModal/>
    {false && state.showLogin && <LoginForm/>}
    {false && state.showReg && <RegisterForm/>}
    <Routes>
      <Route path="/home" element={<Home/>} />
      <Route path="/" element={<Home/>} />
      <Route path="/dodajKurs" element={<DodajKurs/>} />
      <Route path="/kurs" element={<Kurs/>} />
    </Routes></>
  </LoginRegisterProvider>
  </>
  )
}

export default App