const data = {
    usuario: {
      nombre: "Agustina Torres",
      email: "agustina.torres@example.com",
      usuario: "agustorres",
      contraseña: "segura123",
      fechaNacimiento: "1998-11-22",
      documento: 40123456,
      fotoPerfil: "/images/users/agustina.jpg"
    },
  
    productos: [
      {
        id: "1",
        nombre: "Zapatillas Adidas Run",
        descripcion: "Zapatillas deportivas para correr.",
        imagen: "/images/products/adidas-run.jpg",
        comentarios: [
          {
            nombreUsuario: "Lucas Martínez",
            texto: "Muy cómodas y livianas.",
            imagenPerfil: "/images/users/lucas.jpg"
          },
          {
            nombreUsuario: "Florencia Pérez",
            texto: "Las uso para el gym. Excelente calidad.",
            imagenPerfil: "/images/users/flor.jpg"
          }
        ]
      },
      {
        id: 2,
        nombre: "Celular Motorola G60",
        descripcion: "Pantalla grande y buena cámara.",
        imagen: "/images/products/moto-g60.jpg",
        comentarios: []
      },
      {
        id: 3,
        nombre: "Auriculares Sony WH-1000XM4",
        descripcion: "Cancelación de ruido y alta fidelidad.",
        imagen: "/images/products/sony-headphones.jpg",
        comentarios: []
      },
      {
        id: 4,
        nombre: "Notebook HP Pavilion",
        descripcion: "Ideal para trabajo y estudio.",
        imagen: "/images/products/hp-pavilion.jpg",
        comentarios: []
      },
      {
        id: 5,
        nombre: "Silla ergonómica de oficina",
        descripcion: "Soporte lumbar y diseño moderno.",
        imagen: "/images/products/silla-ergonomica.jpg",
        comentarios: []
      },
      {
        id: 6,
        nombre: "Tablet Samsung Galaxy Tab A8",
        descripcion: "Liviana y con buena batería.",
        imagen: "/images/products/galaxy-tab.jpg",
        comentarios: []
      },
      {
        id: 7,
        nombre: "Reloj Inteligente Xiaomi",
        descripcion: "Medición de pasos, ritmo cardíaco y más.",
        imagen: "/images/products/xiaomi-watch.jpg",
        comentarios: []
      },
      {
        id: 8,
        nombre: "Cámara Fujifilm Instax",
        descripcion: "Fotos instantáneas en alta calidad.",
        imagen: "/images/products/fujifilm.jpg",
        comentarios: []
      },
      {
        id: 9,
        nombre: "Mochila Urbana Negra",
        descripcion: "Espaciosa y resistente al agua.",
        imagen: "/images/products/mochila-negra.jpg",
        comentarios: []
      },
      {
        id: 10,
        nombre: "Monitor Samsung 24”",
        descripcion: "Full HD con buena tasa de refresco.",
        imagen: "/images/products/monitor-samsung.jpg",
        comentarios: []
      }
    ]
  };
  
  module.exports = data;