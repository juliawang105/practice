class Api::PhysiciansController < ApplicationController
  def index 
    @physicians = Physician.all
  end
end
