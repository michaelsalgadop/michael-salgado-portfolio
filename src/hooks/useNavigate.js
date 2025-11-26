export const useNavigate = () => {
  /**
   * Realiza un desplazamiento suave a una sección de la página,
   * permitiendo controlar la velocidad y aplicar un offset para evitar
   * que elementos fijos (como un navbar sticky) tapen el contenido.
   *
   * @param {string} id - El ID del elemento al que se quiere desplazar.
   * @param {number} duration - Duración total de la animación en ms (por defecto 1200).
   * @param {number} offset - Offset negativo para compensar un navbar sticky (ajustar según necesidad).
   */
  const scrollTo = (id, duration = 1200, offset = -230) => {
    // Obtenemos el elemento objetivo por su ID
    const target = document.getElementById(id);
    if (!target) return; // Si no existe, salimos

    // Cálculo de la posición objetivo final en relación al documento
    const targetPosition =
      target.getBoundingClientRect().top + window.pageYOffset + offset;

    // Posición actual del scroll vertical
    const startPosition = window.pageYOffset;

    // Momento exacto en que empieza la animación
    const startTime = performance.now();

    /**
     * Función de animación que se ejecuta cada frame.
     * @param {number} currentTime - Timestamp entregado por requestAnimationFrame
     */
    const animation = (currentTime) => {
      // Tiempo transcurrido desde que inició la animación
      const elapsed = currentTime - startTime;

      // Progreso normalizado entre 0 y 1
      const progress = Math.min(elapsed / duration, 1);

      /**
       * Ease In Out Cubic
       * Acelera al inicio y desacelera al final para un movimiento más natural
       */
      const easedProgress =
        progress < 0.5
          ? 4 * progress * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      // Calculamos la posición actual de scroll usando la función de easing
      window.scrollTo(
        0,
        startPosition + (targetPosition - startPosition) * easedProgress
      );

      // Si la animación aún no termina, seguimos animando
      if (elapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    // Lanzamos la primera llamada a la animación
    requestAnimationFrame(animation);
  };
  return { scrollTo };
};
