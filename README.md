# gitlab-speech-alert

A Google Chrome extension (tested on ver 65.0.3325.181) that works on GitLab's pipelines page, an android voice will notify you if a task is running and when it finishes running.

On GitLab's pipelines page, a voice will notify you if a task is running  and when it finishes running.

### Reason for building this:
- Used to work with another Git platform for pushing updates to a repo, and it would notify (audibly) you when it was done. Since I sometimes work with a lot of repos at the same time, that was /really/ helpful! I haven't seen any options for Gitlab to send me this kind of notification, so I built this thing!

### Outstanding issues:
- Does not work on the /jobs/<some number> page (directly after you click Build Frontend in the /pipelines/ page) so you have to navigate back to the /pipelines page to activate the robotic voice notifier. 
- I believe I saw somewhere that MutationObserver was going to be deprecated :( I guess after that, I'll just have to swap out the MutationObserver for a setTimeout? Feels bad, man.
- You need the tab to be open to be notified on time, because Chrome doesn't update a tab unless it's open.

### Directions:
- Clone the repo into a directory
- Go to chrome://extensions
- Turn on Developer mode (there should be a toggle on the top right)
- Click 'LOAD UNPACKED' 
- Select the directory where you cloned the repo to
- The extension should appear in your extensions list! Toggle it on
- Go to one of your pipelines in GitLab - a robotic voice should tell you if something's building, and when it's done!
