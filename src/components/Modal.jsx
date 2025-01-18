import React from 'react';

export default function Modal(props) {
  return (
    <dialog id="my_modal_3" className={`modal ${props.className}`}>
      <div className="modal-box">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        {props.children}
      </div>
    </dialog>
  );
}
