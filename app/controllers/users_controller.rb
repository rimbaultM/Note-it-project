class UsersController < ApplicationController
  def index
    if params[:query].present?
      @users = User.where(name: params[:query])
    else
      @users = User.all
    end
  end

  def show
    @members = Member.all
    @user = User.find(params[:id].last)
    @notegroup = Notegroup.find(params[:id])


    unless @member = Member.find_by(user: @user, notegroup: @notegroup)
      @member = Member.create(user: @user, notegroup: @notegroup, status: "waiting")
    end

  end

end

