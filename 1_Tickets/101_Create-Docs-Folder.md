We need to:

**Step 1:**
--------------------------------------------------------------------------------
1. Create the `docs` folder at the root (use lowercase; convention).
2. Move `0_resources/how_to_use_counterfoil.md` to `docs/how-to-use.md` (or keep the name; kebab-case is common for URLs).
3. Add `docs` to the `files` array in `package.json` so it is included when the package is published.
4. Update `README.md` to mention the Docs folder as a reference guide. 
5. Verify: run `npm pack --dry-run` and confirm the `docs` folder appears in the tarball.
6. Add the changes to the release notes document. 



**Step 2: Publish a new version:**
--------------------------------------------------------------------------------
1. Build: `npm run build:lib`
2. Bump version in `package.json` (patch/minor/major per semver)
3. Commit changes
4. `npm login` (if needed)
5. `npm publish`
6. Verify at https://www.npmjs.com/package/counterfoil-starter-kit or `npm view counterfoil-starter-kit version`
