using System.Web.Mvc;
using Dialogue.Domain.CQRS.Commands;
using Dialogue.Domain.Infrastructure;
using Dialogue.Domain.Models;
using Incoding.CQRS;
using Incoding.MvcContrib;

namespace Dialogue.Controllers
{
    public class PaymentController : IncControllerBase
    {
        public ActionResult PaymentRequisitesForm(string name)
        {
            return View(null, null, name);
        }

        [HttpPost]
        public object SendPaymentRequisitesToStudent(string name, string email)
        {
            var body = RenderToString("_PaymentRequisitesForm", name);

            dispatcher.Push(new SendMessageCommand(new Email
            {
                ToEmail = email,
                ToName = name,
                FromEmail = MailSettings.FromEmail,
                FromName = MailSettings.FromName,
                Subject = "Онлайн-школа \"Dialogue\"",
                Body = body
            }));
            return true;
        }
    }
}