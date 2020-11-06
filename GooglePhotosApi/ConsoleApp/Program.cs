using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Net;
using System.Net.Sockets;
using System.Runtime.InteropServices;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp
{
    class Program
    {
        static async Task Main(string[] args)
        {
            GoogleOAuth.Run();
            Console.ReadKey();
            Console.Clear();


            string accessToken = Console.ReadLine();
            await GooglePhotosApi.CreateAlbumsAsync(accessToken);

            Console.WriteLine("ok");

            //var albs = GooglePhotosApi.GetAlbumNames();
            //foreach (var alb in albs)
            //{
            //    Console.WriteLine(alb);
            //}

            Console.ReadKey();
        }
    }   
}
