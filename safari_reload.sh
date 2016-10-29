#!/usr/bin/env bash

osascript -e "
tell application \"Safari\"
	set docUrl to URL of document 1
	set URL of document 1 to docUrl
end tell
"

