# Cutest Cat — make.fun entry

A grey-and-white kitten with big starry blue eyes, peeking out of a pink
woven basket with a pink plush fish beside it.

## How it works

`main.ts` (Node 22, standard library only) copies the bundled picture
`entry.png` to `$MAKEFUN_OUTPUT_DIR/entry.png` (or `/output/entry.png` when
the variable is unset). The picture is a JPEG stored under the name
`entry.png`, which the competition allows — it tells PNG and JPEG apart by
their first bytes.

The picture is 1024x1024 pixels and 183,402 bytes, within the 1 MiB cap.
The program is deterministic: every run writes the same bytes.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```
