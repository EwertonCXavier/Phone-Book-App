import { IContactForm } from "@/utils";
import axios, { AxiosInstance, AxiosResponse } from "axios";

export interface IContactFromAPI {
  first_name: string;
  last_name: string;
  phone_number: string;
  id: number | string;
}

class ContactsService {
  axios: AxiosInstance;
  constructor() {
    this.axios = axios.create({
      baseURL: import.meta.env.VITE_APP_API_BASE,
    });
  }

  createContact(data: IContactForm) {
    return new Promise((resolve) =>
      resolve(
        this.axios.post("/contact", {
          first_name: data.firstName,
          last_name: data.lastName,
          phone_number: data.phoneNumber,
        }),
      ),
    );
  }

  retrieveAllContacts({ filter }: { filter: string | undefined }) {
    return new Promise<AxiosResponse<IContactFromAPI[]>>((resolve) =>
      resolve(
        this.axios.get(filter ? `/contacts?last_name=${filter}` : "/contacts"),
      ),
    );
  }

  retrieveContactById(id: number | string) {
    return new Promise<AxiosResponse<IContactFromAPI>>((resolve) =>
      resolve(this.axios.get(`/contact/${id}`)),
    );
  }

  updateContactById(id: number | string, data: IContactForm) {
    return new Promise<AxiosResponse<IContactFromAPI>>((resolve) =>
      resolve(
        this.axios.put(`/contact/${id}`, {
          first_name: data.firstName,
          last_name: data.lastName,
          phone_number: data.phoneNumber,
        }),
      ),
    );
  }

  deleteContactById(id: number | string) {
    return new Promise((resolve) =>
      resolve(this.axios.delete(`/contact/${id}`)),
    );
  }
}

export default new ContactsService();
