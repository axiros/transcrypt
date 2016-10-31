<h1><span style="color: #8bd124">Transcrypt </span>/ Redux / FRP</h1><h2>Reactive Isomorphic Web Components <br>In <span style="color: #8bd124">Python</span> Only</h2>
<br><br><br>
<h5 style="color:gray">PyMunich, 2016-10-30</h3>



<br><br><b style="color: #999; font-size: 20px">
- ``Esc``: Overview
- ``s``: Present
- ``arrow keys``: Navigate
- ``STRG-` + STRG-[1-9] to sketch, STRG-[-=] width``

</b>

# Meta


## @Speaker
- Gunther.Klessinger@**axiros**.com or [here](https://github.com/QQuick/Transcrypt)
- Disclaimers: 30 years of programming, 15 in Python *but*:
    - No computer scientist (just a theor. physicist, plagued by constantly trying to falsify common assertions)
    - No js guru, not the author of Transcrypt, just a happy convert from Riot(1).
- Heading Innovation at a small to medium (80 people worldwide) Python shop, founded by myself in 2002
- Current field of work: Mainly <img style="vertical-align: middle; padding: 3px; margin: 0px; border: 0px;" src="./img/ax-containers.png" height="30px">
- We do 85% Python, Rest C and, well, Javascript for the frontends
- Prof. service intense products for around 200 telecommunication operators
- Which expect min. 5 years of support(...)

<div style="text-align: left; font-size: 20px">
1 [RiotJS](http://riotjs.com/): Components, vDom, One Way Binding. Opinion: RiotJS/ReactJS = Python/Java
</div>

## Purpose of Talk


**Promote Transcrypt.**


This talk is primarily to advocate Web Development for

- serious / commercial / large scale
- supportable
- multi membered
- state of the art projects,
- based on most modern javascript designs and libs,

*while thinking and writing **Python** for backend **and** frontend.*

Transcrypt is ready for that and deserves far more attention**!**

![](./img/gh.png)



# Part I: Transcrypt

## Lean, Fast, Open Python to Javascript Transpiler


**God Is In The Details**: There are [quite](https://github.com/jashkenas/coffeescript/wiki/list-of-languages-that-compile-to-js) some [alternatives](http://www.infoworld.com/article/3033047/javascript/4-tools-to-convert-python-to-javascript-and-back-again.html), some [way](http://pypyjs.org/) larger and ambitious - but Transcrypt's design choices might convince you immediately:

- Fast server sided transpilation based on
- A transparent AST walker
- Into lean readable Javascript

Key Features: See [here](http://www.transcrypt.org/home).


## **Embrace**, Not <i style="font-size: 20">[Trying to]</i> *Replace* Javascript

Claim: Transcrypt enables you to think purely **Pythonic** about your browser code (while actually *using* [any](https://github.com/axiros/misc_transcrypt/blob/master/doc/kendo/src/ch4/kendo_base.py) javascript lib).

<table><tr><td style="width: 60%">
```
~/demo/ch3 $ cat datasource.py
from kendo_base import KendoComponent

class DataSource(KendoComponent):
    '''
    http://docs.telerik.com/kendo-ui/api/javascript/ui/datepicker#fields-options
    '''
    _k_cls = kendo.data.DataSource
    data = None
    transport = None
    _functions = ['read']
    def __init__(self, opts):
        od = dict(opts)
        url = od.pop('url', None)
        if url:
            od['transport'] = {'read': {'url': url, 'dataType': 'jsonp'}}
        KendoComponent.__init__(self, opts)
        self.read()

```
</td><td style="width: 300px !important; vertical-align: middle"><img height="200px" width="300px" src="https://raw.githubusercontent.com/axiros/misc_transcrypt/master/doc/kendo/c4_2.png"></td></tr></table>


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

~ Factor 3 penalty versus handcrafted js.

Deal, for all the Python expressivity / builtin wtf-avoidance available.<br>
*And direct js is always at hand, should you miss it.*

Checkout `-f` fastpath also.


## Features:

<h1>Check [this](http://sterlicht.alwaysdata.net/transcrypt.org/docs/html/)</h1>

my [decision](./space.html) after 3, 4 days of playing around...




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

<div style="font-size: 20px"><i>Tip: Do *not* try to educate Jacques about PEP-8 in Transcrypt core modules.<br>He is fluent in more computer languages than some of you have years on this planet ;-)</i></div>


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

# Part II:<br>Reactive Isomorphic Web Components

## Components

Encapsulate Functionality, Composable

<img src="./img/comp1.png" height="500px">


## FRP
Functional Reactive Programming

<table><tr style="text-align: top;"><td>
<img width="500px" style="border: 0px; padding: 30px;", src="./img/frp1.png" border="0"/>
</td><td style="vertical-align: middle;">
* **One-way state transitions**
* **Stream Processing**
* Immutable data
* Pure functions
* [Static typing]
</td></tr></table>
"Dead": 2-way binding (angular), direct DOM interaction (read and write)


## Stream Processing

Don't focus on singular events, start [thinking](https://cycle.js.org/components.html) in event streams: Mouse moves, input field entries (...)

[Demo1](http://rxmarbles.com/)
[Demo2](https://css-tricks.com/debouncing-throttling-explained-examples/)

Stream processing libs handle buffering of data and decoupling of state, in order to handle event streams just like normal objects, providing functions like filter, map, throttle, merge (...)



## Backend: Comparable [(Re)designs](https://www.youtube.com/watch?v=fU9hR3kiOK0) Everywhere

<table><tr>
<td><img src="./img/str_s.png" height="500px"></td><td style="vertical-align: middle">⭆</td>
<td><img src="./img/str_s2.png" height="500px"></td>
</tr></table>


## Redux

[Single Source](http://redux.js.org/docs/introduction/ThreePrinciples.html) of Truth for Application State.

<br>
Application wide event stream (merged component event streams, merged with data updates from the server are "reduced" into state updates of an application wide store. Whose updates are oberserved, resulting into component (view) updates, resulting in the user creating new events [endless loop]



## Isomorphic

1. [Why](https://www.lullabot.com/articles/what-is-an-isomorphic-application)
1. Key Message: "Less code, as it is shared by both the client and the server."

**Transcrypt** enables you to write components run on server and client:


```
from wax.base.redux import ReduxComponent as RC                                    
from wax.base.render import PlainStateRenderer as PSR                              

class Services(RC, PSR):                                                           
    # default store inits:                                                         
    ico        = 'faves'                                                           
    limit      = 10 # max records loaded. put to 10000 on prod!                    
    page_size  = 25                                                                
    data       = None # pointer to current data                                    
    data_id    = None # kept in the store                                          
    _app       = None # ref to app, managing redux store, streams and routes       

    def preregister(self):                                                         
        '''get_data: e.g. websocket emit on the client,                            
           direct data fetch on the server'''                                      
        self.get_data('static', 'meta_data')                                       

    def render(self):                                                              
        # never invoked on server                                                  
        console.log('in render of services')                                       
        # use widget library of choice to render updated data                      

    def get_data(self, mode, type):                                                
        self._app.server_fetch(mode, type)                                         

# -----------------------------------------------------------------------------
__pragma__ ('ifdef', 'on_server')                                                  
# -----------------------------------------------------------------------------
# imported by server App:                                                          
class Services(Services):                                                          
    @classmethod                                                                   
    def get_data(cls, mode, type):                                                 
        # direct database access                                
```


# Thank You!

## Questions
Welcome (also via [Transcrypt](https://github.com/QQuick/Transcrypt/issues) on GitHub) - but might see `.merge(daily_work_stream)` ;-)
