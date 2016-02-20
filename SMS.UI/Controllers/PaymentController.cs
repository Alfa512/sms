using System.Web.Mvc;
using Incoding.CQRS;
using Incoding.MvcContrib;
using SMS.Domain.CQRS.Commands;
using SMS.Domain.Infrastructure;
using SMS.Domain.Models;

namespace SMS.Controllers
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