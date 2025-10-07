import type {TodoStatsProps} from "../../types.ts";

const TodoStats = ({total, active, completed}: TodoStatsProps) => {

  return (
    <>
      <div className="flex justify-between border-t pt-2 mt-4 text-cf-gray">
        <span>Total: {total}</span>
        <span>Active: {active}</span>
        <span>Completed: {completed}</span>
      </div>
    </>
  )
}

export default TodoStats;