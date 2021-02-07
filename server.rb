require 'rubygems'
require "bundler/setup"

require 'sinatra'

set :public_folder, 'dist'

get '/' do
  File.read(File.join('dist', 'index.html'))
end
