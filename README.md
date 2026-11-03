# deferseg

Tile-scheduled neural passes for real-time compositing.

Project site for *Efficient Image Segmentation on Smartphones via Attention-Guided Distillation and Block-Sparse Decoding*.

The repository root is the built static site (`index.html`, `assets/`, `images/`). It uses relative paths, so it works from any subpath (GitHub Pages, static mirrors).

The site source is in `source/`:

```bash
cd source
npm ci
npm run dev      # local dev server
npm run build    # rebuilds the site into the repository root
```

Commit the rebuilt `index.html` and `assets/` after changing the source.
