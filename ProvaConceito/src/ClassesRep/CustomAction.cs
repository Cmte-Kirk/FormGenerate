using System;
using System.Collections.Generic;
using System.Text;
using System.ComponentModel.DataAnnotations.Schema;

namespace ClassesRep
{
    [AttributeUsage(AttributeTargets.Class, AllowMultiple = true)]
    public class CustomAction: CustomColumn
    {
        public CustomAction()
        {

        }
        public CustomAction(string name): base(name)
        {
            
        }
        public string Icon { get; set; }

    }
}
