module Hootstrap
  module Rails
    class Engine < ::Rails::Engine
      initializer 'hootstrap.assets.precompile' do |app|
        app.config.assets.paths << root.join('app/assets/stylesheets').to_s
      end
    end
  end
end
