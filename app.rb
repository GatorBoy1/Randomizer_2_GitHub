require 'sinatra'
require_relative 'random_pair.rb'
require_relative 'formatter.rb'

get '/' do
    erb :get_names, :locals => {:name_pairs =>" ", :message => "", :message1 => "",:how_many =>"How many people are in class today ?"}
end

post '/names' do
     names = params[:name]
     random_names_array = randomizer(names)
     name_pairs = fix(random_names_array)
     #{}"what are my pairs #{name_pairs}"
      erb :get_names, :locals => {:name_pairs => name_pairs, :message => "Enter a new number of names to pair.", :message1 => "And your random pairs are", :how_many => " "}
  end