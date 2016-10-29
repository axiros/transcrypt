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


**God Is In The Details**: There are [quite](https://github.com/jashkenas/coffeescript/wiki/list-of-languages-that-compile-to-js) some [alternatives](http://www.infoworld.com/article/3033047/javascript/4-tools-to-convert-python-to-javascript-and-back-again.html) but Transcrypt's design choices might convince you immediately:

- Fast server sided transpilation based on
- A transparent AST walker
- Into lean readable Javascript

Key Features: See [here](http://www.transcrypt.org/home).


## **Embrace**, Not <i style="font-size: 20">[Trying to]</i> *Replace* Javascript

Claim: Transcrypt enables you to think purely **Pythonic** about your browser code (while actually using modern javascript libs).




# Is It Really?

## First Showcase

Python version of the [first](http://www.cdotson.com/2014/12/node-js-vs-python-vs-pypy-a-simple-performance-comparison-updated/) py/js perf found, removing cmd line parsing only:

<table><tr>
<td><img src="./img/pyq.png" height="500px"></td></tr><tr>
<td><img src="./img/q1.png" height="500px"></td></tr><tr>
<td><img src="./img/q2.png" height="500px"></td>
</tr></table>
