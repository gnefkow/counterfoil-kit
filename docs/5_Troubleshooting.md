## Troubleshooting

### "Module not found" error

**Problem:** You see an error like `Cannot find module 'counterfoil-starter-kit'`

**Solution:**
1. Make sure you ran `npm install counterfoil-starter-kit` (or your local path)
2. Check that you're in your project folder (`my-app`)
3. Try deleting `node_modules` and running `npm install` again:
   ```bash
   rm -rf node_modules
   npm install
   ```

### Components look unstyled

**Problem:** Components render but don't have any styling

**Solution:**
1. Make sure you imported the styles: `@import 'counterfoil-starter-kit/styles/semanticTokens.css';`
2. Check that your CSS file is imported in `main.tsx`
3. Make sure Tailwind is configured correctly (step 3)
4. Restart your dev server (`Ctrl + C` then `npm run dev`)

### Tailwind classes don't work

**Problem:** Classes like `bg-bg-primary` don't work

**Solution:**
1. Make sure you added the Tailwind preset in `tailwind.config.js` (step 3.2)
2. Make sure your `content` array includes Counterfoil Kit's dist folder
3. Restart your dev server

### Colors don't change when I override them

**Problem:** You added custom colors but nothing changed

**Solution:**
1. Make sure your theme file is imported **after** the Counterfoil Kit styles
2. Check that you're using the correct CSS variable names (they start with `--`)
3. Make sure you're overriding them in `:root`

## Next Steps

- Explore all the components in the Counterfoil Kit (see the export list above)
- Read the component source code to see how they work
- Experiment with different color themes
- Read [Counterfoil Design Philosophy](Counterfoil-Design-Philosophy.md) to understand the design principles

## Getting Help

If you're stuck:
1. Check the browser console for errors (F12 → Console tab)
2. Check your terminal for errors
3. Make sure all files are saved
4. Try restarting your dev server