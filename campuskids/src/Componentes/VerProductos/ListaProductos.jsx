import React, { useEffect, useState } from "react";
import { fetchObtenerProducto } from "../../Servicio/Api";
import Footer from "../Footer/Footer";

const ListaProductos = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetchObtenerProducto()
      .then((data) => {
        console.log(data); // Agrega este console.log
        setProductos(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <table className="w-full md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto text-left text-sm font-light">
        <thead className="border-b bg-white font-medium dark:border-neutral-500 dark:bg-neutral-600">
          <tr className="border-b dark:border-neutral-500 bg-[#385bbb] dark:bg-blue-700">
            <th scope="col" className="px-6 py-4 rounded-tl-lg text-white">
              #ID
            </th>
            <th scope="col" className="px-6 py-4 text-white">
              Producto
            </th>
            <th scope="col" className="px-6 py-4 text-white">
              Categoría
            </th>
            <th scope="col" className="px-6 py-4 rounded-tr-lg text-white">
              Descripción
            </th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => (
            <tr key={producto.id} className="border-b dark:border-neutral-500">
              <td className="whitespace-nowrap px-6 py-4 font-medium">
                {producto.id}
              </td>
              <td className="whitespace-nowrap px-6 py-4 font-medium">
                {producto.nombre}
              </td>
              <td className="whitespace-nowrap px-6 py-4 font-medium">
                {producto.categoria}
              </td>
              <td className="whitespace-nowrap px-6 py-4 font-medium">
                {producto.descripcion}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Footer />
    </div>
  );
};

export default ListaProductos;
