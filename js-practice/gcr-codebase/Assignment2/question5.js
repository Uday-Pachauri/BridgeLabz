
let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = true;

let isSecure = isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside;

if (isSecure && !(isAlarmOn === false || isDoorLocked === false || isWindowClosed === false || isOwnerInside === false)) {
    console.log("Secure");
} else {
    console.log("Unsafe");
}
