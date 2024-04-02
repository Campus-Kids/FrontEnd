import React from 'react'
import Footer from '../Footer/Footer'
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";



const Contacto = () => {
  return (
    <div>
      <div className="max-w-lg mx-auto border border-green-500 p-6 rounded-lg bg-gray-100">
        <form>
          <div className="space-y-2">
            {/* AQUÍ EMPIEZA EL FORMULARIO */}

            <h2 className="text-lg font-semibold leading-7 text-gray-900 text">
              Contactanos
            </h2>
            <label
              htmlFor="first-name"
              className="block text-sm font-medium leading-6 text-gray-900 text-left font-semibold"
            >
              Nombre 
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>

            <label
              htmlFor="first-name"
              className="block text-sm font-medium leading-6 text-gray-900 text-left font-semibold"
            >
              Apellidos 
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>

            <label
              htmlFor="first-name"
              className="block text-sm font-medium leading-6 text-gray-900 text-left font-semibold"
            >
              Email
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>

            <label
              htmlFor="first-name"
              className="block text-sm font-medium leading-6 text-gray-900 text-left font-semibold"
            >
              Asunto 
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>            

            {/* DESCRIPCIÓN */}

            <label
              htmlFor="about"
              className="block text-sm font-medium leading-6 text-gray-900 text-left font-semibold"
            >
              Descripción
            </label>
            <div className="mt-2">
              <textarea
                id="about"
                name="about"
                rows={3}
                className="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={""}
              />
            </div>

            
            
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="button"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="rounded-md bg-[#385bbb] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
    
  )
}

export default Contacto