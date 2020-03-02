#!/bin/bash

SRC="$1"
DST="$2/public/img"
TMB="$2/public/thumb"

# recreate dirs
for i in `cd "$SRC" && find . -type d`; do
  mkdir -p "$DST/$i"
  mkdir -p "$TMB/$i"
done

# convert images
for i in `cd "$SRC" && find . -type f`; do
  convert "$SRC/$i" -colorspace RGB -resize 2000x2000\> -quality 70 "$DST/$i"
done

# convert thumbnails
for i in `cd "$SRC" && find . -type f`; do
  convert "$SRC/$i" -colorspace RGB -resize 400x400\> -quality 70 "$TMB/$i"
done

# for i in `cd "$SRC" && find . -type f`; do THUMB=`echo "$i" | sed 's:\(.*\)\.\(.*\):\1_thumb.\2:'`; ; done
