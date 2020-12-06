import fetch from "cross-fetch";

class Apis {
  static validateSerialNumber(params) {
    let request = fetch(
      "https://9w4qucosgf.execute-api.eu-central-1.amazonaws.com/default/CR-JS_team_M02a?code=" +
        params
    )
      .then(response => {
        return response.json();
      })
      .catch(err => {
        console.log("There was an error in fetching:", err);
      });
    return request;
  }
}

export default Apis;
