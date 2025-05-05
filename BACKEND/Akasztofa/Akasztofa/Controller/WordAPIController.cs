using Akasztofa.Data;
using Akasztofa.Model;
using Microsoft.AspNetCore.Mvc;

namespace Akasztofa.Controller
{
    [ApiController]
    [Route("[controller]")]
    public class WordAPIController : ControllerBase
    {
        IWordRepository repo;

        public WordAPIController(IWordRepository repo)
        {
            this.repo = repo;
        }

        [HttpPost("guess")]
        public void CreateGuess([FromBody] Word word)
        {
            this.repo.Create(word);
        }

        [HttpPost("target")]
        public void CreateTarget([FromBody] Word word)
        {
            this.repo.Create(word);
        }

        [HttpGet]
        public int[] Read()
        {
            return this.repo.Compare();
        }

        [HttpDelete]
        public void Clear()
        {
            this.repo.Clear();
        }
    }
}
