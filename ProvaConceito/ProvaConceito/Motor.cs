using ClassesRep;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;

namespace ProvaConceito
{
    public class Motor
    {
        public static Dictionary<string, object> GetColumns(string className)
        {
            Dictionary<string, object> _dict = new Dictionary<string, object>();

            PropertyInfo[] props = Type.GetType("ClassesRep." + className + ",ClassesRep").GetProperties();
            foreach (PropertyInfo prop in props)
            {
                object[] attrs = prop.GetCustomAttributes(true).ToArray();
                foreach (object attr in attrs)
                {
                    CustomColumn colAttr = attr as CustomColumn;
                    if (colAttr != null)
                    {
                        string propName = prop.Name;
                        if (colAttr.TypeName == "enum")
                        {
                            List<string> descEnum = new List<string>();
                            Type tp = Type.GetType("ClassesRep." + propName + ",ClassesRep");
                            TypeInfo typeInfo = tp.GetTypeInfo();
                            MemberInfo[] membsEnum = typeInfo.GetMembers(BindingFlags.Public | BindingFlags.Static);
                            foreach (MemberInfo membEnum in membsEnum)
                            {
                                DescriptionAttribute enumAttr = membEnum.GetCustomAttributes(true).First() as DescriptionAttribute;
                                descEnum.Add(enumAttr.Description);
                            }
                            colAttr.TypeName += "(" + string.Join(",", descEnum) + ")";
                        }

                        _dict.Add(propName, colAttr);
                    }
                }
            }

            TypeInfo infoClass = Type.GetType("ClassesRep." + className + ",ClassesRep").GetTypeInfo();
            object[] attrsClass = infoClass.GetCustomAttributes(true).ToArray();
            ICollection<CustomAction> arrActions = new List<CustomAction>();
            foreach (object attr in attrsClass)
            {
                CustomAction colAttr = attr as CustomAction;
                if (colAttr != null)
                {
                    arrActions.Add(colAttr);
                }
            }
            _dict.Add("Actions", arrActions.ToArray());
            return _dict;
        }
    }
}
