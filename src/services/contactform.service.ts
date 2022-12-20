import axios from "axios";

const API_URL = "https://getform.io/f/d3329090-793e-4079-809b-3b9a825aa154";

const create = (ContactFormJson: any) => {
  axios
    .post(API_URL, ContactFormJson, { headers: { Accept: "application/json" } })
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
};

const ContactFormService = {
  create,
};

export default ContactFormService;
