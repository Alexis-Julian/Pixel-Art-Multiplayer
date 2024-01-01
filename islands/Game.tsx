import { COLORS, PIXEL_SIZE, WIDTH } from "../shared/constants.ts";
import ColorPicker from "../components/ColorPicker.tsx";
import { Color, Grid as GridType } from "../shared/types.ts";
import { useSignal } from "@preact/signals";
import { Tiles } from "../components/Tiles.tsx";

export function Game({ initialTiles }: { initialTiles: Color[] }) {
  const selected = useSignal<Color>(COLORS[0]);
  const grid = useSignal<Color[]>(initialTiles);
  return (
    <>
      <Tiles grid={grid} selectedColor={selected.value} />
      <ColorPicker selected={selected} />
    </>
  );
}
