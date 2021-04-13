using System;
using System.Collections;
using System.Linq;

namespace StuctsAlgosConsole
{
    class Program
    {
        static void Main(string[] args) 
        {
            Hashtable table = new Hashtable();

            table.Add("test", 1);

            Console.WriteLine((int)table["test"] + 5);

            int[] array = new int[] { 5, 8, 3, 4, 7, 9, 5, 2 };
            Array.IndexOf(array, 7);

            Console.ReadKey();
        }
    }
}
