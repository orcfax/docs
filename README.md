<p align="center">
  <img src="https://pbs.twimg.com/profile_images/1475500018689732611/Vfiycs49_400x400.jpg" alt="Orcfax logo"width="310">
</p>
<p align="center">
<img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/>
<img src="https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white"/>
<img src="https://img.shields.io/badge/shell_script-%23121011.svg?style=for-the-badge&logo=gnu-bash&logoColor=white"/>
<img src="https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white"/>
<img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white"/>
<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>
<img src="https://img.shields.io/badge/Flask-20232A?style=for-the-badge&logo=flask&logoColor=white"/>
</p>
Welcome to the Orcfax documentation github repo!

## Table of Contents
1. [Installation](https://github.com/orcfax/docs#1-installation)
2. [How to configure the site locally](https://github.com/orcfax/docs#2-how-to-configure-the-site-locally)
   * 2.1. [Modifying different parts of the site](https://github.com/orcfax/docs#21-modifying-different-parts-of-the-site)
3. [Wiki documentation](https://github.com/orcfax/docs#3-wiki-documentation)
4. [Developers' message](https://github.com/orcfax/docs#4-developers-message)


## 1. Installation

<ol>
  <li>Clone the repo with <code>git clone https://github.com/orcfax/docs.git</code></li>
  <li>Change the current directory to the cloned repo with: <code>cd docs</code></li>
  <li>Download dependencies with <code>npm i</code></li>
  <li>Make changes...</li>
  <li>Push changes to github</li>
  <li>SSH into server and pull changes</li>
  <li>Run <code>./nginxConfig</code> in the setup folder to apply the changes!</li>
</ol>

## 2. How to configure the site locally

In the cloned repo with the installed dependencies, do the following:
<ol>
  <li>Run the code with:<code>npm start</code></li>
  <li>Client runs on <a href="http://localhost:3000/" target="_blank">http://localhost:3000/</a>.</li>
</ol>

### 2.1. Modifying different parts of the site

All of the files that modify the main site are in the <b>client folder</b>.
|    What do you want to modify?   | Where is it?    |
| ----------- | ----------- |
|       |     |
| Homepage   | /client/src/pages or /client/src/components        |
| Site defaults (general info. Footers, titles, etc)   | docusarus.config.js       |
| Documentation (Place markdown files here)   | /client/docs       |
| Blogs (Place markdown files here)   | /client/blog       |


## 3. Wiki documentation

### How do I order my files?

By giving your files a naming convention like this:
<ul>
  <li>01-introduction.md</li>
  <li>02-details.md</li>
  <li>03-conclusion.md</li>
</ul>

You can easily order files.

Also, by placing something like this:
```
---
sidebar_position: 6
---
```
At the top of your markdown file, you can order where your document goes.

### Ordering folders sidebar positions

By including a _category_.json file in your folder and placing code like this:

```
{
  "label": "Tutorial - Extras",
  "position": 3
}
```

You can order where your folder shows up on the sidebar.

### Where can I learn more about styling?
The Docusaurus documentation site has lots of info about styling. Most documentation material regarding the frontend is found on the [Docusaurus](https://docusaurus.io/docs) page.


## 4. Developers' message
Feel free to contribute to this repo by sharing your thoughts and ideas, raising issues (if found) and providing bug-fixes. 
For any information or support, please do not hesitate to contact us through this Github repository or by email.
