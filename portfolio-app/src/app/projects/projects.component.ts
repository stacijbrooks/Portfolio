import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';

interface Project {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    gitHubUrl: string;
}

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
    projects: Project[] = [];

    constructor(private projectService: ProjectService) {}

    ngOnInit(): void {
        this.projectService.getProjects().subscribe(data => {
            this.projects = data;
        });
    }
}
