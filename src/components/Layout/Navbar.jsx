import Image from './Image';
import Flex from './Flex';
import List from './List';
import ListItem from './ListItem';
import { FaBars } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import Container from './Container';

const Navbar = () => {
  let [show, setShow] = useState(true);

  useEffect(() => {
    function scrollWidth(e) {
      if (window.innerWidth < 1024) {
        setShow(false);
      } else {
        setShow(true);
      }
    }
    scrollWidth();
    window.addEventListener('resize', scrollWidth);
  }, []);

  return (
    <nav className="py-8">
      <Container>
        <Flex className="lg:flex ">
          <div className="lg:w-1/4">
            <Image imgsrc="assets/logo.png" />
          </div>
          <div className="lg:w-3/4 ">
            <FaBars
              onClick={() => setShow(!show)}
              className="absolute right-2.5 top-1.5 ml-auto block lg:hidden"
            />

            {show && (
              <List className="  mt-5 justify-center gap-x-10 lg:mt-0 lg:flex  ">
                <ListItem
                  className="my-2.5 font-dm text-sm font-normal hover:font-bold lg:my-0  "
                  item="Home"
                />
                <ListItem
                  className="my-2.5 font-dm text-sm font-normal  hover:font-bold lg:my-0   "
                  item="About"
                />
                <ListItem
                  className="my-2.5 font-dm text-sm font-normal  hover:font-bold lg:my-0   "
                  item="Service"
                />
                <ListItem
                  className="my-2.5 font-dm text-sm font-normal  hover:font-bold lg:my-0   "
                  item="Contract"
                />
              </List>
            )}
          </div>
        </Flex>
      </Container>
    </nav>
  );
};

export default Navbar;
