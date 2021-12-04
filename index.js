import { fromEvent, range } from "rxjs";
import { ajax } from "rxjs/ajax";
import { scan, map, mergeMap, toArray, pluck, retry } from "rxjs/operators";

range(1, 20)
  .pipe(
    mergeMap(
      (index) =>
        ajax(`http://127.0.0.1:3000/people/quarter-error/${index}`).pipe(
          pluck("response", "first_name"),
          retry(3)
        ),
      4
    ),
    toArray()
  )
  .subscribe(console.log);
