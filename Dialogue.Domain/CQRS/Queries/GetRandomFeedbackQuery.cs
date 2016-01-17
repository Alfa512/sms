using System;
using System.Linq;
using Dialogue.Domain.Models;
using Incoding.CQRS;

namespace Dialogue.Domain.CQRS.Queries
{
    public class GetRandomFeedbackQuery : QueryBase<Feedback>
    {
        protected override Feedback ExecuteResult()
        {
            var feedbacks = Repository.Query<Feedback>();
            var rand = new Random(DateTime.Now.Millisecond);
            const int maxVal = 1000000;
            var randNum = rand.Next(0, Convert.ToInt32(maxVal + maxVal * 0.1));
            var feedbackNum = 0;

            var feedbacksCount = feedbacks.Count();

            if (feedbacksCount == 0)
                return null;

            for (var i = 0; i < feedbacksCount; i++)
            {
                if ((maxVal / feedbacksCount) * (i + 1) < randNum && feedbacksCount != i + 1)
                {
                    continue;
                }
                feedbackNum = i;
                break;
            }

            return feedbacks.First(feedback => feedback.Id == feedbackNum.ToString());
        }
    }
}