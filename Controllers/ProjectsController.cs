using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

[Route("api/[controller]")]
[ApiController]
public class ProjectsController : ControllerBase
{
    private static List<Project> projects = new List<Project>
    {
        new Project { Id = 1, Title = "Sample Project", Description = "Description here", ImageUrl = "", GitHubUrl = "" }
    };

    [HttpGet]
    public ActionResult<IEnumerable<Project>> GetProjects()
    {
        return Ok(projects);
    }
}
