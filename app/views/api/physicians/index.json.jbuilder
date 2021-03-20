@physicians.each do |physician|
  json.set! physician.id do 
    json.extract! physician, :id, :f_name, :l_name, :email
  end
end