# Kinetic Type

A responsive typographic field that bends toward the pointer. Built with React and CSS, with no animation library or external assets.

## Reuse it

Copy this folder into your project, import `KineticType`, and render it inside a container with an explicit height.

```tsx
import { KineticType } from "./kinetic-type";

export default function Demo() {
  return <KineticType />;
}
```

The component fills its parent. Pass `compact` when placing it inside a smaller preview.

MIT licensed as part of the frontend archive.
