function calculatorModule() {
    let _memory = 0;
    let _total = 0;
    let calculator = {
        load: load,
        getTotal: getTotal,
        add: add,
        subtract: subtract,
        multiply: multiply,
        divide: divide,
        recallMemory: recallMemory,
        saveMemory: saveMemory,
        clearMemory: clearMemory
    };
    return calculator;


    /**
     * sets the `total` to the number passed in
     * @param  { Number } x
     * @return { Number }    current total
     */
    function load(num) {
        validate(num);
        _total = num;
        return _total;
    }
    /**
     * Return the value of `total`
     * @return { Number }
     */

    function getTotal() {
        return _total;
    }
    /**
     * Sums the value passed in with `total`
     * @param { Number } x
     */
    function add(num) {
        validate(num); 
        _total += num;
    }


    /**
     * Subtracts the value passed in from `total`
     * @param  { Number } x
     */
    function subtract(num) {
        validate(num);
        _total -= num;
    }

    /**
     * Multiplies the value by `total`
     * @param  { Number } x
     */
    function multiply(num) {
        validate(num);
        _total *= num;
    }


    /**
     * Divides the value passing in by `total`
     * @param  { Number } x
     */
    function divide(num) {
        validate(num);
        _total /= num;
    }


    /**
     * Return the value stored at `memory`
     * @return { Number }
     */
    function recallMemory() {
        return _memory;
    }


    /**
     * Stores the value of `total` to `memory`
     */
    function saveMemory() {
        _memory = _total;
    }


    /**
     * Clear the value stored at `memory`
     */
    function clearMemory() {
        _memory = 0;
    }

    /**
     * Validation
     */
    function validate(num) {
        if (typeof num !== 'number') {
            throw new Error;
        }
    }
} //end calculatorModule