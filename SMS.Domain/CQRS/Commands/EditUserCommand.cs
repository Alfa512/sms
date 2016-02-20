using Incoding.CQRS;
using SMS.Domain.Models;

namespace SMS.Domain.CQRS.Commands
{
    public class EditUserCommand : CommandBase
    {
        readonly Teacher _user;

        public EditUserCommand(Teacher user)
        {
            _user = user;
        }

        public override void Execute()
        {
            Repository.SaveOrUpdate(_user);
        }
    }
}