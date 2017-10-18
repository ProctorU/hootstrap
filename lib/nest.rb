require 'nest/version'
require 'nest/railtie'
require 'bootstrap'
require 'sass'

module Nest
  def self.load
    asset_root = File.expand_path('../../assets', __FILE__)
    stylesheets_path  = File.join(asset_root, 'stylesheets')
    javascripts_path  = File.join(asset_root, 'javascripts')

    # bootstrap = Gem::Specification.find_by_name('bootstrap')
    # bootstrap_root_path = bootstrap.gem_dir

    Sass.load_paths << stylesheets_path
    # Sass.load_paths << bootstrap_root_path
    Sprockets.append_path(stylesheets_path)
    Sprockets.append_path(javascripts_path)
    # Sprockets.append_path(bootstrap_root_path)
  end
end


Nest.load
