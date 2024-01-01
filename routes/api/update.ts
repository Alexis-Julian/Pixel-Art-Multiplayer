import { type Handlers } from "https://deno.land/x/fresh@1.6.1/server.ts";
import { COLORS, HEIGHT, WIDTH } from "../../shared/constants.ts";
import { updateGrid } from "../../shared/db.ts";
export const handler: Handlers = {
  async POST(request) {
    const { index, color } = await request.json();

    if (typeof index !== "number") {
      return Response.json({ error: "idnex must be a number" }, {
        status: 400,
      });
    }

    if (index < 0 || index >= WIDTH * HEIGHT) {
      return Response.json({ error: "Index out of bounds" }, { status: 400 });
    }

    if (!COLORS.includes(color)) {
      return Response.json({ error: "invalid color" }, { status: 400 });
    }

    const versionstamp = await updateGrid(index, color);

    return Response.json({ versionstamp });
  },
};
