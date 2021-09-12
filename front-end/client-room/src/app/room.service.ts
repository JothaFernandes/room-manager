import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Room } from './room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private baseUrl = 'http://localhost:8082/api/v1/rooms';

  constructor(private http: HttpClient) { }

  getRoom(id: number): Observable<Room>{
    return this.http.get<Room>(`${this.baseUrl}/${id}`);
  }

  createRoom(room: Room): Observable<Room>{
    return this.http.post<Room>(`${this.baseUrl}`, room);
  }

  updateRoom(room: Room): Observable<Room>{
    return this.http.put<Room>(`${this.baseUrl}/${room.id}`,room);
  }

  deleteRoom(id: number): Observable<void>{
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  getRoomsList(): Observable<Room[]>{
    return this.http.get<Room[]>(`${this.baseUrl}`);
  }
}
