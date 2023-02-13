import React, { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Modal from "./modal";

export const List = () => {
  const [showModal, setShowModal] = useState<Boolean>(false);

  function onCloseModal() {
    setShowModal(false);
  }

  return (
    <>
      <h1 className="ml-7 font-bold"> Usuário</h1>
      <div className="table w-full pl-3 mt-9">
        <div className="table-row-group">
          <div className="table-row">
            <div className="table-cell text-gray-700 px-4 py-2 font-medium">
              Nome
            </div>
            <div className="table-cell text-gray-700 px-4 py-2 font-medium">
              Sobrenome
            </div>
            <div className="table-cell text-gray-700 px-4 py-2 font-medium">
              E-mail
            </div>
            <div className="table-cell text-gray-700 px-4 py-2 font-medium">
              Detalhes
            </div>
          </div>
          <div className="table-row">
            <div className="table-cell text-gray-700 px-4 py-2 text-sm">
              Aldrei
            </div>
            <div className="table-cell text-gray-700 px-4 py-2 text-sm">
              Miranda
            </div>
            <div className="table-cell text-gray-700 px-4 py-2 text-sm">
              aldrei_m@exemplo.com
            </div>
            <div className="table-cell text-gray-700 px-4 py-2 text-sm">
              <button onClick={() => setShowModal(true)}>
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {showModal && <Modal onCancel={onCloseModal} />}
    </>
  );
};
