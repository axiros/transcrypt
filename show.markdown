<h1><span style="color: #8bd124">Transcrypt </span>/ Redux / FRP</h1><h2>Reactive Isomorphic Web Components <br>In <span style="color: #8bd124">Python</span> Only</h2>
<br><br><br>
<h5 style="color:gray">PyMunich, 2016-10-30</h3>



<br><br><b style="color: #999; font-size: 20px">
- ``Esc``: Overview
- ``s``: Present
- ``STRG-` + STRG-[1-9] to sketch, STRG-[-=] width``


Themes:
[white](?theme=white)
[black](?theme=black)
[solarized](?theme=solarized)
</b>

# Meta


## @Speaker
- Gunther Klessinger, gk@axiros.com
- Disclaimer: 30 years of programming, 15 in Python *but*:
    - No(!) computer scientist (just a Physicist)
    - No(!) js guru
- Heading Innovation at a small to medium (80 people worldwide) Python shop
- Founded by myself in 2002
- We do 85% Python, Rest C and, well, Javascript for the frontends
- Prof. service intense products for around 200 telecommunication operators
- Which expect min. 5 years of support(...)


## Purpose of Talk


**Promote Transcrypt.**


This talk is primarily to motivate a new way of web development, including

- serious / commercial / large scale
- supportable
- multi membered
- state of the art projects,
- including newest javascript designs and libs.

While extensions are welcome, Transcrypt is ready for that and deserves far more attention**!**

![](./img/gh.png)

<div style="font-size: 25px;"><i>I'm NOT the author of Transcrypt, just a convinced user, lacking time to contribute much.</i></div>


# Transcrypt

## Lean, Fast, Open Python to Javascript Transpiler


**God Is In The Details**: There are [quite](https://github.com/jashkenas/coffeescript/wiki/list-of-languages-that-compile-to-js) some [alternatives](http://www.infoworld.com/article/3033047/javascript/4-tools-to-convert-python-to-javascript-and-back-again.html), some [way](http://pypyjs.org/) larger and ambitious - but Transcrypt's design choices might convince you immediately:

- Fast server sided transpilation based on
- A transparent AST walker
- Into lean readable Javascript

Key Features: See [here](http://www.transcrypt.org/home).


## **Embrace**, Not <i style="font-size: 20">[Trying to]</i> *Replace* Javascript

Claim: Transcrypt enables you to think purely **Pythonic** about your browser code (while actually using modern javascript libs).




# Is It Really?

## First Showcase

Python version of the [first](http://www.cdotson.com/2014/12/node-js-vs-python-vs-pypy-a-simple-performance-comparison-updated/) py/js perf found, removing cmd line parsing [only](https://github.com/axiros/transcrypt/blob/master/src/demo_1_queens/solver.py):

<table><tr>
<td><img src="./img/pyq.png" height="500px"></td>
<td><img src="./img/q1.png" height="500px"></td></tr>
<tr><td style="vertical-align: top">manual js:<br><br></td>
<td><img src="./img/q2.png" height="500px"></td>
</tr></table>

- Python number simple crunching algo, unmodified in source(**!**), ran in CPython and Browser.
- Same results, performance 10 times [better](http://stackoverflow.com/a/28000307/4583360) in browser.
- Building done by CPython, no js on server needed.
-  ~ Factor 5 penalty versus handcrafted js: Deal, for all the Python goodies available (and direct js is always at hand, should you miss it)

## Generated Javascript

![](./img/q3.png)

Similarities purely accidental.
**NOT** ;-)


## [Megabytes](http://pypyjs.org/) of Core Libs Shipped to the Client?

```
~/reveal/transcrypt/src/demo_1_queens/__javascript__ $ ls -lth solver*
26K Oct 30 01:00 solver.min.js
70K Oct 30 01:00 solver.js
```

That is all.

## API Stability

Imho the most important point for professional / commercial applicability:

Out of [these](https://github.com/jashkenas/coffeescript/wiki/list-of-languages-that-compile-to-js) it is the only (applicable) one where bad surprises after updates are excluded by design: [This](https://docs.python.org/3/c-api/index.html) is the binding authority.
<div style="font-size: 20px"><i>and there is reason to believe they learned the <a href="https://felipec.wordpress.com/2013/10/07/the-linux-way/">lesson</a> to never ever do break APIs again</i></div>

⭆ An invest in writing library modules in Transcrypt is as future proof as an invest in Python modules on the server side.

## Not Convinced? The Transcrypt Testsuite

These are run in CPython, then in the browser.<br> `autoTester.check(...)` asserts 100% identical results.

![](./img/autot.png)
