using System.Web;
using System.Web.Mvc;

namespace _25DH110543_NguyenMinhTam_Buoi2
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
