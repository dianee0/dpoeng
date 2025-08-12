# Deploying Your Contact Form to Netlify

## Steps to Deploy:

1. **Push your code to GitHub** (if not already done)
2. **Connect to Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Sign up/login with your GitHub account
   - Click "New site from Git"
   - Choose your repository
   - Set build command: `npm run build`
   - Set publish directory: `dist`
   - Click "Deploy site"

## Form Configuration:

Your contact form is now properly configured with:

- ✅ Netlify form detection
- ✅ Honeypot spam protection
- ✅ Form submission handling
- ✅ Success/error messages
- ✅ Proper image paths

## After Deployment:

1. **Test the form** by submitting a message
2. **Check Netlify dashboard** → Forms tab to see submissions
3. **Set up notifications** in Netlify dashboard to receive emails when forms are submitted

## Important Notes:

- The form will work automatically once deployed to Netlify
- You'll receive form submissions in your Netlify dashboard
- You can set up email notifications for new submissions
- The form includes spam protection with honeypot fields

## Troubleshooting:

### Form Issues:

If forms aren't working:

1. Check that `netlify.toml` is in your root directory
2. Ensure `public/form.html` exists
3. Verify the form has `data-netlify="true"`
4. Check Netlify build logs for any errors

### Build Issues:

If you get Vite/ES Module errors:

1. **Clean install**: Delete `node_modules` and `package-lock.json`, then run `npm install`
2. **Node version**: Ensure you're using Node.js 18+ (Netlify uses Node 20)
3. **Vite config**: Make sure `vite.config.js` uses ES module syntax (`import` not `require`)
4. **Dependencies**: Check for version conflicts in `package.json`

### Common Error Solutions:

- **ES Module errors**: Clean install dependencies
- **Build failures**: Check Node.js version compatibility
- **404 errors**: Ensure `netlify.toml` has proper redirects for SPAs
