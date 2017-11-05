require 'lib/image_helpers'
helpers ImageHelpers

# Reload the browser automatically whenever files change
configure :development do
  activate :livereload
end

set :css_dir, "stylesheets"
set :js_dir, "javascripts"
set :images_dir, "images"

# Build-specific configuration
configure :build do
  # For example, change the Compass output style for deployment
  activate :minify_css

  # Minify Javascript on build
  activate :minify_javascript

  # Enable cache buster
  activate :asset_hash, ignore: /.+\.png/

  # Use relative URLs
  activate :relative_assets
end
