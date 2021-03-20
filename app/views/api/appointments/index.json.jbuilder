json.appointments do 
  @appointments.each do |appt|
    json.set! appt.id do 
      json.extract! appt, :id, :time.to_s, :kind, :patient_id, :physician_id
      json.patient_f_name appt.patient.f_name 
      json.patient_l_name appt.patient.l_name 
    end
  end
end
