import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { Switch } from "../../components/ui/switch";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../../components/ui/select";
import {
  useFormContext,
  Controller,
  useFieldArray,
  useWatch,
} from "react-hook-form";

interface Props {
  nestIndex: string;
  index: number;
  onRemove: () => void;
}

function FieldRow({ nestIndex, index, onRemove }: Props) {
  const { register, control } = useFormContext();
  const namePath = `${nestIndex}[${index}]`;

  const { fields: childrenFields, append, remove } = useFieldArray({
    control,
    name: `${namePath}.children`,
  });

  const fieldType = useWatch({
    name: `${namePath}.type`,
    control,
  });

  return (
    <div className="pl-4 border-l-2 mb-3">
      <div className="flex items-center gap-2">
        <Input
          placeholder="Field Key"
          {...register(`${namePath}.name`)}
          className="w-32"
        />

        <Controller
          control={control}
          name={`${namePath}.type` as const}
          render={({ field }) => (
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger className="w-28">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="string">string</SelectItem>
                <SelectItem value="number">number</SelectItem>
                <SelectItem value="nested">nested</SelectItem>
              </SelectContent>
            </Select>
          )}
        />

        <Controller
          control={control}
          name={`${namePath}.required` as const}
          render={({ field }) => (
            <Switch checked={field.value} onCheckedChange={field.onChange} />
          )}
        />

        <Button
          onClick={onRemove}
          className="text-white bg-black hover:bg-zinc-800 focus:bg-zinc-900"
          size="sm"
        >
          ✖
        </Button>
      </div>

      {fieldType === 'nested' && (
        <div className="pl-4 border-l ml-4 mt-2">
          {childrenFields.map((_, i) => (
            <FieldRow
              key={_.id}
              nestIndex={`${namePath}.children`}
              index={i}
              onRemove={() => remove(i)}
            />
          ))}
          <Button
            size="sm"
            className="mt-2 bg-blue-600"
            onClick={() =>
              append({ id: crypto.randomUUID(), name: '', type: 'string', required: false })
            }
          >
            + Add Item
          </Button>
        </div>
      )}
    </div>
  );
}

export default FieldRow;