import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomListComponent } from './room-list/room-list.component';
import { CreateRoomComponent } from './create-room/create-room.component';
import { RoomDetailsComponent } from './room-details/room-details.component';

const routes: Routes = [
  {path:'',redirectTo: 'rooms', pathMatch: 'full'},
  {path: 'rooms', children:[
    {path:'', component: RoomListComponent},
    {path: 'add', children:[
      {path:'', component: CreateRoomComponent},
      {path: ':id', component: CreateRoomComponent}]},
    {path: 'details/:id', component: RoomDetailsComponent}]},
    {path:'**', redirectTo:'rooms'}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
