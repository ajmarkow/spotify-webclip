export default class RecognizeSpotify {
  static async getSpotify() {
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
