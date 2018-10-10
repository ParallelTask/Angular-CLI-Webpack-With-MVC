using System.Web.Hosting;
using System.Web.Mvc;

namespace MVC_Angular.Controllers
{
    public class HomeController : Controller
    {
        // Refer:
        // https://stackoverflow.com/questions/20871938/render-html-file-in-asp-net-mvc-view
        // https://stackoverflow.com/questions/42430300/disable-msbuild-typescript-compile
        // https://stackoverflow.com/questions/2545602/git-ignore-sub-folders
        // https://angular.io/api/common/APP_BASE_HREF
        // Make sure to give eveyrthing relative images etc..
        // GET: Home
        public ActionResult Index()
        {
            return new FilePathResult("~/Angular/webpack/dist/index.html", "text/html");
        }
    }
}