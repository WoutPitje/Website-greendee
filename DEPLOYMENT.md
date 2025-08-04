# GreenDee Website Deployment Guide

## Building for Production

1. **Generate the static website:**
   ```bash
   npm run generate
   ```
   
   This will create a `.output/public` directory with all static files.

2. **The generated files will be in:**
   ```
   .output/public/
   ```

## Uploading to Your Web Host

1. **Connect to your web host** using:
   - FTP client (like FileZilla)
   - File manager in your hosting control panel
   - Or your preferred method

2. **Upload all files** from `.output/public/` to your web host's root directory (usually `public_html` or `www`)

3. **Important files to check:**
   - `.htaccess` - Already included for Apache servers
   - `index.html` - Main entry point
   - `_nuxt/` directory - Contains all JavaScript and CSS files
   - All image files in the root

## Verify Deployment

After uploading, check:
- ✅ Homepage loads at https://greendee.nl
- ✅ Navigation scrolls smoothly to sections
- ✅ All images display correctly
- ✅ Contact links work (phone, email, LinkedIn)

## Troubleshooting

If the site doesn't work:
1. Check if your host supports `.htaccess` files
2. Ensure all files were uploaded (especially the `_nuxt` directory)
3. Clear browser cache and try again
4. Check if HTTPS is properly configured on your host

## Updating the Website

To make changes:
1. Edit the source files locally
2. Run `npm run generate` again
3. Upload the new files from `.output/public/`
4. Clear browser cache to see changes