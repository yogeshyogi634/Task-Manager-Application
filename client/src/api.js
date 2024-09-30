import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const signup = (data) => API.post("/users/signup", data);
export const login = (data) => API.post("/users/login", data);
export const fetchTasks = (token) =>
  API.get("/tasks", { headers: { Authorization: token } });
export const createTask = (data, token) =>
  API.post("/tasks", data, { headers: { Authorization: token } });
export const deleteTask = (id, token) =>
  API.delete(`/tasks/${id}`, { headers: { Authorization: token } });
export const updateTask = (id, data, token) =>
  API.put(`/tasks/${id}`, data, { headers: { Authorization: token } });
