class NotegroupsController < ApplicationController

  def index
    # @notes = Note.all
    @notegroups = Notegroup.all
    @users = User.all
    @members = Member.all



  end

  def show
    @user = User.find(params[:user_id])
    @members = Member.all
    @notegroup = Notegroup.find(params[:id])
    if params[:query].present?
      @users = User.where(name: params[:query])
    else
      @users = User.all
    end

    unless @member = Member.find_by(user: @user, notegroup: @notegroup)
      @member = Member.create(user: @user, notegroup: @notegroup, status: "waiting")
    end
  end

  def new
    @notegroup = Notegroup.new
    @user = current_user
    @note = Note.new
  end

  def create
    @notegroup = Notegroup.new(notegroup_params)
    @user = current_user
    @notegroup.user = @user
    if @notegroup.save
      redirect_to notegroups_path
    else
      render :new
    end
    @usergroup = Member.create(user:current_user, notegroup: @notegroup, status: "accept")
  end

  def destroy
     @notegroup = Notegroup.find(params[:id])
     @user = @notegroup.user
     @notegroup.destroy
     redirect_to notegroups_path
  end


private

  def notegroup_params
    params.require(:notegroup).permit(:title, :color)
  end

end
