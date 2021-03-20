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
class Patient < ApplicationRecord
  validates :f_name, :l_name, presence: true 

  has_many :appointments,
    foreign_key: :patient_id, 
    class_name: :Appointment

  has_many :physicians,
    through: :appointments,
    source: :physician
end
