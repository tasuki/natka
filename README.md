# Portfolio Natki

Cześć Natka! To jest bardzo prosta strona: parę plików tekstowych.

## Szczegóły techniczne

### Jak uruchomić server?

    jekyll serve

### Jak ogarnąć obrazki?

    export SRC="$HOME/Dropbox/natka-web"
    export DST="$HOME/data/prog/natka/public/img/"

    for i in `cd "$SRC" && find . -type d`; do mkdir -p "$DST/$i"; done
    for i in `cd "$SRC" && find . -type f`; do convert "$SRC/$i" -colorspace RGB -quality 70 "$DST/$i"; done
