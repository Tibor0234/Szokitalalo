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
            int[] difference = new int[this.words[0].word.Length];
            for (int i = 0; i < difference.Length; i++)
            {
                difference[i] = Math.Abs((int)words[0].word[0] - (int)words[1].word[0]);
            }
            return difference;
        }
    }
}