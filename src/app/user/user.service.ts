import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {UserState} from "./state/user.state";
import {ApiGatewayService} from "../shared/api-gateway.service";

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private apiGatewayService: ApiGatewayService) {
  }

  getUserDetails(id: string): Observable<UserState> {
    return this.apiGatewayService.get<UserState>(`user/${id}`);
  }

  createUser(firstName: string, lastName: string, email: string): Observable<UserState> {
    return this.apiGatewayService.post<UserState>('user', { firstName, lastName, email });
  }
}
