const TermsOfUse = () => {
  return (
    <article className="max-w-4xl mx-auto px-6 py-12 text-zinc-200">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white">📄 Condiciones de Uso</h1>
        <p className="text-sm text-zinc-400 mt-2">Apostilla Colombia • Última actualización: Mayo 2025</p>
      </header>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-white mb-2">1. Aceptación de Términos</h2>
        <p className="text-zinc-300">
          Al acceder y utilizar nuestro sitio web <strong>apostillacolombia.com.co</strong>, usted acepta cumplir con los presentes términos y condiciones de uso. Si no está de acuerdo con alguna parte de estos términos, le recomendamos no utilizar nuestros servicios digitales.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-white mb-2">2. Servicios Prestados</h2>
        <p className="text-zinc-300">
          Apostilla Colombia ofrece servicios de asesoría, gestión de apostilla, legalizaciones, traducciones oficiales y otros servicios jurídicos. No somos una entidad gubernamental. Actuamos como intermediarios privados para facilitar trámites ante autoridades competentes.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-white mb-2">3. Uso del Sitio</h2>
        <ul className="list-disc pl-6 text-zinc-300 space-y-1">
          <li>El usuario se compromete a proporcionar información veraz y completa.</li>
          <li>Está prohibido el uso del sitio para fines ilegales o no autorizados.</li>
          <li>No se permite intentar acceder a sistemas o bases de datos sin autorización.</li>
          <li>El usuario acepta no enviar contenido malicioso o con virus.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-white mb-2">4. Propiedad Intelectual</h2>
        <p className="text-zinc-300">
          Todo el contenido del sitio web (textos, gráficos, logos, íconos, imágenes y software) es propiedad de Apostilla Colombia o de sus respectivos autores, y está protegido por las leyes de derechos de autor y propiedad industrial.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-white mb-2">5. Responsabilidad</h2>
        <p className="text-zinc-300">
          Aunque trabajamos para ofrecer información clara y actualizada, Apostilla Colombia no garantiza que el contenido del sitio esté libre de errores u omisiones. No nos hacemos responsables por daños derivados del uso incorrecto de la información o servicios ofrecidos.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-white mb-2">6. Modificaciones</h2>
        <p className="text-zinc-300">
          Apostilla Colombia se reserva el derecho de modificar en cualquier momento estas condiciones. Las nuevas versiones serán publicadas en esta página con la fecha de actualización correspondiente.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-white mb-2">7. Contacto</h2>
        <p className="text-zinc-300 mb-2">Para preguntas sobre estos términos, puede contactarnos:</p>
        <ul className="list-disc pl-6 text-zinc-300 space-y-1">
          <li>📧 Correo: <a href="mailto:apostillamos@gmail.com" className="text-blue-400 hover:underline">apostillamos@gmail.com</a></li>
          <li>📞 Teléfonos: <a href="tel:+573213254326" className="hover:underline text-blue-400">+57 321 325 4326</a>, <a href="tel:+573125082845" className="hover:underline text-blue-400">+57 312 508 2845</a></li>
        </ul>
      </section>
    </article>
  );
};

export default TermsOfUse;
