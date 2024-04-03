import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import Footer from "../Footer/Footer";
import React, { useEffect, useState } from "react";
import { fetchObtenerCategorias } from "../../Servicio/Api";
import { fetchRegistrarProducto } from "../../Servicio/Api";

const Productos = () => {
  const [nombreProducto, setNombreProducto] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [categorias, setCategorias] = useState([]);
  const [categoriaEnviar, setCategoriaEnviar] = useState(null);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");
  const [imagenes, setImagenes] = useState([]);

  useEffect(() => {
    fetchObtenerCategorias()
      .then((data) => {        
        setCategorias(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleNombreChange = (e) => {
    setNombreProducto(e.target.value);
  };

  const handleDescripcionChange = (e) => {
    setDescripcion(e.target.value);
  };

  const handleCategoriaChange = (e) => {    
    const selectedCategoriaId = parseInt(e.target.value, 10);
    console.log("ID de la categoría seleccionada:", selectedCategoriaId);
    const selectedCategoria = categorias.find(
      (categoria) => categoria.id === selectedCategoriaId
    );
    console.log("Categoría seleccionada:", selectedCategoria);
    // setCategoriaEnviar(selectedCategoria); //ELIMINAR ESTO PARA PRIBAR
    setCategoriaSeleccionada(selectedCategoriaId);
  };

  const handleImagenesChange = (e) => {
    // Aquí debes manejar la carga de imágenes y actualizar el estado de 'imagenes'
    const files = e.target.files;
    const selectedImages = [];
    for (let i = 0; i < files.length && i < 5; i++) {
      const url = URL.createObjectURL(files[i]);
      selectedImages.push({ url });
    }
    setImagenes(selectedImages);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const idCategoria = parseInt(categoriaSeleccionada, 10);
      const productoResponse = await fetchRegistrarProducto({
        nombre: nombreProducto,
        descripcion: descripcion,
        idCategoria: categoriaSeleccionada, //categoriaEnviar.id, 
        imagenes: imagenes.map((imagen) => ({ url: imagen.url })),
      });
      console.log("Respuesta del servidor:", productoResponse);
    } catch (error) {
      console.error("Error al enviar los datos al servidor:", error);
    }
    
  };

  return (
    <div>
      <div className="max-w-lg mx-auto border border-green-500 p-6 rounded-lg bg-gray-100">
        <form onSubmit={handleSubmit}>
          <div className="space-y-12">
            {/* AQUÍ EMPIEZA EL FORMULARIO */}

            <h2 className="text-lg font-semibold leading-7 text-gray-900 text">
              Registrar Producto
            </h2>
            <label
              htmlFor="first-name"
              className="block text-sm font-medium leading-6 text-gray-900 text-left font-semibold"
            >
              Nombre del producto
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e) => setNombreProducto(e.target.value)}
              />
            </div>

            {/* CATEGORÍAS */}

            <label
              htmlFor="country"
              className="block text-sm font-medium leading-6 text-gray-900 text-left font-semibold"
            >
              Seleccione la categoría del producto
            </label>
            <div className="mt-2">
              <select
                id="country"
                name="country"
                autoComplete="country-name"
                className="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                onChange={handleCategoriaChange}
              >
                <option value="">Seleccione una categoría</option>
                {categorias.map((categoria) => (
                  <option key={categoria.id} value={categoria.id} > {categoria.nombre}</option>
                ))}
              </select>
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
                id="descripcion"
                name="descripcion"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
                rows={3}
                className="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>

            {/* IMAGENES */}
            <label
              htmlFor="cover-photo"
              className="block text-sm font-medium leading-6 text-gray-900 font-semibold"
            >
              Imagenes del producto
            </label>
            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
              <div className="text-center">
                <PhotoIcon
                  className="mx-auto h-12 w-12 text-gray-300"
                  aria-hidden="true"
                />
                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md bg-white font-semibold text-[#385bbb] focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                  >
                    <span>Upload a file</span>
                    <input                      
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                      accept="image/*"
                      multiple
                      onChange={handleImagenesChange}
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs leading-5 text-gray-600">
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>
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
      <Footer/>
    </div>
  );
};

export default Productos;

