#!/usr/bin/env bash
# Drop photos into assets/photos/ and run this script.
# Generates manifest.js — no server needed, works locally and on GitHub Pages.
# Supported formats: jpg, jpeg, webp, png
# 1.jpeg (if present) is always listed first — it's the default first-visit photo.

set -euo pipefail

PHOTOS_DIR="$(dirname "$0")/assets/photos"
MANIFEST_JS="$PHOTOS_DIR/manifest.js"

files=()

# 1.jpeg goes first if it exists
for name in "1.jpeg" "1.jpg" "1.webp" "1.png"; do
  if [[ -f "$PHOTOS_DIR/$name" ]]; then
    files+=("$name")
    break
  fi
done

# Everything else in sorted order
while IFS= read -r -d '' f; do
  name="$(basename "$f")"
  [[ "$name" == "manifest.js" || "$name" == "manifest.json" || "$name" == "README.md" ]] && continue
  already=false
  for existing in "${files[@]+"${files[@]}"}"; do
    [[ "$existing" == "$name" ]] && already=true && break
  done
  $already || files+=("$name")
done < <(find "$PHOTOS_DIR" -maxdepth 1 -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.webp" -o -iname "*.png" \) -print0 | sort -z)

# Build JS array
json="["
for i in "${!files[@]}"; do
  [[ $i -gt 0 ]] && json+=","
  json+="\"${files[$i]}\""
done
json+="]"

echo "window.PHOTO_MANIFEST = $json;" > "$MANIFEST_JS"

echo "✓ manifest.js updated — ${#files[@]} photo(s):"
for f in "${files[@]+"${files[@]}"}"; do
  echo "  $f"
done
