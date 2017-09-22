using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ClassesRep
{
    [Table("tbl_Produto")]
    [CustomAction("btnSalvar", Display = "Salvar", Order = 30, TypeName = "button", Tooltip = "Salvar", Icon = "floppy-disk")]
    [CustomAction("btnExcluir", Display = "Excluir", Order = 30, TypeName = "button", Tooltip = "Excluir")]
    public class Produto
    {
        [CustomColumn("Id", Display = "Id", Order = 1, TypeName = "int")]
        //[CustomColumn("Id", Order = 1, TypeName = "int")]
        public int Id { get; set; }

        [CustomColumn("Descricao", Display = "Descrição", Order = 10, TypeName = "varchar(100)")]
        public string Nome { get; set; }

        [CustomColumn("Valor", Display = "Valor R$", Order = 10, TypeName = "varchar(100)")]
        public string Valor { get; set; }

        [CustomColumn("Ativo", Display = "Ativo", Order = 20, TypeName = "bit")]
        public bool Ativo { get; set; }

        [CustomColumn("Categoria", Display = "Categoria", Order = 30, TypeName = "enum")]
        public Categoria Categoria { get; set; }


        public Produto()
        {
        }

    }
}
