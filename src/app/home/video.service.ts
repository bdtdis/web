import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {ApiGatewayService} from "../shared/api-gateway.service";
import {Video} from "../shared/models/video.model";

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  constructor(private apiGatewayService: ApiGatewayService) {
  }

  getVideos(): Observable<Video[]> {
    return this.apiGatewayService.get<Video[]>(`video`);
  }
}
