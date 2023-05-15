/**
 * Capitaliza la primera letra de cada palabra de una cadena y convierte el resto de la cadena a minúsculas.
 *
 * @param {string} str La cadena a ser capitalizada.
 * @returns {string} La cadena capitalizada.
 */
export function capitalize(str: string): string {
    if (!str || str.length === 0) {
      return str;
    }
  
    return typeof str === 'string'
      ? str
          .split(' ')
          .map(
            (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
          )
          .join(' ')
      : str;
  }