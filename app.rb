require 'bundler/setup'
require 'sinatra/base'


class Thermostat < Sinatra::Base

  set :root, File.dirname(__FILE__)
  set :public_folder, File.dirname(__FILE__)
  set :views, Proc.new { File.join(root, "public/views") }

  enable :sessions


  get "/" do
    erb(:index)
  end

  run! if app_file == $0
end
