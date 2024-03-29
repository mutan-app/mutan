import { React } from "react";

export default function ({ task }) {
  return (
    <div className="my-5 rounded-3xl bg-gradient-to-br from-bright_accent to-accent p-6">
      <div className="flex justify-center text-lg font-bold">{task.name}</div>

      <div className="py-3">
        {task.training_instances.map((training_instance) => (
          <div className="text-sm">{training_instance.name}</div>
        ))}
      </div>
    </div>
  );
}
