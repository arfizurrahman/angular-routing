import { Resolve, ActivatedRoute, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ServersService } from '../servers.service';
import { Injectable } from '@angular/core';
interface Server {
    id: number;
    name: string;
    status: string;
}
 @Injectable()
export class ServerResolver implements Resolve<Server> {
    constructor(private serversService: ServersService) {}
   
    resolve(route: ActivatedRoute, state: RouterStateSnapshot): Observable<Server> | Promise<Server> | Server{
        return this.serversService.getServer(+route.params['id']);
    }
}