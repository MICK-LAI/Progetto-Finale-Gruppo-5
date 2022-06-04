using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MovieRating.Core.Eccezzioni
{
   
        public class NotFoundCommentsByUserId : Exception
        {
            public NotFoundCommentsByUserId(int userId) : base($"Non è stato trovato neanche un commento con l'userId: '{userId}'.") { }
        }
    }

