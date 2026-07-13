async function request(path, options = {}) {
  const res = await fetch(`/api${path}`, {
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    ...options,
  });

  if (res.status === 204) return null;

  const data = await res.json().catch(() => null);
  if (!res.ok) {
    throw new Error(data?.error || "Ocurrió un error inesperado");
  }
  return data;
}

export function register({ email, password, displayName }) {
  return request("/auth/register", { method: "POST", body: JSON.stringify({ email, password, displayName }) });
}

export function login({ email, password }) {
  return request("/auth/login", { method: "POST", body: JSON.stringify({ email, password }) });
}

export function logout() {
  return request("/auth/logout", { method: "POST" });
}

export function fetchMe() {
  return request("/auth/me");
}

export function saveResult({ topic, correct, total }) {
  return request("/results", { method: "POST", body: JSON.stringify({ topic, correct, total }) });
}

export function fetchResults() {
  return request("/results");
}
