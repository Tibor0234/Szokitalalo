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

        public int[] Compare()
        {
            int[] difference = new int[this.words[0].word.Length];
            for (int i = 0; i < difference.Length; i++)
            {
                difference[i] = Math.Abs((int)this.words[0].word[i] - (int)this.words[1].word[i]);
            }
            Clear();
            return difference;
        }

        public void Clear()
        {
            this.words.Clear();
        }
    }
}