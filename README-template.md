# Frontend Mentor - Product preview card component solution

This is a solution to the [Product preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Overview

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [tailwind CSS](https://tailwind.com/) - For styles

### What I learned

I learned how to switch images on different sizes of screen using tailwind css tricks

```html
<div class="lg:w-[50%]">
  <img
    src="./images/image-product-mobile.jpg"
    alt="smallscreen"
    class="block lg:hidden object-cover w-full"
  />
  <img
    src="./images/image-product-desktop.jpg"
    alt="bigscreen"
    class="hidden lg:block object-cover lg:h-full w-full"
  />
</div>
```

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@omarnate1](https://www.frontendmentor.io/profile/omarnate1)
- Twitter - [@boss_nathan](https://x.com/boss_nathan)
