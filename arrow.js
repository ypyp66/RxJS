import { filter, fromEvent, map, pluck } from "rxjs";

fromEvent(document, "keydown")
  .pipe(
    pluck("key"),
    filter((k) => k.includes("Arrow")),
    map((k) => {
      return {
        ArrowDown: 1,
        ArrowUp: -1,
        ArrowLeft: -1,
        ArrowRight: 1,
      }[k];
    })
  )
  .subscribe(console.log);
