﻿using Incoding.CQRS;
using SMS.Domain.Models;

namespace SMS.Domain.CQRS.Commands
{
    public class AddCourseCommand : CommandBase
    {
        readonly Language _course;

        public AddCourseCommand(Language course)
        {
            _course = course;
        }

        public override void Execute()
        {
            Repository.Save(new Language
            {
                LanguageName = _course.LanguageName,
                IconPath = _course.IconPath
            });    
        }  
    }
}