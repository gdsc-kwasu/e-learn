## Contributing.

- Before contributing, ensure you create a branch for a particular feature you'd want to work on, so we wouldn't be having issues of merge conflicts
- You can create a branch this way;

```git
        git checkout -b [branch-name]
```

- Make your changes, add them and make your commits

  ```
  git commit -m "your message"
  ```

  Write good commit messages as this is important to know the essence of your commit

- When you're done with your fixes push to that current branch

```git
        git push origin [name-of-branch]
```
- The command above pushes your your commits to the current branch you're in.
- Then make your Pull Request to the dev branch


# BEFORE YOU PUSH TO YOUR FORKED REPOSITORY. PLEASE, REMEMBER TO PULL FROM THE UPSTREAM REPOSITORY.

The command below would get you up and running.

```git 
git remote add upstream https://github.com/kwasu-ng/e-learn.git
```
The you pull from the upstream

```git
git pull usptream master
```

## Commit Structure

- type: subject e.g body, footer

The title consists of the type of the message and subject.
The type is contained within the title and can be one of these types:

- feat: a new feature

- fix: a bug fix

- docs: changes to documentation

- style: formatting, missing semi colons, etc; no code change

- refactor: refactoring production code

- test: adding tests, refactoring test; no production code change

An example of a good commit message

```
    feat: Make login check for email and password
```

## Traversing the project.

As you know, this project is an archive of resources on anything tech related for the members of Developer Student Clubs all over Nigeria.(for now)

The project is currently divisioned into three categories for now.
- Web
- UI/UX
- Android Development

The folder that you'd be working on mostly is the `/docs` folder. It has all the current divisons in it (i.e the subfolders). Let's say you want to work on adding content on web related technologies. All you have to do is, open the `web` folder and create a markdown file (`example.md`) and start adding the tutorials or resources you'd love to add.

Most of the time, you'd be working on the issues that would have been created by people.

```
├── docs
│  ├── android
│  │    └──overview.md
│  │    └──video.md
│  ├── ui
│  │    └── articles
│  │    └── ui-overview
│  │    └── videos
│  ├── web
│       └── css
│       └── html
│       └── js
│       └── css.md
│       └── html.md
│       └── js.md
├── git.md
└── web.md
```
Once you've made your changes. Send in your Pull Request and wait for the maintainers to reviewand merge your PR, if it meets their standards.

## Adding Issue ideas

If you have any idea on what you feel needs to be added to the resources, you are most welcome to add them to this file [here](ideas.md)

> Happy Hacking !!!📣 :tropical_drink:
