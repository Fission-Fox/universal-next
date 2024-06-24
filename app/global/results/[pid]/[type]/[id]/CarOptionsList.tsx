import agent from "@/api/agent";
import { CarOptions } from "@/models/Master/CarOptions";
interface Props {
  stockID: number;
  vehicleType: string;
  optionsMaster: CarOptions[];
}
export default async function CarOptionList({ stockID, vehicleType, optionsMaster }: Props) {
  const stockOptions = await agent.LoadData.caroptionMappingList(stockID, vehicleType);

  return (
    <>
      <ul>
        {stockOptions.data.slice(0, 5).map((op: any) => (
          <li key={op.id}>
            {
              <span className="inline-flex items-center rounded-md bg-indigo-50 px-1.5 py-0.5 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
                {
                  optionsMaster.find((x) => x.optionId == op.carOptionsId)
                    ?.optionName
                }
              </span>
            }
          </li>
        ))}
        <li>more...</li>
      </ul>
    </>
  );
}
