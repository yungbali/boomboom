export function CreditHistory() {
    const transactions = [
      {
        id: 1,
        type: 'Purchase',
        amount: 500,
        date: '2024-03-15',
        status: 'completed'
      },
      // Add more transactions...
    ]
  
    return (
      <div className="space-y-6">
        <h2 className="text-xl font-bold">Credit History</h2>
        
        <div className="space-y-4">
          {transactions.map(transaction => (
            <div 
              key={transaction.id}
              className="flex items-center justify-between p-4 bg-muted/50 rounded-lg"
            >
              <div>
                <p className="font-medium">{transaction.type}</p>
                <p className="text-sm text-muted-foreground">
                  {new Date(transaction.date).toLocaleDateString()}
                </p>
              </div>
              
              <div className="text-right">
                <p className={`font-bold ${
                  transaction.type === 'Purchase' ? 'text-primary' : 'text-accent'
                }`}>
                  {transaction.type === 'Purchase' ? '+' : '-'}{transaction.amount}
                </p>
                <p className="text-xs text-muted-foreground capitalize">
                  {transaction.status}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }