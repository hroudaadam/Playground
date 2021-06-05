using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;

namespace ConsoleApp
{
    class Program
    {
        static void Main(string[] args)
        {
            MongoCRUD db = new MongoCRUD("AddressBook");

            // insert record
            //Person p = new Person
            //{
            //    FirstName = "Joe",
            //    LastName = "Smith",
            //    PrimaryAddress = new Address
            //    {
            //        City = "Prague",
            //        State = "Czech Republic",
            //        Street = "Stara 104",
            //        ZipCode = "16000"
            //    }
            //};
            //db.InsertRecord("Users", p);

            // load all
            //var recs = db.LoadRecords<Person>("Users");
            //foreach (var rec in recs)
            //{
            //    Console.WriteLine($"{rec.Id}: {rec.FirstName} {rec.LastName}");
            //    if (rec.PrimaryAddress != null)
            //    {
            //        Console.WriteLine(rec.PrimaryAddress.City);
            //    }
            //    Console.WriteLine();
            //}

            // load by id
            //var rec = db.LoadRecordById<Person>("Users", new Guid("d646debe-876d-49c4-a703-f34453fdc32a"));
            //Console.WriteLine($"{rec.Id}: {rec.FirstName} {rec.LastName}\n");


            Console.WriteLine("DONE");
            Console.ReadKey();
        }
    }

    public class Person
    {
        // in Mongo as _id
        [BsonId]
        public Guid Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public Address PrimaryAddress { get; set; }
    }

    public class Address
    {
        [BsonId]
        public Guid Id { get; set; }
        public string Street { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string ZipCode { get; set; }
    }

    public class MongoCRUD
    {
        private IMongoDatabase _db;

        public MongoCRUD(string database)
        {
            // connects to localhost by default
            var client = new MongoClient();

            // gets database or creates one
            _db = client.GetDatabase(database);
        }

        public void InsertRecord<T>(string table, T record)
        {
            var collection = _db.GetCollection<T>(table);
            collection.InsertOne(record);
        }

        public List<T> LoadRecords<T>(string table)
        {
            var collection = _db.GetCollection<T>(table);
            return collection.Find(new BsonDocument()).ToList();
        }

        public T LoadRecordById<T>(string table, Guid id)
        {
            var collection = _db.GetCollection<T>(table);
            var filter = Builders<T>.Filter.Eq("Id", id);

            return collection.Find(filter).First();
        }

        public void UpsertRecord<T>(string table, Guid id, T record)
        {
            var collection = _db.GetCollection<T>(table);
            var result = collection.ReplaceOne(
                new BsonDocument("_id", id),
                record,
                new ReplaceOptions { IsUpsert = true });

            Console.WriteLine(result);
        }
    }
}
