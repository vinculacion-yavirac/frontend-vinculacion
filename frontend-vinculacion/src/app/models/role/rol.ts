import { Permission } from "../permiso/permiso";
import { Person } from "../persona/persona";

export interface Role {
  id: number;
  name: string;

  permissions: Permission[];

  active: boolean;
  archived: boolean;
  archived_at: Date;
  archived_by: Person;

  created_at: Date;
  updated_at: Date;
}
