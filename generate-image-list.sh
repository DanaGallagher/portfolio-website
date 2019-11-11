FILE="./src/image-paths.js";

write_images() {
    # If the directory is empty, just return
    DIR="./public/img/$2";
    EXPORTED_COUNT=0;

    echo "Generating array for images in $DIR...";

    echo "export const $1 = [" >> $FILE;
    JSON_FMT='  {\n    src:"%s",\n    width:%s,\n    height:%s\n  },\n'
    if [ -z "$(ls -A $DIR)" ]; then
        echo "WARN: $DIR is empty. Generating empty array.";
    else
        for d in ./public/img/$2/*; do
            WIDTH=$(identify -format "%[fx:w]" "$d");
            HEIGHT=$(identify -format "%[fx:h]" "$d");
            printf "$JSON_FMT" $(basename "$d") $WIDTH $HEIGHT >> $FILE;
            EXPORTED_COUNT=$((EXPORTED_COUNT + 1))
        done
        printf "Exported $EXPORTED_COUNT images. \n";
    fi
    echo "];" >> $FILE;

    printf "Done.\n\n";
}

rm $FILE;
write_images "CALLIGRAPHY_IMAGES" "calligraphy";
write_images "ARTWORK_IMAGES" "artwork";