// Packages
import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

// Interfaces
type Generic = Record<string, unknown>;

export class RequestProxy {
	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	protected axios: AxiosInstance;

	protected token: string | undefined;

	protected url: string;

	// -------------------------------------------------
	// Main methods
	// -------------------------------------------------

	public constructor(url: string) {
		this.url = url;
		this.axios = axios.create({
			headers: {
				"Content-Type": "application/json",
			},
		});

		this.axios.defaults.validateStatus = () => true;

		this.axios.interceptors.request.use(
			RequestProxy.urlConfig.bind(this),
			(error) => Promise.reject(error),
		);

		this.axios.interceptors.request.use(
			this.tokenConfig.bind(this),
			(error) => Promise.reject(error),
		);
	}

	// -------------------------------------------------
	// Request methods
	// -------------------------------------------------

	public get(url: string, options: Record<string, unknown> = {}) {
		return this.axios.get(url, options);
	}

	public post(url: string, data: Generic = {}, options: Generic = {}) {
		return this.axios.post(url, data, options);
	}

	public patch(url: string, data: Generic = {}, options: Generic = {}) {
		return this.axios.patch(url, data, options);
	}

	public put(url: string, data: Generic = {}, options: Generic = {}) {
		return this.axios.put(url, data, options);
	}

	public delete(url: string, options: Generic = {}) {
		return this.axios.delete(url, options);
	}

	public get interceptors() {
		return this.axios.interceptors;
	}

	// -------------------------------------------------
	// Secondary methods
	// -------------------------------------------------

	public setUrl(newUrl: string) {
		this.url = newUrl;
	}

	public setToken(newToken: string) {
		this.token = newToken;
	}

	public clearToken() {
		this.token = undefined;
	}

	// -------------------------------------------------
	// Helper methods
	// -------------------------------------------------

	protected static urlConfig(config: AxiosRequestConfig) {
		const newConfig = config;
		newConfig.baseURL = url;
		return newConfig;
	}

	protected tokenConfig(config: AxiosRequestConfig) {
		const newConfig = config;
		if (this.token) newConfig.headers.token = `Bearer ${this.token}`;
		return config;
	}
}

// -------------------------------------------------
// Create initial data
// -------------------------------------------------

// find url
let url: string;
if (import.meta.env.VITE_API_URL)
	url = import.meta.env.VITE_API_URL as string;
else if (import.meta.env.DEV)
	url = "http://localhost:8080";
else
	throw new Error("URL for client not found");

// Export
export default (_url: string) => new RequestProxy(_url);
export const instance = new RequestProxy(url);
