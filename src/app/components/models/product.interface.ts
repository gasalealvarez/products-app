import { Timestamp } from 'rxjs/internal/operators/timestamp';

export interface productI {
    id?: string;
    producto?: string;
    codigo?: string;
    precio?:string;
    precioFinal?: string;
    precioTarjeta?: string;
    fechaActualizacion?: Date;
}