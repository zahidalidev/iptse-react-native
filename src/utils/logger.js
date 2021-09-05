export default class Logger {
  /**
   * Log console in debug mode
   * @param {*} key - Tracking Point
   * @param {*} msg - Message to display
   */
  static log = (key = '', msg = '') => {
    // if (process.env.development) {
    //   console.log(`${key}:${msg}`);
    // }
    console.log(`${key}:${msg}`);
  };
}
