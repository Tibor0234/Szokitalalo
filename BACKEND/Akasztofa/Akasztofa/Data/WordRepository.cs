using Akasztofa.Model;

namespace Akasztofa.Data
{
    public class WordRepository : IWordRepository
    {
        List<Word> words;

        public WordRepository()
        {
            this.words = new List<Word>();
        }

        public void Create(Word word)
        {
            this.words.Add(word);
        }
    }
}