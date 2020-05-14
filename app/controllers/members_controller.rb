class MembersController < ApplicationController
  def index
    @userc = User.all

    if params[:query].present?
      @users = User.where(name: params[:query])
      @notegroup = Notegroup.find(params[:notegroup_id])
      @members = @notegroup.members
    else
      @users = User.all
      @notegroup = Notegroup.find(params[:notegroup_id])
      @members = @notegroup.members
    end

  end

  # def new
  #   @member = Member.new
  #   @user = current_user
  #   @notegroup = Notegroup.find(params[:notegroup_id])

  # end
  def accept
   @member = Member.find(params[:member_id])
   @notegroup = @member.notegroup
   @member.status = "accept"
   @member.save!
   redirect_to notegroups_path
  end

  def decline
   @member = Member.find(params[:id])
   @notegroup = @member.notegroup
   @member.status = "decline"
   @member.save!
   redirect_to notegroups_path
  end

  def destroy
    @member = Member.find(params[:id])
    @notegroup = @member.notegroup
    @member.destroy
    redirect_to notegroups_path
  end

end

