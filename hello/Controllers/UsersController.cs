using System;
using System.Collections.Generic;
using System.Linq;
using hello.Models;
using Microsoft.AspNetCore.Mvc;

namespace hello.Controllers
{
    [Route("api/users")]
    public class UsersController : Controller
    {
        private static List<User> _users = new List<User>
        {
            new User
            {
                Id = 1,
                FirstName = "Vasiliy",
                LastName = "Pupkin",
                Address = new Address
                {
                    Id = 1,
                    Country = "Ukraine",
                    City = "Kharkiv",
                    Street = "Sumskaya",
                    Appartments = "1b"
                },
                PhoneNumbers = new List<string>
                {
                    "88005553535",
                    "81102433354"
                }
            },
            new User
            {
                Id = 2,
                FirstName = "Tolya",
                LastName = "Pupaev",
                Address = new Address
                {
                    Id = 2,
                    Country = "Ukraine",
                    City = "Kyiv",
                    Street = "Peremogi",
                    Appartments = "112"
                },
                PhoneNumbers = new List<string>
                {
                    "11111111111",
                    "22222222222"
                }
            },
            new User
            {
                Id = 3,
                FirstName = "Kolya",
                LastName = "Kukuev",
                Address = new Address
                {
                    Id = 3,
                    Country = "Ukraine",
                    City = "Lviv",
                    Street = "Shiroka",
                    Appartments = "2"
                },
                PhoneNumbers = new List<string>
                {
                    "33333333333",
                    "44444444444"
                }
            }
        };
        
        [HttpGet]
        public IEnumerable<User> Users()
        {
            return _users;
        }
    }
}
