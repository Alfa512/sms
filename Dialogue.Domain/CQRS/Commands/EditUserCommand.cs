using Dialogue.Domain.Models;

namespace Dialogue.Domain.CQRS.Commands
{
using Incoding.CQRS;

namespace Dialogue.Domain.CQRS.Commands
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
}