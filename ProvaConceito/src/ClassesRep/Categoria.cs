using System.ComponentModel;

namespace ClassesRep
{
    public enum Categoria
    {
        [Description("Bomboniere")]
        Bomboniere,
        [Description("Cesta Básica")]
        CestaBasica,
        [Description("Limpeza")]
        Limpeza,
        [Description("Utencílios")]
        Utencilios,
        [Description("Enlatados")]
        Enlatados
    }
}