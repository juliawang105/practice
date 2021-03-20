json.extract! @appointment, :id, :time.to_s, :kind, :patient_id, :physician_id
json.patient_f_name @appointment.patient.f_name 
json.patient_l_name @appointment.patient.l_name 


