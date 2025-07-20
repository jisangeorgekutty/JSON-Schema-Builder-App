import type { SchemaField } from "../types/schema";

export function buildSchema(fields: SchemaField[]): any {
  const obj: Record<string, any> = {};

  // only include fields with a name
  fields.forEach((field) => {
    if (field.name === '') return;
    if (field.type === 'nested') {
      obj[field.name] = buildSchema(field.children || []);
    } else {
      obj[field.name] = field.type === 'string' ? 'string' : 'number';
    }
  });
  return obj;
}