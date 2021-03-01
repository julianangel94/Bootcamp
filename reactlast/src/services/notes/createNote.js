import axios from "axios";

export const createNote = ({ content, important }) => {
  return axios
    .post("http://localhost:3001/api/notes", { content, important })
    .then((response) => {
      const { data } = response;
      return data;
    });
};
