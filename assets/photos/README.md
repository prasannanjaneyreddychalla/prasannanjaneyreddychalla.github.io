# Photos

## How to add photos

1. Convert your HEIC files to WebP or JPEG (see below)
2. Drop the converted files into this folder (`assets/photos/`)
3. Name your favourite / default photo `1.jpeg` — it always shows on first visit
4. Run the update script from the repo root:

```bash
./update-photos.sh
```

That's it. The script scans this folder and updates `manifest.json` automatically.
No code changes needed ever.

## First-visit behaviour

- **First time** someone opens the site → always shows `1.jpeg`
- **Return visits** → random pick, but `1.jpeg` still gets ~30% weight

## Converting HEIC on Linux

```bash
# Install if needed
sudo apt install libheif-examples

# Convert all HEIC → JPEG
for f in *.heic *.HEIC; do
  heif-convert "$f" "${f%.*}.jpeg"
done

# Optional: compress to WebP for smaller file sizes
sudo apt install webp
for f in *.jpeg; do
  cwebp -q 82 "$f" -o "${f%.*}.webp"
done
```

Keep photos under ~300KB after conversion — they're served directly from GitHub Pages.
