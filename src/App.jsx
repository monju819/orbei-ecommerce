import Image from "./components/Layout/Image";
import Flex from "./components/Layout/Flex";
import List from "./components/Layout/List";
import ListItem from "./components/Layout/ListItem";
import{FaBars} from'react-icons/fa'
import { useEffect, useState } from "react";
function App() {
  
  let [show,setShow]=useState(true)


useEffect(()=>{
  function scrollWidth(e){
if(window.innerWidth < 1024){
 setShow(false)
}else{
  setShow(true)
}
  }
window.addEventListener("resize",scrollWidth)
},[])






  return (
    <>
    <nav>

      <div className="max-w-container p-2  mx-auto">
<Flex className="lg:flex ">
  <div className="lg:w-1/4">
   <Image imgsrc="assets/logo.png"  />
  </div>
  <div className="lg:w-3/4 ">

  <FaBars onClick={()=>setShow(!show)}  className="block lg:hidden ml-auto absolute top-1.5 right-2.5"/>

  {show &&  
  <List className="  lg:flex justify-center gap-x-10 mt-5 lg:mt-0  ">
   <ListItem className="font-dm font-normal hover:font-bold text-sm my-2.5 lg:my-0  " item="Home"  />
   <ListItem className="font-dm font-normal hover:font-bold text-sm  my-2.5 lg:my-0   " item="About"  />
   <ListItem  className="font-dm font-normal hover:font-bold text-sm  my-2.5 lg:my-0   " item="Service"  />
   <ListItem   className="font-dm font-normal hover:font-bold text-sm  my-2.5 lg:my-0   " item="Contract"  />
   
    </List>
    }
  </div>
</Flex>
      </div>
    </nav>
    </>
  );
}

export default App;
