
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";

import './index.css'
import Main from "./components/Main";



function App() {


  return (
   <div>
    {/* <Header></Header> */}
    <header className="bg-blue-950">
      <div className='container mx-auto flex items-center p-2'>
      <a className='text-white mx-8 font-bogle text-3xl' href="#">//codeDump</a>

      <div className='hidden md:flex  space-x-6 text-white'>
          <a className="hover:text-amber-400 hover:scale-103 transition-all" href="">Ana Sayfa</a>
          <a className="hover:text-amber-400 hover:scale-103 transition-all" href="">Kitaplık</a>
          <a className="hover:text-amber-400 hover:scale-103 transition-all" href="">Makaleler</a>
          <a className="hover:text-amber-400 hover:scale-103 transition-all" href="">Kaynakça</a>
      </div>

      <button className='rounded-sm ml-auto p-1 mx-8 font-bold  text-white border-b'>Giriş yap</button>
   

      


      <Menu as="div" className="relative md:hidden mx-4">
            <MenuButton className="text-white">
              <Bars3Icon className="h-8 w-8" />
            </MenuButton>

            <MenuItems
              className="absolute right-0 mt-3 w-48 origin-top-right rounded-md bg-blue-900 p-2 shadow-lg
              transition data-closed:scale-95 data-closed:opacity-0"
            >
              <MenuItem>
                <a className="block px-4 py-2 text-white hover:bg-blue-800 rounded">
                  Ana Sayfa
                </a>
              </MenuItem>

              <MenuItem>
                <a className="block px-4 py-2 text-white hover:bg-blue-800 rounded">
                  Kitaplık
                </a>
              </MenuItem>

              <MenuItem>
                <a className="block px-4 py-2 text-white hover:bg-blue-800 rounded">
                  Makaleler
                </a>
              </MenuItem>

              <MenuItem>
                <a className="block px-4 py-2 text-white hover:bg-blue-800 rounded">
                  Kaynakça
                </a>
              </MenuItem>
            </MenuItems>
          </Menu>
          </div>
    </header>

    <Main></Main>

   </div>
  )
}

export default App
