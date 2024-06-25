class Calculation{
    calculationLine = new String();

    setterCalculationLine(line){
        this.calculationLine = line;
    }

    setLastSymbolCalculationLine(char){
        this.calculationLine = this.calculationLine + char;
    }

    getterCalculationLine(){
        return this.calculationLine;
    }

    lastSymbol(){
        return this.calculationLine[this.calculationLine.length-1];
    }

    deleteLastSymbol(){
        this.calculationLine = this.calculationLine.slice(0, -1);
    }
}

calc = new Calculation();

calc.setterCalculationLine("Строка");
console.log(calc.getterCalculationLine());

calc.setLastSymbolCalculationLine("!");
console.log(calc.getterCalculationLine());

console.log(calc.lastSymbol());

calc.deleteLastSymbol();
console.log(calc.getterCalculationLine());
