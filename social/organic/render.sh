#!/bin/bash
# Render each organic post to 1080×1350 PNGs in ../export/organic.
# A file with N stacked .slide sections becomes name-1.png … name-N.png.
cd "$(dirname "$0")"
CH="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
OUT=../export/organic; mkdir -p "$OUT"
for f in ${@:-*.html}; do
  name="${f%.html}"; n=$(grep -c '<section class="slide' "$f")
  "$CH" --headless=new --disable-gpu --hide-scrollbars --force-device-scale-factor=1 \
    --window-size=1080,$((1350*n)) --virtual-time-budget=4000 \
    --screenshot="$PWD/$OUT/$name-all.png" "file://$PWD/$f" 2>/dev/null
  node -e '
    const sharp=require(process.argv[1]); const [src,base,n]=process.argv.slice(2);
    (async()=>{ for(let i=0;i<+n;i++){ const out = +n===1 ? base+".png" : base+"-"+(i+1)+".png";
      await sharp(src).extract({left:0,top:i*1350,width:1080,height:1350}).toFile(out); } require("fs").unlinkSync(src); })()' \
    "/Users/Keykey3137/mowj music academy/node_modules/sharp" "$OUT/$name-all.png" "$OUT/$name" "$n"
  echo "$name: $n slide(s)"
done
