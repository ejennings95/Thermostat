ENV['RACK_ENV'] = 'test'

require 'capybara'
require 'capybara/rspec'
require 'rack/test'
require 'rspec'
require 'simplecov'
require 'simplecov-console'
require 'rubocop'
require_relative './test_database'
require_relative './features/web_helper'

SimpleCov.formatter = SimpleCov::Formatter::MultiFormatter.new([
  SimpleCov::Formatter::Console,
  # Want a nice code coverage website? Uncomment this next line!
  # SimpleCov::Formatter::HTMLFormatter
])
SimpleCov.start

require File.expand_path '../app.rb', __dir__

Capybara.app = Thermostat

RSpec.configure do |config|

  config.after(:suite) do
    puts
    puts "\e[33mHave you considered running rubocop? It will help you improve your code!\e[0m"
    puts "\e[33mTry it now! Just run: rubocop\e[0m"
  end
end
