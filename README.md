# Frontend

A growing, open-source collection of interfaces, interactions, and frontend experiments by [Yuvraj Kashyap](https://github.com/YuvrajKashyap).

**[Browse the live archive ↗](https://gallery-yuvraj-kashyaps-projects.vercel.app)**

Browse the live archive, open any build, and take whatever is useful. Every project is kept in its own folder so it can be understood, copied, and changed without pulling apart the gallery.

## Run it locally

```bash
pnpm install
pnpm dev
```

The gallery runs at `http://localhost:3000`.

## The collection

All builds live directly in [`projects`](./projects). There are no artificial categories. A project only needs its own code, a `project.json` metadata file, and an export that the gallery can render.

```text
projects/
  kinetic-type/
    src/
    project.json
    package.json
    README.md
```

## Add a build

1. Copy an existing project folder or add a new workspace package inside `projects/`.
2. Add its details to `project.json`.
3. Register its component in `apps/gallery/src/lib/projects.ts`.
4. Run `pnpm verify`.

See [CONTRIBUTING.md](./CONTRIBUTING.md) for the small project contract.

## Reuse

Code authored in this repository is available under the [MIT License](./LICENSE). You can use it in personal and commercial work, modify it, and redistribute it. Keep the included copyright and license notice.

Third-party packages, trademarks, and referenced products remain subject to their own terms. Any project with additional requirements will say so in its README.
