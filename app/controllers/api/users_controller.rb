class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save 
      login(@user)
      #render homepage/feed 
    else
      #redirect to sign up page
      #render json: @user.errors.full_messages, status: 422
    end
  end

  def user_params
    params.require(:user).permit(:email, :password)
  end
end
