import TheWildlifeCo from '@/assets/TheWildlifeCo.svg'
import Link from "./link";
import { ChosenPage } from "@/constant/types"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useState } from "react";

type Props = {
  chosenPage: ChosenPage;
  setChosenPage: (value: ChosenPage) => void;
}

const Navbar = ({chosenPage, setChosenPage}: Props) => {
  const isLarge = useMediaQuery("(min-width: 1000px)");
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  
  return (
    <nav>
        <div
         className="fixed top-0 z-40 w-full flex items-center justify-between bg-light-gray">
           <div className="flex items-center justify-between mx-auto w-10/12">
            <div className="flex items-center pt-2.5 justify-between w-full gap-40">
                <img src={TheWildlifeCo} alt="Logo" />
            {isLarge ? (
            <div className="flex justify-between w-full">
              <div className="flex items-center justify-between gap-8 text-base">
                  <Link 
                   page="Home"
                   chosenPage={chosenPage}
                   setChosenPage={setChosenPage}
                   />
                   <Link 
                   page="About"
                   chosenPage={chosenPage}
                   setChosenPage={setChosenPage}
                   />
                   <Link 
                   page="Take Action"
                   chosenPage={chosenPage}
                   setChosenPage={setChosenPage}
                   />
              </div>
            </div>
            ) : (
              <button
                className="rounded-lg bg-beige p-2 flex justify-end"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>
          {!isLarge && isMenuToggled && (
              <div className="fixed right-0 bottom-0 z-40 h-full w-[290px] bg-light-gray drop-shadow-xl">
              {/* CLOSE ICON */}
              <div className="flex justify-end p-12">
                <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                  <XMarkIcon className="h-6 w-6 text-black" />
                </button>
              </div>
    
              {/* MENU ITEMS */}
              <div className="ml-[33%] flex flex-col gap-10 text-2xl">
                <Link
                  page="Home"
                  chosenPage={chosenPage}
                  setChosenPage={setChosenPage}
                />
                <Link
                  page="About"
                  chosenPage={chosenPage}
                  setChosenPage={setChosenPage}
                />
                <Link
                  page="Take Action"
                  chosenPage={chosenPage}
                  setChosenPage={setChosenPage}
                />
              </div>
            </div>
            )}
         </nav>
       );
      };

export default Navbar;