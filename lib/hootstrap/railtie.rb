module Hootstrap
  class Railtie < ::Rails::Railtie
    initializer 'hootstrap.asset_paths' do |app|
      %w(stylesheets).each do |sub|
        path = File.expand_path("../../../assets/#{sub}", __FILE__)
        app.config.assets.prepend_path(path)
      end
    end
  end
end
