class ChatroomController < ApplicationController
  before_action :require_user

  def index
    @message = Message.new
    @messages = Message.custom_display
    @users = User.all.sort_by do |user|
      if user == current_user
        0 
      elsif user.active?
        1 
      else
        2 
      end
    end
  end

end