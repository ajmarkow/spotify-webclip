export default class ConnectSpotify {
  static async getConnect() {
    try {
      const response = await fetch(``);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    } catch (error) {
      return error.message;
    }
  }
}
