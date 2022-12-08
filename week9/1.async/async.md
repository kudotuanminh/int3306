# sync:

```js
document.querySelector('button.sync').onclick = function() {
	clearOutput();
	output("BEGIN sync");
	let ret = sFunction();
	output(ret);
	output("END.");
};
```

1. Hàm clearOutput() được đẩy vào Call stack thực thi rồi đẩy ra khỏi Call stack.
2. Hàm output("BEGIN sync") được đẩy vào Call stack thực thi rồi đẩy ra khỏi Call stack.<br>
    => In ra "BEGIN sync"
3. Hàm sFunction() được đẩy vào Call stack thực thi rồi đẩy ra khỏi Call stack.
4. Hàm output(ret) được đẩy vào Call stack thực thi rồi đẩy ra khỏi Call stack.<br>
    => In ra "Hello S!"
5. Hàm output("END.") được đẩy vào Call stack thực thi rồi đẩy ra khỏi Call stack.<br>
    => In ra "END."

# settimeout:

```js
document.querySelector('button.settimeout').onclick = function() {
	clearOutput();
	output("BEGIN settimeout");
	setTimeout(
		function() {
			let ret = sFunction();
			output(ret);
		  },
		0);
	output("END.");
};
```

1. Hàm clearOutput() được đẩy vào Call stack thực thi rồi đẩy ra khỏi Call stack.
2. Hàm output("BEGIN settimeout") được đẩy vào Call stack thực thi rồi đẩy ra khỏi Call stack.<br>
    => In ra "BEGIN settimeout"
3. Hàm setTimeout() được đẩy vào Call stack thực thi, tạo ra một Timer tự đếm ngược, sau khi thực thi, Callback Function() của setTimeout() được đưa vào Web API. Đến khi Timer đếm ngược hết thì Callback Function() sẽ được đẩy vào trong Macrotask queue.
4. Hàm output("END.") được đẩy vào Call stack thực thi rồi đẩy ra khỏi Call stack.<br>
    => In ra "END."
5. Hàm function() Callback của setTimeout() được Event Loop đẩy vào Call Stack.
6. Hàm sFunction() được đẩy vào Call stack thực thi rồi đẩy ra khỏi Call stack.
7. Hàm output(ret) được đẩy vào Call stack thực thi rồi đẩy ra khỏi Call stack.<br>
    => In ra "Hello S!"
8. Hàm function() Callback của setTimeout() được đẩy ra khỏi Call stack.

# promise:

```js
document.querySelector('button.promise').onclick = function() {
	clearOutput();
	output("BEGIN promise");
	aFunction1().then(function (ret) {
		output(ret);
	});
	output("END.");
};
```

1. Hàm clearOutput() được đẩy vào Call stack thực thi rồi đẩy ra khỏi Call stack.
2. Hàm output("BEGIN promise") được đẩy vào Call stack thực thi rồi đẩy ra khỏi Call stack.<br>
    => In ra "BEGIN promise"
3. Hàm promise aFunction1() được gọi và tạo ra 1 Promise trong Microtask queue rồi được đẩy ra khỏi Call stack.
4. Hàm output("END.") được đẩy vào Call stack thực thi rồi đẩy ra khỏi Call stack.<br>
    => In ra "END."
5. Promise trong microtask được đẩy vào Call stack và thực thi Callback Function().
6. Hàm output(ret) được đẩy vào Call stack thực thi rồi đẩy ra khỏi Call stack.<br>
    => In ra "Hello A1!"
7. Promise được đẩy ra khỏi Call stack.

# async

```js
document.querySelector('button.async').onclick = function() {
	clearOutput();
	output("BEGIN async");
	aFunction2().then(function (ret) {
		output(ret);
	});
	output("END.");
};
```

1. Hàm clearOutput() được đẩy vào Call stack thực thi rồi đẩy ra khỏi Call stack.
2. Hàm output("BEGIN async") được đẩy vào Call stack thực thi rồi đẩy ra khỏi Call stack.<br>
    => In ra "BEGIN async"
3. Hàm promise aFunction2() được gọi và tạo ra 1 Promise trong Microtask queue rồi được đẩy ra khỏi Call stack.
4. Hàm output("END.") được đẩy vào Call stack thực thi rồi đẩy ra khỏi Call stack.<br>
    => In ra "END."
5. Khi Call stack trống, task trong Microtask queue được đẩy vào Call stack và thực thi Callback Function().
6. Hàm output(ret) được đẩy vào Call stack thực thi rồi đẩy ra khỏi Call stack.<br>
    => In ra "Hello A2!"
7. Task được đẩy ra khỏi Call stack.

# await

```js
document.querySelector('button.await').onclick = async function() {
	clearOutput();
	output("BEGIN await");
	let ret = await aFunction1();
	output(ret);
	output("END.");
};
```

1. Hàm clearOutput() được đẩy vào Call stack thực thi rồi đẩy ra khỏi Call stack.
2. Hàm output("BEGIN await") được đẩy vào Call stack thực thi rồi đẩy ra khỏi Call stack.<br>
    => In ra "BEGIN await"
3. Hàm Await aFuntion1() được đẩy vào Microtask queue rồi được đẩy vào Call stack thực thi rồi được đẩy ra khỏi Call stack.
4. Hàm output(ret) được đẩy vào Call stack thực thi rồi đẩy ra khỏi Call stack.<br>
    => In ra "Hello A1!"
5. Hàm output("END.") được đẩy vào Call stack thực thi rồi đẩy ra khỏi Call stack.<br>
    => In ra "END."

# async vs sync

```js
document.querySelector('button.syncvsasync').onclick = function() {
	clearOutput();
	output("BEGIN sync vs async");
	aFunction1().then(function (ret) {
		output(ret);
	});
	aFunction2().then(function (ret) {
		output(ret);
	});
	let ret = sFunction(1);
	output(ret);
	output("END.");
};
```

1. Hàm clearOutput() được đẩy vào Call stack thực thi rồi đẩy ra khỏi Call stack.
2. Hàm output("BEGIN sync vs async") được đẩy vào Call stack thực thi rồi đẩy ra khỏi Call stack.<br>
    => In ra "BEGIN sync vs async"
3. Hàm promise aFunction1() được gọi và tạo ra 1 Promise trong Microtask queue rồi được đẩy ra khỏi Call stack.
4. Hàm promise aFunction2() được đẩy vào Call stack và tạo thêm 1 task trong

# waitall

```js
document.querySelector('button.waitall').onclick = function() {
    clearOutput();
    output("BEGIN waitall");
    let p1 = aFunction1();
    let p2 = aFunction2();
    Promise.all([p1, p2]).then(function (arr) {
        output(arr[0]);
        output(arr[1]);
    });
    output("END.");
};
```

# mixed

```js
document.querySelector('button.mixed').onclick = function() {
    clearOutput();
    output("BEGIN mixed");
    setTimeout(() => { output('setTimeout 1'); }, 10);
    setTimeout(() => { output('setTimeout 2'); }, 0);

    new Promise(function(fulfill, reject) { fulfill('Promise 1'); })
    .then (function(res) { output(res); return "Sub Promise 1";})
    .then (function(res) { output(res); });

    new Promise((fulfill, reject) => { fulfill('Promise 2'); })
    .then (res => {output(res); return "Sub Promise 2";})
    .then (res => {output(res);});
    output("END.");
};
```
