namespace FinanceTracker.Domain.Entities;

public class Transaction
{
    public Guid Id { get; private set; }
    public decimal Amount { get; private set; }
    public string Category { get; private set; } = string.Empty;
    public DateTime Date { get; private set; }
    public string Description { get; private set; } = string.Empty;

    private Transaction() { } // Required by EF Core

    public Transaction(decimal amount, string category, DateTime date, string description)
    {
        Id = Guid.NewGuid();
        Amount = amount;
        Category = category;
        Date = date;
        Description = description;
    }
}
