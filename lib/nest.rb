require 'nest/version'
require 'nest/railtie'
require 'bootstrap'
require 'sass'

module Nest
  def self.load
    asset_root = File.expand_path('../../assets', __FILE__)
    stylesheets_path  = File.join(asset_root, 'stylesheets')
    javascripts_path  = File.join(asset_root, 'javascripts')

    Sass.load_paths << stylesheets_path
    Sprockets.append_path(stylesheets_path)
    Sprockets.append_path(javascripts_path)
  end
end


Nest.load
