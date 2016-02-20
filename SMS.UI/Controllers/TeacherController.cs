using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;
using Incoding.CQRS;
using Incoding.MvcContrib;
using SMS.Domain.Models;
using SMS.Models;

namespace SMS.Controllers
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