class Worker{
    #name;
    #surname;
    #rate;
    #days;

    get name() {
        return this.#name;
    }

    get surname(){
        return this.#surname
    }

    get rate(){
        return this.#rate
    }
    set rate(rate){
        this.#rate = rate
    }

    get days(){
        return this.#days
    }
    set days(days){
        this.#days = days
    }

    getSalary() {
    return this.#rate * this.#days    
    }
}