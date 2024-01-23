import Title from "./Title"
import logoImage from './assets/logo.png'
import GoToBtn from "./GoToBtn"
import DropDown from "./DropDown"
import MojiKurseviBtn from "./MojiKurseviBtn"

function NavBar(){
  return(
    <div id="navBar">
      <img src={logoImage} alt="" />
      <Title />
      <GoToBtn to="/" text="Home"/>
      <MojiKurseviBtn/>
      <GoToBtn to="/dodajKurs" text="Dodaj kurs"/>
      <DropDown/>
    </div>
  )
}
export default NavBar