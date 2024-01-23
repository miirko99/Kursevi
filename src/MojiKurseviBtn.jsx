import { useLoginRegisterContext } from "./UserLogInContext"
import GoToBtn from "./GoToBtn"

export default function MojiKurseviBtn(){
  
  const [state, setState] = useLoginRegisterContext()
  let username = state?.userName
  return (<>
      {username!=null? <GoToBtn to={"/mojiKursevi?username="+username} text="Moji kursevi"/>:null}
    </>
  )
}