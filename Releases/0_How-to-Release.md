



### **Check the number**
npm publishes whatever version is in `package.json`

- Check the latest published version on npm.
- Compare it to the local package.json version.
- Set package.json to the next intended semver version before publishing.

Semver meaning:
- 1.0.1 = patch, for small fixes/docs/non-breaking tweaks
- 1.1.0 = minor, for new backward-compatible features
- 2.0.0 = major, for breaking changes


### **How to release**
1. Decide the version number.
   - If this package has never been published before, keep `1.0.0`.
   - If `1.0.0` is already published and this is a small non-breaking update, change it to `1.0.1`.
   - Use `1.1.0` for a new backward-compatible feature.
   - Use `2.0.0` for a breaking change.

2. Update the version in `package.json`.

3. Build the package:
   ```bash
   npm run build:lib
   ```

4. Verify what will be published:
   ```bash
   npm pack --dry-run
   ```
   Make sure the expected files are included, especially `dist/`, `README.md`, and `docs/`.

5. Review the release notes in `Releases/` and confirm the changes match what you are publishing.

6. Commit the release changes if needed.
   ```bash
   git add .
   git commit -m "Prepare release vX.Y.Z"
   git push origin <branch-name>
   ```
   Replace `X.Y.Z` with the actual version number and `<branch-name>` with your current branch.

7. Make sure you are logged into npm:
   ```bash
   npm login
   ```

8. Publish the package:
   ```bash
   npm publish
   ```

9.  Verify the release:
   ```bash
   npm view counterfoil-starter-kit version
   ```
   Confirm npm shows the version you just published.