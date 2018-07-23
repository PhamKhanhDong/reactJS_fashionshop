class Api::V1::SessionsController < ApplicationController
  def create
    # byebug
    user = User.find_by email: params[:session][:email].downcase

    if user && user.authenticate(params[:session][:password])
      render json: {
        data: user,
        status: true
      }
    else
      render json: {
        data: nil,
        status: false
      }
    end

  end
end
