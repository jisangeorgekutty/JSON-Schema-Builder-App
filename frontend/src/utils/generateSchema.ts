import type { SchemaField } from "../types/schema";

export function buildSchema(fields: SchemaField[]): any {
  const obj: Record<string, any> = {};
  fields.forEach((field) => {
    if (!field.name) return;
    if (field.type === 'nested') {
      obj[field.name] = buildSchema(field.children || []);
    } else {
      obj[field.name] = field.type === 'string' ? 'STRING' : 'number';
    }
  });
  return obj;
}