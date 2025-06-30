# ERR Jupiter Front Page

This is a front-page implementation for [jupiter.err.ee](https://jupiter.err.ee), developed using Angular. The goal is to display content strips (like most watched, recently added, and recommendations) in a horizontal scrollable layout that mimics the official ERR Jupiter site design.

---

## Features

🔹 Horizontal scrollable program strips

🔹 Arrow navigation with scroll snapping

🔹 Responsive layout using Flexbox

🔹 Lazy-loaded images from ERR API

🔹 Custom styling and theme similar to Jupiter

---

##  Built With

- [Angular](https://angular.io/)
- [TypeScript](https://www.typescriptlang.org/)
- CSS (Flexbox, transitions)
- [ERR JSON API](https://services.err.ee/api/v2/category/getByUrl?url=video&domain=jupiter.err.ee)

---

## Installation

```bash
git clone https://github.com/yourusername/err-jupiter-frontpage.git
cd err-jupiter-frontpage
npm install
ng serve
```

## API Integration

The app fetches data from the ERR API:

```
https://services.err.ee/api/v2/category/getByUrl?url=video&domain=jupiter.err.ee
```

It maps data from:

  1) data.category.frontPage.data[]

  2) Images are sourced from item.verticalPhotos[0].photoUrlBase
