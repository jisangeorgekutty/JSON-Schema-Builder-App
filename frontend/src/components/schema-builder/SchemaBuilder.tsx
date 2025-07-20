import { useForm, FormProvider, useFieldArray } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import FieldRow from "./FieldRow";
import { buildSchema } from "../../utils/generateSchema";
import { Button } from "../../components/ui/button";
import type { SchemaField } from "../../types/schema";

interface SchemaFormValues {
  fields: SchemaField[];
}

function SchemaBuilder() {
  const methods = useForm<SchemaFormValues>({ defaultValues: { fields: [] } });
  const { control, watch } = methods;
  const { fields, append, remove } = useFieldArray({ control, name: "fields" });

  const liveData = watch();

  return (
    <FormProvider {...methods}>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="flex p-8 gap-6">
          <div className="w-1/2">
            {fields.map((field, index) => (
              <FieldRow
                key={field.id}
                nestIndex="fields"
                index={index}
                onRemove={() => remove(index)}
              />
            ))}
            <Button
              onClick={() =>
                append({ id: uuidv4(), name: "", type: "string"})
              }
              className="mt-4 bg-blue-600 text-white"
            >
              + Add Item
            </Button>
          </div>
          <div className="w-1/2 bg-gray-100 p-4 rounded">
            <pre>{JSON.stringify(buildSchema(liveData.fields || []), null, 2)}</pre>
          </div>
        </div>
      </form>
    </FormProvider>
  );
}

export default SchemaBuilder;