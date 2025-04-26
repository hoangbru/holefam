type Method = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

const handleApiError = (error: unknown) => {
  if (error && typeof error === "object" && "response" in error) {
    type ApiError = { response?: { data?: { meta?: { message?: string } } } };
    const message = (error as ApiError).response?.data?.meta?.message || "Lỗi không xác định";
    throw new Error(message);
  } else {
    throw new Error("Unexpected error");
  }
};

const request = async (
  path: string,
  method: Method = "GET",
  data?: Record<string, unknown>
) => {
  const config = {
    headers: { "Content-Type": "application/json" },
    method,
    ...(method !== "GET" && { body: JSON.stringify(data) }),
  };

  try {
    const response = await fetch(path, config);
    const result = await response.json();
    return result;
  } catch (error) {
    handleApiError(error);
  }
};

export const fetcher = (path: string) => request(path);

export const mutation = (
  path: string,
  method: Method = "POST",
  data?: Record<string, unknown>
) => request(path, method, data);
