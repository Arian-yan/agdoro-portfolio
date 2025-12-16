const API_URL = "http://localhost:3001/api/projects";

export async function fetchProjects() {
  const response = await fetch(`${API_URL}/api/projects`);
  return response.json();
}
