#!/usr/bin/env python
print '''we require an index.html.tmpl next to us in this folder, into which we put the content 
of pandoc generated raw show.html, then write show.html with the result.''' 

from time import sleep
import os

if __name__ == '__main__':
    oldstat = 0
    print 'looping, checking changes of show.markdown'
    while True:
        stat = os.stat('./show.markdown')
        if stat == oldstat:
            sleep(1)
            continue
        oldstat = stat
        os.system('pandoc show.markdown -o show.html -s -V "theme:black" -t revealjs')
        t = open('./index.html.tmpl').read()
        with open('./show.html') as fd:
            s = fd.read()
        title = s.split('<title>', 1)[1].split('</title')[0]
        body = s.split('<body>', 1)[1].split('<script ')[0]
        t = t.replace('_TITLE_', title).replace('_CONTENT_', body)
        open('./index.html', 'w').write(t)
        os.system('./safari_reload.sh')
        os.system('hg addremove * && hg commit -m "`date`"  &')  


