//una interfaz necesaria para la solicitud sell
import { Concept } from "./concept";

export interface Sale{
    idCustomer : number ;
    concepts : Concept[];
}