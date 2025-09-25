# Universal Roadblock

## Instructions and information

1. Current Date & File Naming

- The component gets today’s date using:

```
const today = new Date();
const day = today.getDate();
const month = monthNames[today.getMonth()];
```

2. Timers

- Force Close Timer (`timeLeft`) → 20s
  After 20 seconds, the roadblock automatically closes (whether user interacts or not).

- Display Close Button Timer (`displayTimeLeft`) → 10s
  The close button (the `X`) is initially hidden and only becomes clickable after 10 seconds. Until then, it shows a countdown number which is only clickable after 10 seconds.

3. Image Loading & Error Handling

- The `<img>` tag attempts to load the image based on today’s day and month folder.
- If the image is missing, the onError handler tries:
  1. First fallback → `/roadblock/default.jpg`
  2. If even the default fails → calls `handleImageError()` which closes the popup.

## Where are code fetched from

Code points to:

```
src={`/roadblock/${month}/${day}.jpg`}
```
