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

        public List<Word> Read()
        {
            return this.words;
        }

        public int[] Compare()
        {
            int[] difference = new int[words[0].Word.Length];
            for (int i = 0; i < difference.Length; i++)
            {
                difference[i] = Math.Abs((int)words[0].Word[0] - (int)words[1].Word[0]);
            }
            return difference;
        }
    }
}