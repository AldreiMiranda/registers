import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

export const Modal = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="fixed top-0 left-0 h-full w-full bg-gray-900 justify-center flex items-center opacity-80"></div>
        <div className="bg-white p-2 border-solid border-2 border-gray-400 w-6/12 h-6/12 rounded-md min-h-0 absolute">
          <div className="flex justify-end pb-7">
            <XMarkIcon className="h-5 w-5 text-gray-500  hover:text-purple-400" />
          </div>
          <div>
            <h1 className="text-4xl">Aldrei Miranda</h1>
            <div className="flex mt-5">
              <div className="flex p-2">
                <p className="pr-1">E-mail: </p>
                <p className="pr-1">aldrei_miranda@hotmail.com</p>
              </div>
              <div className="flex p-2">
                <p className="pr-1">Telefone: </p>
                <p className="pr-1"> 11 987398262</p>
              </div>
            </div>
            <div className="flex">
              <div className="flex p-2">
                <p className="pr-1">Data de Nascimento: </p>
                <p className="pr-1">06/05/1993</p>
              </div>
              <div className="flex p-2">
                <p className="pr-1">CPF:</p>
                <p className="pr-1"> 09876543</p>
              </div>
            </div>
            <div className="flex">
              <div className="flex p-2">
                <p className="pr-1">Data de Nascimento: </p>
                <p className="pr-1">06/05/1993</p>
              </div>
              <div className="flex p-2">
                <p className="pr-1">CPF:</p>
                <p className="pr-1"> 09876543</p>
              </div>
            </div>
            <div className="flex">
              <div className="flex p-2">
                <p className="pr-1">Renda Mensal: </p>
                <p className="pr-1">06/05/1993</p>
              </div>
              <div className="flex p-2">
                <p className="pr-1">CEP:</p>
                <p className="pr-1"> 09876543</p>
              </div>
            </div>
            <div className="flex">
              <div className="flex p-2">
                <p className="pr-1">Endereço: </p>
                <p className="pr-1">06/05/1993</p>
              </div>
              <div className="flex p-2">
                <p className="pr-1">Endereço: </p>
                <p className="pr-1"> 09876543</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
