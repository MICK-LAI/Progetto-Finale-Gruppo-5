using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MovieRating.Core.Eccezzioni
{
   
        public class NotFoundCommentsByMovieId : Exception
        {
            public NotFoundCommentsByMovieId(int movieId) : base($"Non è stato trovato neanche un commento con il movieId: '{movieId}'.") { }
        }
    }

