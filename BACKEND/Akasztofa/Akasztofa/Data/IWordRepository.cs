using Akasztofa.Model;

namespace Akasztofa.Data
{
    public interface IWordRepository
    {
        public void Create(Word word);
        public List<Word> Read();
        public int[] Compare();
    }
}
