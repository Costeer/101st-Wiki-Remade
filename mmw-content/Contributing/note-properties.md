---
tags:
  - contributing
  - guide
aliases: 
title: Note Properties
---
Here’s the refined and spellchecked version of your text:

---

## What are Note Properties?

You can't see them on the website, but Properties are a central part of managing the [[notes|notes]] in the Wiki. They allow us to add [[tags|Tags]], [[aliases|Aliases]], and change the note's Title without having to modify the filename.

---

## How to Use Properties in Notes

If you are using Obsidian (highly recommended), you can open the Command Palette (default binding on Linux and Windows is <kbd>ctrl</kbd>+<kbd>P</kbd>) and type "properties." The option **Add file properties** should come up. 

If you click on this or select it with the arrow keys and press enter, this field should be added to your note:

![[empty-properties.png]]

This is essentially just this being added to the very top of your notes file:

```
---

---
```

To actually use Properties, you now have to select one of the properties (tags, title, cssclasses, etc...). Once selected, they get added to the note, and you can assign variables to that Property. For example:

![[test-properties.png]]

Add the Property `title` and assign the variable `TEST!`. Now, what do the Properties actually do?

---

### Title

The **title** Property changes the displayed name of the [[notes|Note]] in the Wiki. Why use this? Well, if you've read the [[style-guide|Style Guide]], you'll know:

1. Never use spaces in Note titles.
2. Never use uppercase letters in Note titles.

But we know that these rules won't look good on the website. So, changing the displayed name of the note is crucial for making the titles more appealing!

---

### Aliases

The **aliases** Property is used to make the note easier to find when a user searches the Wiki. You can add words or phrases to help a note—like "Where to find Samples"—appear in search results when someone types "Research" in the search bar.

---

### Tags

The **tags** Property is similar to adding something like `#deployments` to a note. It functions as a way to link notes together for users who want to dive deeper into a topic. For example, every note related to medals gets the `#medals` tag, making them easier to find for people researching the medal system.

---