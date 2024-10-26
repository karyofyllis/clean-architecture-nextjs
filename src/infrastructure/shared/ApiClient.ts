import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { BASE_URL } from '@/src/infrastructure/shared/config';

export class ApiClient {
  private axiosInstance: AxiosInstance;
  public static shared = new ApiClient(BASE_URL);

  constructor(baseURL: string) {
    this.axiosInstance = axios.create({
      baseURL, // Set the base URL for all API requests
      timeout: 5000, // Example timeout (adjust as necessary)
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  // GET method
  async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.axiosInstance.get<T>(url, config);
    return response.data;
  }

  // POST method
  async post<T>(url: string, data: any, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.axiosInstance.post<T>(url, data, config);
    return response.data;
  }

  // PUT method
  async put<T>(url: string, data: any, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.axiosInstance.put<T>(url, data, config);
    return response.data;
  }

  // DELETE method
  async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.axiosInstance.delete<T>(url, config);
    return response.data;
  }
}
