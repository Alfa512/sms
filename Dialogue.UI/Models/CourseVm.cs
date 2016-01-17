using System.Collections.Generic;
using System.Web;
using Dialogue.Domain.Models;
using FluentValidation;
using FluentValidation.Attributes;

namespace Dialogue.Models
{
    [Validator(typeof(AdminCoursesVmValidator))]
    public class CourseVm
    {
        public object Id { get; set; }
        public string LanguageName { get; set; }
        public string IconPath { get; set; }
        public HttpPostedFileBase IconFile { get; set; }

        public CourseVm(Language language)
        {
            Id = language.Id;
            LanguageName = language.LanguageName;
            IconPath = language.IconPath;
        }

        public CourseVm()
        {
            
        }
    }

    public class AdminCoursesVmValidator : AbstractValidator<CourseVm>
    {
        public AdminCoursesVmValidator()
        {
            RuleFor(m => m.LanguageName).NotEmpty().WithMessage("Введите язык!");
            RuleFor(m => m.IconFile).NotEmpty().WithMessage("Выберите иконку!");
        }
    }
}