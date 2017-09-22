using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ClassesRep
{
    [Table("tbl_Cliente")]
    [CustomAction("btnSalvar", Display = "Salvar", Order = 30, TypeName = "button", Tooltip = "Salvar", Icon = "floppy-disk")]
    [CustomAction("btnExcluir", Display = "Excluir", Order = 30, TypeName = "button", Tooltip = "Excluir")]
    public class Cliente
    {
        [CustomColumn("Id", Display = "Id", Order = 1, TypeName = "int")]
        //[CustomColumn("Id", Order = 1, TypeName = "int")]
        public int Id { get; set; }

        [CustomColumn("Nome", Display = "Nome", Order = 10, TypeName = "varchar(100)")]
        public string Nome { get; set; }

        [CustomColumn("Ativo", Display = "Ativo", Order = 20, TypeName = "bit")]
        public bool Ativo { get; set; }

        [CustomColumn("EstadoCivil", Display = "Estado Civíl", Order = 30, TypeName = "enum")]
        public EstadoCivil EstadoCivil { get; set; }


        public Cliente()
        {
        }

    }
}
