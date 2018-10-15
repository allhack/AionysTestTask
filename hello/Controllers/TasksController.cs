using System;
using System.Collections.Generic;
using System.Linq;
using hello.Models;
using Microsoft.AspNetCore.Mvc;

namespace hello.Controllers
{
    [Route("api/tasks")]
    public class TasksController : Controller
    {
        private static List<Task> _tasks = new List<Task>
        {
            new Task
            {
                Id = 1,
                Name = "Hello",
                Description = "Greet users",
                FormattedStartTime = DateTime.Now.ToString(),
                FormattedEndTime = DateTime.Now.ToString(),
                UserId = 1
            },
            new Task
            {
                Id = 2,
                Name = "Bye",
                Description = "Conduct guests",
                FormattedStartTime = DateTime.Now.ToString(),
                FormattedEndTime = DateTime.Now.ToString(),
                UserId = 1
            },
            new Task
            {
                Id = 3,
                Name = "Installation",
                Description = "Install the development environment",
                FormattedStartTime = DateTime.Now.ToString(),
                FormattedEndTime = DateTime.Now.ToString(),
                UserId = 2
            },
            new Task
            {
                Id = 4,
                Name = "Cooking",
                Description = "Fry the meat",
                FormattedStartTime = DateTime.Now.ToString(),
                FormattedEndTime = DateTime.Now.ToString(),
                UserId = 3
            }
        };

        [HttpGet]
        public IEnumerable<Task> GetAll()
        {
            return _tasks;
        }

        [HttpPost]
        public IActionResult AddTask([FromBody]Task task)
        {
            try
            {
                task.Id = _tasks.Max(t => t.Id) + 1;
                _tasks.Add(task);
                return Ok(task);
            }
            catch
            {
                return BadRequest();
            }
        }

        [HttpDelete("{taskId}")]
        public IActionResult DeleteTask(int taskId)
        {
            var task = _tasks.FirstOrDefault(t => t.Id == taskId);
            if(task != null)
            {
                _tasks.Remove(task);
            }
            return Ok();
        }
    }
}
