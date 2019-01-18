# jekyll-portfolio
Simple portfolio template made with Jekyll and Bulma. Composed by an overview page, and single pages to browse through the artworks.

For this repository I have removed all the redundant styling and left just the bare framework so that whoever would be interested in downloading it can personalise the look and feel as much as possible.

### Files structure
The posts are called *albums* because I I have written and used this template to create the 86albums project website. A list of 86 album covers redesigned by me.
Each cover has its own page with a thumbnail of the original cover, title, verse of a songe, description, etc..

```
├── _config.yml
├── _albums
|   └── 01.md
|   └── 02.md
|   └── ...
├── img
|   ├── 01
|       └── cover.jpg
|       └── thumb.jpg
|       └── original.jpg
|   └── 02
├── _includes
|   ├── head.html
|   └── header.html
├── _layouts
|   ├── default.html
|   └── album.html
├── _sass
|   ├── _base.scss
|   └── _variables.scss
├── _site
├── index.html
├── about.html
├── Gemfile
├── README.md
```

#### Files structure

`forloop` to show all the albums in the folder on the index. The images are take from the correspondant numbered folder.
```html
    {% for album in site.albums %}
      <div class="column is-4">
        <a href="{{ album.url }}">
        <h6>{{ album.number }}</h6>
        <img src="img/{{ album.number }}/thumb.jpg">
        <h5>{{ album.title }}</h5>
        <h6>{{ album.artist }}</h6>
        </a>
      </div>
    {% endfor %}
```

Single album page
```html
  <main class="columns is-multiline">
    <h3 class="column is-12">{{page.number}}/86</h3>
    <img class="cover" src="img/{{page.number}}/cover.jpg">
    <div class="column is-12">
      <div class="columns">
        <div class="column is-9">
          <h3> {{page.title}} </h3>
          <h5> {{page.artist}} </h5>
          <h6>Release year: {{page.release}}</h6>
        </div>
        <div class="column is-3">
          <img src="img/{{page.number}}/original.jpg">
          <small>Original Cover</small>
        </div>
      </div>
    </div>
    <div class="column is-12">
    {{content}}
    </div>
  </main>
```


### Screenshots of the template in use
You can visit the actual website here

