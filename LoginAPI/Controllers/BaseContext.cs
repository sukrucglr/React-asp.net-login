namespace LoginAPI.Controllers
{
    internal class BaseContext
    {
        private string v;

        public BaseContext(string v)
        {
            this.v = v;
        }

        internal object GetDataListFromQuery<T>(string v)
        {
            throw new NotImplementedException();
        }
    }
}