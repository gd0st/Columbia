# ydorn.com

Hello,

I made the majority of this, but feel free to use it.

If you'd like to credit me, please do.

If you find code that I didn't write and has been credited to someone else, you **must** include that credit in your own source.
You **cannot** credit me for code that I **explicetly** did not write myself!

# How to build and run

Requires node v19, but it might work with v18.
Copy the repository.
Run `npm i`
Run `npm run dev` for the development environment.
Run `npm run build` for the build deployment.
Use `docker build` if you want to deploy it as a container.


# What does it use?

The backend is a nodejs application using the Svelte.JS framework.
The front end tailwind, but also has support for SASS.
I use typescript which is a superset of javascript.

Docker for building and deploying the website.
My website uses nginx as a webserver and as a reverse proxy for the docker container.


# Roadmap

+ [x] Color pallete and layout
+ [x] Navigation bar
+ [x] Content
+ [x] Reactive
+ [ ] Blog page
+ [ ] Modularity
+ [ ] Contact Me section
+ [ ] Swapable color pallete
+ [ ] Glowing background
