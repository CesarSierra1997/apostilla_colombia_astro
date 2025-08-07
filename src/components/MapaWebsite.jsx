const MapaWebsite = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8">🗺️ Mapa del Sitio</h1>

      <ul className="list-disc pl-6 space-y-3">
        <li>
          <a href="/" className="hover:underline">Inicio</a>
        </li>
        <li>
          <a href="/#quienes_somos" className="hover:underline">Sobre Nosotros</a>
        </li>
        <li>
          <a href="/#tramitesyservicios" className="hover:underline">Tramites y servicios</a>
          <ul className="list-disc pl-6 mt-1 space-y-1">
            <li><a href="/#apostilla" className="hover:underline">Apostilla y legalización MRE</a></li>
            <li><a href="/#tramitesyservicios" className="hover:underline">Legalización de documentos MEN, secretarias de educación, secretarías de salud, etc.</a></li>
            <li><a href="/#tramitesyservicios" className="hover:underline">Gestión de documentos, tramites en entidades, notarias, registraduria, nunciatura apostolica, etc.</a></li>
            <li><a href="/#traducciones" className="hover:underline">Traducciones oficiales</a></li>
          </ul>
        </li>
        <li>
          <a href="/#contacto" className="hover:underline">Contacto</a>
        </li>
        <li>
          <a href="/#quienes_somos" className="hover:underline">Quiénes somos</a>
          <ul className="list-disc pl-6 mt-1 space-y-1">
            <li><a href="/#historia" className="hover:underline">Historia</a></li>
            <li><a href="/#vision_mision" className="hover:underline">Misión y visión</a></li>
            <li><a href="/#estadisticas" className="hover:underline">Estadisticas</a></li>
            <li><a href="/#resenas" className="hover:underline">Reseñas de Google - Garantia de satisfacción</a></li>
          </ul>
        </li>
        <li>
          <a href="/#cotizaciones" className="hover:underline">Cotizaciones</a>
        </li>
        <li>
          <a href="/politica-de-privacidad" className="hover:underline">Política de Privacidad</a>
        </li>
        <li>
          <a href="#condiciones-de-uso" className="hover:underline">Condiciones de Uso</a>
        </li>
      </ul>
    </section>
  );
};

export default MapaWebsite;
