export class Conversion {
    private celcius: number;
    private farenheit: number;

    constructor(celcius: number, farenheit: number) {
        this.celcius = celcius;
        this.farenheit = farenheit;
    }

    public getCelcius(): number {
        return this.celcius;
    }

    public getFarenheit(): number {
        return this.farenheit;
    }
}