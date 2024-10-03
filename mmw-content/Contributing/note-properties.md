---
tags:
  - contributing
  - guide
aliases: 
title: Note Properties
---
## What are Note Properties?
you cant see them on the Website but Properties are a central part of managing the [[notes|Notes]] in the Wiki. They allow us to add [[tags|Tags]], [[aliases|Aliases]] and to change the notes Title without having to change the filename.

## How to use Properties in Notes
If you are using Obsidian (Highly recommended that you do) you can open the command Pallet (default binding on Linux and Windows is <kbd>ctrl</kbd>+<kbd>P</kbd>) 
and type "properties" and the option add file properties should come up.
If you click on this or select it with the arrow keys and press enter this field should be added to your note:

![[empty-properties.png]]
which is nothing other than this being added to the very top of your notes file:

```
---

---
```

to actually use Properties (the feature) now you have to select one of the properties (tags, title, cssclasses, etc...) if you do they get added to the note and you can now put in variables for that Property for example: 

![[test-properties.png]]
add the Property `title` and add the variable `TEST!`.
Now what do the Properties actually do?
### Title
the title Property changes the displayed name of the [[note|Note]] in the wiki but why would you use this? well because if you have read the [[style-guide|Style Guide]] you know that you can:
1. Never use spaces in Note titles
2. Never use Upper case letters in note titles
but we know that that would not look good on the Website so changing the displayed name of the note is a vital part to make the titles look more appealing!

### Aliases
the aliases property is used to make the note easier to find when a user is using the search function of the wiki. 
Here you can add words (or sentences) to make a note that is called something like
"Where to find Samples" pop up in the search results when someone types "Research" into the Search bar.