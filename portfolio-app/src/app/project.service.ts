import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Project {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    gitHubUrl: string;
}

@Injectable({
    providedIn: 'root'
})
export class ProjectService {
    private apiUrl = 'https://localhost:5001/api/projects';

    constructor(private http: HttpClient) { }

    getProjects(): Observable<Project[]> {
        return this.http.get<Project[]>(this.apiUrl);
    }
}
