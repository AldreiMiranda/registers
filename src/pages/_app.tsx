import type {AppProps} from 'next/app'
import Link from 'next/link'
import {PlusIcon, UsersIcon} from '@heroicons/react/24/solid'
import '../globals.css'
import {useUiStore} from '@/stores/ui'

export default function App({Component}: AppProps) {
  const {drawerVisibility, changeDrawerVisibility} = useUiStore()

  const toggleVisibility = () => {
    changeDrawerVisibility(!drawerVisibility)
  }

  return (
    <div className="drawer" data-theme="light">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" onChange={() => ({})} checked={drawerVisibility} />
      <div className="drawer-content">
        <div className="flex justify-between items-center px-5 py-3 bg-gray-100">
          <h2 className="font-bold text-2xl">VentureLabs 🎉</h2>
          <label className="btn btn-circle swap swap-rotate" >
            <input type="checkbox" onChange={toggleVisibility} checked={drawerVisibility} />
            <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>
            <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>
          </label>
        </div>


        <div className="px-5 py-3">
          <Component />
        </div>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay" onClick={toggleVisibility}></label>
        <ul className="menu p-4 w-80 bg-base-100 text-base-content">
          <li onClick={toggleVisibility}>
            <Link href="/new-customer">
              <PlusIcon className="w-6 h-6" /> Novo cliente
            </Link>
            <Link href="/all-customers">
              <UsersIcon className="w-6 h-6" />
              Lista de clientes
            </Link>
          </li>
        </ul>
      </div>
    </div >
  )
}
