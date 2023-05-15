/**
 * Normaliza un valor eliminando las tildes y convirtiéndolo a minúsculas.
 *
 * @param {string} str El valor a ser normalizado.
 * @returns {string} El valor normalizado.
 */
export function normalize(str: string): string {
    if (!str || typeof str !== 'string') {
      return '';
    }
  
    return str
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  }