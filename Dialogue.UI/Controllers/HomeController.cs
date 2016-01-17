using System.Web.Mvc;
using Dialogue.Domain.CQRS.Queries;
using Dialogue.Domain.Models;
using Incoding.CQRS;
using Incoding.MvcContrib;

namespace Dialogue.Controllers
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

        public ActionResult Feedback()
        {
            return View("_Feedback", dispatcher.Query(new GetRandomFeedbackQuery()));
        }

        public ActionResult Testimonials()
        {
            return View(dispatcher.Query(new GetEntitiesQuery<Feedback>()));
        }

        public ActionResult PageNotFound()
        {
            Response.StatusCode = 404;
            return View();
        }
    }
}