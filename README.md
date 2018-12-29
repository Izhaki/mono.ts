# Oh Hello!

My name is `mono.ts`. I'm a minimal example of a typescript mono-repo.

# I'm Different

Unlike many similar examples I can do the following, **before you build anything**:

## VSCode Package Linking

So if you click on `@geo/point` (`/packages/line/src/index.ts`):

```typescript
import { Point, getDistance } from '@geo/point';
```

VScode will take you to `/packages/point/src/index.ts`

## Run Tests

`/packages/line/package.json`:

`"test": "mocha --require ts-node/register --require tsconfig-paths/register test/*.ts"`


# The Stuff I'm Made Of

- Typescript 3
- Typescript's [Project References](https://www.typescriptlang.org/docs/handbook/project-references.html)
- Yarn Workspaces
- Mocha (with ts-node/register)

# How I work?

There are basically two parallel typescript configuration hierarchies.

## Pre-build

This tree is using aliases (or *paths* in typescript world). This allows VSCode to reference the correct files, and tests to run.

- `/packages/tsconfig.base.json` (common configuration for both pre-build and build configurations)
    - `/packages/tsconfig.json`
        - `/packages/line/tsconfig.json`

## Build

This tree uses typescript's project reference for optimised builds.

- `/packages/tsconfig.base.json`
    - `/packages/tsconfig.build.json` 
        - `/packages/point/tsconfig.build.json`
        - `/packages/line/tsconfig.build.json`

Note that to build the packages you run (`/package.json`):

`"build": "tsc --build packages/tsconfig.build.json"`

This is allegedly better than letting `yarn` or `lerna` build the packages in turn based on the dependency tree.

