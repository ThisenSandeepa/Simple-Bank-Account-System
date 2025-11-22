let balance = 0;

function updateBalance() {
    document.getElementById('balance').textContent = balance.toFixed(2);
}

function showMessage(text, type) {
    const msg = document.getElementById('message');
    msg.textContent = text;
    msg.className = 'message ' + type;
    setTimeout(() => msg.textContent = '', 3000);
}

function deposit() {
    const amount = parseFloat(document.getElementById('amount').value);
    
    if (isNaN(amount) || amount <= 0) {
        showMessage('Enter valid amount!', 'error');
        return;
    }
    
    balance += amount;
    updateBalance();
    showMessage('Deposited $' + amount.toFixed(2), 'success');
    document.getElementById('amount').value = '';
}

function withdraw() {
    const amount = parseFloat(document.getElementById('amount').value);
    
    if (isNaN(amount) || amount <= 0) {
        showMessage('Enter valid amount!', 'error');
        return;
    }
    
    if (amount > balance) {
        showMessage('Insufficient balance!', 'error');
        return;
    }
    
    balance -= amount;
    updateBalance();
    showMessage('Withdrawn $' + amount.toFixed(2), 'success');
    document.getElementById('amount').value = '';
}