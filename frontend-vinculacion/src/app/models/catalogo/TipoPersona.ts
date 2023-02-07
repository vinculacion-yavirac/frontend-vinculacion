import { AsignarFundacionVinculacion } from "../docente-vinculacion/asignar-fundacion-vinculacion"
import { Catalogo } from "./Catalogo"
import { Persona } from "./Persona"

export interface TipoPersona{
  id:number,
  catalogoId: Catalogo[],
  personaId: Persona[]
  fundacionId:AsignarFundacionVinculacion[]
}