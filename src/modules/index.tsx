import React from "react";
import Image from "next/image";

import { Bars3Icon } from "@heroicons/react/24/outline";
import { PlusSmallIcon } from "@heroicons/react/24/outline";
import { SparklesIcon } from "@heroicons/react/24/solid";

export function Home() {
  return (
    <div className="w-full h-full flex flex-row justify-between">
      <div className="flex flex-col justify-between h-full w-1/5 border-solid border-2 border-gray-200">
        <div className="mt-5 ">
          <div className="py-5 px-2">
            <SparklesIcon className="h-9 w-9 text-violet-900" />
          </div>
          <div className=" hover:bg-gray-200 active:bg-gray-300 p-2 flex items-center">
            <Bars3Icon className="h-5 w-5 text-gray-500" />
            <button className="text-black text-1xl p-1">Listar Cliente</button>
          </div>
          <div className=" hover:bg-gray-200 active:bg-gray-300 p-2 flex items-center">
            <PlusSmallIcon className="h-5 w-5 text-gray-500" />
            <button className="text-black text-1xl"> Novo Cliente </button>
          </div>
        </div>
        <div className="flex p-2 items-center">
          <div>
            <Image
              src="/images/Ravena.png"
              alt="Picture of the author"
              width={50}
              height={50}
            />
          </div>
          <div className="flex flex-col pl-3">
            <a href="https://www.linkedin.com/in/aldrei-miranda/">
              <p className="text-sm text-gray-600"> Aldrei Miranda</p>
              <p className="text-xs text-gray-600"> Front-end Developer</p>
            </a>
          </div>
        </div>
      </div>
      <h1 className="text-red-300 hover:text-blue-300 transition-all text-8xl font-bold">
        Hello
      </h1>
      <p className="text-red-200 text-xl font-semibold">Descrição</p>
      <p className="text-red-200 text-xl font-semibold">Descrição 2</p>
    </div>
  );
}
