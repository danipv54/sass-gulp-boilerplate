# Sass Gulp boilerplate 

<p align="center">
  <a href="#" < ><img src="https://cdn.svgporn.com/logos/gulp.svg" width="50" alt="Gulp logo Logo" / ></a> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
    <a href="#"><img src="https://cdn.svgporn.com/logos/postcss.svg" width="100" alt="Post css Logo" /></a>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
     <a href="#"> <img src="https://cdn.svgporn.com/logos/autoprefixer.svg" width="150" alt="Autoprefixer Logo" /> </a>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
     <a href="#"><img src="https://cdn.svgporn.com/logos/sass.svg" width="150" alt="Sass Logo" /></a>
</p>



## Description 📌

This is a nice **Sass-gulp boilerplate** project built with some tools to make life easy when  needed. It helps you to create your _Sass_ code compiled into CSS at running time, also parse CSS and add vendor prefixes to CSS rules using values from  [Can I Use](https://caniuse.com/). It's recommended by Google and, **_so you can take it_** easy and write your sass code without any CSS rules vendor prefixes. **FORGET ABOUT IT**.





### Let's go 🚀

_These instructions will allow you to obtain a basic handling of the tools shown in this repository, and later on you will be able to use it in your own way, remember to leave your star⭐._



### Pre requirements 📋


  #### Installation:
  
- Make sure you have [node.js](https://nodejs.org/en/download/) installed version 14+
- Install [Gulp](https://gulpjs.com/docs/en/getting-started/quick-start) 



## Running the app
```bash
$ npm install
$ gulp

```

#### What about images? 🖼️
It minifies **PNG - JPEG – GIF -SVG images**, and creates [Webp](https://developers.google.com/speed/webp) and [Avif](https://aomediacodec.github.io/av1-avif/) formats, which helps us load the smallest image, these formats must be wrapped in a picture tag, using source tag to work correctly.

#### **How to implement:**


  ![snippet](https://i.ibb.co/jVXYLf0/code.png)
  
  
#  **How to use  🛠️️**
 - Link your index.html with the css file saved on **build/css**  directory  ✔
 -  Take images from build/images directory ✔
   
  ![files](https://i.ibb.co/hX7sBF3/Capture.png)
  
  
##  **Sass File Structure  ⚙️️️**
#### The main file which compile all file onto a css code with all configuration is ``style.scss``
You need to  add in this format ``@use 'folderName';`` ✔

  ![files](https://i.ibb.co/MRw74XP/code.png)

You can structure your scss file using this format by folder. We must have a  ``_index.scss`` per folder to forward all files onto ``style.scss`` ✔

  ![files](https://i.ibb.co/GnmZSGL/Capture.png)
  
  Structure inside ``_index.scss`` file ✔
  
  ![files](https://i.ibb.co/GCyqkSW/code.png)
  
  

## Project Structure 

```

src
│──images
├──scss
│    ├── base
│     ├── _global.scss
│     ├── _index.scss
│     ├── _mixin.scss
│     ├── _normalize.scss
│     ├── _typography.scss
│     ├── _utilities.scss
│     └── _variable.scss
│     
│  
└──style.scss
```


## Build with  🛠️

_Love for all of us 🥰_



* [Autoprefixe](https://github.com/postcss/autoprefixer#readme) 
* [Css nano](https://cssnano.co/)
* [Gulp](https://gulpjs.com/docs/en/getting-started/quick-start/)   
* [Gulp Avif](https://github.com/dean992008/gulp-avif#readme) 
* [Gulp Cli](https://gulpjs.com/docs/en/getting-started/quick-start/) 
* [Gulp Imagemin](https://github.com/sindresorhus/gulp-imagemin#readme) 
* [Gulp Postcss](https://github.com/postcss/postcss) 
* [Gulp Sass](https://github.com/dlmanning/gulp-sass#readme) 
* [Gulp Sourcemaps](http://github.com/gulp-sourcemaps/gulp-sourcemaps) 
* [Gulp Webp](https://github.com/sindresorhus/gulp-webp#readme) 
* [Post css](postcss.org/) 
* [Sass](https://sass-lang.com/) 




## This is all friends️ 🐰



 * **STAY TUNED ✔️**
 * **STAY BLESSERS 👏**
 * **GET  THE KNOWLEDGE 🧠**
 * **AND KEEPING GOING 🏍️**





## Expressions of gratitude 🎁

* Tell everyone  🗣️📢
* Bring a 🍺 to somebody from the team. 
* Do not forget saying thanks 🤓.
* etc.

## Who Was? ✒️



- **Daniel Patricio** - *Inicial work* - [danipv54](https://github.com/danipv54) 
- [Linkedin](https://www.linkedin.com/in/dpv/) 
