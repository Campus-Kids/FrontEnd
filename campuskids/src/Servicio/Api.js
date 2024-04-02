const urlBase = "http://localhost:8080";

// export const fetchRegistrarProducto = async (data) => {
    
//     console.log("datos desde el front", data);
    
//     const url = `${urlBase}/producto`;

//     const response = await fetch(url, {
//         method: "POST",
    
//         headers: {
//           "Content-Type": "application/json"          
//         },
//         body: JSON.stringify(data),
//       });

//       if (!response.ok) {
//         return response.status;
//       }
//       return await response.text();
    
// };


export const fetchObtenerProducto = async () => {
    const url = `${urlBase}/producto`;          

    const response = await fetch(url, {
        method: "GET",    
        headers: {
          "Content-Type": "application/json"          
        }
        
      });

      if (!response.ok) {
        return response.status;
      }
      return await response.json();
    
};

// export const fetchListarProductos = async () => {
//     const url = ${baseUrl}/producto/productosAll;
    
//     const response = await fetch(url);
    
    
//     console.log("Productos: ", response);
//     if (!response.ok) {
//       throw new Error("Error en la solicitud: " + response.status);
//     }
//     return await response.json();
//   };