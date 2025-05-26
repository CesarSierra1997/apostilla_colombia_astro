const PrivacyPolicy = () => {
  return (
    <article className="max-w-4xl mx-auto px-6 py-12 text-zinc-200">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white">🔐 Política de Privacidad</h1>
        <p className="text-sm text-zinc-400 mt-2">Apostilla Colombia • Actualización: Mayo 2025</p>
      </header>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-white mb-2">📘 1. Información General</h2>
        <p className="text-zinc-300">
          En cumplimiento de la Ley Estatutaria 1581 de 2012 y el Decreto 1377 de 2013, Apostilla Colombia,
          identificada con Matrícula Mercantil No. 2133438, domiciliada en Mosquera, Cundinamarca, es responsable
          del tratamiento de los datos personales que recolecta a través de su sitio web y canales de comunicación.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-white mb-2">📝 2. Datos Recolectados</h2>
        <p className="text-zinc-300 mb-2">Recolectamos los siguientes datos personales para prestar nuestros servicios:</p>
        <ul className="list-disc pl-6 text-zinc-300 space-y-1">
          <li>📛 Nombre completo</li>
          <li>📧 Correo electrónico</li>
          <li>📞 Número de teléfono</li>
          <li>📎 Documentos en PDF (identificación, poderes, etc.)</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-white mb-2">🎯 3. Finalidad del Tratamiento</h2>
        <p className="text-zinc-300 mb-2">Los datos serán utilizados para:</p>
        <ul className="list-disc pl-6 text-zinc-300 space-y-1">
          <li>Responder solicitudes de información y cotizaciones</li>
          <li>Prestar servicios de apostilla y asesoría legal</li>
          <li>Enviar notificaciones del estado de trámites</li>
          <li>Cumplir con obligaciones legales</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-white mb-2">🔐 4. Derechos del Titular</h2>
        <p className="text-zinc-300 mb-2">Como titular, usted tiene derecho a:</p>
        <ul className="list-disc pl-6 text-zinc-300 space-y-1">
          <li>Acceder, actualizar y rectificar sus datos</li>
          <li>Solicitar prueba de autorización otorgada</li>
          <li>Ser informado sobre el uso de sus datos</li>
          <li>Presentar quejas ante la SIC</li>
          <li>Revocar la autorización o solicitar la supresión de los datos</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-white mb-2">🛡️ 5. Seguridad de la Información</h2>
        <p className="text-zinc-300">
          Aplicamos medidas técnicas y organizativas para proteger los datos personales de accesos no autorizados,
          pérdida o alteración.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-white mb-2">📬 6. Contacto</h2>
        <p className="text-zinc-300 mb-2">Para ejercer sus derechos o resolver dudas:</p>
        <ul className="list-disc pl-6 text-zinc-300 space-y-1">
          <li>📧 Correo: <a href="mailto:apostillamos@gmail.com" className="text-blue-400 underline hover:text-blue-300">apostillamos@gmail.com</a></li>
          <li>📞 Teléfonos: <a href="tel:+573213254326" className="hover:underline text-blue-400">+57 321 325 4326</a>, <a href="tel:+573125082845" className="hover:underline text-blue-400">+57 312 508 2845</a></li>
          <li>📍 Dirección: Carrera 10 No. 12-32, Mosquera, Cundinamarca, Colombia</li>
        </ul>
      </section>
    </article>
  );
};

export default PrivacyPolicy;
