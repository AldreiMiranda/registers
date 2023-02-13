import React from "react";
import { UserIcon } from "@heroicons/react/24/outline";
import { MapIcon } from "@heroicons/react/24/outline";
import { DocumentIcon } from "@heroicons/react/24/outline";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

export const Wizard = () => {
  return (
    <>
      <div className="w-full py-6">
        <div className="flex">
          <div className="w-1/4">
            <div className="relative mb-2">
              <div className="w-10 h-10 mx-auto ounded-full text-lg flex items-center justify-center">
                <ChevronLeftIcon className="h-7 w-7 text-purple-900  hover:text-black" />
              </div>
            </div>
          </div>

          <div className="w-1/4">
            <div className="relative mb-2">
              <div className="w-10 h-10 mx-auto bg-purple-900 rounded-full text-lg text-white flex items-center justify-center">
                <UserIcon className="h-7 w-7 text-white  hover:text-purple-400" />
              </div>
            </div>
          </div>

          <div className="w-1/4">
            <div className="relative mb-2">
              <div className="w-10 h-10 mx-auto bg-purple-900 rounded-full text-lg text-white flex items-center justify-center">
                <MapIcon className="h-7 w-7 text-white  hover:text-purple-400" />
              </div>
            </div>
          </div>

          <div className="w-1/4">
            <div className="relative mb-2">
              <div className="w-10 h-10 mx-auto bg-purple-900 rounded-full text-lg text-white flex items-center justify-center">
                <DocumentIcon className="h-7 w-7 text-white  hover:text-purple-400" />
              </div>
            </div>
          </div>

          <div className="w-1/4">
            <div className="relative mb-2">
              <div className="w-10 h-10 mx-auto bg-purple-900 rounded-full text-lg text-white flex items-center justify-center">
                <CheckCircleIcon className="h-7 w-7 text-white  hover:text-purple-400" />
              </div>
            </div>
          </div>

          <div className="w-1/4">
            <div className="relative mb-2">
              <div className="w-10 h-10 mx-auto rounded-full text-lg flex items-center justify-center">
                <ChevronRightIcon className="h-7 w-7 text-purple-900  hover:text-black" />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20 flex justify-center">
          {/* <form>
            <div className="grid gap-6 mb-6 lg:grid-cols-2">
              <div>
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Nome
                </label>
                <input
                  className=" block w-full text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="Jane"
                />
              </div>
              <div>
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Sobrenome
                </label>
                <input
                  className=" block w-full text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="Jane"
                />
              </div>
            </div>
            <div className="grid gap-6 mb-6 lg:grid-cols-2">
              <div>
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  E-mail
                </label>
                <input
                  className=" block w-full text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="Jane"
                />
              </div>
              <div>
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Telefone
                </label>
                <input
                  className=" block w-full text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="Jane"
                />
              </div>
            </div>
            <div className="flex justify-end ">
              <button className="bg-purple-900 text-white rounded-lg p-2">
                Proximo
              </button>
            </div>
          </form> */}

          {/* <form>
            <div className="grid gap-6 mb-6 lg:grid-cols-2">
              <div>
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  CEP
                </label>
                <input
                  className=" block w-full text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder=""
                />
              </div>
              <div>
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Endedreço 1
                </label>
                <input
                  className=" block w-full text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder=""
                />
              </div>
            </div>
            <div className="grid gap-6 mb-6 lg:grid-cols-2">
              <div>
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  CEP
                </label>
                <input
                  className=" block w-full text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="Jane"
                />
              </div>
              <div>
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Endereço 2
                </label>
                <input
                  className=" block w-full text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="Jane"
                />
              </div>
            </div>
            <div className="flex justify-end ">
              <button className="bg-purple-900 text-white rounded-lg p-2">
                Proximo
              </button>
            </div>
          </form> */}

          <form>
            <div className="grid gap-6 mb-6 lg:grid-cols-2">
              <div>
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Data de nascimento
                </label>
                <input
                  className=" block w-full text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder=""
                />
              </div>
              <div>
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  CPF
                </label>
                <input
                  className=" block w-full text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder=""
                />
              </div>
            </div>
            <div className="grid gap-6 mb-6 lg:grid-cols-2">
              <div>
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Renda Mensal
                </label>
                <input
                  className=" block w-full text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="Jane"
                />
              </div>
            </div>
            <div className="flex justify-end ">
              <button className="bg-purple-900 text-white rounded-lg p-2">
                Proximo
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
