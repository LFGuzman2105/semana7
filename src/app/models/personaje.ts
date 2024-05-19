export class Personaje {
    private nombre: string;
    private url: string;

    constructor(nombre: string, url: string) {
        this.nombre = nombre;
        this.url = url;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public getUrl(): string {
        return this.url;
    }
}