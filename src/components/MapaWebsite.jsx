const MapaWebsite = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12 text-zinc-200">
      <h1 className="text-4xl font-bold text-white mb-8">🗺️ Mapa del Sitio</h1>

      <ul className="list-disc pl-6 space-y-3 text-zinc-300">
        <li>
          <a href="/" className="text-blue-400 hover:underline">Inicio</a>
        </li>
        <li>
          <a href="/#quienes_somos" className="text-blue-400 hover:underline">Sobre Nosotros</a>
        </li>
        <li>
          <a href="/servicios" className="text-blue-400 hover:underline">Servicios</a>
          <ul className="list-disc pl-6 mt-1 space-y-1">
            <li><a href="/apostilla" className="hover:underline text-blue-300">Apostilla</a></li>
            <li><a href="/legalizacion" className="hover:underline text-blue-300">Legalización</a></li>
            <li><a href="/traducciones" className="hover:underline text-blue-300">Traducciones oficiales</a></li>
          </ul>
        </li>
        <li>
          <a href="/contacto" className="text-blue-400 hover:underline">Contacto</a>
        </li>
        <li>
          <a href="/politica-de-privacidad" className="text-blue-400 hover:underline">Política de Privacidad</a>
        </li>
        <li>
          <a href="/condiciones-de-uso" className="text-blue-400 hover:underline">Condiciones de Uso</a>
        </li>
      </ul>
    </section>
  );
};

export default MapaWebsite;
