# == Schema Information
#
# Table name: physicians
#
#  id         :bigint           not null, primary key
#  f_name     :string           not null
#  l_name     :string           not null
#  email      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Physician < ApplicationRecord
  validates :f_name, :l_name, :email, presence: true 

  has_many :appointments,
    foreign_key: :physician_id,
    class_name: :Appointment

  has_many :patients,
    through: :appointments,
    source: :patient 
end
