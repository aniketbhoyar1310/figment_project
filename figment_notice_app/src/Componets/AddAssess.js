import React from "react";
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

const AddAssess = () => {
  const [open, setOpen] = useState(false);

  const cancelButtonRef = useRef(null);

  return (
    <div className="">
      <button onClick={() => setOpen(true)} className="  ">
        Add Assessee
      </button>
      {/* Button to open modal */}
      {/* Modal */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 overflow-y-auto mt-5"
          onClose={() => setOpen(false)}
        >
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            {/* This is the modal content */}
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="bg-white px-lg-1 pb-1 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-lg leading-6 font-medium text-gray-900  "
                      >
                        Add Assessee
                      </Dialog.Title>
                      <div className="mt-2">
                        <div className="px-sm-5 pt-50 pb-2 modal-body">
                          <form className="">
                            <div className="gy-1 pt-75 row">
                              <div className="col-12 col-md-12">
                                <input
                                  name="username"
                                  id="username"
                                  autoComplete="off"
                                  placeholder="Username"
                                  type="text"
                                  className="form-control my-2 focus:outline-none focus:ring-0  focus:border-blue-500"
                                  defaultValue=""
                                />
                              </div>
                              <div className="col-12 col-md-12">
                                <div className="input-group">
                                  <input
                                    maxLength={50}
                                    placeholder="Password"
                                    name="password"
                                    id="password"
                                    autoComplete="new-password"
                                    type="password"
                                    className="form-control my-2 focus:outline-none focus:ring-0  focus:border-blue-500"
                                    defaultValue=""
                                  />
                                </div>
                              </div>
                              <div className="text-center mt-2  col-12">
                                <button
                                  type="submit"
                                  className="me-1 py-1 bg-green-600 px-4 rounded-md text-white"
                                >
                                  Submit
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" px-4 py-1 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="my-2 w-full inline-flex justify-center rounded-md  px-4 py-1 text-base font-medium text-red-500  focus:outline-none  sm:mt-0 sm:w-auto sm:text-sm "
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
};

export default AddAssess;
