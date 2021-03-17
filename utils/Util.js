class Util {
    constructor() {
      this.status_code = null;
      this.errors = null;
      this.result = null;
      this.message = null;
    }
  
    /**
     * @deprecated No utilice este formato, en su reemplazo: setSuccess, setError, send
     * @description Formato de respuesta exitoso (no recomendado)
     * @param {Object} res
     */
    /**
     * @deprecated No utilice este formato, en su reemplazo: setSuccess, setError, send
     * @description Formato de respuesta exitoso (no recomendado)
     * @param {boolean} success
     * @param {string} message
     * @param {*} data
     */
    setFormatSuccess(success, message, data) {
      return {
        success,
        message,
        data
      }
    }
  
    /**
     * @deprecated No utilice este formato, en su reemplazo: setSuccess, setError, send
     * @description Formato de respuesta exitoso (no recomendado)
     * @param {boolean} success
     * @param {string} message
     * @param {*} errors
     */
    setFormatError(success, message, errors) {
      return {
        success,
        message,
        errors
      }
    }
  
    setSuccess(statusCode, message, data) {
      this.status_code = statusCode;
      this.message = message;
      this.result = data;
      this.errors = null;
    }
  
    setError(statusCode, message, error) {
      this.status_code = statusCode;
      this.message = message;
      this.result = null;
      this.errors = error;
    }
  
    send(res) {
      const result = {
        status_code: this.status_code,
        message: this.message,
        result: this.result,
        errors: this.errors,
      };
  
      return res.status(this.status_code).json(result);
    }
  }
  
  module.exports = Util;
  