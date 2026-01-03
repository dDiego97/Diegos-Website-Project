using FinanceTracker.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace FinanceTracker.Infrastructure.Data;

public class FinanceTrackerDbContext : DbContext
{
    public FinanceTrackerDbContext(DbContextOptions<FinanceTrackerDbContext> options)
        : base(options)
    {
    }

    public DbSet<Transaction> Transactions => Set<Transaction>();
}
