import React from 'react';
import { useState } from 'react';

export default function Modal(props) {
  const [messageInput, setMessageInput] = useState('');

  const handleAddServer = () => {
    if (messageInput.trim()) {
      props.onSubmit(messageInput);
    }
    setMessageInput('');
    if (props.otherFunctions) {
      props.otherFunctions();
    }
  };

  return (
    <>
      {props.children}
      <div>
        <dialog
          id={props.id}
          className={`modal ${props.className} ${props.isOpen && 'modal-open'}`}
        >
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <div className="flex flex-col items-center gap-5">
              <h1 className="text-white text-3xl font-bold capitalize">
                {props.header}
              </h1>
              <form
                className="p-3 flex items-center justify-center gap-3"
                method="dialog"
              >
                <input
                  type="text"
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                />
                <button
                  className="btn btn-outline btn-info modal-action m-0"
                  onClick={handleAddServer}
                >
                  {props.buttonName}
                </button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </>
  );
}
