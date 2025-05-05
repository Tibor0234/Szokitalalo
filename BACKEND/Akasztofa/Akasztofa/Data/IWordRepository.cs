using Akasztofa.Model;

namespace Akasztofa.Data
{
    public interface IWordRepository
    {
        public void Create(Word word);
        public int[] Compare();
        public void Clear();
    }
}
