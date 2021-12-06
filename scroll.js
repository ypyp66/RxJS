import { fromEvent, map, merge, throttle, throttleTime } from "rxjs";

export default merge(
  fromEvent(document, "mousewheel"),
  fromEvent(document, "wheel")
)
  .pipe(
    throttleTime(1000), //주어진 시간에 입력된 이벤트 중 하나만 동작
    map((s) => (s.Y > 0 ? 1 : -1))
  )
  .subscribe(console.log);
