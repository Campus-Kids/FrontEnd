// import React, { Fragment, useRef, useState } from 'react'
// import { Dialog, Transition } from '@headlessui/react'
// import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'

// const Modal = () => {
//   const [open, setOpen] = useState(true)
//   const cancelButtonRef = useRef(null)

//   return (
    
//     <Transition.Root show={open} as={Fragment}>
//       <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" onClose={setOpen}>
//         <div className="flex items-center justify-center min-h-screen">
//           <Transition.Child
//             as={Fragment}
//             enter="ease-out duration-300"
//             enterFrom="opacity-0"
//             enterTo="opacity-100"
//             leave="ease-in duration-200"
//             leaveFrom="opacity-100"
//             leaveTo="opacity-0"
//           >
//             <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-30 transition-opacity" />
//           </Transition.Child>

//           <Transition.Child
//             as={Fragment}
//             enter="ease-out duration-300"
//             enterFrom="opacity-0 scale-95"
//             enterTo="opacity-100 scale-100"
//             leave="ease-in duration-200"
//             leaveFrom="opacity-100 scale-100"
//             leaveTo="opacity-0 scale-95"
//           >
//             <div className="bg-white rounded-lg p-4 w-80">
//               <div className="flex items-center justify-center">
//                 <ExclamationTriangleIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
//               </div>
//               <div className="mt-3 text-center sm:ml-4 sm:text-left">
//                 <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
//                   Deactivate account
//                 </Dialog.Title>
//                 <div className="mt-2">
//                   <p className="text-sm text-gray-500">
//                     Are you sure you want to deactivate your account? All of your data will be permanently removed.
//                     This action cannot be undone.
//                   </p>
//                 </div>
//               </div>
//               <div className="mt-4 flex items-center justify-center">
//                 <button
//                   type="button"
//                   className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
//                   onClick={() => setOpen(false)}
//                 >
//                   Deactivate
//                 </button>
//                 <button
//                   type="button"
//                   className="ml-3 inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                   onClick={() => setOpen(false)}
//                   ref={cancelButtonRef}
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </div>
//           </Transition.Child>
//         </div>
//       </Dialog>
//     </Transition.Root>
//   )
// }

// export default Modal
