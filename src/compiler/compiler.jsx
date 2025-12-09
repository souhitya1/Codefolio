import Navbar from "../home/navbar"
import Maineditor from "./maineditor"
import BasicMenu from "./menu"
export default function Compiler(){
    return(
        <div className="bg-black">
          <BasicMenu/>
          <Maineditor/>
        </div>
    )
}