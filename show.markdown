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

Taking the python version of the first py/js perf googled, removing cmd line parsing only:

```python
13..DE:~/demos/q# python solver.py
N-Queens Found 2680 Solutions in 2.93557906151s
13..DE:~/demos/q# python3 solver.py
N-Queens Found 2680 Solutions in 3.415844440460205s
# Then13..DE:~/demos/q# t solver.py
Transcrypt (TM) Python to JavaScript Small Sane Subset Saving result in: /root/demos/q/__javascript__/solver.js
```
this
```js
13..DE:~/demos/q# cat index.html
<html>
    <script   src="./__javascript__/solver.js"></script>
    <script   src="./__javascript__/orig.js"></script>
<body>
check console
</body>

```
open index.html in browser:

<table><tr><td><img src="./img/q1.png" height="500px"></td><td><img src="./img/q2.png" height="500px"></td></tr></table>










## ![](img/faster.png)

## ![](img/amaz.png)

## ![](img/etsy.png)


##

## DevOps

<h1> <a href="space.html">Your Management Wants It</a></h1>
<img src="./img/devops.png" style="border: 0px; width: 600px; background: none"/>

## How To Get There:

Simple. Checking the [usual](http://www.slideshare.net/fabrice.bernhard/devops-wonder) guidelines given...

## 1. Solve Some Minor Communication Problems
![](img/stall.png)

## 2. Resolve a Silo or Two

![](img/silos.png)


## 3. Implement a Few Simple Processes..

![](img/gardner.png)


## 4. ...And Address Some Related Security Problems

![](img/unicorn.png)


## And Further Evolution is<a href="javascript: swap_evol()">...</a>

<img onclick="swap_evol();" src="img/ev1.png" class="evol1"></img>
