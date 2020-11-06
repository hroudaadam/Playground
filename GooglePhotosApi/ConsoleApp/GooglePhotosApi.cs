using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp
{
    public class GooglePhotosApi
    {

        public static async Task CreateAlbumsAsync(string token)
        {
            var albs = GetAlbumNames();

            foreach (var alb in albs)
            {
                await CreateAlbumAsync(alb, token);
            }
        }

        public static List<string> GetAlbumNames()
        {
            var photosPath = @"D:\Fotky";
            List<string> output = new List<string>();

            string[] yearDirs =  Directory.GetDirectories(photosPath);

            for (int i = 0; i < yearDirs.Length; i++)
            {
                string yearPath = Path.Combine(photosPath, yearDirs[i]);
                string[] dirs = Directory.GetDirectories(yearPath);

                foreach (var dir in dirs)
                {
                    var vals = dir.Split('\\');
                    output.Add(vals[vals.Length - 1]);
                }
            }

            return output;
        }

        public static async Task<bool> CreateAlbumAsync(string album, string token)
        {
            HttpClient client = new HttpClient();
            client.DefaultRequestHeaders.Clear();
            client.BaseAddress = new Uri("https://photoslibrary.googleapis.com");
            client.DefaultRequestHeaders.TryAddWithoutValidation("Authorization", $"Bearer " + token);

            var data = new
            {
                album = new
                {
                    title = album
                }
            };
            var content = new StringContent(JsonConvert.SerializeObject(data), Encoding.UTF8, "application/json");

            try
            {
                var response = await client.PostAsync("/v1/albums", content);
                // deserializace HTTP response a uložení tokenu
                string responseBody = await response.Content.ReadAsStringAsync();
            }
            catch (Exception)
            {
                Console.WriteLine("Error");
            }

            return true;
        }
    }
}
