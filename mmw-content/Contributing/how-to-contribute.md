---
title: How to Contribute
aliases:
  - How to Contribute
description: How to set up Obsidian and Git to Contribute to the wiki
tags:
  - contributing
  - guide
---

In order to contribute to the wiki, you must have three things:

1. A [GitHub](https://github.com) account
2. The [Obsidian](https://obsidian.md/) app 
3. [Git](https://git-scm.com/downloads)



 \*nix users, feel free to grab the above applications from your local package manager instead.

We assume for the sake of this document that you already all three of these. We have done what we can to minimize interaction with Git and we will walk you through necessary steps to use it. We also hope that you will very much enjoy using Obsidian.
# Fork the Repository

1. Go to the [wiki repository](https://github.com/Costeer/101st-Wiki-Remade)
2. Click `Fork`, then `Create Fork`:
   ![[Pasted image 20241010000951.png]]
   
![[Pasted image 20241010001006.png]]

   Now you have your own unique copy of the entire repository which you can change however you like and even rehost. Note that over time the repository may grow to be fairly large. 
   
   NOTE: Developers may build the site locally with the following `npm` command:
   `npm i` 
   `npx quartz build --serve`
   
   You will be brought to your newly created copy of the wiki's github. Get your repo's url by clicking `Code`, then `HTTPS`, then the clipboard icon.
   
   Stash the URL somewhere safe, as you will need it later. Or, if you simply want a copy of the wiki for your personal Obsidian vault - you're done! 

![[Pasted image 20241010001113.png]]

# Get A Personal Access Token

In order to make changes to the wiki's GitHub through Obsidian, you must give it a special key that says it has permission from you to do so first.

1. Log into your Github account and open your profile. Then go to Settings. You can open your profile from any part of the GitHub site by clicking your profile picture in the upper right corner of the page:
   ![[Pasted image 20241010001125.png]]
![[Pasted image 20241010001147.png]]
2. Go to `developer settings`, then `Personal Access Tokens`, and select `Token (Classic)`: 
![[Pasted image 20241010001158.png]]
   ![[Pasted image 20241010001209.png]]
  On this final menu, select `Generate a Personal Access Token`:
![[Pasted image 20241010001225.png]]
3. On this page you name your key and set its expiration date. We recommend doing a `Custom` expiration for one year from the date you are creating the key. This is as long as GitHub will allow them to live. Then, make sure to click the checkbox next to `repo`. Finally, click `Generate Token` at the bottom of the page. Please take special note of the fact that you will not be able to see your personal access token again after creating it - leave the page open until you've configured Obsidian!
	![[Pasted image 20241010001232.png]]
      
# Set Up Obsidian

## Install Git for Obsidian

Now you just need to hook your personal access token and repository fork into Obsidian itself. 
1. Open Obsidian and click the settings gear in the bottom-left.
   ![[Pasted image 20241010001249.png]]
2. Go to `Community Plugins`, then `Browse`. Search for `Git`.
   ![[Pasted image 20241010001256.png]]
   Select the first result, hit `Install`, then `Enable`.
   ![[Pasted image 20241010001304.png]]
   
## Clone the Repository
1. Open the Command Palette by pressing `CTRL+P`
2. Type in clone, and select `Clone an existing repo`
     ![[Pasted image 20241010001337.png]]
3. Paste in your repository URL in the following format:
   `https://<PERSONAL_ACCESS_TOKEN>@github.com/<USERNAME>/<REPO>.git`
   Replace `<PERSONAL_ACCESS_TOKEN>` with your previously generated key, and your username in place of `<USERNAME>`: 

	![[Pasted image 20241010001355.png]]

   Pick a name for the folder, and leave the second box about `Clone depth` blank - simply press enter. Now the wiki is installed inside of obsidian, and you can make edits to your local copy of it. Let's start by sending over this very document!

### REQUIREMENTS:
- Due to compatibility issues with Obsidian and Quartz, only some file types can be accepted. Videos must be in webm format before publication. Any audio which is not directly relevant to the subject of the video clip must be removed as well to limit file sizes. Maintainers can help you with this. You can use something like [Simple Screen Recorder](https://github.com/lextrack/Simple-Screen-Recorder)or [OBS](https://obsproject.com/) to record your screen with or without audio.

- Submissions should be tagged with the tools used and subject covered. See existing guides for exmples. To add a tag, simply use an octothorpe `#` and the name of the tag.  feel free to make up any that are relevant.

## Send It Home
   
   Once you're done editing:
   1. Make sure the right sidebar is open
   2. Select the source control view (if it's not visible you may need to drag the sidebar a bit further out)
    ![[Pasted image 20241010001435.png]]

Your changes will be listed here - click the back arrow to revert them, or the plus sign to `Stage` them. This simply means you are preparing to send them to github. Take this opportunity make sure you recognize everything you added or changed before staging your changes. Mistakes can be made!

![[Pasted image 20241010001443.png]]
This is where your commit message will be written. This is simply meant to be an informative note regarding the changes you made. Once that's done, click the buttons above in the listed order. Do not click button `1` if you manually staged individual files as described above.

You're all done editing! The only thing left for you the creator to do is submit it for review. Go back to your fork on GitHub. You should see a message similar to the one below; click `Contribute`, then `Open Pull Request`.

![[Pasted image 20241010001457.png]]A summary of your changes will appear. If you already know what's been done, then keep it simple - Just press open pull request. 

![[Pasted image 20241010001512.png]]

We promise, this is the last page. This is your opportunity to explain your changes, what they do, and why they exist. Don't be afraid to say whatever you feel is appropriate - be elaborate, be concise, but please explain what you did somehow or another. if you wish, check `Allow edits by maintainers`, to allow the core team to make changes to your Pull Request whilst it's being reviewed.


![[Pasted image 20241010001526.png]]

Reviews may be quick or not, but, please do what you are able to communicate with the team regarding any questions or issues that may come up during review. Pull Requests that are abandoned after 30 days will be assumed to be left in the entirely hands of the team and will be handled according to their judgment.

*credit: morowind modding wiki* 
only small parts have been edited to make them apply to the 101st wiki