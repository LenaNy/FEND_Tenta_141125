//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace TentaFEND141125
{
    using System;
    using System.Collections.Generic;
    
    public partial class Genre
    {
        public Genre()
        {
            this.Tracks = new HashSet<Track>();
        }
    
        public int GenreId { get; set; }
        public string Name { get; set; }
    
        public virtual ICollection<Track> Tracks { get; set; }
    }
}
