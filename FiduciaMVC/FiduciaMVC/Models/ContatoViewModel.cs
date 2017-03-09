using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace FiduciaMVC.Models
{
    public class ContatoViewModel
    {
        [Required]
        [MaxLength(100)]
        public string Nome { get; set; }

        [Required]
        [DataType(DataType.EmailAddress, ErrorMessage = "Informe um e-mail válido")]
        public string Email { get; set; }

        [Required]
        [MaxLength(2000)]
        public string Mensagem { get; set; }
    }
}