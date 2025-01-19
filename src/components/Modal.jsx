import React, { useState } from 'react';

export default function Modal(props) {
  const [messageInput, setMessageInput] = useState('');
  const [image, setImage] = useState(null);
  const [imageSelected, setImageSelected] = useState(false);

  const handleAddServer = () => {
    if (messageInput.trim()) {
      props.onSubmit(messageInput, image);
    }
    setMessageInput('');
    setImage(null);
    setImageSelected(false);
    if (props.otherFunctions) {
      props.otherFunctions();
    }
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
    setImageSelected(true);
  };

  return (
    <>
      {props.children}
      <div>
        <dialog id={props.id} className={`modal ${props.className}`}>
          <div className="modal-box">
            <form method="dialog">
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
                {props.showImageInput && (
                  <div className="relative">
                    <input
                      type="file"
                      onChange={handleImageChange}
                      accept="image/*"
                      className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
                    />
                    <button
                      className={`btn w-full max-w-xs ${
                        imageSelected ? 'btn-success' : 'btn-outline'
                      }`}
                    >
                      {imageSelected ? 'Image Selected' : 'Choose Image'}
                    </button>
                  </div>
                )}
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
