class Api::AppointmentsController < ApplicationController
  def index 
    time = Time.now 
    time_start = time.beginning_of_day
    time_end = time.end_of_day
    @appointments = Appointment.includes(:patient)
    .where(physician_id: params[:physician_id])
    .where('appointments.time > ? AND appointments.time < ?', time_start, time_end) 
  end

  def create 
   @appointment = Appointment.new(appointment_params) 
    @patient = Patient.create(patient_params) #params
    @appointment.patient_id = @patient.id 

    if @appointment.save 
      render :show 
    else
      render json: @appointment.errors.full_messages, status: 422
    end
  end

  def update 
    @appointment = Appointment.find_by(id: params[:id])

    if @appointment && @appointment.update(appointment_params)
      render :show 
    else 
      if @appointment 
        render json: @appointment.errors.full_messages, status: 422 
      else
        render json: ["Not Found"], status: 404
      end
    end
  end

  def destroy
    @appointment = Appointment.find_by(id: params[:id])

    if @appointment && @appointment.destroy 
      render :show 
    else 
      render json: ["Something went wrong"], status: 404 
    end
  end

  private 
  
  def appointment_params 
    params.require(:appointment).permit(:physician_id, :kind, :time, :patient_id)
  end

  def patient_params 
    params.require(:patient).permit(:f_name, :l_name)
  end

end
