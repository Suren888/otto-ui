import http from "../http-common";
import IProductData from "../types/product-type"

class CategoryDataService {
  getAll() {
    return http.get<Array<IProductData>>("/products");
  }

//   get(id: string) {
//     return http.get<ICategoryData>(`/Categoryies/${id}`);
//   }

//   create(data: ICategoryData) {
//     return http.post<ICategoryData>("/Categories", data);
//   }

//   update(data: ICategoryData, id: any) {
//     return http.put<any>(`/Categories/${id}`, data);
//   }

//   delete(id: any) {
//     return http.delete<any>(`/Categories/${id}`);
//   }

//   deleteAll() {
//     return http.delete<any>(`/Category`);
//   }

//   findByTitle(title: string) {
//     return http.get<Array<ICategoryData>>(`/Categories?title=${title}`);
//   }
}

export default new CategoryDataService();