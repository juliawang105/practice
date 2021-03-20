# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Physician.destroy_all 
Patient.destroy_all 
Appointment.destroy_all

#Physicians 
hibbert = Physician.create!({f_name: 'Julius', l_name: 'Hibbert', email: 'hibbert@ndoc.com'})
krieger = Physician.create!({f_name: 'Algemop', l_name: 'Krieger', email: 'krieger@ndoc.com'})
riviera = Physician.create!({f_name: 'Nick', l_name: 'Riviera', email: 'riviera@ndoc.com'})

#Patients 
potter = Patient.create!({f_name: 'Harry', l_name: 'Potter'})
weasley = Patient.create!({f_name: 'Ron', l_name: 'Weasely'})
granger = Patient.create!({f_name: 'Hermione', l_name: 'Granger'})
longbottom = Patient.create!({f_name: 'Neville', l_name: 'Longbottom'})
snape = Patient.create!({f_name: 'Severus', l_name: 'Snape'})

#Appointments 

Appointment.create({patient_id: potter.id, physician_id: hibbert.id, time: '2021-03-15 08:00:00', kind: 'New Patient'})
Appointment.create({patient_id: weasley.id, physician_id: riviera.id, time: '2021-03-15 10:30:00', kind: 'Follow-up'})
Appointment.create({patient_id: granger.id, physician_id: riviera.id, time: '2021-03-15 15:45:00', kind: 'Follow-up'})
Appointment.create({patient_id: longbottom.id, physician_id: riviera.id, time: '2021-03-15 16:00:00', kind: 'New Patient'})
Appointment.create({patient_id: snape.id, physician_id: hibbert.id, time: '2021-03-15 19:00:00', kind: 'New Patient'})


