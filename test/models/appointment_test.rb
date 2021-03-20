# == Schema Information
#
# Table name: appointments
#
#  id           :bigint           not null, primary key
#  patient_id   :integer
#  physician_id :integer
#  time         :datetime
#  kind         :string
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
require 'test_helper'

class AppointmentTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
