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
class Appointment < ApplicationRecord
  validates :patient_id, :physician_id, :time, :kind, presence: true 
  validate :ensure_proper_time 
  validate :appointment_total

  belongs_to :patient, 
    foreign_key: :patient_id,
    class_name: :Patient 

  belongs_to :physician,
    foreign_key: :physician_id,
    class_name: :Physician

  def ensure_proper_time 
    return if !self.time
    if self.time.min % 15 != 0
      errors[:base] << "not within time frame"
    end
  end

  def appointment_total
    count = Appointment.where(time: self.time).where(physician_id: physician_id).count 
   if count >= 3 
    errors[:base] << "No more free slots at this time. Please choose another time"
   end
  end
end
