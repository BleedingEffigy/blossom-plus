<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/BleedingEffigy/blossom-plus">
    <img src="https://github.com/BleedingEffigy/astro/blob/master/public/BlossomPlusOG.png?raw=true" alt="Logo">
  </a>

<h3 align="center">Blossom Plus</h3>

  <p align="center">
    A daisyUI theme manager
    <br />
    <a href="https://github.com/BleedingEffigy/blossom-plus"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://blossomplus.netlify.app/">View Demo</a>
    ·
    <a href="https://github.com/BleedingEffigy/blossom-plus/issues">Report Bug</a>
    ·
    <a href="https://github.com/BleedingEffigy/blossom-plus/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project
Blossom+ is a tool that manages the daisyUI plugin for tailwindcss. As of now, it supports installing the plugin, and setting up the structures for custom theming.

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [npm](https://www.npmjs.com)
* [Commander](https://www.npmjs.com/package/commander)
* [Chalk](https://www.npmjs.com/package/chalk)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started
Blossom+ works by adding the daisyui plugin into an existing tailwind configuration file. Then after its easy to add and list installed themes.

### Prerequisites

tailwind css and daisyui should be installed 
via their respective docs:

* tailwindcss
  ```sh
  npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
  ```
  [you'll also have to install tailwind as a plugin to PostCSS](https://tailwindcss.com/docs/installation#add-tailwind-as-a-post-css-plugin)
  
  then create a tailwind configuration file
  ```sh
  npx tailwindcss init
  ```
  lastly [include tailwind in a global css file](https://tailwindcss.com/docs/installation#include-tailwind-in-your-css)
  
* daisyui
  ```sh
  npm i daisyui
  ```

### Installation

```sh
npx blossomplus init
```
this adds the daisyUI plugin to tailwinds configuration file
This also installs all the default themes provided by daisyUI

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

### Add a custom theme
```sh
npx blossomplus add xmas
```
All custom themes live in the repo and can be found here.

### List all custom themes
```sh
npx blossomplus list
```
_For more examples, please refer to the [Documentation](https://blossomplus.netlify.app/)_

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [] Remove themes
- [] Creates tailwind config if it hasn't been yet
- [] More themes
    - [] create country themes inspired from https://flatuicolors.com/

See the [open issues](https://github.com/BleedingEffigy/blossom-plus/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Coming soon...

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Your Name - [@alexwhocodes255](https://twitter.com/bleedingeffigy) - ahern077@gmail.com

Project Link: [https://github.com/BleedingEffigy/blossom-plus](https://github.com/BleedingEffigy/blossom-plus)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Pouya Saadeghi](https://github.com/saadeghi) for creating daisyui
* [Marshall Thompson](https://github.com/marshallswain) for creating the theme builder [here](https://themes.ionevolve.com/) used heavily in the projects

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/BleedingEffigy/blossom-plus.svg?style=for-the-badge
[contributors-url]: https://github.com/BleedingEffigy/blossom-plus/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/BleedingEffigy/blossom-plus.svg?style=for-the-badge
[forks-url]: https://github.com/BleedingEffigy/blossom-plus/network/members
[stars-shield]: https://img.shields.io/github/stars/BleedingEffigy/blossom-plus.svg?style=for-the-badge
[stars-url]: https://github.com/BleedingEffigy/blossom-plus/stargazers
[issues-shield]: https://img.shields.io/github/issues/BleedingEffigy/blossom-plus.svg?style=for-the-badge
[issues-url]: https://github.com/BleedingEffigy/blossom-plus/issues
[license-shield]: https://img.shields.io/github/license/BleedingEffigy/blossom-plus.svg?style=for-the-badge
[license-url]: https://github.com/BleedingEffigy/blossom-plus/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/alex-hernandez-cloud-dev
[product-screenshot]: images/screenshot.png
