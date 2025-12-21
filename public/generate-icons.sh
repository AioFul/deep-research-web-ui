#!/bin/bash
# Simple script to generate PWA icons using sips (macOS built-in)

# Create temp directory
mkdir -p /tmp/pwa-icons

# Generate SVG content
svg_content='<?xml version="1.0" encoding="UTF-8"?>
<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg">
  <rect width="512" height="512" fill="#8b5cf6"/>
  <text x="256" y="300" font-family="Arial, sans-serif" font-size="180" fill="white" text-anchor="middle">DR</text>
</svg>'

echo "$svg_content" > /tmp/pwa-icons/icon.svg

# Convert to different sizes using sips (macOS built-in tool)
for size in 192 512; do
  cp /tmp/pwa-icons/icon.svg /tmp/pwa-icons/icon-${size}.svg
  # Note: sips doesn't directly convert SVG to PNG with custom size
  # We'll need to use a web service or install ImageMagick
  echo "Need to convert /tmp/pwa-icons/icon-${size}.svg to PNG with ${size}x${size} dimensions"
done

echo "Icons generated in /tmp/pwa-icons/"
