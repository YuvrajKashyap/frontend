# Contributing

Contributions are welcome. Keep each build focused, self-contained, and useful outside the gallery.

## Project contract

Each folder in `projects/` should contain:

- `project.json` with a name, short description, year, and tags
- `README.md` explaining what it is and how to reuse it
- a package entry point that exports one React component
- no secrets, paid assets, or unlicensed third-party material

Register the exported component in `apps/gallery/src/lib/projects.ts`. The gallery owns presentation and navigation; the project owns everything inside its preview.

## Before opening a pull request

```bash
pnpm install
pnpm verify
```

Keep pull requests limited to one build or one clear improvement.
