require 'bundler/setup'
require 'sinatra/base'


class Thermostat < Sinatra::Base

  set :root, File.dirname(__FILE__)
  set :public_folder, File.dirname(__FILE__)
  set :views, Proc.new { File.join(root, "public/views") }

  enable :sessions


  get "/" do
    session[:temperature]
    erb(:index)
  end

  # post "/" do
  #   session[:temperature] = params[:temperature]
  # end

  run! if app_file == $0
end
