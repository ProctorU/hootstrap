require 'hootstrap/version'
require 'hootstrap/railtie'
require 'hootstrap/engine'
require 'bootstrap'
require 'sass'

module Nest
  def self.load
    asset_root = File.expand_path('../../assets', __FILE__)
    stylesheets_path  = File.join(asset_root, 'stylesheets')
    javascripts_path  = File.join(asset_root, 'javascripts')

    Sprockets.append_path(stylesheets_path)
    Sprockets.append_path(javascripts_path)
    Sass.load_paths << stylesheets_path
  end
end


Nest.load
