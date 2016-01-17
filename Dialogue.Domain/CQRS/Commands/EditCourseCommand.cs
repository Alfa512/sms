using Dialogue.Domain.Models;
using Incoding.CQRS;

namespace Dialogue.Domain.CQRS.Commands
{
    public class EditCourseCommand : CommandBase
    {
        readonly Language _course;

        public EditCourseCommand(Language course)
        {
            _course = course;
        }

        public override void Execute()
        {
            Repository.SaveOrUpdate(new Language
            {
                LanguageName = _course.LanguageName,
                IconPath = _course.IconPath
            });    
        }   
    }
}