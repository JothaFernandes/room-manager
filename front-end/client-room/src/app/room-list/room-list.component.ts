import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Room } from '../room';
import { RoomService } from '../room.service'

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})

export class RoomListComponent implements OnInit {

  rooms: Room[] = [];
  id!: number;

  constructor(private roomService: RoomService,
    private router: Router) { }

  ngOnInit() {
    this.reloadData();

  }

  reloadData() {
    this.roomService.getRoomsList().subscribe((rooms: Room[]) => this.rooms.push(...rooms));
  }

  deleteRoom(id: number){
    this.roomService.deleteRoom(id).subscribe(
      data => {console.log(data);
      this.reloadData();
    },
     error => console.log(error));
  }

  roomDetails(id: number){
    this.router.navigateByUrl('/rooms/details/'+ id);
  }

  updateRoom(id: number){
    this.router.navigateByUrl('/rooms/add/'+ id);
  }

}
