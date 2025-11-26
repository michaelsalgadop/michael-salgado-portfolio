export const Footer = () => {
  return (
    <footer className="mt-16">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <span>Contrátame Para Tu Próximo Proyecto!</span>
          <span>
            Contáctame por cualquier medio que te resulte conveniente para
            hablar de tu idea.
          </span>
          <ul>
            <li>Instagram</li>
            <li>Linkedin</li>
            <li>Github</li>
          </ul>
        </div>
        <div>
          <span>Información</span>
          <ul>
            <li>Nombre: Michael Salgado</li>
            <li>Fecha de nacimiento: 11.05.1999</li>
            <li>Correo electrónico: michaelsalgadop11@outlook.com</li>
            <li>Teléfono: +34 635 38 21 50</li>
            <li>Ciudad: Barcelona</li>
          </ul>
          <span>
            <i></i> Descargar CV
          </span>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <span>© Creado por </span>
        <span>Reservados todos los derechos</span>
      </div>
    </footer>
  );
};
