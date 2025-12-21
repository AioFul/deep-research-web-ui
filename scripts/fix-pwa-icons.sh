#!/bin/bash

echo "Creating PWA icons using ffmpeg..."

# Create a temporary SVG
cat > /tmp/icon.svg << 'EOF'
<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#8b5cf6;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#7c3aed;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="512" height="512" fill="url(#grad)"/>
  <text x="256" y="340" font-family="Arial, Helvetica, sans-serif" font-size="220" fill="white" text-anchor="middle" font-weight="bold">DR</text>
</svg>
EOF

# Convert SVG to different sizes using ffmpeg
# Note: ffmpeg doesn't directly support SVG rendering well
# Let's create a simple color image and add text overlay

for size in 192 512; do
  # Create a solid color background
  ffmpeg -f lavfi -i "color=c=0x8b5cf6:s=${size}x${size}:d=1" \
    -vf "drawtext=text='DR':fontfile='/Library/Fonts/Arial.ttf':fontsize=${size}/3:fontcolor=white:x=(w-text_w)/2:y=(h-text_h)/2" \
    -frames:v 1 "/Users/yinguoqing/dev/github/deep-research/public/icon-${size}x${size}.png" \
    -y 2>&1 | grep -E "(Output|error)" || echo "Generated icon-${size}x${size}.png"

done

# Copy 512 as maskable
if [ -f /Users/yinguoqing/dev/github/deep-research/public/icon-512x512.png ]; then
  cp /Users/yinguoqing/dev/github/deep-research/public/icon-512x512.png /Users/yinguoqing/dev/github/deep-research/public/icon-512x512.maskable.png
fi

# Create apple-touch-icon (180x180)
ffmpeg -f lavfi -i "color=c=0x8b5cf6:s=180x180:d=1" \
  -vf "drawtext=text='DR':fontfile='/Library/Fonts/Arial.ttf':fontsize=60:fontcolor=white:x=(w-text_w)/2:y=(h-text_h)/2" \
  -frames:v 1 "/Users/yinguoqing/dev/github/deep-research/public/apple-touch-icon.png" \
  -y 2>&1 | grep -E "(Output|error)" || echo "Generated apple-touch-icon.png"

echo "Icons generated!"
