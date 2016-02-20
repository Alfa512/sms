namespace SMS.Domain.Infrastructure
{
    public interface IRegexUtilities
    {
        bool IsValidEmail(string strIn);
    }
}