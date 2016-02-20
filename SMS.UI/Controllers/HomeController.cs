using System.Web.Mvc;
using Incoding.CQRS;
using Incoding.MvcContrib;
using SMS.Domain.CQRS.Queries;
using SMS.Domain.Models;

namespace SMS.Controllers
{
    public class HomeController : IncControllerBase
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Courses()
        {
            return View();
        }

        public ActionResult OrderLesson()
        {
            return View();
        }

        public ActionResult Costs()
        {
            return View();
        }

        public ActionResult RequisitesRequestModal()
        {
            return View("_RequisitesRequestModal");
        }

        public ActionResult PageNotFound()
        {
            Response.StatusCode = 404;
            return View();
        }
    }
}