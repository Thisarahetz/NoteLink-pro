import { api } from "../axios/api";

//get note
export const getNote = async (id: string) => {
  const res = await api.get(`/notes/${id}`);
  return res.data;
};

//create note
export const createNote = async (data: any) => {
  const res = await api.post("/notes", data);
  return res.data;
};

//update note
export const updateNote = async (id: string, data: any) => {
  const res = await api.put(`/notes/${id}`, data);
  return res.data;
};

//delete note
export const deleteNote = async (id: string) => {
  const res = await api.delete(`/notes/${id}`);
  return res.data;
};

//get all notes
export const getAllNotes = async () => {
  const res = await api.get("/notes");
  return res.data;
};