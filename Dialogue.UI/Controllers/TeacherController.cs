using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;
using Dialogue.Domain.Models;
using Dialogue.Models;
using Incoding.CQRS;
using Incoding.MvcContrib;

namespace Dialogue.Controllers
{
    public class TeacherController : IncControllerBase
    {
        public ActionResult Index()
        {
            var teachers = new List<TeacherVm>();
            return View(teachers);
        }

        [HttpGet]
        public object GetTeacherModal(string id)
        {
            var teacher = new TeacherVm(dispatcher.Query(new GetEntitiesQuery<Teacher>()).First(r => r.Id == id));
            return PartialView("_TeacherModalContent", teacher);
        }
    }
}