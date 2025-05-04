using Akasztofa.Data;
using Microsoft.AspNetCore.Mvc;

namespace Akasztofa.Controller
{
    [ApiController]
    [Route("[controller]")]
    public class WordAPIController : ControllerBase
    {
        IWordRepository repo;
    }
}
