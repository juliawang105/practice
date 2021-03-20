# == Schema Information
#
# Table name: patients
#
#  id         :bigint           not null, primary key
#  f_name     :string           not null
#  l_name     :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
require 'test_helper'

class PatientTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
