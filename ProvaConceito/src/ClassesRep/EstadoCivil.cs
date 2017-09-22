using System.ComponentModel;

namespace ClassesRep
{
    public enum EstadoCivil
    {
        [Description("Solteiro")]
        Solteiro,
        [Description("Casado")]
        Casado,
        [Description("Divorciado")]
        Divorciado,
        [Description("União Estável")]
        UniaoEstavel
    }
}