$:.push File.expand_path("../lib", __FILE__)

# Maintain your gem's version:
require "loadjs/version"

# Describe your gem and declare its dependencies:
Gem::Specification.new do |s|
  s.name        = "loadjs"
  s.version     = Loadjs::VERSION
  s.authors     = ["Guido Marucci Blas"]
  s.email       = ["guidomb@wgmail.com"]
  s.homepage    = "https://github.com/guidomb/loadjs"
  s.summary     = "A Javascript loader function to load page specific code for Rails apps."
  s.description = "A Javascript loader function to load page specific code for Rails apps."

  s.files = Dir["{app,config,db,lib,vendor}/**/*"] + ["MIT-LICENSE", "Rakefile", "README.rdoc"]
  s.test_files = Dir["test/**/*"]

  s.add_dependency "rails", ">= 3.2"

  s.add_development_dependency "sqlite3"
end
