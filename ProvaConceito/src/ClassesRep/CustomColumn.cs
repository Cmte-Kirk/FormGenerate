using System;
using System.Collections.Generic;
using System.Text;
using System.ComponentModel.DataAnnotations.Schema;

namespace ClassesRep
{
    public class CustomColumn: ColumnAttribute
    {
        public CustomColumn()
        {

        }
        public CustomColumn(string name): base(name)
        {
            
        }
        public string Display { get; set; }
        public string Tooltip { get; set; }
    }
}
