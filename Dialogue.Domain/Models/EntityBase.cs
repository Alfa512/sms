using System;
using Incoding.Data;

namespace Dialogue.Domain.Models
{
    public class EntityBase : IncEntityBase
    {
        public new virtual string Id { get; set; }

        public EntityBase()
        {
            Id = Guid.NewGuid().ToString();
        }
    }
}