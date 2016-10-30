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


# Part I: Transcrypt

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
<td><img src="./img/qpy.png" height="500px"></td>
<td><img src="./img/q1.png" height="500px"></td></tr>
</table>

- C-Python simple number crunching algo, runs unmodified(**!**) in Browser, with
- Same results, performance nearly 10 times [better](http://stackoverflow.com/a/28000307/4583360)
- Instant transpilation, done by CPython, no js on server needed.

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
Any `import mylib` compiled into on demand.



## Performance

<img src="./img/q1.png" height="200px">
<img src="./img/q2.png" height="200px">

~ Factor 5 penalty versus handcrafted js.

Deal, for all the Python expressivity / builtin wtf-avoidance available.<br>
*And direct js is always at hand, should you miss it.*


## Features

<h1>Check [this](http://sterlicht.alwaysdata.net/transcrypt.org/docs/html/)</h1>


## **API Stability**

Imho the most important point for professional / commercial applicability:

Out of [these](https://github.com/jashkenas/coffeescript/wiki/list-of-languages-that-compile-to-js) it is the only (applicable) one where bad surprises after updates are excluded by design: [This](https://docs.python.org/3/c-api/index.html) is the binding authority.
<div style="font-size: 20px"><i>and there is reason to believe they learned the <a href="https://felipec.wordpress.com/2013/10/07/the-linux-way/">lesson</a> to never ever do break APIs again</i></div>

⭆ An invest in writing library modules in Transcrypt is as future proof as an invest in Python modules on the server side.

## Not Convinced? The Transcrypt Testsuite

These are run in CPython, then in the browser.<br> `autoTester.check(...)` asserts 100% identical results.

![](./img/autot.png)


## Still not Convinced?

There is

```
foo = [i for i in range(10) if i in mydict]
__pragma__('js', '{}', '''
    <any native javascript code doing sth with `foo`
    generating new local assignments>''')
<continuing in python>
```
within any local namespace.
<br>
Again: Assigning in python, operation in js and vice versa:

All fluent and w/o problems.

**Handy for starters but after a while you don't need it anymore, realizing that Transcrypt can do it *all*.**

# Limitations

## Python: A Small Number of Performance Tradeoffs

Mainly:

- `[a]` not working when a is negative (overloading any array op deemed too expensiv). `[a:-a]` working fine.
- `def foo(**kw)` kwargs off by default, too bloated. Can be enabled via CLI switch or local "pragma". Tip: pass dicts and you'll stay out of trouble.
- exec, eval: Should be clear, we are not shoehorning a Python runtime into the browser...



## Ecosystem

Transcrypt is about Python, the way of thinking and expressing ideas.

Transcrypt is *not* about Python, the ecosystem. (At last currently, author focusses 100% on supporting all the Python mechanics, not the libs).

The ecosystem at hand is [here](https://npmsearch.com/?q=reactive) - not pip.

And this is a **perfect match**: Python's code structuring and derivation / multi inheritance possibilities ((local) classes, metaclasses, decorators, inline functions(...)) and its well designed effectivity in mangling datastructures combined with all the workhorses for (v)DOM manipulation, templates, events (...) of the js world.

**Producing Javascript - while writing and thinking Python.**


## [Author](http://pythonpodcast.com/jacques-de-hooge-transcrypt.html)'s Vision

<a href="http://pythonpodcast.com/jacques-de-hooge-transcrypt.html"><img src="./img/jac.png"></a>

<div style="font-size: 20px"><i>Tip: Do *not* try to educate Jacques about PEP-8 in Transcrypt core modules.<br>He is fluent in more computer languages like some of you have years on this planet ;-)</i></div>


##
<div style='position: absolute; top: 0px; overflow: auto;  width:100%;height:1200px;'>
In the first place I think it is important to highlight the **overall design goal** of Transcrypt, which is:

"having a Py to JS compiler that produces code that can compete with **native** JS code with respect to **speed**, **compactness** and **interoperability** with any JS library, so is seriously usable for the **production of large web applications**"

As a consequence of this, **some features** of Python are **off limits**, most notable "eval" and "exec", which would imply slow, bulky in-browser compilation. Also a number of dynamic mechanisms have been simplified to achieve more speed (such as the descriptor mechanism).

Meanwhile features like **multiple inheritance** and **operator overloading** were considered important enough to have them in, but in an efficient way, operator overloading e.g. being **locally switchable**.

**Sourcemaps** and **highly readable** JS targets facilitate easy **debugging**. Native JS code can be included anywhere, but rarely needs to, as things like for-loops, i++ etc. are optimized.

Secondly the design decision to favor unimpeded access to JS libs over the use of Py libs deserves some explanation

The web developers community has produced a large number of high quality libraries. For any serious web development tool, **unimpeded use of these libraries** is an absolute necessity.

----

This is not to say that porting CPython libs wouldn't be useful! Having a Python style regex / re library would be great, as would be having a relevant part of sys available. Libs like e.g. libs math , random and time are already there, as is the humble turtle module. Message: **If you want to port a CPython lib to Transcrypt: this is highly welcomed.** Please include an autotest for it as well.

Keep your libraries lean and fast, using underlying JS functionality as much as possible. If some features have to be left out to achieve this it's ok. Please document which features are present by including working code fragments using them in your autotest, which will at the same time be usable as documentation.

For ports of libraries that are part of the CPython distro: If an autotest with good coverage is included and it runs correctly and efficiently on Windows and Linux / OsX, inclusion in the Transcrypt distribution is likely. To make this possible your lib should be contributed under the **Apache 2 license**. You can name it exactly the same as its CPython counterpart, since it will be reached via a different, preferred search path.

For ports of libraries that are available on PyPi separately: Give it a unique name (not the same as the corresponding CPython lib) that somehow lays the connection between the original library and Transcrypt (like e.g. is the case with Numscrypt) and make it pip-installable from PyPi, having at least Transcrypt as a keyword to make it findable.

</div>


# Part II: Reactive Isomorphic Components
