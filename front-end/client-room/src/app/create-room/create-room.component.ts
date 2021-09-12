import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Room } from '../room';
import { RoomService } from '../room.service';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.css']
})
export class CreateRoomComponent implements OnInit {

  id!: number;
  submitted = false;
  cadastro!: FormGroup;

  constructor(private roomService: RoomService,
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute) {

     }

  get f(){
    return this.cadastro.controls;
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    if (this.id){
      this.roomService.getRoom(this.id).subscribe((room: Room)=> this.createForm(room));
    }else {
      this.createForm(this.newForm());
    }
  }

  onSubmit(){
    this.cadastro.markAsTouched();
    if(this.cadastro.invalid){
      return
    }
    const room = this.cadastro.getRawValue() as Room;
    if(this.id){
      room.id = this.id;
      this.updateRoom(room);
    } else {
      this.save(room);
    }
  }

  resetForm():void {
    this.cadastro.reset();
  }

  private createForm(room: Room): void{
    this.cadastro = this.fb.group({
      name: [room.name,[Validators.required]],
      date: [room.date,[Validators.required]],
      startHour: [room.startHour,[Validators.required]],
      endHour: [room.endHour,[Validators.required]]
    });
  }
  private newForm(): Room{
    return {
      id: null,
      name: null,
      date: null,
      startHour: null,
      endHour: null,
      active: null
    } as unknown as Room;
  }

  private save(room: Room){
    this.roomService.createRoom(room).subscribe(
      () =>{ alert("Sala salvo com sucesso");
      this.router.navigateByUrl('rooms');},
      () => { alert('Erro ao salvar o registro!')});
  }

  private updateRoom(room: Room){
    this.roomService.updateRoom(room).subscribe(
      () =>{ alert("Sala editada com sucesso");
      this.router.navigateByUrl('rooms');},
      () => { alert('Erro ao editar o registro!')});
  }

}
