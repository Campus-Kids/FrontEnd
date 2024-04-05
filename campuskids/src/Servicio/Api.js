const urlBase = "http://localhost:8080";

export const fetchRegistrarProducto = async (data) => {
    
    console.log("datos desde el front", data);
    
    const url = `${urlBase}/producto`;

    const response = await fetch(url, {
        method: "POST",
    
        headers: {
          "Content-Type": "application/json"          
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        return response.status;
      }
      return await response.json();
    
};


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

export const fetchObtenerCategorias = async () => {
  const url = `${urlBase}/categoria`;          

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



export const fetchBuscarProductos = async (texto) => {
  const url = `${urlBase}/producto/buscar?texto=${encodeURIComponent(texto)}`;          

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





