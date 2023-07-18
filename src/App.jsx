import Image from "./components/Layout/Image";
import Flex from "./components/Layout/Flex";
import List from "./components/Layout/List";
import ListItem from "./components/Layout/ListItem";

function App() {
  return (
    <>
    <nav>

      <div className="max-w-container bg-red-500 mx-auto">
<Flex className="flex">
  <div className="w-1/4">
   <Image imgsrc="assets/logo.png"  />
  </div>
  <div className="w-3/4">

  <List className="flex justify-center gap-x-10">
   <ListItem className="font-dm"  item="Home"  />
   <ListItem item="About"  />
   <ListItem item="Service"  />
   <ListItem item="Contract"  />
   
    </List>
  </div>
</Flex>
      </div>
    </nav>
    </>
  );
}

export default App;
