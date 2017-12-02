require 'hootstrap/version'
require 'bootstrap'

module Hootstrap
  class << self
    def load
      if rails?
        register_rails_engine
      elsif sprockets?
        register_sprockets
      end

      configure_sass
    end

    def rails?
      defined?(::Rails)
    end

    def sprockets?
      defined?(::Sprockets)
    end

    private

    def register_rails_engine
      require 'hootstrap/engine'
    end

    def register_sprockets
      Sprockets.append_path(stylesheets_path)
      Sprockets.append_path(javascripts_path)
    end

    def configure_sass
      require 'sass'

      ::Sass.load_paths << stylesheets_path
    end

    def stylesheets_path
      File.join(assets_path, 'stylesheets')
    end

    def javascripts_path
      File.join(assets_path, 'javascripts')
    end

    def assets_path
      @assets_path ||= File.join(gem_path, 'assets')
    end

    def gem_path
      @gem_path ||= File.expand_path('..', File.dirname(__FILE__))
    end
  end
end


Hootstrap.load
