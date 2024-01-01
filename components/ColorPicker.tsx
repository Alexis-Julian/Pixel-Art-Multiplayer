import { Signal, useSignal } from "@preact/signals";
import { COLORS } from "../shared/constants.ts";
import { Color } from "../shared/types.ts";

export default function ColorPicker({ selected }: { selected: Signal<Color> }) {
  return (
    <footer class="flex gap-8">
      <div class="flex fixed bottom-0">
        {COLORS.map((color) => {
          return (
            <button
              class={`w-8 h-8 rounded full border-4 ${
                selected.value === color ? "border-white" : "border-black"
              }`}
              style={{ backgroundColor: color }}
              onClick={() => selected.value = color}
            >
            </button>
          );
        })}
      </div>
    </footer>
  );
}
