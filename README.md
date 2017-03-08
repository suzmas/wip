# realsimple-theme

* Realsimple is a clean, simple, (mostly) one page theme for Jekyll. Post links navigate away from the main page, but all other navigation uses fullpage.js.

If you find any bugs or have suggestions for improving this theme, please let me know via email (suzanmsucro@gmail.com) or with a Github issue: github.com/suzmas/realsimple-theme.

<iframe src="//giphy.com/embed/uuGQhuT8kDzry" width="480" height="328" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/uuGQhuT8kDzry">Realsimple gif preview</a></p>


## Installation

Add this line to your Jekyll site's `Gemfile`:

```ruby
gem "realsimple-theme"
```

And add this line to your Jekyll site's `_config.yml`:

```yaml
theme: realsimple-theme
```

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install realsimple-theme

## Usage
Your config.yaml file should include definitions for author, author_title, twitter_url, linkedin_url, and github_url in order for the homepage links to work correctly.

Available layouts: default, default-nofp, home, page, post. Default uses the fullpage.js wrapper, while default-nofp does not.

The homepage layout cycles through your site's files that use the 'page' layout in the order they are organized in your directory- and creates a section on the homepage to display their content. The last section of the homepage displays links and snippets of your recent posts.

Files defined with layout 'post' use the 'default-nofp' layout by default.

### Fullpage.js Settings

You'll need to define 'page_str:' in the front-matter of all files using the page layout- page strings should follow the format of Fullpage.js section links--> firstPage, secondPage, 3rdpage, 4thpage. See https://github.com/suzmas/realsimple-theme/tree/master/example for an example.

Fullpage.js is initialized with four sections for a landing section, about section, portfolio section, and posts section. To set up this navigation style, add "page_str: secondPage" to the About.md front-matter. Create a file with title "Portfolio" and add "page_str: 3rdpage". The post snippets page is the last section by default.

If you add additional files that use the 'page' layout, you'll need to create an _assets folder with a file called fullpg.js and modify the 'anchors' settings. You can see an example of fullpage.js setup for this theme at: https://github.com/suzmas/realsimple-theme/tree/master/example. You can read about Fullpage.js options here: https://github.com/alvarotrigo/fullPage.js/

#### FYI, I'm in the process of configuring the theme to make Fullpagejs easier to use.

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/suzmas/realsimple-theme. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.



## License

The theme is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
