# LUMA Cosmetics

A responsive, editorial-style skincare storefront concept built with plain HTML, CSS, and JavaScript. Product illustrations are drawn entirely in CSS; the only image asset is the locally bundled, optimized hero image. No build tools or external image services are required.

## Run locally

Open `index.html` directly in a modern browser, or serve the project folder with any static server. For example:

```sh
python3 -m http.server 8000
```

Then visit `http://localhost:8000` from inside the project directory.

## GitHub Pages

1. Create a GitHub repository and add the contents of this project folder to its root (including `index.html` and `assets/`).
2. Push the default branch to GitHub.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, select the default branch and `/ (root)`, then save.
5. Wait for the Pages deployment and open the URL shown in the Pages settings.

All site paths are relative, so the project works from a repository subpath as well as a domain root.

## Demo behavior

The shopping bag count and add-to-bag confirmation are front-end demonstrations only. Newsletter submission validates the address in the browser and displays a confirmation, but does not send or store subscriber data. Search filters the products currently displayed on the page.
