import { Injectable } from '@angular/core';
import { User } from './models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _usuarios: User[] =[
    new User (1,'Pepe','pep@Moc.es', 23),
    new User (2,'Juana','j@Moc.es', 32),
    new User (1,'rITA','pRIRp@Moc.es', 73),
    new User (1,'Cuqui','cu@Moc.es', 23),

  ];

  constructor(private _userService:UserService) { }

  getUsuarios():User[]{
    return this._usuarios;

  }
}
