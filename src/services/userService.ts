import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/model/user';
import { config } from 'src/config/config';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`${config.apiUrl}/getAll`);
    }

    register(user: User) {
        return this.http.post(`${config.apiUrl}/user/add`, user);
    }

    delete(id: number) {
        return this.http.delete(`${config.apiUrl}/user/${id}`);
    }
}