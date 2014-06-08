require 'sinatra'
require 'pry'

get '/' do
  erb :index
end

post '/about' do
  @name = params['name']
  @email = params['email']
  @message = params['message']
  @selection = params['selection']

  erb :about
end
