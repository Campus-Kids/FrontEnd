// import React, { useEffect, useState } from "react";
// import Footer from "./Footer/Footer";
// import { fetchObtenerProducto, fetchBuscarProductos } from "../Servicio/Api"; // Importa la función para obtener todos los productos

// const BuscarProductos = () => {
//   const [productos, setProductos] = useState([]);
//   const [textoBusqueda, setTextoBusqueda] = useState(""); // Estado para almacenar el texto de búsqueda

//   // Función para manejar el cambio en el input
//   const handleInputChange = (e) => {
//     setTextoBusqueda(e.target.value); // Actualiza el estado del texto de búsqueda
//   };

//   // Función para manejar la búsqueda de productos
//   const handleBuscarProductos = async (e) => {
//     e.preventDefault(); // Evita que el formulario se envíe automáticamente

//     try {
//       if (textoBusqueda.trim() !== "") { // Verifica si hay texto de búsqueda
//         // Realiza la solicitud al backend con el texto de búsqueda
//         const data = await fetchBuscarProductos(textoBusqueda);
//         setProductos(data); // Actualiza el estado de los productos con la respuesta del backend
//       } else {
//         // Si no hay texto de búsqueda, obtiene todos los productos
//         const data = await fetchObtenerProducto();
//         setProductos(data); // Actualiza el estado de los productos con la respuesta del backend
//       }
//     } catch (error) {
//       console.error("Error al buscar productos:", error);
//     }
//   };

//   // Función para limpiar el texto del input
//   const handleLimpiarTexto = () => {
//     setTextoBusqueda(''); // Establece el estado del texto de búsqueda a una cadena vacía
//   };

//   // useEffect para obtener todos los productos al cargar la página
//   useEffect(() => {
//     const obtenerProductos = async () => {
//       try {
//         const data = await fetchObtenerProducto();
//         setProductos(data); // Actualiza el estado de los productos con la respuesta del backend
//       } catch (error) {
//         console.error("Error al obtener productos:", error);
//       }
//     };
//     obtenerProductos();
//   }, []); // Se ejecuta solo una vez al cargar la página

//   return (
//     <div>
//       <div className="max-w-lg mx-auto p-6 rounded-lg bg-white-100">
//         <form onSubmit={handleBuscarProductos} className="flex flex-col gap-y-6">
//           <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-y-6 md:gap-x-6">
//             <div className="w-full md:w-2/3">
//               <input
//                 type="text"
//                 name="producto"
//                 id="producto"
//                 autoComplete="given-name"
//                 placeholder="Ingrese el producto a buscar"
//                 className="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 value={textoBusqueda} // Asigna el valor del estado al input
//                 onChange={handleInputChange} // Maneja el cambio en el input
//               />
//             </div>
//             <div className="flex gap-x-2">
//               <button
//                 type="submit"
//                 className="rounded-md bg-[#385bbb] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
//               >
//                 Buscar
//               </button>
//               <button
//                 type="button"
//                 className="text-sm font-semibold leading-6 text-gray-900 border border-[#385bbb] px-3 py-2 rounded-md text-[#385bbb] hover:text-white hover:bg-[#385bbb] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#385bbb]"
//                 onClick={handleLimpiarTexto} // Asigna el manejador de eventos al hacer clic en el botón "Limpiar"
//               >
//                 Limpiar
//               </button>
//             </div>
//           </div>
//         </form>
//       </div>

//       <div>
//         <table className="w-full md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto text-left text-sm font-light">
//           <thead className="border-b bg-white font-medium dark:border-neutral-500 dark:bg-neutral-600">
//             <tr className="border-b dark:border-neutral-500 bg-[#385bbb] dark:bg-blue-700">
//               <th scope="col" className="px-6 py-4 rounded-tl-lg text-white">
//                 #ID
//               </th>
//               <th scope="col" className="px-6 py-4 text-white">
//                 Producto
//               </th>
//               <th scope="col" className="px-6 py-4 text-white">
//                 Categoría
//               </th>
//               <th scope="col" className="px-6 py-4 rounded-tr-lg text-white">
//                 Descripción
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {productos.map((producto) => (
//               <tr
//                 key={producto.id}
//                 className="border-b dark:border-neutral-500"
//               >
//                 <td className="whitespace-nowrap px-6 py-4 font-medium">
//                   {producto.id}
//                 </td>
//                 <td className="whitespace-nowrap px-6 py-4 font-medium">
//                   {producto.nombre}
//                 </td>
//                 <td className="whitespace-nowrap px-6 py-4 font-medium">
//                   {producto.categoria}
//                 </td>
//                 <td className="whitespace-nowrap px-6 py-4 font-medium">
//                   {producto.descripcion}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default BuscarProductos;


// // import React, { useEffect, useState } from "react";
// // import Footer from "./Footer/Footer";
// // import { fetchBuscarProductos } from "../Servicio/Api";

// // const BuscarProductos = () => {
// //   const [productos, setProductos] = useState([]);
// //   const [textoBusqueda, setTextoBusqueda] = useState(""); // Estado para almacenar el texto de búsqueda

// //   // Función para manejar el cambio en el input
// //   const handleInputChange = (e) => {
// //     setTextoBusqueda(e.target.value); // Actualiza el estado del texto de búsqueda
// //   };

// //   // Función para manejar la búsqueda de productos
// //   const handleBuscarProductos = async (e) => {
// //     e.preventDefault(); // Evita que el formulario se envíe automáticamente

// //     try {
// //       // Realiza la solicitud al backend con el texto de búsqueda
// //       const data = await fetchBuscarProductos(textoBusqueda);
// //       setProductos(data); // Actualiza el estado de los productos con la respuesta del backend
// //     } catch (error) {
// //       console.error("Error al buscar productos:", error);
// //     }
// //   };

// //   // Función para limpiar el texto del input
// //   const handleLimpiarTexto = () => {
// //     setTextoBusqueda(''); // Establece el estado del texto de búsqueda a una cadena vacía
// //   };

// //   return (
// //     <div>
// //       <div className="max-w-lg mx-auto p-6 rounded-lg bg-white-100">
// //         <form onSubmit={handleBuscarProductos} className="flex flex-col gap-y-6">
// //           <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-y-6 md:gap-x-6">
// //             <div className="w-full md:w-2/3">
// //               <input
// //                 type="text"
// //                 name="producto"
// //                 id="producto"
// //                 autoComplete="given-name"
// //                 placeholder="Ingrese el producto a buscar"
// //                 className="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
// //                 value={textoBusqueda} // Asigna el valor del estado al input
// //                 onChange={handleInputChange} // Maneja el cambio en el input
// //               />
// //             </div>
// //             <div className="flex gap-x-2">
// //               <button
// //                 type="submit"
// //                 className="rounded-md bg-[#385bbb] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
// //               >
// //                 Buscar
// //               </button>
// //               <button
// //                 type="button"
// //                 className="text-sm font-semibold leading-6 text-gray-900 border border-[#385bbb] px-3 py-2 rounded-md text-[#385bbb] hover:text-white hover:bg-[#385bbb] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#385bbb]"
// //                 onClick={handleLimpiarTexto} // Asigna el manejador de eventos al hacer clic en el botón "Limpiar"
// //               >
// //                 Limpiar
// //               </button>
// //             </div>
// //           </div>
// //         </form>
// //       </div>

// //       <div>
// //         <table className="w-full md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto text-left text-sm font-light">
// //           <thead className="border-b bg-white font-medium dark:border-neutral-500 dark:bg-neutral-600">
// //             <tr className="border-b dark:border-neutral-500 bg-[#385bbb] dark:bg-blue-700">
// //               <th scope="col" className="px-6 py-4 rounded-tl-lg text-white">
// //                 #ID
// //               </th>
// //               <th scope="col" className="px-6 py-4 text-white">
// //                 Producto
// //               </th>
// //               <th scope="col" className="px-6 py-4 text-white">
// //                 Categoría
// //               </th>
// //               <th scope="col" className="px-6 py-4 rounded-tr-lg text-white">
// //                 Descripción
// //               </th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {productos.map((producto) => (
// //               <tr
// //                 key={producto.id}
// //                 className="border-b dark:border-neutral-500"
// //               >
// //                 <td className="whitespace-nowrap px-6 py-4 font-medium">
// //                   {producto.id}
// //                 </td>
// //                 <td className="whitespace-nowrap px-6 py-4 font-medium">
// //                   {producto.nombre}
// //                 </td>
// //                 <td className="whitespace-nowrap px-6 py-4 font-medium">
// //                   {producto.categoria}
// //                 </td>
// //                 <td className="whitespace-nowrap px-6 py-4 font-medium">
// //                   {producto.descripcion}
// //                 </td>
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
// //       </div>
// //     </div>
// //   );
// // };

// // export default BuscarProductos;