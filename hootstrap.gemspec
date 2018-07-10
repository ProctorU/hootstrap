$:.push File.expand_path('../lib', __FILE__)

# Maintain your gem's version:
require 'hootstrap/version'

# Describe your gem and declare its dependencies:
Gem::Specification.new do |s|
  s.name        = 'hootstrap'
  s.version     = Hootstrap::VERSION
  s.authors     = ['Justin Licata']
  s.email       = ['jlicata@proctoru.com']
  s.homepage    = 'https://github.com/ProctorU/hootstrap'
  s.summary     = "ProctorU's design system."
  s.description = 'The design system of ProctorU, including components, patterns, and utilities.'
  s.license     = 'MIT'

  s.files = Dir['{assets,lib}/**/*', 'MIT-LICENSE', 'Rakefile', 'README.md']

  s.add_dependency 'rails', '>= 4.2.0'
  s.add_dependency 'sass-rails'
  s.add_dependency 'bootstrap', '~> 4.0.0'
end
