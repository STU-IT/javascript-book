function abstractAccount(rentefod)
{
    var that = {};

    that.rente = rentefod || 0;

    that.getRente = function(){
        return that.rente;
    }

    return that;
};

function account(rentefod, openingBalance)
{
    // constroct that from what is to be inherited
    var that = abstractAccount(rentefod);

    // define private properties
    var _balance = openingBalance || 0;

    // define priviliged methods
    that.isBallancePositive = function()
    {
        return _balance >= 0;
    }

    Object.defineProperty(
        that, 'ballance',
        {

            get: function() {
                console.debug("Balance is being read: " );
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

    );

    // fix profile
    //that.__proto__ = account.prototype; // duer ikke

    // do luckup
    //Object.preventExtensions(that);

    return that;
}
// add more public methods via prototype
