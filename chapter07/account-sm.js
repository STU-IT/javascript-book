function AbstractAccount(rentefod)
{
    this.rente = rentefod || 0;
};
AbstractAccount.prototype.getRente = function(){
    return this.rente;
}

function Account(rentefod, openingBalance)
{

    var _balance = openingBalance || 0;

    return Object.create(new AbstractAccount(rentefod), {
        balance: {
            get: function() {
                console.debug("Balance is being read: " + _balance);
                return _balance;
            },
            set: function(newBalance) {
                console.debug("Balance is being written: " + newBalance);
                if (newBalance < 0) {
                    console.debug("Negative balance: " + newBalance);
                }
                _balance = newBalance;
            },
            enumerable: true

        }
    });

}
Account.prototype = Account;
Account.prototype.constructor = Account;
